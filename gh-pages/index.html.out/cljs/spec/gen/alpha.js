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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__9531__auto__ = [];
var len__9524__auto___13908 = arguments.length;
var i__9525__auto___13909 = (0);
while(true){
if((i__9525__auto___13909 < len__9524__auto___13908)){
args__9531__auto__.push((arguments[i__9525__auto___13909]));

var G__13910 = (i__9525__auto___13909 + (1));
i__9525__auto___13909 = G__13910;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13907){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13907));
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
var args__9531__auto__ = [];
var len__9524__auto___13912 = arguments.length;
var i__9525__auto___13913 = (0);
while(true){
if((i__9525__auto___13913 < len__9524__auto___13912)){
args__9531__auto__.push((arguments[i__9525__auto___13913]));

var G__13914 = (i__9525__auto___13913 + (1));
i__9525__auto___13913 = G__13914;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13911){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13911));
});

var g_QMARK__13918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_13919 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13918){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__13918))
,null));
var mkg_13920 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13918,g_13919){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__13918,g_13919))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13918,g_13919,mkg_13920){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__13915 = cljs.core.deref(g_QMARK__13918);
return (fexpr__13915.cljs$core$IFn$_invoke$arity$1 ? fexpr__13915.cljs$core$IFn$_invoke$arity$1(x) : fexpr__13915.call(null,x));
});})(g_QMARK__13918,g_13919,mkg_13920))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13918,g_13919,mkg_13920){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__13916 = cljs.core.deref(mkg_13920);
return (fexpr__13916.cljs$core$IFn$_invoke$arity$1 ? fexpr__13916.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__13916.call(null,gfn));
});})(g_QMARK__13918,g_13919,mkg_13920))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13918,g_13919,mkg_13920){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__13917 = cljs.core.deref(g_13919);
return (fexpr__13917.cljs$core$IFn$_invoke$arity$1 ? fexpr__13917.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__13917.call(null,generator));
});})(g_QMARK__13918,g_13919,mkg_13920))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__13921 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__13921.cljs$core$IFn$_invoke$arity$2 ? fexpr__13921.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__13921.call(null,rnd,size));
}));
});
var g__13879__auto___13941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__13879__auto___13941){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13942 = arguments.length;
var i__9525__auto___13943 = (0);
while(true){
if((i__9525__auto___13943 < len__9524__auto___13942)){
args__9531__auto__.push((arguments[i__9525__auto___13943]));

var G__13944 = (i__9525__auto___13943 + (1));
i__9525__auto___13943 = G__13944;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13941))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13941){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13941),args);
});})(g__13879__auto___13941))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__13879__auto___13941){
return (function (seq13922){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13922));
});})(g__13879__auto___13941))
;


var g__13879__auto___13945 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__13879__auto___13945){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13946 = arguments.length;
var i__9525__auto___13947 = (0);
while(true){
if((i__9525__auto___13947 < len__9524__auto___13946)){
args__9531__auto__.push((arguments[i__9525__auto___13947]));

var G__13948 = (i__9525__auto___13947 + (1));
i__9525__auto___13947 = G__13948;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13945))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13945){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13945),args);
});})(g__13879__auto___13945))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__13879__auto___13945){
return (function (seq13923){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13923));
});})(g__13879__auto___13945))
;


var g__13879__auto___13949 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__13879__auto___13949){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13950 = arguments.length;
var i__9525__auto___13951 = (0);
while(true){
if((i__9525__auto___13951 < len__9524__auto___13950)){
args__9531__auto__.push((arguments[i__9525__auto___13951]));

var G__13952 = (i__9525__auto___13951 + (1));
i__9525__auto___13951 = G__13952;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13949))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13949){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13949),args);
});})(g__13879__auto___13949))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__13879__auto___13949){
return (function (seq13924){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13924));
});})(g__13879__auto___13949))
;


var g__13879__auto___13953 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__13879__auto___13953){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13954 = arguments.length;
var i__9525__auto___13955 = (0);
while(true){
if((i__9525__auto___13955 < len__9524__auto___13954)){
args__9531__auto__.push((arguments[i__9525__auto___13955]));

var G__13956 = (i__9525__auto___13955 + (1));
i__9525__auto___13955 = G__13956;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13953))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13953){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13953),args);
});})(g__13879__auto___13953))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__13879__auto___13953){
return (function (seq13925){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13925));
});})(g__13879__auto___13953))
;


