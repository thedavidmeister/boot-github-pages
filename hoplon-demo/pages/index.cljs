(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]))

(goog-define build-id "")

(h/html
 (h/body
  (h/div
   "Hello world!")
  (h/div
   (h/a
    :href "https://github.com/thedavidmeister/boot-github-pages"
    "Deployed to Github Pages using David Meister's Github Pages Boot task!"))
  (h/div
   (str "Build id: " build-id))))
