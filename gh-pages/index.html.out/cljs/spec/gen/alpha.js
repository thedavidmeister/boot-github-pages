// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13907 = arguments.length;
var i__9524__auto___13908 = (0);
while(true){
if((i__9524__auto___13908 < len__9523__auto___13907)){
args__9530__auto__.push((arguments[i__9524__auto___13908]));

var G__13909 = (i__9524__auto___13908 + (1));
i__9524__auto___13908 = G__13909;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13906){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13906));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13911 = arguments.length;
var i__9524__auto___13912 = (0);
while(true){
if((i__9524__auto___13912 < len__9523__auto___13911)){
args__9530__auto__.push((arguments[i__9524__auto___13912]));

var G__13913 = (i__9524__auto___13912 + (1));
i__9524__auto___13912 = G__13913;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13910){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13910));
});

var g_QMARK__13917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_13918 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13917){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__13917))
,null));
var mkg_13919 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13917,g_13918){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__13917,g_13918))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13917,g_13918,mkg_13919){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__13914 = cljs.core.deref(g_QMARK__13917);
return (fexpr__13914.cljs$core$IFn$_invoke$arity$1 ? fexpr__13914.cljs$core$IFn$_invoke$arity$1(x) : fexpr__13914.call(null,x));
});})(g_QMARK__13917,g_13918,mkg_13919))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13917,g_13918,mkg_13919){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__13915 = cljs.core.deref(mkg_13919);
return (fexpr__13915.cljs$core$IFn$_invoke$arity$1 ? fexpr__13915.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__13915.call(null,gfn));
});})(g_QMARK__13917,g_13918,mkg_13919))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13917,g_13918,mkg_13919){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__13916 = cljs.core.deref(g_13918);
return (fexpr__13916.cljs$core$IFn$_invoke$arity$1 ? fexpr__13916.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__13916.call(null,generator));
});})(g_QMARK__13917,g_13918,mkg_13919))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__13920 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__13920.cljs$core$IFn$_invoke$arity$2 ? fexpr__13920.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__13920.call(null,rnd,size));
}));
});
var g__13878__auto___13940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__13878__auto___13940){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13941 = arguments.length;
var i__9524__auto___13942 = (0);
while(true){
if((i__9524__auto___13942 < len__9523__auto___13941)){
args__9530__auto__.push((arguments[i__9524__auto___13942]));

var G__13943 = (i__9524__auto___13942 + (1));
i__9524__auto___13942 = G__13943;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13940))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13940){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13940),args);
});})(g__13878__auto___13940))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__13878__auto___13940){
return (function (seq13921){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13921));
});})(g__13878__auto___13940))
;


var g__13878__auto___13944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__13878__auto___13944){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13945 = arguments.length;
var i__9524__auto___13946 = (0);
while(true){
if((i__9524__auto___13946 < len__9523__auto___13945)){
args__9530__auto__.push((arguments[i__9524__auto___13946]));

var G__13947 = (i__9524__auto___13946 + (1));
i__9524__auto___13946 = G__13947;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13944))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13944){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13944),args);
});})(g__13878__auto___13944))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__13878__auto___13944){
return (function (seq13922){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13922));
});})(g__13878__auto___13944))
;


var g__13878__auto___13948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__13878__auto___13948){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13949 = arguments.length;
var i__9524__auto___13950 = (0);
while(true){
if((i__9524__auto___13950 < len__9523__auto___13949)){
args__9530__auto__.push((arguments[i__9524__auto___13950]));

var G__13951 = (i__9524__auto___13950 + (1));
i__9524__auto___13950 = G__13951;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13948))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13948){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13948),args);
});})(g__13878__auto___13948))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__13878__auto___13948){
return (function (seq13923){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13923));
});})(g__13878__auto___13948))
;


var g__13878__auto___13952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__13878__auto___13952){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13953 = arguments.length;
var i__9524__auto___13954 = (0);
while(true){
if((i__9524__auto___13954 < len__9523__auto___13953)){
args__9530__auto__.push((arguments[i__9524__auto___13954]));

var G__13955 = (i__9524__auto___13954 + (1));
i__9524__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13952))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13952){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13952),args);
});})(g__13878__auto___13952))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__13878__auto___13952){
return (function (seq13924){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13924));
});})(g__13878__auto___13952))
;


