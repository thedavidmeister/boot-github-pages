(ns thedavidmeister.boot-github-pages
 (:require
  boot.core
  boot.git
  boot.util
  me.raynes.conch))

(boot.core/deftask github-pages
 "Deploy to github pages"
 []
 (boot.core/with-pass-thru
  [_]
  (when (not (= "master" (boot.git/branch-current)))
   (boot.util/exit-error
    (boot.util/fail "Attempted to deploy to Github Pages from the wrong branch. Checkout master and try again.\n")))
  (when (boot.git/dirty?)
   (boot.util/exit-error
    (boot.util/fail "Attempted to deploy to Github Pages with a dirty repo. Commit your changes and try again.\n")))
  (me.raynes.conch/with-programs [git]
   (let [subtree (clojure.string/trim (git "subtree" "split" "--prefix" "gh-pages" "master"))]
    (git "push" "origin" (str subtree ":refs/heads/gh-pages") "--force")))))
