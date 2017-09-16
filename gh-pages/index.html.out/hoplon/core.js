// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19052_SHARP_,p2__19053_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19052_SHARP_,p2__19053_SHARP_.getAttribute("static-id"),p2__19053_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19055 = arguments.length;
switch (G__19055) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__19056_19059 = init;
var G__19057_19060 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19056_19059,G__19057_19060) : f.call(null,G__19056_19059,G__19057_19060));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__19061 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__19062 = cljs.core.seq(vec__19061);
var first__19063 = cljs.core.first(seq__19062);
var seq__19062__$1 = cljs.core.next(seq__19062);
var f = first__19063;
var more = seq__19062__$1;
var vec__19064 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("876a3082bcd048369f4c28f3dedfd7f9")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19067_SHARP_){
return cljs.core.zipmap(p1__19067_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8645__auto__ = (function (){var and__8633__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8633__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8633__auto__;
}
})();
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
var G__19068 = (i + (1));
var G__19069 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19068;
ret = G__19069;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19071 = arguments.length;
switch (G__19071) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__19073 = (i + (1));
i = G__19073;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core.node[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9379__auto__.call(null,this$));
} else {
var m__9379__auto____$1 = (hoplon.core.node["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9379__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__19074_19077 = hoplon.core.node;
var G__19075_19078 = "string";
var G__19076_19079 = ((function (G__19074_19077,G__19075_19078){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19074_19077,G__19075_19078))
;
goog.object.set(G__19074_19077,G__19075_19078,G__19076_19079);
goog.object.set(hoplon.core.INode,"number",true);

var G__19080_19084 = hoplon.core.node;
var G__19081_19085 = "number";
var G__19082_19086 = ((function (G__19080_19084,G__19081_19085){
return (function (this$){
var G__19083 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19083) : hoplon.core.$text.call(null,G__19083));
});})(G__19080_19084,G__19081_19085))
;
goog.object.set(G__19080_19084,G__19081_19085,G__19082_19086);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19089_SHARP_,p2__19088_SHARP_){
if((p2__19088_SHARP_ == null)){
return p1__19089_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19089_SHARP_,p2__19088_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__19096 = new$__$1;
var vec__19098 = G__19096;
var seq__19099 = cljs.core.seq(vec__19098);
var first__19100 = cljs.core.first(seq__19099);
var seq__19099__$1 = cljs.core.next(seq__19099);
var x = first__19100;
var xs = seq__19099__$1;
var G__19097 = hoplon.core.child_vec(this$);
var vec__19101 = G__19097;
var seq__19102 = cljs.core.seq(vec__19101);
var first__19103 = cljs.core.first(seq__19102);
var seq__19102__$1 = cljs.core.next(seq__19102);
var k = first__19103;
var ks = seq__19102__$1;
var kids = vec__19101;
var G__19096__$1 = G__19096;
var G__19097__$1 = G__19097;
while(true){
var vec__19104 = G__19096__$1;
var seq__19105 = cljs.core.seq(vec__19104);
var first__19106 = cljs.core.first(seq__19105);
var seq__19105__$1 = cljs.core.next(seq__19105);
var x__$1 = first__19106;
var xs__$1 = seq__19105__$1;
var vec__19107 = G__19097__$1;
var seq__19108 = cljs.core.seq(vec__19107);
var first__19109 = cljs.core.first(seq__19108);
var seq__19108__$1 = cljs.core.next(seq__19108);
var k__$1 = first__19109;
var ks__$1 = seq__19108__$1;
var kids__$1 = vec__19107;
if(cljs.core.truth_((function (){var or__8645__auto__ = x__$1;
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
return k__$1;
}
})())){
var G__19110 = xs__$1;
var G__19111 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__19096__$1 = G__19110;
G__19097__$1 = G__19111;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_19112 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_19112;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_19112,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_19115 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_19116 = cljs.core.count(cljs.core.deref(kids_19115));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19115,i_19116,child__$1){
return (function (p1__19114_SHARP_,p2__19113_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19115,cljs.core.assoc,i_19116,p2__19113_SHARP_);
});})(kids_19115,i_19116,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19115,cljs.core.assoc,i_19116,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8633__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8633__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8633__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8633__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8633__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8633__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19117_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__19117_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19118_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19118_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__19119_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__19119_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_19120 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_19121 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__19122 = (function (){var and__8633__auto__ = attr_19121;
if(cljs.core.truth_(and__8633__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_19121),kk_19120);
} else {
return and__8633__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__19122)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_19121,cljs.core.assoc,kk_19120,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__19123_SHARP_){
return p1__19123_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__19124_SHARP_){
return p1__19124_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__19125_SHARP_){
return p1__19125_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__19126_SHARP_){
return p1__19126_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9379__auto__.call(null,this$,kvs));
} else {
var m__9379__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9379__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9379__auto__.call(null,this$,kvs));
} else {
var m__9379__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9379__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9379__auto__.call(null,this$,child));
} else {
var m__9379__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9379__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9379__auto__.call(null,this$,child));
} else {
var m__9379__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9379__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9379__auto__.call(null,this$,new$,existing));
} else {
var m__9379__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9379__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9379__auto__.call(null,this$,new$,existing));
} else {
var m__9379__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9379__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19132 = arguments.length;
switch (G__19132) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9945__auto__ = [];
var len__9922__auto___19134 = arguments.length;
var i__9923__auto___19135 = (0);
while(true){
if((i__9923__auto___19135 < len__9922__auto___19134)){
args_arr__9945__auto__.push((arguments[i__9923__auto___19135]));

var G__19136 = (i__9923__auto___19135 + (1));
i__9923__auto___19135 = G__19136;
continue;
} else {
}
break;
}

var argseq__9946__auto__ = (new cljs.core.IndexedSeq(args_arr__9945__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9946__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19128){
var G__19129 = cljs.core.first(seq19128);
var seq19128__$1 = cljs.core.next(seq19128);
var G__19130 = cljs.core.first(seq19128__$1);
var seq19128__$2 = cljs.core.next(seq19128__$1);
var G__19131 = cljs.core.first(seq19128__$2);
var seq19128__$3 = cljs.core.next(seq19128__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19129,G__19130,G__19131,seq19128__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19142 = arguments.length;
switch (G__19142) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9945__auto__ = [];
var len__9922__auto___19144 = arguments.length;
var i__9923__auto___19145 = (0);
while(true){
if((i__9923__auto___19145 < len__9922__auto___19144)){
args_arr__9945__auto__.push((arguments[i__9923__auto___19145]));

var G__19146 = (i__9923__auto___19145 + (1));
i__9923__auto___19145 = G__19146;
continue;
} else {
}
break;
}

var argseq__9946__auto__ = (new cljs.core.IndexedSeq(args_arr__9945__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9946__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19138){
var G__19139 = cljs.core.first(seq19138);
var seq19138__$1 = cljs.core.next(seq19138);
var G__19140 = cljs.core.first(seq19138__$1);
var seq19138__$2 = cljs.core.next(seq19138__$1);
var G__19141 = cljs.core.first(seq19138__$2);
var seq19138__$3 = cljs.core.next(seq19138__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19139,G__19140,G__19141,seq19138__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts19149_19167 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19149_19167){
return (function (ret__18279__auto__,p__19150){
var vec__19151 = p__19150;
var ___18280__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19151,(0),null);
var f__18281__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19151,(1),null);
var sym__18282__auto__ = (f__18281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18281__auto__.cljs$core$IFn$_invoke$arity$0() : f__18281__auto__.call(null));
var G__19154 = ret__18279__auto__;
if(cljs.core.truth_(sym__18282__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19154,sym__18282__auto__);
} else {
return G__19154;
}
});})(opts19149_19167))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19149_19167){
return (function (p1__18278__18283__auto__){
var G__19156 = cljs.core.first(p1__18278__18283__auto__);
var fexpr__19155 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19149_19167);
return (fexpr__19155.cljs$core$IFn$_invoke$arity$1 ? fexpr__19155.cljs$core$IFn$_invoke$arity$1(G__19156) : fexpr__19155.call(null,G__19156));
});})(opts19149_19167))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19149_19167){
return (function (){
var checked__18247__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/boot-github-pages/vbu/-u8avwd/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19149_19167);
if(cljs.core.truth_(checked__18247__auto__)){
hoplon.core._do_BANG_ = checked__18247__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19149_19167))
], null)))));