var g__13878__auto___13956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__13878__auto___13956){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13957 = arguments.length;
var i__9524__auto___13958 = (0);
while(true){
if((i__9524__auto___13958 < len__9523__auto___13957)){
args__9530__auto__.push((arguments[i__9524__auto___13958]));

var G__13959 = (i__9524__auto___13958 + (1));
i__9524__auto___13958 = G__13959;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13956))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13956){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13956),args);
});})(g__13878__auto___13956))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__13878__auto___13956){
return (function (seq13925){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13925));
});})(g__13878__auto___13956))
;


var g__13878__auto___13960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__13878__auto___13960){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13961 = arguments.length;
var i__9524__auto___13962 = (0);
while(true){
if((i__9524__auto___13962 < len__9523__auto___13961)){
args__9530__auto__.push((arguments[i__9524__auto___13962]));

var G__13963 = (i__9524__auto___13962 + (1));
i__9524__auto___13962 = G__13963;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13960))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13960){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13960),args);
});})(g__13878__auto___13960))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__13878__auto___13960){
return (function (seq13926){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13926));
});})(g__13878__auto___13960))
;


var g__13878__auto___13964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__13878__auto___13964){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13965 = arguments.length;
var i__9524__auto___13966 = (0);
while(true){
if((i__9524__auto___13966 < len__9523__auto___13965)){
args__9530__auto__.push((arguments[i__9524__auto___13966]));

var G__13967 = (i__9524__auto___13966 + (1));
i__9524__auto___13966 = G__13967;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13964))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13964){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13964),args);
});})(g__13878__auto___13964))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__13878__auto___13964){
return (function (seq13927){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13927));
});})(g__13878__auto___13964))
;


var g__13878__auto___13968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__13878__auto___13968){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13969 = arguments.length;
var i__9524__auto___13970 = (0);
while(true){
if((i__9524__auto___13970 < len__9523__auto___13969)){
args__9530__auto__.push((arguments[i__9524__auto___13970]));

var G__13971 = (i__9524__auto___13970 + (1));
i__9524__auto___13970 = G__13971;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13968))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13968){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13968),args);
});})(g__13878__auto___13968))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__13878__auto___13968){
return (function (seq13928){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13928));
});})(g__13878__auto___13968))
;


var g__13878__auto___13972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__13878__auto___13972){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13973 = arguments.length;
var i__9524__auto___13974 = (0);
while(true){
if((i__9524__auto___13974 < len__9523__auto___13973)){
args__9530__auto__.push((arguments[i__9524__auto___13974]));

var G__13975 = (i__9524__auto___13974 + (1));
i__9524__auto___13974 = G__13975;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13972))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13972){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13972),args);
});})(g__13878__auto___13972))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__13878__auto___13972){
return (function (seq13929){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13929));
});})(g__13878__auto___13972))
;


var g__13878__auto___13976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__13878__auto___13976){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13977 = arguments.length;
var i__9524__auto___13978 = (0);
while(true){
if((i__9524__auto___13978 < len__9523__auto___13977)){
args__9530__auto__.push((arguments[i__9524__auto___13978]));

var G__13979 = (i__9524__auto___13978 + (1));
i__9524__auto___13978 = G__13979;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13976))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13976){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13976),args);
});})(g__13878__auto___13976))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__13878__auto___13976){
return (function (seq13930){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13930));
});})(g__13878__auto___13976))
;


var g__13878__auto___13980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__13878__auto___13980){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13981 = arguments.length;
var i__9524__auto___13982 = (0);
while(true){
if((i__9524__auto___13982 < len__9523__auto___13981)){
args__9530__auto__.push((arguments[i__9524__auto___13982]));

var G__13983 = (i__9524__auto___13982 + (1));
i__9524__auto___13982 = G__13983;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13980))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13980){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13980),args);
});})(g__13878__auto___13980))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__13878__auto___13980){
return (function (seq13931){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13931));
});})(g__13878__auto___13980))
;


var g__13878__auto___13984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__13878__auto___13984){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13985 = arguments.length;
var i__9524__auto___13986 = (0);
while(true){
if((i__9524__auto___13986 < len__9523__auto___13985)){
args__9530__auto__.push((arguments[i__9524__auto___13986]));

var G__13987 = (i__9524__auto___13986 + (1));
i__9524__auto___13986 = G__13987;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13984))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13984){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13984),args);
});})(g__13878__auto___13984))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__13878__auto___13984){
return (function (seq13932){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13932));
});})(g__13878__auto___13984))
;


