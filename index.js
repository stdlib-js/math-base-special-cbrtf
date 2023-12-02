// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Math.fround?Math.fround:null,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";r=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,c,f;if(null==r)return n.call(r);t=r[o],f=o,e=null!=(c=r)&&i.call(c,f);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=t:delete r[o],a}:function(r){return n.call(r)};var c,f=r,u="function"==typeof Float32Array,l=Number.POSITIVE_INFINITY,p="function"==typeof Float32Array?Float32Array:null,s="function"==typeof Float32Array?Float32Array:void 0;c=function(){var r,e,t;if("function"!=typeof p)return!1;try{e=new p([1,3.14,-3.14,5e40]),t=e,r=(u&&t instanceof Float32Array||"[object Float32Array]"===f(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===l}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var y,d=new c(1),g="function"==typeof e?e:function(r){return d[0]=r,d[0]},h=2147483647,w="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,v="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,e,t;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?v:function(){throw new Error("not implemented")};var m,A=y,_="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E([1,3.14,-3.14,NaN]),t=e,r=(_&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?F:function(){throw new Error("not implemented")};var U,I=m,S="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,j="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,e,t;if("function"!=typeof x)return!1;try{e=new x(e=[1,3.14,-3.14,256,257]),t=e,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?j:function(){throw new Error("not implemented")};var k,T=U,O="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,t;if("function"!=typeof V)return!1;try{e=new V(e=[1,3.14,-3.14,65536,65537]),t=e,r=(O&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var $,G={uint16:k,uint8:T};($=new G.uint16(1))[0]=4660;var H=52===new G.uint8($.buffer)[0],W=!0===H?1:0,C=new I(1),L=new A(C.buffer);function P(r){return C[0]=r,L[W]}var R,Z,M=!0===H?1:0,X=new I(1),Y=new A(X.buffer),z=Number.NEGATIVE_INFINITY;!0===H?(R=1,Z=0):(R=0,Z=1);var q={HIGH:R,LOW:Z},B=new I(1),D=new A(B.buffer),J=q.HIGH,K=q.LOW;function Q(r,e){return D[J]=r,D[K]=e,B[0]}var rr="function"==typeof Object.defineProperty?Object.defineProperty:null,er=Object.defineProperty;function tr(r){return"number"==typeof r}function nr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ir(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+nr(i):nr(i)+r,n&&(r="-"+r)),r}var ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase;function cr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!tr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ir(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ir(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===or.call(r.specifier)?or.call(t):ar.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(r){return"string"==typeof r}var ur=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,sr=String.prototype.replace,yr=/e\+(\d)$/,dr=/e-(\d)$/,gr=/^(\d+)$/,hr=/^(\d+)e/,wr=/\.0$/,br=/\.0*e/,vr=/(\..*[^0])0*e/;function mr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!tr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ur(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=sr.call(t,vr,"$1e"),t=sr.call(t,br,"e"),t=sr.call(t,wr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=sr.call(t,yr,"e+0$1"),t=sr.call(t,dr,"e-0$1"),r.alternate&&(t=sr.call(t,gr,"$1."),t=sr.call(t,hr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===pr.call(r.specifier)?pr.call(t):lr.call(t)}function Ar(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _r(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ar(n):Ar(n)+r}var Er=String.fromCharCode,Fr=isNaN,Ur=Array.isArray;function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sr(r){var e,t,n,i,a,o,c,f,u;if(!Ur(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(fr(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Ir(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Fr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Fr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=cr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Fr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Fr(a)?String(n.arg):Er(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=mr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ir(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_r(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var xr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function kr(r){var e,t,n,i;for(t=[],i=0,n=xr.exec(r);n;)(e=r.slice(i,xr.lastIndex-n[0].length)).length&&t.push(e),t.push(jr(n)),i=xr.lastIndex,n=xr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Tr(r){return"string"==typeof r}function Or(r){var e,t,n;if(!Tr(r))throw new TypeError(Or("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=kr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Sr.apply(null,t)}var Vr,Nr=Object.prototype,$r=Nr.toString,Gr=Nr.__defineGetter__,Hr=Nr.__defineSetter__,Wr=Nr.__lookupGetter__,Cr=Nr.__lookupSetter__;Vr=function(){try{return rr({},"x",{}),!0}catch(r){return!1}}()?er:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$r.call(r))throw new TypeError(Or("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$r.call(t))throw new TypeError(Or("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Wr.call(r,e)||Cr.call(r,e)?(n=r.__proto__,r.__proto__=Nr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gr&&Gr.call(r,e,t.get),o&&Hr&&Hr.call(r,e,t.set),r};var Lr,Pr,Rr=Vr;!0===H?(Lr=1,Pr=0):(Lr=0,Pr=1);var Zr={HIGH:Lr,LOW:Pr},Mr=new I(1),Xr=new A(Mr.buffer),Yr=Zr.HIGH,zr=Zr.LOW;function qr(r,e,t,n){return Mr[0]=r,e[n]=Xr[Yr],e[n+t]=Xr[zr],e}function Br(r){return qr(r,[0,0],1,0)}Rr(Br,"assign",{configurable:!1,enumerable:!1,writable:!1,value:qr});var Dr=2147483648,Jr=P(22250738585072014e-324),Kr=[0,0];function Qr(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===l||r===z}(r)?r:(e=(2147483648&(t=P(r)>>>0))>>>0,i=(t&=h)<Jr?Q(e|696219795+(((P(i=0x40000000000000*r)&h)>>>0)/3>>>0)>>>0,0):function(r,e){return X[0]=r,Y[M]=e>>>0,X[0]}(i=0,e|715094163+(t/3>>>0)>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),Br.assign(i,Kr,1,0),Kr[1]&Dr?(Kr[0]+=1,Kr[1]&=~Dr):Kr[1]|=Dr,i=Q(4294967295&Kr[0],3221225472&Kr[1]),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}return function(r){return g(Qr(g(r)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cbrtf=e();
//# sourceMappingURL=index.js.map