var g__13879__auto___13957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__13879__auto___13957){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13958 = arguments.length;
var i__9525__auto___13959 = (0);
while(true){
if((i__9525__auto___13959 < len__9524__auto___13958)){
args__9531__auto__.push((arguments[i__9525__auto___13959]));

var G__13960 = (i__9525__auto___13959 + (1));
i__9525__auto___13959 = G__13960;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13957))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13957){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13957),args);
});})(g__13879__auto___13957))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__13879__auto___13957){
return (function (seq13926){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13926));
});})(g__13879__auto___13957))
;


var g__13879__auto___13961 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__13879__auto___13961){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13962 = arguments.length;
var i__9525__auto___13963 = (0);
while(true){
if((i__9525__auto___13963 < len__9524__auto___13962)){
args__9531__auto__.push((arguments[i__9525__auto___13963]));

var G__13964 = (i__9525__auto___13963 + (1));
i__9525__auto___13963 = G__13964;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13961))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13961){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13961),args);
});})(g__13879__auto___13961))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__13879__auto___13961){
return (function (seq13927){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13927));
});})(g__13879__auto___13961))
;


var g__13879__auto___13965 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__13879__auto___13965){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13966 = arguments.length;
var i__9525__auto___13967 = (0);
while(true){
if((i__9525__auto___13967 < len__9524__auto___13966)){
args__9531__auto__.push((arguments[i__9525__auto___13967]));

var G__13968 = (i__9525__auto___13967 + (1));
i__9525__auto___13967 = G__13968;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13965))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13965){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13965),args);
});})(g__13879__auto___13965))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__13879__auto___13965){
return (function (seq13928){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13928));
});})(g__13879__auto___13965))
;


var g__13879__auto___13969 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__13879__auto___13969){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13970 = arguments.length;
var i__9525__auto___13971 = (0);
while(true){
if((i__9525__auto___13971 < len__9524__auto___13970)){
args__9531__auto__.push((arguments[i__9525__auto___13971]));

var G__13972 = (i__9525__auto___13971 + (1));
i__9525__auto___13971 = G__13972;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13969))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13969){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13969),args);
});})(g__13879__auto___13969))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__13879__auto___13969){
return (function (seq13929){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13929));
});})(g__13879__auto___13969))
;


var g__13879__auto___13973 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__13879__auto___13973){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13974 = arguments.length;
var i__9525__auto___13975 = (0);
while(true){
if((i__9525__auto___13975 < len__9524__auto___13974)){
args__9531__auto__.push((arguments[i__9525__auto___13975]));

var G__13976 = (i__9525__auto___13975 + (1));
i__9525__auto___13975 = G__13976;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13973))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13973){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13973),args);
});})(g__13879__auto___13973))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__13879__auto___13973){
return (function (seq13930){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13930));
});})(g__13879__auto___13973))
;


var g__13879__auto___13977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__13879__auto___13977){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13978 = arguments.length;
var i__9525__auto___13979 = (0);
while(true){
if((i__9525__auto___13979 < len__9524__auto___13978)){
args__9531__auto__.push((arguments[i__9525__auto___13979]));

var G__13980 = (i__9525__auto___13979 + (1));
i__9525__auto___13979 = G__13980;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13977))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13977){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13977),args);
});})(g__13879__auto___13977))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__13879__auto___13977){
return (function (seq13931){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13931));
});})(g__13879__auto___13977))
;


var g__13879__auto___13981 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__13879__auto___13981){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13982 = arguments.length;
var i__9525__auto___13983 = (0);
while(true){
if((i__9525__auto___13983 < len__9524__auto___13982)){
args__9531__auto__.push((arguments[i__9525__auto___13983]));

var G__13984 = (i__9525__auto___13983 + (1));
i__9525__auto___13983 = G__13984;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13981))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13981){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13981),args);
});})(g__13879__auto___13981))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__13879__auto___13981){
return (function (seq13932){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13932));
});})(g__13879__auto___13981))
;


var g__13879__auto___13985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__13879__auto___13985){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13986 = arguments.length;
var i__9525__auto___13987 = (0);
while(true){
if((i__9525__auto___13987 < len__9524__auto___13986)){
args__9531__auto__.push((arguments[i__9525__auto___13987]));

var G__13988 = (i__9525__auto___13987 + (1));
i__9525__auto___13987 = G__13988;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13985))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13985){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13985),args);
});})(g__13879__auto___13985))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__13879__auto___13985){
return (function (seq13933){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13933));
});})(g__13879__auto___13985))
;


