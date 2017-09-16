(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]))

(h/html
 (h/body
  "Hello world!"
  (h/br)
  (h/a
   :href "https://github.com/thedavidmeister/boot-github-pages"
   "Deployed to Github Pages using David Meister's Github Pages Boot task!")))
