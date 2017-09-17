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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18653_SHARP_,p2__18654_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18653_SHARP_,p2__18654_SHARP_.getAttribute("static-id"),p2__18654_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__18656 = arguments.length;
switch (G__18656) {
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
var G__18657_18660 = init;
var G__18658_18661 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18657_18660,G__18658_18661) : f.call(null,G__18657_18660,G__18658_18661));

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
var vec__18662 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__18663 = cljs.core.seq(vec__18662);
var first__18664 = cljs.core.first(seq__18663);
var seq__18663__$1 = cljs.core.next(seq__18663);
var f = first__18664;
var more = seq__18663__$1;
var vec__18665 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18665,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18665,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("be6411dd8bc34655b9fff4ba532ad938")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__18668_SHARP_){
return cljs.core.zipmap(p1__18668_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__8246__auto__ = (function (){var and__8234__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8234__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__18669 = (i + (1));
var G__18670 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__18669;
ret = G__18670;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__18672 = arguments.length;
switch (G__18672) {
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

var G__18674 = (i + (1));
i = G__18674;
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core.node[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8980__auto__.call(null,this$));
} else {
var m__8980__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8980__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__18675_18678 = hoplon.core.node;
var G__18676_18679 = "string";
var G__18677_18680 = ((function (G__18675_18678,G__18676_18679){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__18675_18678,G__18676_18679))
;
goog.object.set(G__18675_18678,G__18676_18679,G__18677_18680);
goog.object.set(hoplon.core.INode,"number",true);

var G__18681_18685 = hoplon.core.node;
var G__18682_18686 = "number";
var G__18683_18687 = ((function (G__18681_18685,G__18682_18686){
return (function (this$){
var G__18684 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__18684) : hoplon.core.$text.call(null,G__18684));
});})(G__18681_18685,G__18682_18686))
;
goog.object.set(G__18681_18685,G__18682_18686,G__18683_18687);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18690_SHARP_,p2__18689_SHARP_){
if((p2__18689_SHARP_ == null)){
return p1__18690_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18690_SHARP_,p2__18689_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__18697 = new$__$1;
var vec__18699 = G__18697;
var seq__18700 = cljs.core.seq(vec__18699);
var first__18701 = cljs.core.first(seq__18700);
var seq__18700__$1 = cljs.core.next(seq__18700);
var x = first__18701;
var xs = seq__18700__$1;
var G__18698 = hoplon.core.child_vec(this$);
var vec__18702 = G__18698;
var seq__18703 = cljs.core.seq(vec__18702);
var first__18704 = cljs.core.first(seq__18703);
var seq__18703__$1 = cljs.core.next(seq__18703);
var k = first__18704;
var ks = seq__18703__$1;
var kids = vec__18702;
var G__18697__$1 = G__18697;
var G__18698__$1 = G__18698;
while(true){
var vec__18705 = G__18697__$1;
var seq__18706 = cljs.core.seq(vec__18705);
var first__18707 = cljs.core.first(seq__18706);
var seq__18706__$1 = cljs.core.next(seq__18706);
var x__$1 = first__18707;
var xs__$1 = seq__18706__$1;
var vec__18708 = G__18698__$1;
var seq__18709 = cljs.core.seq(vec__18708);
var first__18710 = cljs.core.first(seq__18709);
var seq__18709__$1 = cljs.core.next(seq__18709);
var k__$1 = first__18710;
var ks__$1 = seq__18709__$1;
var kids__$1 = vec__18708;
if(cljs.core.truth_((function (){var or__8246__auto__ = x__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return k__$1;
}
})())){
var G__18711 = xs__$1;
var G__18712 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__18697__$1 = G__18711;
G__18698__$1 = G__18712;
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
var kids_18713 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_18713;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_18713,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_18716 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_18717 = cljs.core.count(cljs.core.deref(kids_18716));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_18716,i_18717,child__$1){
return (function (p1__18715_SHARP_,p2__18714_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18716,cljs.core.assoc,i_18717,p2__18714_SHARP_);
});})(kids_18716,i_18717,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18716,cljs.core.assoc,i_18717,child__$1);
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

if(cljs.core.truth_((function (){var and__8234__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8234__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8234__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8234__auto__;
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
return (function (p1__18718_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__18718_SHARP_));
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
return (function (p1__18719_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18719_SHARP_], 0)));
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
return (function (p1__18720_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__18720_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_18721 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_18722 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__18723 = (function (){var and__8234__auto__ = attr_18722;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_18722),kk_18721);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__18723)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_18722,cljs.core.assoc,kk_18721,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__18724_SHARP_){
return p1__18724_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__18725_SHARP_){
return p1__18725_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__18726_SHARP_){
return p1__18726_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__18727_SHARP_){
return p1__18727_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto__.call(null,this$,kvs));
} else {
var m__8980__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto____$1.call(null,this$,kvs));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto__.call(null,this$,kvs));
} else {
var m__8980__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto____$1.call(null,this$,kvs));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto__.call(null,this$,child));
} else {
var m__8980__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto____$1.call(null,this$,child));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto__.call(null,this$,child));
} else {
var m__8980__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto____$1.call(null,this$,child));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto__.call(null,this$,new$,existing));
} else {
var m__8980__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto____$1.call(null,this$,new$,existing));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto__.call(null,this$,new$,existing));
} else {
var m__8980__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__18733 = arguments.length;
switch (G__18733) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___18735 = arguments.length;
var i__9524__auto___18736 = (0);
while(true){
if((i__9524__auto___18736 < len__9523__auto___18735)){
args_arr__9546__auto__.push((arguments[i__9524__auto___18736]));

var G__18737 = (i__9524__auto___18736 + (1));
i__9524__auto___18736 = G__18737;
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq18729){
var G__18730 = cljs.core.first(seq18729);
var seq18729__$1 = cljs.core.next(seq18729);
var G__18731 = cljs.core.first(seq18729__$1);
var seq18729__$2 = cljs.core.next(seq18729__$1);
var G__18732 = cljs.core.first(seq18729__$2);
var seq18729__$3 = cljs.core.next(seq18729__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18730,G__18731,G__18732,seq18729__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__18743 = arguments.length;
switch (G__18743) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___18745 = arguments.length;
var i__9524__auto___18746 = (0);
while(true){
if((i__9524__auto___18746 < len__9523__auto___18745)){
args_arr__9546__auto__.push((arguments[i__9524__auto___18746]));

var G__18747 = (i__9524__auto___18746 + (1));
i__9524__auto___18746 = G__18747;
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq18739){
var G__18740 = cljs.core.first(seq18739);
var seq18739__$1 = cljs.core.next(seq18739);
var G__18741 = cljs.core.first(seq18739__$1);
var seq18739__$2 = cljs.core.next(seq18739__$1);
var G__18742 = cljs.core.first(seq18739__$2);
var seq18739__$3 = cljs.core.next(seq18739__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18740,G__18741,G__18742,seq18739__$3);
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
var opts18750_18768 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18750_18768){
return (function (ret__18072__auto__,p__18751){
var vec__18752 = p__18751;
var ___18073__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18752,(0),null);
var f__18074__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18752,(1),null);
var sym__18075__auto__ = (f__18074__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18074__auto__.cljs$core$IFn$_invoke$arity$0() : f__18074__auto__.call(null));
var G__18755 = ret__18072__auto__;
if(cljs.core.truth_(sym__18075__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18755,sym__18075__auto__);
} else {
return G__18755;
}
});})(opts18750_18768))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18750_18768){
return (function (p1__18071__18076__auto__){
var G__18757 = cljs.core.first(p1__18071__18076__auto__);
var fexpr__18756 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18750_18768);
return (fexpr__18756.cljs$core$IFn$_invoke$arity$1 ? fexpr__18756.cljs$core$IFn$_invoke$arity$1(G__18757) : fexpr__18756.call(null,G__18757));
});})(opts18750_18768))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18750_18768){
return (function (){
var checked__18040__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/circleci/.boot/cache/tmp/home/circleci/repo/6l/-2wx10h/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts18750_18768);
if(cljs.core.truth_(checked__18040__auto__)){
hoplon.core._do_BANG_ = checked__18040__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts18750_18768))
], null)))));