var g__13878__auto___13988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__13878__auto___13988){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13989 = arguments.length;
var i__9524__auto___13990 = (0);
while(true){
if((i__9524__auto___13990 < len__9523__auto___13989)){
args__9530__auto__.push((arguments[i__9524__auto___13990]));

var G__13991 = (i__9524__auto___13990 + (1));
i__9524__auto___13990 = G__13991;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13988))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13988){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13988),args);
});})(g__13878__auto___13988))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__13878__auto___13988){
return (function (seq13933){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13933));
});})(g__13878__auto___13988))
;


var g__13878__auto___13992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__13878__auto___13992){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13993 = arguments.length;
var i__9524__auto___13994 = (0);
while(true){
if((i__9524__auto___13994 < len__9523__auto___13993)){
args__9530__auto__.push((arguments[i__9524__auto___13994]));

var G__13995 = (i__9524__auto___13994 + (1));
i__9524__auto___13994 = G__13995;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13992))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13992){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13992),args);
});})(g__13878__auto___13992))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__13878__auto___13992){
return (function (seq13934){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13934));
});})(g__13878__auto___13992))
;


var g__13878__auto___13996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__13878__auto___13996){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9530__auto__ = [];
var len__9523__auto___13997 = arguments.length;
var i__9524__auto___13998 = (0);
while(true){
if((i__9524__auto___13998 < len__9523__auto___13997)){
args__9530__auto__.push((arguments[i__9524__auto___13998]));

var G__13999 = (i__9524__auto___13998 + (1));
i__9524__auto___13998 = G__13999;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___13996))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___13996){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___13996),args);
});})(g__13878__auto___13996))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__13878__auto___13996){
return (function (seq13935){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13935));
});})(g__13878__auto___13996))
;


var g__13878__auto___14000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__13878__auto___14000){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14001 = arguments.length;
var i__9524__auto___14002 = (0);
while(true){
if((i__9524__auto___14002 < len__9523__auto___14001)){
args__9530__auto__.push((arguments[i__9524__auto___14002]));

var G__14003 = (i__9524__auto___14002 + (1));
i__9524__auto___14002 = G__14003;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___14000))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___14000){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___14000),args);
});})(g__13878__auto___14000))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__13878__auto___14000){
return (function (seq13936){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13936));
});})(g__13878__auto___14000))
;


var g__13878__auto___14004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__13878__auto___14004){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14005 = arguments.length;
var i__9524__auto___14006 = (0);
while(true){
if((i__9524__auto___14006 < len__9523__auto___14005)){
args__9530__auto__.push((arguments[i__9524__auto___14006]));

var G__14007 = (i__9524__auto___14006 + (1));
i__9524__auto___14006 = G__14007;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___14004))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___14004){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___14004),args);
});})(g__13878__auto___14004))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__13878__auto___14004){
return (function (seq13937){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13937));
});})(g__13878__auto___14004))
;


var g__13878__auto___14008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__13878__auto___14008){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14009 = arguments.length;
var i__9524__auto___14010 = (0);
while(true){
if((i__9524__auto___14010 < len__9523__auto___14009)){
args__9530__auto__.push((arguments[i__9524__auto___14010]));

var G__14011 = (i__9524__auto___14010 + (1));
i__9524__auto___14010 = G__14011;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___14008))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___14008){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___14008),args);
});})(g__13878__auto___14008))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__13878__auto___14008){
return (function (seq13938){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13938));
});})(g__13878__auto___14008))
;


var g__13878__auto___14012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__13878__auto___14012){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14013 = arguments.length;
var i__9524__auto___14014 = (0);
while(true){
if((i__9524__auto___14014 < len__9523__auto___14013)){
args__9530__auto__.push((arguments[i__9524__auto___14014]));

var G__14015 = (i__9524__auto___14014 + (1));
i__9524__auto___14014 = G__14015;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13878__auto___14012))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13878__auto___14012){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13878__auto___14012),args);
});})(g__13878__auto___14012))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__13878__auto___14012){
return (function (seq13939){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13939));
});})(g__13878__auto___14012))
;

var g__13891__auto___14037 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__13891__auto___14037){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14038 = arguments.length;
var i__9524__auto___14039 = (0);
while(true){
if((i__9524__auto___14039 < len__9523__auto___14038)){
args__9530__auto__.push((arguments[i__9524__auto___14039]));

var G__14040 = (i__9524__auto___14039 + (1));
i__9524__auto___14039 = G__14040;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14037))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14037){
return (function (args){
return cljs.core.deref(g__13891__auto___14037);
});})(g__13891__auto___14037))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__13891__auto___14037){
return (function (seq14016){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14016));
});})(g__13891__auto___14037))
;