var opts19159 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19159){
return (function (ret__18279__auto__,p__19160){
var vec__19161 = p__19160;
var ___18280__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19161,(0),null);
var f__18281__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19161,(1),null);
var sym__18282__auto__ = (f__18281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18281__auto__.cljs$core$IFn$_invoke$arity$0() : f__18281__auto__.call(null));
var G__19164 = ret__18279__auto__;
if(cljs.core.truth_(sym__18282__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19164,sym__18282__auto__);
} else {
return G__19164;
}
});})(opts19159))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19159){
return (function (p1__18278__18283__auto__){
var G__19166 = cljs.core.first(p1__18278__18283__auto__);
var fexpr__19165 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19159);
return (fexpr__19165.cljs$core$IFn$_invoke$arity$1 ? fexpr__19165.cljs$core$IFn$_invoke$arity$1(G__19166) : fexpr__19165.call(null,G__19166));
});})(opts19159))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19159){
return (function (){
var checked__18247__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/boot-github-pages/vbu/-u8avwd/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19159);
if(cljs.core.truth_(checked__18247__auto__)){
hoplon.core._on_BANG_ = checked__18247__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19159))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__9378__auto__ = (((this$ == null))?null:this$);
var m__9379__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__9378__auto__)]);
if(!((m__9379__auto__ == null))){
return (m__9379__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9379__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9379__auto__.call(null,this$,elem,value));
} else {
var m__9379__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__9379__auto____$1 == null))){
return (m__9379__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9379__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9379__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__19170_SHARP_,p2__19169_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__19169_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_(elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__19172 = arguments.length;
switch (G__19172) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__19174 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19175 = (0);
return setTimeout(G__19174,G__19175);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__19176_19194 = this$;
var G__19177_19195 = "_hoplonWhenDom";
var G__19178_19196 = [f];
goog.object.set(G__19176_19194,G__19177_19195,G__19178_19196);

var G__19179 = ((function (temp__5288__auto__){
return (function (){
var fexpr__19187 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19188 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__19189 = (20);
return setTimeout(G__19188,G__19189);
} else {
var seq__19190_19197 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19191_19198 = null;
var count__19192_19199 = (0);
var i__19193_19200 = (0);
while(true){
if((i__19193_19200 < count__19192_19199)){
var f_19201__$1 = chunk__19191_19198.cljs$core$IIndexed$_nth$arity$2(null,i__19193_19200);
(f_19201__$1.cljs$core$IFn$_invoke$arity$0 ? f_19201__$1.cljs$core$IFn$_invoke$arity$0() : f_19201__$1.call(null));

var G__19202 = seq__19190_19197;
var G__19203 = chunk__19191_19198;
var G__19204 = count__19192_19199;
var G__19205 = (i__19193_19200 + (1));
seq__19190_19197 = G__19202;
chunk__19191_19198 = G__19203;
count__19192_19199 = G__19204;
i__19193_19200 = G__19205;
continue;
} else {
var temp__5290__auto___19206 = cljs.core.seq(seq__19190_19197);
if(temp__5290__auto___19206){
var seq__19190_19207__$1 = temp__5290__auto___19206;
if(cljs.core.chunked_seq_QMARK_(seq__19190_19207__$1)){
var c__9576__auto___19208 = cljs.core.chunk_first(seq__19190_19207__$1);
var G__19209 = cljs.core.chunk_rest(seq__19190_19207__$1);
var G__19210 = c__9576__auto___19208;
var G__19211 = cljs.core.count(c__9576__auto___19208);
var G__19212 = (0);
seq__19190_19197 = G__19209;
chunk__19191_19198 = G__19210;
count__19192_19199 = G__19211;
i__19193_19200 = G__19212;
continue;
} else {
var f_19213__$1 = cljs.core.first(seq__19190_19207__$1);
(f_19213__$1.cljs$core$IFn$_invoke$arity$0 ? f_19213__$1.cljs$core$IFn$_invoke$arity$0() : f_19213__$1.call(null));

var G__19214 = cljs.core.next(seq__19190_19207__$1);
var G__19215 = null;
var G__19216 = (0);
var G__19217 = (0);
seq__19190_19197 = G__19214;
chunk__19191_19198 = G__19215;
count__19192_19199 = G__19216;
i__19193_19200 = G__19217;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5288__auto__))
;
return fexpr__19187();
});})(temp__5288__auto__))
;
var G__19180 = (0);
return setTimeout(G__19179,G__19180);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19226 = args;
var vec__19227 = G__19226;
var seq__19228 = cljs.core.seq(vec__19227);
var first__19229 = cljs.core.first(seq__19228);
var seq__19228__$1 = cljs.core.next(seq__19228);
var arg = first__19229;
var args__$1 = seq__19228__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19226__$1 = G__19226;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19230 = G__19226__$1;
var seq__19231 = cljs.core.seq(vec__19230);
var first__19232 = cljs.core.first(seq__19231);
var seq__19231__$1 = cljs.core.next(seq__19231);
var arg__$1 = first__19232;
var args__$2 = seq__19231__$1;
if(cljs.core.not((function (){var or__8645__auto__ = arg__$1;
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19233 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__19226__$1,attr__$2,kids__$2,vec__19230,seq__19231,first__19232,seq__19231__$1,arg__$1,args__$2,attr,kids,G__19226,vec__19227,seq__19228,first__19229,seq__19228__$1,arg,args__$1){
return (function (p1__19218_SHARP_,p2__19219_SHARP_,p3__19220_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19218_SHARP_,p2__19219_SHARP_,p3__19220_SHARP_);
});})(attr__$1,kids__$1,G__19226__$1,attr__$2,kids__$2,vec__19230,seq__19231,first__19232,seq__19231__$1,arg__$1,args__$2,attr,kids,G__19226,vec__19227,seq__19228,first__19229,seq__19228__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19234 = kids__$2;
var G__19235 = args__$2;
attr__$1 = G__19233;
kids__$1 = G__19234;
G__19226__$1 = G__19235;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19236 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19226__$1,attr__$2,kids__$2,vec__19230,seq__19231,first__19232,seq__19231__$1,arg__$1,args__$2,attr,kids,G__19226,vec__19227,seq__19228,first__19229,seq__19228__$1,arg,args__$1){
return (function (p1__19221_SHARP_,p2__19222_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19221_SHARP_,p2__19222_SHARP_,true);
});})(attr__$1,kids__$1,G__19226__$1,attr__$2,kids__$2,vec__19230,seq__19231,first__19232,seq__19231__$1,arg__$1,args__$2,attr,kids,G__19226,vec__19227,seq__19228,first__19229,seq__19228__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19237 = kids__$2;
var G__19238 = args__$2;
attr__$1 = G__19236;
kids__$1 = G__19237;
G__19226__$1 = G__19238;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__19239 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19240 = kids__$2;
var G__19241 = cljs.core.rest(args__$2);
attr__$1 = G__19239;
kids__$1 = G__19240;
G__19226__$1 = G__19241;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19242 = attr__$2;
var G__19243 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19244 = args__$2;
attr__$1 = G__19242;
kids__$1 = G__19243;
G__19226__$1 = G__19244;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19245 = attr__$2;
var G__19246 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19247 = args__$2;
attr__$1 = G__19245;
kids__$1 = G__19246;
G__19226__$1 = G__19247;
continue;
} else {
var G__19248 = attr__$2;
var G__19249 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19250 = args__$2;
attr__$1 = G__19248;
kids__$1 = G__19249;
G__19226__$1 = G__19250;
continue;

}
}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19252_SHARP_,p2__19251_SHARP_,p3__19253_SHARP_){
hoplon.core._attr_BANG_(p2__19251_SHARP_,p1__19252_SHARP_,p3__19253_SHARP_);

return p1__19252_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19254){
var vec__19255 = p__19254;
var seq__19256 = cljs.core.seq(vec__19255);
var first__19257 = cljs.core.first(seq__19256);
var seq__19256__$1 = cljs.core.next(seq__19256);
var child_cell = first__19257;
var _ = seq__19256__$1;
var kids = vec__19255;
var this$__$1 = this$;
var seq__19258_19262 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19259_19263 = null;
var count__19260_19264 = (0);
var i__19261_19265 = (0);
while(true){
if((i__19261_19265 < count__19260_19264)){
var x_19266 = chunk__19259_19263.cljs$core$IIndexed$_nth$arity$2(null,i__19261_19265);
var temp__5290__auto___19267 = hoplon.core.__GT_node(x_19266);
if(cljs.core.truth_(temp__5290__auto___19267)){
var x_19268__$1 = temp__5290__auto___19267;
hoplon.core.append_child_BANG_(this$__$1,x_19268__$1);
} else {
}

var G__19269 = seq__19258_19262;
var G__19270 = chunk__19259_19263;
var G__19271 = count__19260_19264;
var G__19272 = (i__19261_19265 + (1));
seq__19258_19262 = G__19269;
chunk__19259_19263 = G__19270;
count__19260_19264 = G__19271;
i__19261_19265 = G__19272;
continue;
} else {
var temp__5290__auto___19273 = cljs.core.seq(seq__19258_19262);
if(temp__5290__auto___19273){
var seq__19258_19274__$1 = temp__5290__auto___19273;
if(cljs.core.chunked_seq_QMARK_(seq__19258_19274__$1)){
var c__9576__auto___19275 = cljs.core.chunk_first(seq__19258_19274__$1);
var G__19276 = cljs.core.chunk_rest(seq__19258_19274__$1);
var G__19277 = c__9576__auto___19275;
var G__19278 = cljs.core.count(c__9576__auto___19275);
var G__19279 = (0);
seq__19258_19262 = G__19276;
chunk__19259_19263 = G__19277;
count__19260_19264 = G__19278;
i__19261_19265 = G__19279;
continue;
} else {
var x_19280 = cljs.core.first(seq__19258_19274__$1);
var temp__5290__auto___19281__$1 = hoplon.core.__GT_node(x_19280);
if(cljs.core.truth_(temp__5290__auto___19281__$1)){
var x_19282__$1 = temp__5290__auto___19281__$1;
hoplon.core.append_child_BANG_(this$__$1,x_19282__$1);
} else {
}

var G__19283 = cljs.core.next(seq__19258_19274__$1);
var G__19284 = null;
var G__19285 = (0);
var G__19286 = (0);
seq__19258_19262 = G__19283;
chunk__19259_19263 = G__19284;
count__19260_19264 = G__19285;
i__19261_19265 = G__19286;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9929__auto__ = [];
var len__9922__auto___19293 = arguments.length;
var i__9923__auto___19294 = (0);
while(true){
if((i__9923__auto___19294 < len__9922__auto___19293)){
args__9929__auto__.push((arguments[i__9923__auto___19294]));

var G__19295 = (i__9923__auto___19294 + (1));
i__9923__auto___19294 = G__19295;
continue;
} else {
}
break;
}

var argseq__9930__auto__ = ((((1) < args__9929__auto__.length))?(new cljs.core.IndexedSeq(args__9929__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9930__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19289 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(1),null);
var G__19292 = this$;
hoplon.core.add_attributes_BANG_(G__19292,attr);

hoplon.core.add_children_BANG_(G__19292,kids);

return G__19292;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19287){
var G__19288 = cljs.core.first(seq19287);
var seq19287__$1 = cljs.core.next(seq19287);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19288,seq19287__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__19297 = arguments.length;
switch (G__19297) {
case 2:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$.getAttribute(cljs.core.name(k));
} else {
var G__19298 = this$.children;
var G__19299 = k;
return goog.object.get(G__19298,G__19299);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8645__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
return not_found;
}
});

hoplon.core.lookup_BANG_.cljs$lang$maxFixedArity = 3;

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19330 = null;
var G__19330__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19330__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19330__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19330__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19330__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19330__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19330__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19330__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19330__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19330__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19330__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19330__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19330__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19330__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19330__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19330__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19330__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19330__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19330__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19330__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19330__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19330__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19330 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19330__1.call(this,self__);
case 2:
return G__19330__2.call(this,self__,a);
case 3:
return G__19330__3.call(this,self__,a,b);
case 4:
return G__19330__4.call(this,self__,a,b,c);
case 5:
return G__19330__5.call(this,self__,a,b,c,d);
case 6:
return G__19330__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19330__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19330__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19330__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19330__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19330__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19330__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19330__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19330__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19330__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19330__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19330__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19330__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19330__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19330__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19330__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19330__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19330.cljs$core$IFn$_invoke$arity$1 = G__19330__1;
G__19330.cljs$core$IFn$_invoke$arity$2 = G__19330__2;
G__19330.cljs$core$IFn$_invoke$arity$3 = G__19330__3;
G__19330.cljs$core$IFn$_invoke$arity$4 = G__19330__4;
G__19330.cljs$core$IFn$_invoke$arity$5 = G__19330__5;
G__19330.cljs$core$IFn$_invoke$arity$6 = G__19330__6;
G__19330.cljs$core$IFn$_invoke$arity$7 = G__19330__7;
G__19330.cljs$core$IFn$_invoke$arity$8 = G__19330__8;
G__19330.cljs$core$IFn$_invoke$arity$9 = G__19330__9;
G__19330.cljs$core$IFn$_invoke$arity$10 = G__19330__10;
G__19330.cljs$core$IFn$_invoke$arity$11 = G__19330__11;
G__19330.cljs$core$IFn$_invoke$arity$12 = G__19330__12;
G__19330.cljs$core$IFn$_invoke$arity$13 = G__19330__13;
G__19330.cljs$core$IFn$_invoke$arity$14 = G__19330__14;
G__19330.cljs$core$IFn$_invoke$arity$15 = G__19330__15;
G__19330.cljs$core$IFn$_invoke$arity$16 = G__19330__16;
G__19330.cljs$core$IFn$_invoke$arity$17 = G__19330__17;
G__19330.cljs$core$IFn$_invoke$arity$18 = G__19330__18;
G__19330.cljs$core$IFn$_invoke$arity$19 = G__19330__19;
G__19330.cljs$core$IFn$_invoke$arity$20 = G__19330__20;
G__19330.cljs$core$IFn$_invoke$arity$21 = G__19330__21;
G__19330.cljs$core$IFn$_invoke$arity$22 = G__19330__22;
return G__19330;
})()
;

Element.prototype.apply = (function (self__,args19301){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19301)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19302 = cljs.core.seq(kvs);
var chunk__19304 = null;
var count__19305 = (0);
var i__19306 = (0);
while(true){
if((i__19306 < count__19305)){
var vec__19308 = chunk__19304.cljs$core$IIndexed$_nth$arity$2(null,i__19306);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19308,(1),null);
var k_19331__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19331__$1);
} else {
e.setAttribute(k_19331__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19331__$1:v));
}

var G__19332 = seq__19302;
var G__19333 = chunk__19304;
var G__19334 = count__19305;
var G__19335 = (i__19306 + (1));
seq__19302 = G__19332;
chunk__19304 = G__19333;
count__19305 = G__19334;
i__19306 = G__19335;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19302);
if(temp__5290__auto__){
var seq__19302__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19302__$1)){
var c__9576__auto__ = cljs.core.chunk_first(seq__19302__$1);
var G__19336 = cljs.core.chunk_rest(seq__19302__$1);
var G__19337 = c__9576__auto__;
var G__19338 = cljs.core.count(c__9576__auto__);
var G__19339 = (0);
seq__19302 = G__19336;
chunk__19304 = G__19337;
count__19305 = G__19338;
i__19306 = G__19339;
continue;
} else {
var vec__19311 = cljs.core.first(seq__19302__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19311,(1),null);
var k_19340__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19340__$1);
} else {
e.setAttribute(k_19340__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19340__$1:v));
}

