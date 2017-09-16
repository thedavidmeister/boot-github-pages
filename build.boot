(def project 'thedavidmeister/boot-github-pages)
(def version "0.1.0-SNAPSHOT")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[[adzerk/bootlaces "0.1.13" :scope "test"]])

(require '[adzerk.bootlaces :refer :all])
(bootlaces! version)