var g__13891__auto___14041 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__13891__auto___14041){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14042 = arguments.length;
var i__9524__auto___14043 = (0);
while(true){
if((i__9524__auto___14043 < len__9523__auto___14042)){
args__9530__auto__.push((arguments[i__9524__auto___14043]));

var G__14044 = (i__9524__auto___14043 + (1));
i__9524__auto___14043 = G__14044;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14041))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14041){
return (function (args){
return cljs.core.deref(g__13891__auto___14041);
});})(g__13891__auto___14041))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__13891__auto___14041){
return (function (seq14017){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14017));
});})(g__13891__auto___14041))
;


var g__13891__auto___14045 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__13891__auto___14045){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14046 = arguments.length;
var i__9524__auto___14047 = (0);
while(true){
if((i__9524__auto___14047 < len__9523__auto___14046)){
args__9530__auto__.push((arguments[i__9524__auto___14047]));

var G__14048 = (i__9524__auto___14047 + (1));
i__9524__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14045))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14045){
return (function (args){
return cljs.core.deref(g__13891__auto___14045);
});})(g__13891__auto___14045))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__13891__auto___14045){
return (function (seq14018){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14018));
});})(g__13891__auto___14045))
;


var g__13891__auto___14049 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__13891__auto___14049){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14050 = arguments.length;
var i__9524__auto___14051 = (0);
while(true){
if((i__9524__auto___14051 < len__9523__auto___14050)){
args__9530__auto__.push((arguments[i__9524__auto___14051]));

var G__14052 = (i__9524__auto___14051 + (1));
i__9524__auto___14051 = G__14052;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14049))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14049){
return (function (args){
return cljs.core.deref(g__13891__auto___14049);
});})(g__13891__auto___14049))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__13891__auto___14049){
return (function (seq14019){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14019));
});})(g__13891__auto___14049))
;


var g__13891__auto___14053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__13891__auto___14053){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14054 = arguments.length;
var i__9524__auto___14055 = (0);
while(true){
if((i__9524__auto___14055 < len__9523__auto___14054)){
args__9530__auto__.push((arguments[i__9524__auto___14055]));

var G__14056 = (i__9524__auto___14055 + (1));
i__9524__auto___14055 = G__14056;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14053))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14053){
return (function (args){
return cljs.core.deref(g__13891__auto___14053);
});})(g__13891__auto___14053))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__13891__auto___14053){
return (function (seq14020){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14020));
});})(g__13891__auto___14053))
;


var g__13891__auto___14057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__13891__auto___14057){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14058 = arguments.length;
var i__9524__auto___14059 = (0);
while(true){
if((i__9524__auto___14059 < len__9523__auto___14058)){
args__9530__auto__.push((arguments[i__9524__auto___14059]));

var G__14060 = (i__9524__auto___14059 + (1));
i__9524__auto___14059 = G__14060;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14057))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14057){
return (function (args){
return cljs.core.deref(g__13891__auto___14057);
});})(g__13891__auto___14057))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__13891__auto___14057){
return (function (seq14021){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14021));
});})(g__13891__auto___14057))
;


var g__13891__auto___14061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__13891__auto___14061){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14062 = arguments.length;
var i__9524__auto___14063 = (0);
while(true){
if((i__9524__auto___14063 < len__9523__auto___14062)){
args__9530__auto__.push((arguments[i__9524__auto___14063]));

var G__14064 = (i__9524__auto___14063 + (1));
i__9524__auto___14063 = G__14064;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14061))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14061){
return (function (args){
return cljs.core.deref(g__13891__auto___14061);
});})(g__13891__auto___14061))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__13891__auto___14061){
return (function (seq14022){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14022));
});})(g__13891__auto___14061))
;


var g__13891__auto___14065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__13891__auto___14065){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14066 = arguments.length;
var i__9524__auto___14067 = (0);
while(true){
if((i__9524__auto___14067 < len__9523__auto___14066)){
args__9530__auto__.push((arguments[i__9524__auto___14067]));

var G__14068 = (i__9524__auto___14067 + (1));
i__9524__auto___14067 = G__14068;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14065))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14065){
return (function (args){
return cljs.core.deref(g__13891__auto___14065);
});})(g__13891__auto___14065))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__13891__auto___14065){
return (function (seq14023){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14023));
});})(g__13891__auto___14065))
;