var G__19341 = cljs.core.next(seq__19302__$1);
var G__19342 = null;
var G__19343 = (0);
var G__19344 = (0);
seq__19302 = G__19341;
chunk__19304 = G__19342;
count__19305 = G__19343;
i__19306 = G__19344;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19314 = cljs.core.seq(kvs);
var chunk__19315 = null;
var count__19316 = (0);
var i__19317 = (0);
while(true){
if((i__19317 < count__19316)){
var vec__19318 = chunk__19315.cljs$core$IIndexed$_nth$arity$2(null,i__19317);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19318,(1),null);
var G__19321_19345 = e.style;
var G__19322_19346 = cljs.core.name(k);
var G__19323_19347 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19321_19345,G__19322_19346,G__19323_19347);

var G__19348 = seq__19314;
var G__19349 = chunk__19315;
var G__19350 = count__19316;
var G__19351 = (i__19317 + (1));
seq__19314 = G__19348;
chunk__19315 = G__19349;
count__19316 = G__19350;
i__19317 = G__19351;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19314);
if(temp__5290__auto__){
var seq__19314__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19314__$1)){
var c__9576__auto__ = cljs.core.chunk_first(seq__19314__$1);
var G__19352 = cljs.core.chunk_rest(seq__19314__$1);
var G__19353 = c__9576__auto__;
var G__19354 = cljs.core.count(c__9576__auto__);
var G__19355 = (0);
seq__19314 = G__19352;
chunk__19315 = G__19353;
count__19316 = G__19354;
i__19317 = G__19355;
continue;
} else {
var vec__19324 = cljs.core.first(seq__19314__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(1),null);
var G__19327_19356 = e.style;
var G__19328_19357 = cljs.core.name(k);
var G__19329_19358 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19327_19356,G__19328_19357,G__19329_19358);

