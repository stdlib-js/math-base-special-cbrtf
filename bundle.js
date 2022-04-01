// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).cbrtf=r()}(this,(function(){"use strict";var n="function"==typeof Math.fround?Math.fround:null;var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var f=function(n){return e.call(n)},u=Object.prototype.hasOwnProperty;var i=function(n,r){return null!=n&&u.call(n,r)},a="function"==typeof Symbol?Symbol.toStringTag:"",c=i,y=a,l=o;var v=f,p=function(n){var r,t,o;if(null==n)return l.call(n);t=n[y],r=c(n,y);try{n[y]=void 0}catch(r){return l.call(n)}return o=l.call(n),r?n[y]=t:delete n[y],o},A=t()?p:v,w=A,b="function"==typeof Float32Array;var d=function(n){return b&&n instanceof Float32Array||"[object Float32Array]"===w(n)},m=Number.POSITIVE_INFINITY,U="function"==typeof Float32Array?Float32Array:null,h=d,s=m,F=U;var I=function(){var n,r;if("function"!=typeof F)return!1;try{r=new F([1,3.14,-3.14,5e40]),n=h(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===s}catch(r){n=!1}return n};var N="function"==typeof Float32Array?Float32Array:void 0,S=function(){throw new Error("not implemented")},g=new(I()?N:S)(1);var j=n;"function"!=typeof j&&(j=function(n){return g[0]=n,g[0]});var E=j,H=A,O="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null,G=function(n){return O&&n instanceof Uint32Array||"[object Uint32Array]"===H(n)},L=T;var W=function(){var n,r;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,4294967296,4294967297]),n=G(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var x="function"==typeof Uint32Array?Uint32Array:void 0,M=function(){throw new Error("not implemented")},P=W()?x:M,V=A,Y="function"==typeof Float64Array;var _="function"==typeof Float64Array?Float64Array:null,k=function(n){return Y&&n instanceof Float64Array||"[object Float64Array]"===V(n)},q=_;var z=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q([1,3.14,-3.14,NaN]),n=k(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var B="function"==typeof Float64Array?Float64Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=A,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(n){return K&&n instanceof Uint8Array||"[object Uint8Array]"===J(n)},X=Q;var Z=function(){var n,r;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,256,257]),n=R(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var $="function"==typeof Uint8Array?Uint8Array:void 0,nn=function(){throw new Error("not implemented")},rn=Z()?$:nn,tn=A,on="function"==typeof Uint16Array;var en="function"==typeof Uint16Array?Uint16Array:null,fn=function(n){return on&&n instanceof Uint16Array||"[object Uint16Array]"===tn(n)},un=en;var an=function(){var n,r;if("function"!=typeof un)return!1;try{r=new un(r=[1,3.14,-3.14,65536,65537]),n=fn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var cn,yn="function"==typeof Uint16Array?Uint16Array:void 0,ln=function(){throw new Error("not implemented")},vn={uint16:an()?yn:ln,uint8:rn};(cn=new vn.uint16(1))[0]=4660;var pn=52===new vn.uint8(cn.buffer)[0],An=P,wn=!0===pn?1:0,bn=new D(1),dn=new An(bn.buffer);var mn=function(n){return bn[0]=n,dn[wn]},Un=P,hn=!0===pn?1:0,sn=new D(1),Fn=new Un(sn.buffer);var In=function(n,r){return sn[0]=n,Fn[hn]=r>>>0,sn[0]},Nn=In,Sn=Number.NEGATIVE_INFINITY,gn=m,jn=Sn;var En,Hn,On=function(n){return n===gn||n===jn};!0===pn?(En=1,Hn=0):(En=0,Hn=1);var Tn=P,Gn={HIGH:En,LOW:Hn},Ln=new D(1),Wn=new Tn(Ln.buffer),xn=Gn.HIGH,Mn=Gn.LOW;var Pn,Vn,Yn=function(n,r){return Wn[xn]=n,Wn[Mn]=r,Ln[0]},_n=Yn;!0===pn?(Pn=1,Vn=0):(Pn=0,Vn=1);var kn=P,qn={HIGH:Pn,LOW:Vn},zn=new D(1),Bn=new kn(zn.buffer),Cn=qn.HIGH,Dn=qn.LOW;var Jn=function(n,r){return zn[0]=r,n[0]=Bn[Cn],n[1]=Bn[Dn],n};var Kn=function(n,r){return 1===arguments.length?Jn([0,0],n):Jn(n,r)};var Qn=mn,Rn=Nn,Xn=On,Zn=_n,$n=Kn,nr=function(n){return n!=n},rr=function(n){return 0===n?1.87595182427177:1.87595182427177+n*(n*(1.6214297201053545+n*(.14599619288661245*n-.758397934778766))-1.8849797954337717)},tr=2147483647,or=2147483648,er=Qn(22250738585072014e-324),fr=[0,0];var ur=E,ir=function(n){var r,t,o,e,f;return 0===n||nr(n)||Xn(n)?n:(r=(2147483648&(t=Qn(n)>>>0))>>>0,(t&=tr)<er?(o=(Qn(f=0x40000000000000*n)&tr)>>>0,f=Zn(r|(o=696219795+(o/3>>>0)>>>0),0)):f=Rn(f=0,r|(o=715094163+(t/3>>>0)>>>0)),f*=rr(e=f*f*(f/n)),$n(fr,f),fr[1]&or?(fr[0]+=1,fr[1]&=~or):fr[1]|=or,f=Zn(4294967295&fr[0],3221225472&fr[1]),f+=f*(e=((e=n/(f*f))-f)/(f+f+e)))};return function(n){return ur(ir(ur(n)))}}));
//# sourceMappingURL=bundle.js.map