var g__13879__auto___13989 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__13879__auto___13989){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13990 = arguments.length;
var i__9525__auto___13991 = (0);
while(true){
if((i__9525__auto___13991 < len__9524__auto___13990)){
args__9531__auto__.push((arguments[i__9525__auto___13991]));

var G__13992 = (i__9525__auto___13991 + (1));
i__9525__auto___13991 = G__13992;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13989))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13989){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13989),args);
});})(g__13879__auto___13989))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__13879__auto___13989){
return (function (seq13934){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13934));
});})(g__13879__auto___13989))
;


var g__13879__auto___13993 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__13879__auto___13993){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13994 = arguments.length;
var i__9525__auto___13995 = (0);
while(true){
if((i__9525__auto___13995 < len__9524__auto___13994)){
args__9531__auto__.push((arguments[i__9525__auto___13995]));

var G__13996 = (i__9525__auto___13995 + (1));
i__9525__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13993))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13993){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13993),args);
});})(g__13879__auto___13993))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__13879__auto___13993){
return (function (seq13935){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13935));
});})(g__13879__auto___13993))
;


var g__13879__auto___13997 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__13879__auto___13997){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9531__auto__ = [];
var len__9524__auto___13998 = arguments.length;
var i__9525__auto___13999 = (0);
while(true){
if((i__9525__auto___13999 < len__9524__auto___13998)){
args__9531__auto__.push((arguments[i__9525__auto___13999]));

var G__14000 = (i__9525__auto___13999 + (1));
i__9525__auto___13999 = G__14000;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___13997))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___13997){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___13997),args);
});})(g__13879__auto___13997))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__13879__auto___13997){
return (function (seq13936){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13936));
});})(g__13879__auto___13997))
;


var g__13879__auto___14001 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__13879__auto___14001){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14002 = arguments.length;
var i__9525__auto___14003 = (0);
while(true){
if((i__9525__auto___14003 < len__9524__auto___14002)){
args__9531__auto__.push((arguments[i__9525__auto___14003]));

var G__14004 = (i__9525__auto___14003 + (1));
i__9525__auto___14003 = G__14004;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___14001))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___14001){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___14001),args);
});})(g__13879__auto___14001))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__13879__auto___14001){
return (function (seq13937){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13937));
});})(g__13879__auto___14001))
;


var g__13879__auto___14005 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__13879__auto___14005){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14006 = arguments.length;
var i__9525__auto___14007 = (0);
while(true){
if((i__9525__auto___14007 < len__9524__auto___14006)){
args__9531__auto__.push((arguments[i__9525__auto___14007]));

var G__14008 = (i__9525__auto___14007 + (1));
i__9525__auto___14007 = G__14008;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___14005))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___14005){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___14005),args);
});})(g__13879__auto___14005))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__13879__auto___14005){
return (function (seq13938){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13938));
});})(g__13879__auto___14005))
;


var g__13879__auto___14009 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__13879__auto___14009){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14010 = arguments.length;
var i__9525__auto___14011 = (0);
while(true){
if((i__9525__auto___14011 < len__9524__auto___14010)){
args__9531__auto__.push((arguments[i__9525__auto___14011]));

var G__14012 = (i__9525__auto___14011 + (1));
i__9525__auto___14011 = G__14012;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___14009))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___14009){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___14009),args);
});})(g__13879__auto___14009))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__13879__auto___14009){
return (function (seq13939){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13939));
});})(g__13879__auto___14009))
;


var g__13879__auto___14013 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__13879__auto___14013){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14014 = arguments.length;
var i__9525__auto___14015 = (0);
while(true){
if((i__9525__auto___14015 < len__9524__auto___14014)){
args__9531__auto__.push((arguments[i__9525__auto___14015]));

var G__14016 = (i__9525__auto___14015 + (1));
i__9525__auto___14015 = G__14016;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13879__auto___14013))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13879__auto___14013){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13879__auto___14013),args);
});})(g__13879__auto___14013))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__13879__auto___14013){
return (function (seq13940){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13940));
});})(g__13879__auto___14013))
;