var G__19359 = cljs.core.next(seq__19314__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__19314 = G__19359;
chunk__19315 = G__19360;
count__19316 = G__19361;
i__19317 = G__19362;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.appendChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){
return (function() { 
var G__19366__delegate = function (args){
var vec__19363 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19367__i = 0, G__19367__a = new Array(arguments.length -  0);
while (G__19367__i < G__19367__a.length) {G__19367__a[G__19367__i] = arguments[G__19367__i + 0]; ++G__19367__i;}
  args = new cljs.core.IndexedSeq(G__19367__a,0,null);
} 
return G__19366__delegate.call(this,args);};
G__19366.cljs$lang$maxFixedArity = 0;
G__19366.cljs$lang$applyTo = (function (arglist__19368){
var args = cljs.core.seq(arglist__19368);
return G__19366__delegate(args);
});
G__19366.cljs$core$IFn$_invoke$arity$variadic = G__19366__delegate;
return G__19366;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19372__delegate = function (args){
var vec__19369 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19373__i = 0, G__19373__a = new Array(arguments.length -  0);
while (G__19373__i < G__19373__a.length) {G__19373__a[G__19373__i] = arguments[G__19373__i + 0]; ++G__19373__i;}
  args = new cljs.core.IndexedSeq(G__19373__a,0,null);
} 
return G__19372__delegate.call(this,args);};
G__19372.cljs$lang$maxFixedArity = 0;
G__19372.cljs$lang$applyTo = (function (arglist__19374){
var args = cljs.core.seq(arglist__19374);
return G__19372__delegate(args);
});
G__19372.cljs$core$IFn$_invoke$arity$variadic = G__19372__delegate;
return G__19372;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9929__auto__ = [];
var len__9922__auto___19376 = arguments.length;
var i__9923__auto___19377 = (0);
while(true){
if((i__9923__auto___19377 < len__9922__auto___19376)){
args__9929__auto__.push((arguments[i__9923__auto___19377]));

var G__19378 = (i__9923__auto___19377 + (1));
i__9923__auto___19377 = G__19378;
continue;
} else {
}
break;
}

var argseq__9930__auto__ = ((((0) < args__9929__auto__.length))?(new cljs.core.IndexedSeq(args__9929__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9930__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19375){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19375));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton(document.head);
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton(document.body);
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19379_SHARP_){
return document.createTextNode(p1__19379_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19380_SHARP_){
return document.createComment(p1__19380_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19381 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19382 = (0);
return setTimeout(G__19381,G__19382);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19383_SHARP_){
var e = p1__19383_SHARP_.target;
if(cljs.core.truth_((function (){var or__8645__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19383_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9698__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9699__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9700__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9698__auto__,prefer_table__9699__auto__,method_cache__9700__auto__,cached_hierarchy__9701__auto__,hierarchy__9702__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9698__auto__,prefer_table__9699__auto__,method_cache__9700__auto__,cached_hierarchy__9701__auto__,hierarchy__9702__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9702__auto__,method_table__9698__auto__,prefer_table__9699__auto__,method_cache__9700__auto__,cached_hierarchy__9701__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19384 = elem;
var G__19385 = cljs.core.cst$kw$attr;
var G__19386 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19384,G__19385,G__19386) : hoplon.core.do_BANG_.call(null,G__19384,G__19385,G__19386));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9698__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9699__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9700__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9698__auto__,prefer_table__9699__auto__,method_cache__9700__auto__,cached_hierarchy__9701__auto__,hierarchy__9702__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9698__auto__,prefer_table__9699__auto__,method_cache__9700__auto__,cached_hierarchy__9701__auto__,hierarchy__9702__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9702__auto__,method_table__9698__auto__,prefer_table__9699__auto__,method_cache__9700__auto__,cached_hierarchy__9701__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19391 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19389,G__19390){
return (G__19389.cljs$core$IFn$_invoke$arity$1 ? G__19389.cljs$core$IFn$_invoke$arity$1(G__19390) : G__19389.call(null,G__19390));
});})(on_deck))
);
return (fexpr__19391.cljs$core$IFn$_invoke$arity$2 ? fexpr__19391.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19391.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19387_SHARP_){
var fexpr__19395 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19394,G__19393,G__19392){
return (G__19392.cljs$core$IFn$_invoke$arity$3 ? G__19392.cljs$core$IFn$_invoke$arity$3(G__19393,G__19394,null) : G__19392.call(null,G__19393,G__19394,null));
});})(on_deck,items_seq))
);
return (fexpr__19395.cljs$core$IFn$_invoke$arity$3 ? fexpr__19395.cljs$core$IFn$_invoke$arity$3(p1__19387_SHARP_,items_seq,cljs.core.nth) : fexpr__19395.call(null,p1__19387_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19388_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19388_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19388_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19396 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19397 = null;
var count__19398 = (0);
var i__19399 = (0);
while(true){
if((i__19399 < count__19398)){
var i = chunk__19397.cljs$core$IIndexed$_nth$arity$2(null,i__19399);
var e_19402 = (function (){var or__8645__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
var G__19400 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19400) : tpl.call(null,G__19400));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19402);

var G__19403 = seq__19396;
var G__19404 = chunk__19397;
var G__19405 = count__19398;
var G__19406 = (i__19399 + (1));
seq__19396 = G__19403;
chunk__19397 = G__19404;
count__19398 = G__19405;
i__19399 = G__19406;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19396);
if(temp__5290__auto__){
var seq__19396__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19396__$1)){
var c__9576__auto__ = cljs.core.chunk_first(seq__19396__$1);
var G__19407 = cljs.core.chunk_rest(seq__19396__$1);
var G__19408 = c__9576__auto__;
var G__19409 = cljs.core.count(c__9576__auto__);
var G__19410 = (0);
seq__19396 = G__19407;
chunk__19397 = G__19408;
count__19398 = G__19409;
i__19399 = G__19410;
continue;
} else {
var i = cljs.core.first(seq__19396__$1);
var e_19411 = (function (){var or__8645__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
var G__19401 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19401) : tpl.call(null,G__19401));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19411);

var G__19412 = cljs.core.next(seq__19396__$1);
var G__19413 = null;
var G__19414 = (0);
var G__19415 = (0);
seq__19396 = G__19412;
chunk__19397 = G__19413;
count__19398 = G__19414;
i__19399 = G__19415;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9688__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9688__auto__)){
var e_19416 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19416);

