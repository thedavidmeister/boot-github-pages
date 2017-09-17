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
 (boot.jgit/with-repo
  (jgit/git-add repo ".")
  (jgit/git-commit repo message)
  (jgit/git-push repo)))

(defn git-status-gh-pages-only?
 []
 (->> (boot.git/status)
  vals
  (apply clojure.set/union)
  (every?
   #(clojure.string/starts-with? % "gh-pages/"))))

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
   (boot.util/info "Committing everything in gh-pages before deployment")
   (git-commit-push-all! "Preparing deployment for gh-pages"))

  (when (boot.git/dirty?)
   (boot.util/info
    (pr-str (boot.git/status)))
   (boot.util/exit-error
    (boot.util/fail "Attempted to deploy to Github Pages with a dirty repo. Commit your changes and try again.\n")))
  ; @todo - use jgit for this part
  (me.raynes.conch/with-programs [git]
   (let [subtree (clojure.string/trim (git "subtree" "split" "--prefix" "gh-pages" "master"))]
    (git "push" "origin" (str subtree ":refs/heads/gh-pages") "--force")))))
