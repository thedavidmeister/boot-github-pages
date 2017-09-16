(def project 'thedavidmeister/boot-github-pages)
(def description "Simple github pages task for boot")
(def version "0.1.0-SNAPSHOT")
(def url "https://github.com/thedavidmeister/boot-github-pages")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[[adzerk/bootlaces "0.1.13" :scope "test"]])

(task-options!
 pom {:project project
      :version version
      :description description
      :url url
      :scm {:url url}})

(require '[adzerk.bootlaces :refer :all])
(bootlaces! version)