var opts18760 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18760){
return (function (ret__18072__auto__,p__18761){
var vec__18762 = p__18761;
var ___18073__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(0),null);
var f__18074__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(1),null);
var sym__18075__auto__ = (f__18074__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18074__auto__.cljs$core$IFn$_invoke$arity$0() : f__18074__auto__.call(null));
var G__18765 = ret__18072__auto__;
if(cljs.core.truth_(sym__18075__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18765,sym__18075__auto__);
} else {
return G__18765;
}
});})(opts18760))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18760){
return (function (p1__18071__18076__auto__){
var G__18767 = cljs.core.first(p1__18071__18076__auto__);
var fexpr__18766 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18760);
return (fexpr__18766.cljs$core$IFn$_invoke$arity$1 ? fexpr__18766.cljs$core$IFn$_invoke$arity$1(G__18767) : fexpr__18766.call(null,G__18767));
});})(opts18760))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18760){
return (function (){
var checked__18040__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/circleci/.boot/cache/tmp/home/circleci/repo/6l/-2wx10h/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts18760);
if(cljs.core.truth_(checked__18040__auto__)){
hoplon.core._on_BANG_ = checked__18040__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts18760))
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8980__auto__.call(null,this$,elem,value));
} else {
var m__8980__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8980__auto____$1.call(null,this$,elem,value));
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
return (function (p1__18771_SHARP_,p2__18770_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__18770_SHARP_);
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
var G__18773 = arguments.length;
switch (G__18773) {
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
var G__18775 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18776 = (0);
return setTimeout(G__18775,G__18776);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__18777_18795 = this$;
var G__18778_18796 = "_hoplonWhenDom";
var G__18779_18797 = [f];
goog.object.set(G__18777_18795,G__18778_18796,G__18779_18797);

var G__18780 = ((function (temp__5288__auto__){
return (function (){
var fexpr__18788 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__18789 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__18790 = (20);
return setTimeout(G__18789,G__18790);
} else {
var seq__18791_18798 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__18792_18799 = null;
var count__18793_18800 = (0);
var i__18794_18801 = (0);
while(true){
if((i__18794_18801 < count__18793_18800)){
var f_18802__$1 = chunk__18792_18799.cljs$core$IIndexed$_nth$arity$2(null,i__18794_18801);
(f_18802__$1.cljs$core$IFn$_invoke$arity$0 ? f_18802__$1.cljs$core$IFn$_invoke$arity$0() : f_18802__$1.call(null));

var G__18803 = seq__18791_18798;
var G__18804 = chunk__18792_18799;
var G__18805 = count__18793_18800;
var G__18806 = (i__18794_18801 + (1));
seq__18791_18798 = G__18803;
chunk__18792_18799 = G__18804;
count__18793_18800 = G__18805;
i__18794_18801 = G__18806;
continue;
} else {
var temp__5290__auto___18807 = cljs.core.seq(seq__18791_18798);
if(temp__5290__auto___18807){
var seq__18791_18808__$1 = temp__5290__auto___18807;
if(cljs.core.chunked_seq_QMARK_(seq__18791_18808__$1)){
var c__9177__auto___18809 = cljs.core.chunk_first(seq__18791_18808__$1);
var G__18810 = cljs.core.chunk_rest(seq__18791_18808__$1);
var G__18811 = c__9177__auto___18809;
var G__18812 = cljs.core.count(c__9177__auto___18809);
var G__18813 = (0);
seq__18791_18798 = G__18810;
chunk__18792_18799 = G__18811;
count__18793_18800 = G__18812;
i__18794_18801 = G__18813;
continue;
} else {
var f_18814__$1 = cljs.core.first(seq__18791_18808__$1);
(f_18814__$1.cljs$core$IFn$_invoke$arity$0 ? f_18814__$1.cljs$core$IFn$_invoke$arity$0() : f_18814__$1.call(null));

var G__18815 = cljs.core.next(seq__18791_18808__$1);
var G__18816 = null;
var G__18817 = (0);
var G__18818 = (0);
seq__18791_18798 = G__18815;
chunk__18792_18799 = G__18816;
count__18793_18800 = G__18817;
i__18794_18801 = G__18818;
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
return fexpr__18788();
});})(temp__5288__auto__))
;
var G__18781 = (0);
return setTimeout(G__18780,G__18781);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__18827 = args;
var vec__18828 = G__18827;
var seq__18829 = cljs.core.seq(vec__18828);
var first__18830 = cljs.core.first(seq__18829);
var seq__18829__$1 = cljs.core.next(seq__18829);
var arg = first__18830;
var args__$1 = seq__18829__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__18827__$1 = G__18827;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__18831 = G__18827__$1;
var seq__18832 = cljs.core.seq(vec__18831);
var first__18833 = cljs.core.first(seq__18832);
var seq__18832__$1 = cljs.core.next(seq__18832);
var arg__$1 = first__18833;
var args__$2 = seq__18832__$1;
if(cljs.core.not((function (){var or__8246__auto__ = arg__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__18834 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__18827__$1,attr__$2,kids__$2,vec__18831,seq__18832,first__18833,seq__18832__$1,arg__$1,args__$2,attr,kids,G__18827,vec__18828,seq__18829,first__18830,seq__18829__$1,arg,args__$1){
return (function (p1__18819_SHARP_,p2__18820_SHARP_,p3__18821_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18819_SHARP_,p2__18820_SHARP_,p3__18821_SHARP_);
});})(attr__$1,kids__$1,G__18827__$1,attr__$2,kids__$2,vec__18831,seq__18832,first__18833,seq__18832__$1,arg__$1,args__$2,attr,kids,G__18827,vec__18828,seq__18829,first__18830,seq__18829__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18835 = kids__$2;
var G__18836 = args__$2;
attr__$1 = G__18834;
kids__$1 = G__18835;
G__18827__$1 = G__18836;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__18837 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__18827__$1,attr__$2,kids__$2,vec__18831,seq__18832,first__18833,seq__18832__$1,arg__$1,args__$2,attr,kids,G__18827,vec__18828,seq__18829,first__18830,seq__18829__$1,arg,args__$1){
return (function (p1__18822_SHARP_,p2__18823_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18822_SHARP_,p2__18823_SHARP_,true);
});})(attr__$1,kids__$1,G__18827__$1,attr__$2,kids__$2,vec__18831,seq__18832,first__18833,seq__18832__$1,arg__$1,args__$2,attr,kids,G__18827,vec__18828,seq__18829,first__18830,seq__18829__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18838 = kids__$2;
var G__18839 = args__$2;
attr__$1 = G__18837;
kids__$1 = G__18838;
G__18827__$1 = G__18839;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__18840 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__18841 = kids__$2;
var G__18842 = cljs.core.rest(args__$2);
attr__$1 = G__18840;
kids__$1 = G__18841;
G__18827__$1 = G__18842;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__18843 = attr__$2;
var G__18844 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18845 = args__$2;
attr__$1 = G__18843;
kids__$1 = G__18844;
G__18827__$1 = G__18845;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__18846 = attr__$2;
var G__18847 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18848 = args__$2;
attr__$1 = G__18846;
kids__$1 = G__18847;
G__18827__$1 = G__18848;
continue;
} else {
var G__18849 = attr__$2;
var G__18850 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__18851 = args__$2;
attr__$1 = G__18849;
kids__$1 = G__18850;
G__18827__$1 = G__18851;
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
return cljs.core.reduce_kv((function (p1__18853_SHARP_,p2__18852_SHARP_,p3__18854_SHARP_){
hoplon.core._attr_BANG_(p2__18852_SHARP_,p1__18853_SHARP_,p3__18854_SHARP_);

return p1__18853_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__18855){
var vec__18856 = p__18855;
var seq__18857 = cljs.core.seq(vec__18856);
var first__18858 = cljs.core.first(seq__18857);
var seq__18857__$1 = cljs.core.next(seq__18857);
var child_cell = first__18858;
var _ = seq__18857__$1;
var kids = vec__18856;
var this$__$1 = this$;
var seq__18859_18863 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__18860_18864 = null;
var count__18861_18865 = (0);
var i__18862_18866 = (0);
while(true){
if((i__18862_18866 < count__18861_18865)){
var x_18867 = chunk__18860_18864.cljs$core$IIndexed$_nth$arity$2(null,i__18862_18866);
var temp__5290__auto___18868 = hoplon.core.__GT_node(x_18867);
if(cljs.core.truth_(temp__5290__auto___18868)){
var x_18869__$1 = temp__5290__auto___18868;
hoplon.core.append_child_BANG_(this$__$1,x_18869__$1);
} else {
}

var G__18870 = seq__18859_18863;
var G__18871 = chunk__18860_18864;
var G__18872 = count__18861_18865;
var G__18873 = (i__18862_18866 + (1));
seq__18859_18863 = G__18870;
chunk__18860_18864 = G__18871;
count__18861_18865 = G__18872;
i__18862_18866 = G__18873;
continue;
} else {
var temp__5290__auto___18874 = cljs.core.seq(seq__18859_18863);
if(temp__5290__auto___18874){
var seq__18859_18875__$1 = temp__5290__auto___18874;
if(cljs.core.chunked_seq_QMARK_(seq__18859_18875__$1)){
var c__9177__auto___18876 = cljs.core.chunk_first(seq__18859_18875__$1);
var G__18877 = cljs.core.chunk_rest(seq__18859_18875__$1);
var G__18878 = c__9177__auto___18876;
var G__18879 = cljs.core.count(c__9177__auto___18876);
var G__18880 = (0);
seq__18859_18863 = G__18877;
chunk__18860_18864 = G__18878;
count__18861_18865 = G__18879;
i__18862_18866 = G__18880;
continue;
} else {
var x_18881 = cljs.core.first(seq__18859_18875__$1);
var temp__5290__auto___18882__$1 = hoplon.core.__GT_node(x_18881);
if(cljs.core.truth_(temp__5290__auto___18882__$1)){
var x_18883__$1 = temp__5290__auto___18882__$1;
hoplon.core.append_child_BANG_(this$__$1,x_18883__$1);
} else {
}

var G__18884 = cljs.core.next(seq__18859_18875__$1);
var G__18885 = null;
var G__18886 = (0);
var G__18887 = (0);
seq__18859_18863 = G__18884;
chunk__18860_18864 = G__18885;
count__18861_18865 = G__18886;
i__18862_18866 = G__18887;
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
var args__9530__auto__ = [];
var len__9523__auto___18894 = arguments.length;
var i__9524__auto___18895 = (0);
while(true){
if((i__9524__auto___18895 < len__9523__auto___18894)){
args__9530__auto__.push((arguments[i__9524__auto___18895]));

var G__18896 = (i__9524__auto___18895 + (1));
i__9524__auto___18895 = G__18896;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__18890 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(1),null);
var G__18893 = this$;
hoplon.core.add_attributes_BANG_(G__18893,attr);

hoplon.core.add_children_BANG_(G__18893,kids);

return G__18893;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq18888){
var G__18889 = cljs.core.first(seq18888);
var seq18888__$1 = cljs.core.next(seq18888);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18889,seq18888__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__18898 = arguments.length;
switch (G__18898) {
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
var G__18899 = this$.children;
var G__18900 = k;
return goog.object.get(G__18899,G__18900);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8246__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
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
var G__18931 = null;
var G__18931__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__18931__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__18931__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__18931__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__18931__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__18931__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__18931__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__18931__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__18931__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__18931__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__18931__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__18931__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__18931__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__18931__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__18931__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__18931__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__18931__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__18931__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__18931__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__18931__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__18931__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__18931__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__18931 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__18931__1.call(this,self__);
case 2:
return G__18931__2.call(this,self__,a);
case 3:
return G__18931__3.call(this,self__,a,b);
case 4:
return G__18931__4.call(this,self__,a,b,c);
case 5:
return G__18931__5.call(this,self__,a,b,c,d);
case 6:
return G__18931__6.call(this,self__,a,b,c,d,e);
case 7:
return G__18931__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__18931__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__18931__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__18931__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__18931__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__18931__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__18931__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__18931__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__18931__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__18931__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__18931__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__18931__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__18931__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__18931__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__18931__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__18931__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18931.cljs$core$IFn$_invoke$arity$1 = G__18931__1;
G__18931.cljs$core$IFn$_invoke$arity$2 = G__18931__2;
G__18931.cljs$core$IFn$_invoke$arity$3 = G__18931__3;
G__18931.cljs$core$IFn$_invoke$arity$4 = G__18931__4;
G__18931.cljs$core$IFn$_invoke$arity$5 = G__18931__5;
G__18931.cljs$core$IFn$_invoke$arity$6 = G__18931__6;
G__18931.cljs$core$IFn$_invoke$arity$7 = G__18931__7;
G__18931.cljs$core$IFn$_invoke$arity$8 = G__18931__8;
G__18931.cljs$core$IFn$_invoke$arity$9 = G__18931__9;
G__18931.cljs$core$IFn$_invoke$arity$10 = G__18931__10;
G__18931.cljs$core$IFn$_invoke$arity$11 = G__18931__11;
G__18931.cljs$core$IFn$_invoke$arity$12 = G__18931__12;
G__18931.cljs$core$IFn$_invoke$arity$13 = G__18931__13;
G__18931.cljs$core$IFn$_invoke$arity$14 = G__18931__14;
G__18931.cljs$core$IFn$_invoke$arity$15 = G__18931__15;
G__18931.cljs$core$IFn$_invoke$arity$16 = G__18931__16;
G__18931.cljs$core$IFn$_invoke$arity$17 = G__18931__17;
G__18931.cljs$core$IFn$_invoke$arity$18 = G__18931__18;
G__18931.cljs$core$IFn$_invoke$arity$19 = G__18931__19;
G__18931.cljs$core$IFn$_invoke$arity$20 = G__18931__20;
G__18931.cljs$core$IFn$_invoke$arity$21 = G__18931__21;
G__18931.cljs$core$IFn$_invoke$arity$22 = G__18931__22;
return G__18931;
})()
;

Element.prototype.apply = (function (self__,args18902){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18902)));
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
var seq__18903 = cljs.core.seq(kvs);
var chunk__18905 = null;
var count__18906 = (0);
var i__18907 = (0);
while(true){
if((i__18907 < count__18906)){
var vec__18909 = chunk__18905.cljs$core$IIndexed$_nth$arity$2(null,i__18907);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18909,(1),null);
var k_18932__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18932__$1);
} else {
e.setAttribute(k_18932__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18932__$1:v));
}

var G__18933 = seq__18903;
var G__18934 = chunk__18905;
var G__18935 = count__18906;
var G__18936 = (i__18907 + (1));
seq__18903 = G__18933;
chunk__18905 = G__18934;
count__18906 = G__18935;
i__18907 = G__18936;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18903);
if(temp__5290__auto__){
var seq__18903__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18903__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__18903__$1);
var G__18937 = cljs.core.chunk_rest(seq__18903__$1);
var G__18938 = c__9177__auto__;
var G__18939 = cljs.core.count(c__9177__auto__);
var G__18940 = (0);
seq__18903 = G__18937;
chunk__18905 = G__18938;
count__18906 = G__18939;
i__18907 = G__18940;
continue;
} else {
var vec__18912 = cljs.core.first(seq__18903__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(1),null);
var k_18941__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18941__$1);
} else {
e.setAttribute(k_18941__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18941__$1:v));
}

var G__18942 = cljs.core.next(seq__18903__$1);
var G__18943 = null;
var G__18944 = (0);
var G__18945 = (0);
seq__18903 = G__18942;
chunk__18905 = G__18943;
count__18906 = G__18944;
i__18907 = G__18945;
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
var seq__18915 = cljs.core.seq(kvs);
var chunk__18916 = null;
var count__18917 = (0);
var i__18918 = (0);
while(true){
if((i__18918 < count__18917)){
var vec__18919 = chunk__18916.cljs$core$IIndexed$_nth$arity$2(null,i__18918);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18919,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18919,(1),null);
var G__18922_18946 = e.style;
var G__18923_18947 = cljs.core.name(k);
var G__18924_18948 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18922_18946,G__18923_18947,G__18924_18948);

var G__18949 = seq__18915;
var G__18950 = chunk__18916;
var G__18951 = count__18917;
var G__18952 = (i__18918 + (1));
seq__18915 = G__18949;
chunk__18916 = G__18950;
count__18917 = G__18951;
i__18918 = G__18952;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18915);
if(temp__5290__auto__){
var seq__18915__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18915__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__18915__$1);
var G__18953 = cljs.core.chunk_rest(seq__18915__$1);
var G__18954 = c__9177__auto__;
var G__18955 = cljs.core.count(c__9177__auto__);
var G__18956 = (0);
seq__18915 = G__18953;
chunk__18916 = G__18954;
count__18917 = G__18955;
i__18918 = G__18956;
continue;
} else {
var vec__18925 = cljs.core.first(seq__18915__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(1),null);
var G__18928_18957 = e.style;
var G__18929_18958 = cljs.core.name(k);
var G__18930_18959 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18928_18957,G__18929_18958,G__18930_18959);

var G__18960 = cljs.core.next(seq__18915__$1);
var G__18961 = null;
var G__18962 = (0);
var G__18963 = (0);
seq__18915 = G__18960;
chunk__18916 = G__18961;
count__18917 = G__18962;
i__18918 = G__18963;
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
var G__18967__delegate = function (args){
var vec__18964 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18964,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18964,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__18967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18968__i = 0, G__18968__a = new Array(arguments.length -  0);
while (G__18968__i < G__18968__a.length) {G__18968__a[G__18968__i] = arguments[G__18968__i + 0]; ++G__18968__i;}
  args = new cljs.core.IndexedSeq(G__18968__a,0,null);
} 
return G__18967__delegate.call(this,args);};
G__18967.cljs$lang$maxFixedArity = 0;
G__18967.cljs$lang$applyTo = (function (arglist__18969){
var args = cljs.core.seq(arglist__18969);
return G__18967__delegate(args);
});
G__18967.cljs$core$IFn$_invoke$arity$variadic = G__18967__delegate;
return G__18967;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__18973__delegate = function (args){
var vec__18970 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__18973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18974__i = 0, G__18974__a = new Array(arguments.length -  0);
while (G__18974__i < G__18974__a.length) {G__18974__a[G__18974__i] = arguments[G__18974__i + 0]; ++G__18974__i;}
  args = new cljs.core.IndexedSeq(G__18974__a,0,null);
} 
return G__18973__delegate.call(this,args);};
G__18973.cljs$lang$maxFixedArity = 0;
G__18973.cljs$lang$applyTo = (function (arglist__18975){
var args = cljs.core.seq(arglist__18975);
return G__18973__delegate(args);
});
G__18973.cljs$core$IFn$_invoke$arity$variadic = G__18973__delegate;
return G__18973;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9530__auto__ = [];
var len__9523__auto___18977 = arguments.length;
var i__9524__auto___18978 = (0);
while(true){
if((i__9524__auto___18978 < len__9523__auto___18977)){
args__9530__auto__.push((arguments[i__9524__auto___18978]));

var G__18979 = (i__9524__auto___18978 + (1));
i__9524__auto___18978 = G__18979;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq18976){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18976));
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
hoplon.core.$text = (function hoplon$core$$text(p1__18980_SHARP_){
return document.createTextNode(p1__18980_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__18981_SHARP_){
return document.createComment(p1__18981_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__18982 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18983 = (0);
return setTimeout(G__18982,G__18983);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__18984_SHARP_){
var e = p1__18984_SHARP_.target;
if(cljs.core.truth_((function (){var or__8246__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__18984_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9299__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9303__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9303__auto__,method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__18985 = elem;
var G__18986 = cljs.core.cst$kw$attr;
var G__18987 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18985,G__18986,G__18987) : hoplon.core.do_BANG_.call(null,G__18985,G__18986,G__18987));
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
hoplon.core.on_BANG_ = (function (){var method_table__9299__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9303__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9303__auto__,method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__));
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
var items_seq = (function (){var fexpr__18992 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__18990,G__18991){
return (G__18990.cljs$core$IFn$_invoke$arity$1 ? G__18990.cljs$core$IFn$_invoke$arity$1(G__18991) : G__18990.call(null,G__18991));
});})(on_deck))
);
return (fexpr__18992.cljs$core$IFn$_invoke$arity$2 ? fexpr__18992.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__18992.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__18988_SHARP_){
var fexpr__18996 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__18995,G__18994,G__18993){
return (G__18993.cljs$core$IFn$_invoke$arity$3 ? G__18993.cljs$core$IFn$_invoke$arity$3(G__18994,G__18995,null) : G__18993.call(null,G__18994,G__18995,null));
});})(on_deck,items_seq))
);
return (fexpr__18996.cljs$core$IFn$_invoke$arity$3 ? fexpr__18996.cljs$core$IFn$_invoke$arity$3(p1__18988_SHARP_,items_seq,cljs.core.nth) : fexpr__18996.call(null,p1__18988_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__18989_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__18989_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__18989_SHARP_,cljs.core.rest);

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
var seq__18997 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__18998 = null;
var count__18999 = (0);
var i__19000 = (0);
while(true){
if((i__19000 < count__18999)){
var i = chunk__18998.cljs$core$IIndexed$_nth$arity$2(null,i__19000);
var e_19003 = (function (){var or__8246__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19001 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19001) : tpl.call(null,G__19001));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19003);

var G__19004 = seq__18997;
var G__19005 = chunk__18998;
var G__19006 = count__18999;
var G__19007 = (i__19000 + (1));
seq__18997 = G__19004;
chunk__18998 = G__19005;
count__18999 = G__19006;
i__19000 = G__19007;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18997);
if(temp__5290__auto__){
var seq__18997__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18997__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__18997__$1);
var G__19008 = cljs.core.chunk_rest(seq__18997__$1);
var G__19009 = c__9177__auto__;
var G__19010 = cljs.core.count(c__9177__auto__);
var G__19011 = (0);
seq__18997 = G__19008;
chunk__18998 = G__19009;
count__18999 = G__19010;
i__19000 = G__19011;
continue;
} else {
var i = cljs.core.first(seq__18997__$1);
var e_19012 = (function (){var or__8246__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19002 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19002) : tpl.call(null,G__19002));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19012);