var g__13892__auto___14038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__13892__auto___14038){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14039 = arguments.length;
var i__9525__auto___14040 = (0);
while(true){
if((i__9525__auto___14040 < len__9524__auto___14039)){
args__9531__auto__.push((arguments[i__9525__auto___14040]));

var G__14041 = (i__9525__auto___14040 + (1));
i__9525__auto___14040 = G__14041;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14038))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14038){
return (function (args){
return cljs.core.deref(g__13892__auto___14038);
});})(g__13892__auto___14038))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__13892__auto___14038){
return (function (seq14017){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14017));
});})(g__13892__auto___14038))
;


var g__13892__auto___14042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__13892__auto___14042){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14043 = arguments.length;
var i__9525__auto___14044 = (0);
while(true){
if((i__9525__auto___14044 < len__9524__auto___14043)){
args__9531__auto__.push((arguments[i__9525__auto___14044]));

var G__14045 = (i__9525__auto___14044 + (1));
i__9525__auto___14044 = G__14045;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14042))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14042){
return (function (args){
return cljs.core.deref(g__13892__auto___14042);
});})(g__13892__auto___14042))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__13892__auto___14042){
return (function (seq14018){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14018));
});})(g__13892__auto___14042))
;


var g__13892__auto___14046 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__13892__auto___14046){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14047 = arguments.length;
var i__9525__auto___14048 = (0);
while(true){
if((i__9525__auto___14048 < len__9524__auto___14047)){
args__9531__auto__.push((arguments[i__9525__auto___14048]));

var G__14049 = (i__9525__auto___14048 + (1));
i__9525__auto___14048 = G__14049;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14046))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14046){
return (function (args){
return cljs.core.deref(g__13892__auto___14046);
});})(g__13892__auto___14046))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__13892__auto___14046){
return (function (seq14019){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14019));
});})(g__13892__auto___14046))
;


var g__13892__auto___14050 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__13892__auto___14050){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14051 = arguments.length;
var i__9525__auto___14052 = (0);
while(true){
if((i__9525__auto___14052 < len__9524__auto___14051)){
args__9531__auto__.push((arguments[i__9525__auto___14052]));

var G__14053 = (i__9525__auto___14052 + (1));
i__9525__auto___14052 = G__14053;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14050))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14050){
return (function (args){
return cljs.core.deref(g__13892__auto___14050);
});})(g__13892__auto___14050))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__13892__auto___14050){
return (function (seq14020){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14020));
});})(g__13892__auto___14050))
;


var g__13892__auto___14054 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__13892__auto___14054){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14055 = arguments.length;
var i__9525__auto___14056 = (0);
while(true){
if((i__9525__auto___14056 < len__9524__auto___14055)){
args__9531__auto__.push((arguments[i__9525__auto___14056]));

var G__14057 = (i__9525__auto___14056 + (1));
i__9525__auto___14056 = G__14057;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14054))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14054){
return (function (args){
return cljs.core.deref(g__13892__auto___14054);
});})(g__13892__auto___14054))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__13892__auto___14054){
return (function (seq14021){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14021));
});})(g__13892__auto___14054))
;


var g__13892__auto___14058 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__13892__auto___14058){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14059 = arguments.length;
var i__9525__auto___14060 = (0);
while(true){
if((i__9525__auto___14060 < len__9524__auto___14059)){
args__9531__auto__.push((arguments[i__9525__auto___14060]));

var G__14061 = (i__9525__auto___14060 + (1));
i__9525__auto___14060 = G__14061;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14058))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14058){
return (function (args){
return cljs.core.deref(g__13892__auto___14058);
});})(g__13892__auto___14058))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__13892__auto___14058){
return (function (seq14022){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14022));
});})(g__13892__auto___14058))
;


var g__13892__auto___14062 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__13892__auto___14062){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14063 = arguments.length;
var i__9525__auto___14064 = (0);
while(true){
if((i__9525__auto___14064 < len__9524__auto___14063)){
args__9531__auto__.push((arguments[i__9525__auto___14064]));

var G__14065 = (i__9525__auto___14064 + (1));
i__9525__auto___14064 = G__14065;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14062))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14062){
return (function (args){
return cljs.core.deref(g__13892__auto___14062);
});})(g__13892__auto___14062))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__13892__auto___14062){
return (function (seq14023){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14023));
});})(g__13892__auto___14062))
;


var g__13892__auto___14066 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__13892__auto___14066){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14067 = arguments.length;
var i__9525__auto___14068 = (0);
while(true){
if((i__9525__auto___14068 < len__9524__auto___14067)){
args__9531__auto__.push((arguments[i__9525__auto___14068]));

var G__14069 = (i__9525__auto___14068 + (1));
i__9525__auto___14068 = G__14069;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14066))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14066){
return (function (args){
return cljs.core.deref(g__13892__auto___14066);
});})(g__13892__auto___14066))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__13892__auto___14066){
return (function (seq14024){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14024));
});})(g__13892__auto___14066))
;


