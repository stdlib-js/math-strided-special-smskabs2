"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=n(function(C,q){
var x=require('@stdlib/strided-base-smskmap/dist'),l=require('@stdlib/math-base-special-abs2f/dist');function R(e,r,a,s,i,t,u){return x(e,r,a,s,i,t,u,l)}q.exports=R
});var c=n(function(D,o){
var _=require('@stdlib/strided-base-smskmap/dist').ndarray,E=require('@stdlib/math-base-special-abs2f/dist');function O(e,r,a,s,i,t,u,k,y,j){return _(e,r,a,s,i,t,u,k,y,j,E)}o.exports=O
});var b=n(function(F,f){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),h=c();g(p,"ndarray",h);f.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=b(),v,d=z(w(__dirname,"./native.js"));d instanceof Error?v=A:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