var g__13891__auto___14069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__13891__auto___14069){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14070 = arguments.length;
var i__9524__auto___14071 = (0);
while(true){
if((i__9524__auto___14071 < len__9523__auto___14070)){
args__9530__auto__.push((arguments[i__9524__auto___14071]));

var G__14072 = (i__9524__auto___14071 + (1));
i__9524__auto___14071 = G__14072;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14069))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14069){
return (function (args){
return cljs.core.deref(g__13891__auto___14069);
});})(g__13891__auto___14069))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__13891__auto___14069){
return (function (seq14024){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14024));
});})(g__13891__auto___14069))
;


var g__13891__auto___14073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__13891__auto___14073){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14074 = arguments.length;
var i__9524__auto___14075 = (0);
while(true){
if((i__9524__auto___14075 < len__9523__auto___14074)){
args__9530__auto__.push((arguments[i__9524__auto___14075]));

var G__14076 = (i__9524__auto___14075 + (1));
i__9524__auto___14075 = G__14076;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14073))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14073){
return (function (args){
return cljs.core.deref(g__13891__auto___14073);
});})(g__13891__auto___14073))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__13891__auto___14073){
return (function (seq14025){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14025));
});})(g__13891__auto___14073))
;


var g__13891__auto___14077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__13891__auto___14077){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14078 = arguments.length;
var i__9524__auto___14079 = (0);
while(true){
if((i__9524__auto___14079 < len__9523__auto___14078)){
args__9530__auto__.push((arguments[i__9524__auto___14079]));

var G__14080 = (i__9524__auto___14079 + (1));
i__9524__auto___14079 = G__14080;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14077))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14077){
return (function (args){
return cljs.core.deref(g__13891__auto___14077);
});})(g__13891__auto___14077))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__13891__auto___14077){
return (function (seq14026){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14026));
});})(g__13891__auto___14077))
;


var g__13891__auto___14081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__13891__auto___14081){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14082 = arguments.length;
var i__9524__auto___14083 = (0);
while(true){
if((i__9524__auto___14083 < len__9523__auto___14082)){
args__9530__auto__.push((arguments[i__9524__auto___14083]));

var G__14084 = (i__9524__auto___14083 + (1));
i__9524__auto___14083 = G__14084;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14081))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14081){
return (function (args){
return cljs.core.deref(g__13891__auto___14081);
});})(g__13891__auto___14081))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__13891__auto___14081){
return (function (seq14027){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14027));
});})(g__13891__auto___14081))
;


var g__13891__auto___14085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__13891__auto___14085){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14086 = arguments.length;
var i__9524__auto___14087 = (0);
while(true){
if((i__9524__auto___14087 < len__9523__auto___14086)){
args__9530__auto__.push((arguments[i__9524__auto___14087]));

var G__14088 = (i__9524__auto___14087 + (1));
i__9524__auto___14087 = G__14088;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14085))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14085){
return (function (args){
return cljs.core.deref(g__13891__auto___14085);
});})(g__13891__auto___14085))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__13891__auto___14085){
return (function (seq14028){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14028));
});})(g__13891__auto___14085))
;


var g__13891__auto___14089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__13891__auto___14089){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14090 = arguments.length;
var i__9524__auto___14091 = (0);
while(true){
if((i__9524__auto___14091 < len__9523__auto___14090)){
args__9530__auto__.push((arguments[i__9524__auto___14091]));

var G__14092 = (i__9524__auto___14091 + (1));
i__9524__auto___14091 = G__14092;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14089))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14089){
return (function (args){
return cljs.core.deref(g__13891__auto___14089);
});})(g__13891__auto___14089))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__13891__auto___14089){
return (function (seq14029){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14029));
});})(g__13891__auto___14089))
;


var g__13891__auto___14093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__13891__auto___14093){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14094 = arguments.length;
var i__9524__auto___14095 = (0);
while(true){
if((i__9524__auto___14095 < len__9523__auto___14094)){
args__9530__auto__.push((arguments[i__9524__auto___14095]));

var G__14096 = (i__9524__auto___14095 + (1));
i__9524__auto___14095 = G__14096;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14093))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14093){
return (function (args){
return cljs.core.deref(g__13891__auto___14093);
});})(g__13891__auto___14093))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__13891__auto___14093){
return (function (seq14030){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14030));
});})(g__13891__auto___14093))
;


