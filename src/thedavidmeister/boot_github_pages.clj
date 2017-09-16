(ns thedavidmeister.boot-github-pages
 {:boot/export-tasks true}
 (:require
  boot.core))

(boot.core/deftask github-pages
 "Deploy to github pages")