var G__19417 = (_ + (1));
_ = G__19417;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__9929__auto__ = [];
var len__9922__auto___19427 = arguments.length;
var i__9923__auto___19428 = (0);
while(true){
if((i__9923__auto___19428 < len__9922__auto___19427)){
args__9929__auto__.push((arguments[i__9923__auto___19428]));

var G__19429 = (i__9923__auto___19428 + (1));
i__9923__auto___19428 = G__19429;
continue;
} else {
}
break;
}

var argseq__9930__auto__ = ((((0) < args__9929__auto__.length))?(new cljs.core.IndexedSeq(args__9929__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9930__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19419){
var vec__19420 = p__19419;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19420,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19426 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19420,default$){
return (function (G__19423,G__19425,G__19424){
var or__8645__auto__ = (function (){var and__8633__auto__ = (G__19423.cljs$core$IFn$_invoke$arity$1 ? G__19423.cljs$core$IFn$_invoke$arity$1(G__19424) : G__19423.call(null,G__19424));
if(cljs.core.truth_(and__8633__auto__)){
return G__19424;
} else {
return and__8633__auto__;
}
})();
if(cljs.core.truth_(or__8645__auto__)){
return or__8645__auto__;
} else {
return G__19425;
}
});})(c,vec__19420,default$))
);
return (fexpr__19426.cljs$core$IFn$_invoke$arity$3 ? fexpr__19426.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19426.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19420,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19420,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19418){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19418));
});

