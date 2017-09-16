(ns thedavidmeister.boot-github-pages
 (:require
  boot.core
  boot.git))

(boot.core/deftask github-pages
 "Deploy to github pages"
 []
 (boot.core/with-pass-thru
  [_]
  (prn (boot.git/clean?))))
