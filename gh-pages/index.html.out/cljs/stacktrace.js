// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9303__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9304__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__,hierarchy__9304__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__,hierarchy__9304__auto__))
,cljs.core.cst$kw$default,hierarchy__9304__auto__,method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__8247__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__15574 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__15580,p__15581){
var vec__15582 = p__15580;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15582,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15582,(1),null);
var vec__15585 = p__15581;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15574,(0),null);
var vec__15577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15574,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15588 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__15588,"(","");
} else {
return G__15588;
}
})(),cljs.stacktrace.parse_int((function (){var G__15589 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__15589,")","");
} else {
return G__15589;
}
})()),cljs.stacktrace.parse_int((function (){var G__15590 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__15590,")","");
} else {
return G__15590;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__15591,file,p__15592){
var map__15593 = p__15591;
var map__15593__$1 = ((((!((map__15593 == null)))?((((map__15593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15593):map__15593);
var repl_env = map__15593__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593__$1,cljs.core.cst$kw$port);
var map__15594 = p__15592;
var map__15594__$1 = ((((!((map__15594 == null)))?((((map__15594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15594):map__15594);
var opts = map__15594__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15594__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8247__auto__ = host_port;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8247__auto__ = (function (){var and__8235__auto__ = asset_path;
if(cljs.core.truth_(and__8235__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__8235__auto__;
}
})();
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5288__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5288__auto__)){
var asset_root = temp__5288__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__15597 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(1),null);
var vec__15600 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15600,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15600,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15600,(2),null);
if(cljs.core.truth_((function (){var and__8235__auto__ = file;
if(cljs.core.truth_(and__8235__auto__)){
var and__8235__auto____$1 = function$;
if(cljs.core.truth_(and__8235__auto____$1)){
var and__8235__auto____$2 = line;
if(cljs.core.truth_(and__8235__auto____$2)){
return column;
} else {
return and__8235__auto____$2;
}
} else {
return and__8235__auto____$1;
}
} else {
return and__8235__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15605_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__15605_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15604_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__15604_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15603_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15603_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__15606 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(1),null);
var vec__15609 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(2),null);
if(cljs.core.truth_((function (){var and__8235__auto__ = file;
if(cljs.core.truth_(and__8235__auto__)){
var and__8235__auto____$1 = function$;
if(cljs.core.truth_(and__8235__auto____$1)){
var and__8235__auto____$2 = line;
if(cljs.core.truth_(and__8235__auto____$2)){
return column;
} else {
return and__8235__auto____$2;
}
} else {
return and__8235__auto____$1;
}
} else {
return and__8235__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15614_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__15614_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15613_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__15613_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15612_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15612_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__15615 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(1),null);
var vec__15618 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15618,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15618,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15618,(2),null);
if(cljs.core.truth_((function (){var and__8235__auto__ = file;
if(cljs.core.truth_(and__8235__auto__)){
var and__8235__auto____$1 = function$;
if(cljs.core.truth_(and__8235__auto____$1)){
var and__8235__auto____$2 = line;
if(cljs.core.truth_(and__8235__auto____$2)){
return column;
} else {
return and__8235__auto____$2;
}
} else {
return and__8235__auto____$1;
}
} else {
return and__8235__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15623_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__15623_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15622_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15622_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15621_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15621_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__15624){
var map__15625 = p__15624;
var map__15625__$1 = ((((!((map__15625 == null)))?((((map__15625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15625):map__15625);
var opts = map__15625__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15625__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__15625,map__15625__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__15633 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15633,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15633,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__15636 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8235__auto__ = line;
if(cljs.core.truth_(and__8235__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__8235__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__15625,map__15625__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__15639){
var map__15640 = p__15639;
var map__15640__$1 = ((((!((map__15640 == null)))?((((map__15640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15640):map__15640);
var opts = map__15640__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15640__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__15640,map__15640__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__15648 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(1),null);
var vec__15651 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8235__auto__ = line_part;
if(cljs.core.truth_(and__8235__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__8235__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__15640,map__15640__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__15654){
var map__15655 = p__15654;
var map__15655__$1 = ((((!((map__15655 == null)))?((((map__15655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15655):map__15655);
var opts = map__15655__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15655__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__15655,map__15655__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__8235__auto__ = x;
if(cljs.core.truth_(and__8235__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__8235__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});})(map__15655,map__15655__$1,opts,output_dir))
;
var process_frame = ((function (map__15655,map__15655__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__15664 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15664,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15664,(1),null);
var vec__15667 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15667,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15667,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15667,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__15670 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__15670,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__15670;
}
})():file_part),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,parse_source_loc_info(line_part),cljs.core.cst$kw$column,parse_source_loc_info(col_part)], null);
}
}
});})(map__15655,map__15655__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__8247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__15671_SHARP_){
return (p1__15671_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__15672_SHARP_,p2__15673_SHARP_){
return (p1__15672_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15672_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__15673_SHARP_) : p1__15672_SHARP_.call(null,p2__15673_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5288__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5288__auto__)){
var columns = temp__5288__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__15674,sms,opts){
var map__15675 = p__15674;
var map__15675__$1 = ((((!((map__15675 == null)))?((((map__15675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15675):map__15675);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15675__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15675__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15675__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15675__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__15677 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__15683 = arguments.length;
switch (G__15683) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__15680_SHARP_){
return cljs.stacktrace.mapped_frame(p1__15680_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__15681_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15681_SHARP_,cljs.core.cst$kw$call);
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__15686 = arguments.length;
switch (G__15686) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15687_15698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15688_15699 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15687_15698,_STAR_print_fn_STAR_15688_15699,sb__9372__auto__){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_15687_15698,_STAR_print_fn_STAR_15688_15699,sb__9372__auto__))
;

try{var seq__15689_15700 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__15690_15701 = null;
var count__15691_15702 = (0);
var i__15692_15703 = (0);
while(true){
if((i__15692_15703 < count__15691_15702)){
var map__15693_15704 = chunk__15690_15701.cljs$core$IIndexed$_nth$arity$2(null,i__15692_15703);
var map__15693_15705__$1 = ((((!((map__15693_15704 == null)))?((((map__15693_15704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15693_15704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15693_15704):map__15693_15704);
var function_15706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15693_15705__$1,cljs.core.cst$kw$function);
var file_15707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15693_15705__$1,cljs.core.cst$kw$file);
var line_15708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15693_15705__$1,cljs.core.cst$kw$line);
var column_15709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15693_15705__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_15706)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_15706)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15707),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_15708)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15708)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_15709)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_15709)].join(''):null)),")"].join('')], 0));

var G__15710 = seq__15689_15700;
var G__15711 = chunk__15690_15701;
var G__15712 = count__15691_15702;
var G__15713 = (i__15692_15703 + (1));
seq__15689_15700 = G__15710;
chunk__15690_15701 = G__15711;
count__15691_15702 = G__15712;
i__15692_15703 = G__15713;
continue;
} else {
var temp__5290__auto___15714 = cljs.core.seq(seq__15689_15700);
if(temp__5290__auto___15714){
var seq__15689_15715__$1 = temp__5290__auto___15714;
if(cljs.core.chunked_seq_QMARK_(seq__15689_15715__$1)){
var c__9178__auto___15716 = cljs.core.chunk_first(seq__15689_15715__$1);
var G__15717 = cljs.core.chunk_rest(seq__15689_15715__$1);
var G__15718 = c__9178__auto___15716;
var G__15719 = cljs.core.count(c__9178__auto___15716);
var G__15720 = (0);
seq__15689_15700 = G__15717;
chunk__15690_15701 = G__15718;
count__15691_15702 = G__15719;
i__15692_15703 = G__15720;
continue;
} else {
var map__15695_15721 = cljs.core.first(seq__15689_15715__$1);
var map__15695_15722__$1 = ((((!((map__15695_15721 == null)))?((((map__15695_15721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15695_15721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15695_15721):map__15695_15721);
var function_15723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15695_15722__$1,cljs.core.cst$kw$function);
var file_15724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15695_15722__$1,cljs.core.cst$kw$file);
var line_15725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15695_15722__$1,cljs.core.cst$kw$line);
var column_15726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15695_15722__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_15723)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_15723)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15724),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_15725)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15725)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_15726)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_15726)].join(''):null)),")"].join('')], 0));

var G__15727 = cljs.core.next(seq__15689_15715__$1);
var G__15728 = null;
var G__15729 = (0);
var G__15730 = (0);
seq__15689_15700 = G__15727;
chunk__15690_15701 = G__15728;
count__15691_15702 = G__15729;
i__15692_15703 = G__15730;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15688_15699;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15687_15698;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9372__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