var g__13892__auto___14070 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__13892__auto___14070){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14071 = arguments.length;
var i__9525__auto___14072 = (0);
while(true){
if((i__9525__auto___14072 < len__9524__auto___14071)){
args__9531__auto__.push((arguments[i__9525__auto___14072]));

var G__14073 = (i__9525__auto___14072 + (1));
i__9525__auto___14072 = G__14073;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14070))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14070){
return (function (args){
return cljs.core.deref(g__13892__auto___14070);
});})(g__13892__auto___14070))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__13892__auto___14070){
return (function (seq14025){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14025));
});})(g__13892__auto___14070))
;


var g__13892__auto___14074 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__13892__auto___14074){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14075 = arguments.length;
var i__9525__auto___14076 = (0);
while(true){
if((i__9525__auto___14076 < len__9524__auto___14075)){
args__9531__auto__.push((arguments[i__9525__auto___14076]));

var G__14077 = (i__9525__auto___14076 + (1));
i__9525__auto___14076 = G__14077;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14074))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14074){
return (function (args){
return cljs.core.deref(g__13892__auto___14074);
});})(g__13892__auto___14074))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__13892__auto___14074){
return (function (seq14026){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14026));
});})(g__13892__auto___14074))
;


var g__13892__auto___14078 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__13892__auto___14078){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14079 = arguments.length;
var i__9525__auto___14080 = (0);
while(true){
if((i__9525__auto___14080 < len__9524__auto___14079)){
args__9531__auto__.push((arguments[i__9525__auto___14080]));

var G__14081 = (i__9525__auto___14080 + (1));
i__9525__auto___14080 = G__14081;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14078))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14078){
return (function (args){
return cljs.core.deref(g__13892__auto___14078);
});})(g__13892__auto___14078))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__13892__auto___14078){
return (function (seq14027){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14027));
});})(g__13892__auto___14078))
;


var g__13892__auto___14082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__13892__auto___14082){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14083 = arguments.length;
var i__9525__auto___14084 = (0);
while(true){
if((i__9525__auto___14084 < len__9524__auto___14083)){
args__9531__auto__.push((arguments[i__9525__auto___14084]));

var G__14085 = (i__9525__auto___14084 + (1));
i__9525__auto___14084 = G__14085;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14082))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14082){
return (function (args){
return cljs.core.deref(g__13892__auto___14082);
});})(g__13892__auto___14082))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__13892__auto___14082){
return (function (seq14028){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14028));
});})(g__13892__auto___14082))
;


var g__13892__auto___14086 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__13892__auto___14086){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14087 = arguments.length;
var i__9525__auto___14088 = (0);
while(true){
if((i__9525__auto___14088 < len__9524__auto___14087)){
args__9531__auto__.push((arguments[i__9525__auto___14088]));

var G__14089 = (i__9525__auto___14088 + (1));
i__9525__auto___14088 = G__14089;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14086))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14086){
return (function (args){
return cljs.core.deref(g__13892__auto___14086);
});})(g__13892__auto___14086))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__13892__auto___14086){
return (function (seq14029){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14029));
});})(g__13892__auto___14086))
;


var g__13892__auto___14090 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__13892__auto___14090){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14091 = arguments.length;
var i__9525__auto___14092 = (0);
while(true){
if((i__9525__auto___14092 < len__9524__auto___14091)){
args__9531__auto__.push((arguments[i__9525__auto___14092]));

var G__14093 = (i__9525__auto___14092 + (1));
i__9525__auto___14092 = G__14093;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14090))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14090){
return (function (args){
return cljs.core.deref(g__13892__auto___14090);
});})(g__13892__auto___14090))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__13892__auto___14090){
return (function (seq14030){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14030));
});})(g__13892__auto___14090))
;


var g__13892__auto___14094 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__13892__auto___14094){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14095 = arguments.length;
var i__9525__auto___14096 = (0);
while(true){
if((i__9525__auto___14096 < len__9524__auto___14095)){
args__9531__auto__.push((arguments[i__9525__auto___14096]));

var G__14097 = (i__9525__auto___14096 + (1));
i__9525__auto___14096 = G__14097;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14094))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14094){
return (function (args){
return cljs.core.deref(g__13892__auto___14094);
});})(g__13892__auto___14094))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__13892__auto___14094){
return (function (seq14031){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14031));
});})(g__13892__auto___14094))
;


