(ns thedavidmeister.boot-github-pages
 (:require
  boot.core
  boot.git))

(boot.core/deftask github-pages
 "Deploy to github pages"
 []
 (prn (boot.git/clean?)))
