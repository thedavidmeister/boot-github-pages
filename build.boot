(def project 'thedavidmeister/boot-github-pages)
(def description "Simple github pages task for boot")
(def version "0.1.0-SNAPSHOT")
(def url "https://github.com/thedavidmeister/boot-github-pages")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[[org.clojure/clojure "1.9.0-alpha19"]
   [me.raynes/conch "0.8.0"]
   [org.clojure/clojurescript "1.9.908" :scope "test"]
   [adzerk/bootlaces "0.1.13" :scope "test"]
   [hoplon "7.1.0-SNAPSHOT" :scope "test"]
   [adzerk/boot-cljs "2.1.3" :scope "test"]])

(task-options!
 pom {:project project
      :version version
      :description description
      :url url
      :scm {:url url}})

(require
 '[adzerk.bootlaces :refer :all]
 '[thedavidmeister.boot-github-pages :refer :all]
 '[hoplon.boot-hoplon :refer [hoplon]]
 '[adzerk.boot-cljs :refer [cljs]])
(bootlaces! version)

(deftask deploy-hoplon-demo
 []
 (set-env! :source-paths #(conj % "hoplon-demo"))
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced)
  (target
   :dir #{"gh-pages"})
  (github-pages)))