var g__13891__auto___14097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__13891__auto___14097){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14098 = arguments.length;
var i__9524__auto___14099 = (0);
while(true){
if((i__9524__auto___14099 < len__9523__auto___14098)){
args__9530__auto__.push((arguments[i__9524__auto___14099]));

var G__14100 = (i__9524__auto___14099 + (1));
i__9524__auto___14099 = G__14100;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14097))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14097){
return (function (args){
return cljs.core.deref(g__13891__auto___14097);
});})(g__13891__auto___14097))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__13891__auto___14097){
return (function (seq14031){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14031));
});})(g__13891__auto___14097))
;


var g__13891__auto___14101 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__13891__auto___14101){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14102 = arguments.length;
var i__9524__auto___14103 = (0);
while(true){
if((i__9524__auto___14103 < len__9523__auto___14102)){
args__9530__auto__.push((arguments[i__9524__auto___14103]));

var G__14104 = (i__9524__auto___14103 + (1));
i__9524__auto___14103 = G__14104;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14101))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14101){
return (function (args){
return cljs.core.deref(g__13891__auto___14101);
});})(g__13891__auto___14101))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__13891__auto___14101){
return (function (seq14032){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14032));
});})(g__13891__auto___14101))
;


var g__13891__auto___14105 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__13891__auto___14105){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14106 = arguments.length;
var i__9524__auto___14107 = (0);
while(true){
if((i__9524__auto___14107 < len__9523__auto___14106)){
args__9530__auto__.push((arguments[i__9524__auto___14107]));

var G__14108 = (i__9524__auto___14107 + (1));
i__9524__auto___14107 = G__14108;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14105))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14105){
return (function (args){
return cljs.core.deref(g__13891__auto___14105);
});})(g__13891__auto___14105))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__13891__auto___14105){
return (function (seq14033){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14033));
});})(g__13891__auto___14105))
;


var g__13891__auto___14109 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__13891__auto___14109){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14110 = arguments.length;
var i__9524__auto___14111 = (0);
while(true){
if((i__9524__auto___14111 < len__9523__auto___14110)){
args__9530__auto__.push((arguments[i__9524__auto___14111]));

var G__14112 = (i__9524__auto___14111 + (1));
i__9524__auto___14111 = G__14112;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14109))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14109){
return (function (args){
return cljs.core.deref(g__13891__auto___14109);
});})(g__13891__auto___14109))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__13891__auto___14109){
return (function (seq14034){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14034));
});})(g__13891__auto___14109))
;


var g__13891__auto___14113 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__13891__auto___14113){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14114 = arguments.length;
var i__9524__auto___14115 = (0);
while(true){
if((i__9524__auto___14115 < len__9523__auto___14114)){
args__9530__auto__.push((arguments[i__9524__auto___14115]));

var G__14116 = (i__9524__auto___14115 + (1));
i__9524__auto___14115 = G__14116;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14113))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14113){
return (function (args){
return cljs.core.deref(g__13891__auto___14113);
});})(g__13891__auto___14113))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__13891__auto___14113){
return (function (seq14035){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14035));
});})(g__13891__auto___14113))
;


var g__13891__auto___14117 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__13891__auto___14117){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14118 = arguments.length;
var i__9524__auto___14119 = (0);
while(true){
if((i__9524__auto___14119 < len__9523__auto___14118)){
args__9530__auto__.push((arguments[i__9524__auto___14119]));

var G__14120 = (i__9524__auto___14119 + (1));
i__9524__auto___14119 = G__14120;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});})(g__13891__auto___14117))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13891__auto___14117){
return (function (args){
return cljs.core.deref(g__13891__auto___14117);
});})(g__13891__auto___14117))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__13891__auto___14117){
return (function (seq14036){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14036));
});})(g__13891__auto___14117))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9530__auto__ = [];
var len__9523__auto___14123 = arguments.length;
var i__9524__auto___14124 = (0);
while(true){
if((i__9524__auto___14124 < len__9523__auto___14123)){
args__9530__auto__.push((arguments[i__9524__auto___14124]));

var G__14125 = (i__9524__auto___14124 + (1));
i__9524__auto___14124 = G__14125;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__14121_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__14121_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14122){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14122));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__14126_SHARP_){
return (new Date(p1__14126_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