var G__19013 = cljs.core.next(seq__18997__$1);
var G__19014 = null;
var G__19015 = (0);
var G__19016 = (0);
seq__18997 = G__19013;
chunk__18998 = G__19014;
count__18999 = G__19015;
i__19000 = G__19016;
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
var n__9289__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9289__auto__)){
var e_19017 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19017);

var G__19018 = (_ + (1));
_ = G__19018;
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
var args__9530__auto__ = [];
var len__9523__auto___19028 = arguments.length;
var i__9524__auto___19029 = (0);
while(true){
if((i__9524__auto___19029 < len__9523__auto___19028)){
args__9530__auto__.push((arguments[i__9524__auto___19029]));

var G__19030 = (i__9524__auto___19029 + (1));
i__9524__auto___19029 = G__19030;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19020){
var vec__19021 = p__19020;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19021,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19027 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19021,default$){
return (function (G__19024,G__19026,G__19025){
var or__8246__auto__ = (function (){var and__8234__auto__ = (G__19024.cljs$core$IFn$_invoke$arity$1 ? G__19024.cljs$core$IFn$_invoke$arity$1(G__19025) : G__19024.call(null,G__19025));
if(cljs.core.truth_(and__8234__auto__)){
return G__19025;
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return G__19026;
}
});})(c,vec__19021,default$))
);
return (fexpr__19027.cljs$core$IFn$_invoke$arity$3 ? fexpr__19027.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19027.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19021,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19021,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19019){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19019));
});

