(ns thedavidmeister.boot-github-pages
 (:require
  boot.core
  boot.jgit
  [clj-jgit.porcelain :as jgit]
  boot.git
  boot.util
  me.raynes.conch))

(defn git-commit-push-all!
 [message]
 ; @todo - use jgit for this part
 (me.raynes.conch/with-programs [git]
  (git "add" ".")
  (git "commit" "-m" message)
  (git "push" "origin" "master")))

(defn git-gh-pages?
 [fp]
 (clojure.string/starts-with? fp "gh-pages/"))

(defn git-status-flat
 []
 (->> (boot.git/status)
  vals
  (apply clojure.set/union)))

(defn git-status-gh-pages-only?
 []
 (every?
  git-gh-pages?
  (git-status-flat)))

(boot.core/deftask github-pages
 "Deploy to github pages"
 []
 (boot.core/with-pass-thru
  [_]
  (when (not (= "master" (boot.git/branch-current)))
   (boot.util/exit-error
    (boot.util/fail "Attempted to deploy to Github Pages from the wrong branch. Checkout master and try again.\n")))
  (when (and
         (boot.git/dirty?)
         (git-status-gh-pages-only?))
   (boot.util/info "Dirty repo containing gh-pages only changes\n")
   (boot.util/info
    (prn-str (remove git-gh-pages? (git-status-flat))))
   (boot.util/info "Committing everything in gh-pages before deployment\n")
   ; this commit needs to skip CI or it can create an infinte deploy loop
   ; https://circleci.com/docs/1.0/skip-a-build/
   (git-commit-push-all! "Preparing deployment for gh-pages [skip ci]"))

  (when (boot.git/dirty?)
   (boot.util/info
    (prn-str (boot.git/status)))
   (boot.util/exit-error
    (boot.util/fail "Attempted to deploy to Github Pages with a dirty repo. Commit your changes and try again.\n")))
  ; @todo - use jgit for this part
  (me.raynes.conch/with-programs [git]
   (let [subtree (clojure.string/trim (git "subtree" "split" "--prefix" "gh-pages" "master"))]
    (git "push" "origin" (str subtree ":refs/heads/gh-pages") "--force")))))