var g__13892__auto___14098 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__13892__auto___14098){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14099 = arguments.length;
var i__9525__auto___14100 = (0);
while(true){
if((i__9525__auto___14100 < len__9524__auto___14099)){
args__9531__auto__.push((arguments[i__9525__auto___14100]));

var G__14101 = (i__9525__auto___14100 + (1));
i__9525__auto___14100 = G__14101;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14098))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14098){
return (function (args){
return cljs.core.deref(g__13892__auto___14098);
});})(g__13892__auto___14098))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__13892__auto___14098){
return (function (seq14032){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14032));
});})(g__13892__auto___14098))
;


var g__13892__auto___14102 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__13892__auto___14102){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14103 = arguments.length;
var i__9525__auto___14104 = (0);
while(true){
if((i__9525__auto___14104 < len__9524__auto___14103)){
args__9531__auto__.push((arguments[i__9525__auto___14104]));

var G__14105 = (i__9525__auto___14104 + (1));
i__9525__auto___14104 = G__14105;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14102))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14102){
return (function (args){
return cljs.core.deref(g__13892__auto___14102);
});})(g__13892__auto___14102))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__13892__auto___14102){
return (function (seq14033){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14033));
});})(g__13892__auto___14102))
;


var g__13892__auto___14106 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__13892__auto___14106){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14107 = arguments.length;
var i__9525__auto___14108 = (0);
while(true){
if((i__9525__auto___14108 < len__9524__auto___14107)){
args__9531__auto__.push((arguments[i__9525__auto___14108]));

var G__14109 = (i__9525__auto___14108 + (1));
i__9525__auto___14108 = G__14109;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14106))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14106){
return (function (args){
return cljs.core.deref(g__13892__auto___14106);
});})(g__13892__auto___14106))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__13892__auto___14106){
return (function (seq14034){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14034));
});})(g__13892__auto___14106))
;


var g__13892__auto___14110 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__13892__auto___14110){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14111 = arguments.length;
var i__9525__auto___14112 = (0);
while(true){
if((i__9525__auto___14112 < len__9524__auto___14111)){
args__9531__auto__.push((arguments[i__9525__auto___14112]));

var G__14113 = (i__9525__auto___14112 + (1));
i__9525__auto___14112 = G__14113;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14110))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14110){
return (function (args){
return cljs.core.deref(g__13892__auto___14110);
});})(g__13892__auto___14110))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__13892__auto___14110){
return (function (seq14035){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14035));
});})(g__13892__auto___14110))
;


var g__13892__auto___14114 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__13892__auto___14114){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14115 = arguments.length;
var i__9525__auto___14116 = (0);
while(true){
if((i__9525__auto___14116 < len__9524__auto___14115)){
args__9531__auto__.push((arguments[i__9525__auto___14116]));

var G__14117 = (i__9525__auto___14116 + (1));
i__9525__auto___14116 = G__14117;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14114))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14114){
return (function (args){
return cljs.core.deref(g__13892__auto___14114);
});})(g__13892__auto___14114))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__13892__auto___14114){
return (function (seq14036){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14036));
});})(g__13892__auto___14114))
;


var g__13892__auto___14118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__13892__auto___14118){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14119 = arguments.length;
var i__9525__auto___14120 = (0);
while(true){
if((i__9525__auto___14120 < len__9524__auto___14119)){
args__9531__auto__.push((arguments[i__9525__auto___14120]));

var G__14121 = (i__9525__auto___14120 + (1));
i__9525__auto___14120 = G__14121;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});})(g__13892__auto___14118))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13892__auto___14118){
return (function (args){
return cljs.core.deref(g__13892__auto___14118);
});})(g__13892__auto___14118))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__13892__auto___14118){
return (function (seq14037){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14037));
});})(g__13892__auto___14118))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14124 = arguments.length;
var i__9525__auto___14125 = (0);
while(true){
if((i__9525__auto___14125 < len__9524__auto___14124)){
args__9531__auto__.push((arguments[i__9525__auto___14125]));

var G__14126 = (i__9525__auto___14125 + (1));
i__9525__auto___14125 = G__14126;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__14122_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__14122_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14123){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14123));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__14127_SHARP_){
return (new Date(p1__14127_SHARP_));
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
