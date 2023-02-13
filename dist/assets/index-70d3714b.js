(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="148",vu=0,lo=1,Mu=2,Gl=1,yu=2,cr=3,ci=0,Ze=1,Ua=2,Rr=3,Nn=0,Oi=1,co=2,uo=3,ho=4,Su=5,Di=100,bu=101,wu=102,fo=103,po=104,Tu=200,Eu=201,Au=202,Cu=203,Vl=204,Wl=205,Lu=206,Pu=207,Du=208,Ru=209,Iu=210,Fu=0,Ou=1,Nu=2,da=3,zu=4,Uu=5,Bu=6,ku=7,Hl=0,Gu=1,Vu=2,Tn=0,Wu=1,Hu=2,Xu=3,qu=4,Yu=5,Xl=300,ki=301,Gi=302,pa=303,ma=304,ms=306,ga=1e3,nn=1001,_a=1002,Se=1003,mo=1004,Ts=1005,Xe=1006,ju=1007,gr=1008,ui=1009,Zu=1010,$u=1011,ql=1012,Ku=1013,ei=1014,ni=1015,_r=1016,Ju=1017,Qu=1018,Ni=1020,th=1021,eh=1022,rn=1023,nh=1024,ih=1025,ri=1026,Vi=1027,rh=1028,sh=1029,ah=1030,oh=1031,lh=1033,Es=33776,As=33777,Cs=33778,Ls=33779,go=35840,_o=35841,xo=35842,vo=35843,ch=36196,Mo=37492,yo=37496,So=37808,bo=37809,wo=37810,To=37811,Eo=37812,Ao=37813,Co=37814,Lo=37815,Po=37816,Do=37817,Ro=37818,Io=37819,Fo=37820,Oo=37821,No=36492,hi=3e3,Bt=3001,uh=3200,hh=3201,Yl=0,fh=1,on="srgb",xr="srgb-linear",Ps=7680,dh=519,zo=35044,Uo="300 es",xa=1035;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,Bo=180/Math.PI;function Er(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(he[o&255]+he[o>>8&255]+he[o>>16&255]+he[o>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]).toLowerCase()}function Fe(o,t,e){return Math.max(t,Math.min(e,o))}function ph(o,t){return(o%t+t)%t}function Rs(o,t,e){return(1-e)*o+e*t}function ko(o){return(o&o-1)===0&&o!==0}function va(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ir(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pe(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],x=i[6],y=i[1],v=i[4],M=i[7],S=i[2],E=i[5],C=i[8];return r[0]=a*f+s*y+l*S,r[3]=a*p+s*v+l*E,r[6]=a*x+s*M+l*C,r[1]=c*f+u*y+h*S,r[4]=c*p+u*v+h*E,r[7]=c*x+u*M+h*C,r[2]=d*f+m*y+g*S,r[5]=d*p+m*v+g*E,r[8]=d*x+m*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=u*a-s*c,d=s*l-u*r,m=c*r-a*l,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=h*f,t[1]=(i*c-u*n)*f,t[2]=(s*n-i*a)*f,t[3]=d*f,t[4]=(u*e-i*l)*f,t[5]=(i*r-s*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(a*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Is.makeScale(t,e)),this}rotate(t){return this.premultiply(Is.makeRotation(-t)),this}translate(t,e){return this.premultiply(Is.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Ne;function jl(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function vr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function si(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Fs={[on]:{[xr]:si},[xr]:{[on]:ns}},Me={legacyMode:!0,get workingColorSpace(){return xr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Fs[t]&&Fs[t][e]!==void 0){const n=Fs[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={r:0,g:0,b:0},Je={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Os(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Or(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Me.workingColorSpace){if(t=ph(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Os(a,r,t+1/3),this.g=Os(a,r,t),this.b=Os(a,r,t-1/3)}return Me.toWorkingColorSpace(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Me.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Me.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Me.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Me.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=on){const n=Zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Me.fromWorkingColorSpace(Or(this,Jt),t),Fe(Jt.r*255,0,255)<<16^Fe(Jt.g*255,0,255)<<8^Fe(Jt.b*255,0,255)<<0}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(Or(this,Jt),e);const n=Jt.r,i=Jt.g,r=Jt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(Or(this,Jt),e),t.r=Jt.r,t.g=Jt.g,t.b=Jt.b,t}getStyle(t=on){return Me.fromWorkingColorSpace(Or(this,Jt),t),t!==on?`color(${t} ${Jt.r} ${Jt.g} ${Jt.b})`:`rgb(${Jt.r*255|0},${Jt.g*255|0},${Jt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Je),Je.h+=t,Je.s+=e,Je.l+=n,this.setHSL(Je.h,Je.s,Je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Je),t.getHSL(Fr);const n=Rs(Je.h,Fr.h,e),i=Rs(Je.s,Fr.s,e),r=Rs(Je.l,Fr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ut.NAMES=Zl;let gi;class $l{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=vr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Kl{constructor(t=null){this.isSource=!0,this.uuid=Er(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Ns(i[a].image)):r.push(Ns(i[a]))}else r=Ns(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ns(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$l.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mh=0;class we extends Ki{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=nn,i=nn,r=Xe,a=gr,s=rn,l=ui,c=we.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Er(),this.name="",this.source=new Kl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Xl;we.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],f=l[2],p=l[6],x=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,S=(x+1)/2,E=(u+d)/4,C=(h+f)/4,_=(g+p)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=C/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=_/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-f)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends Ki{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Kl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jl extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gh extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],f=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(s===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(h!==f||l!==d||c!==m||u!==g){let p=1-s;const x=l*d+c*m+u*g+h*f,y=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){const S=Math.sqrt(v),E=Math.atan2(S,x*y);p=Math.sin(p*E)/S,s=Math.sin(s*E)/S}const M=s*y;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,h=h*p+f*M,p===1-s){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-s*m,t[e+2]=c*g+u*m+s*d-l*h,t[e+3]=u*g-s*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+s+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Go.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,h=l*i+r*n-a*e,d=-r*e-a*n-s*i;return this.x=c*l+d*-r+u*-s-h*-a,this.y=u*l+d*-a+h*-r-c*-s,this.z=h*l+d*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new F,Go=new Ar;class Cr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],d=t[l+2];u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>s&&(s=d)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),d=t.getZ(l);u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>s&&(s=d)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)qn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(qn)}else n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox),Us.applyMatrix4(t.matrixWorld),this.union(Us);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Nr.subVectors(this.max,er),_i.subVectors(t.a,er),xi.subVectors(t.b,er),vi.subVectors(t.c,er),Cn.subVectors(xi,_i),Ln.subVectors(vi,xi),Yn.subVectors(_i,vi);let e=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Yn.y,Yn.x,0];return!Bs(e,_i,xi,vi,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,_i,xi,vi,Nr))?!1:(zr.crossVectors(Cn,Ln),e=[zr.x,zr.y,zr.z],Bs(e,_i,xi,vi,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return qn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,Us=new Cr,_i=new F,xi=new F,vi=new F,Cn=new F,Ln=new F,Yn=new F,er=new F,Nr=new F,zr=new F,jn=new F;function Bs(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){jn.fromArray(o,r);const s=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const _h=new Cr,nr=new F,ks=new F;class gs{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_h.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(ks)),this.expandByPoint(nr.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new F,Gs=new F,Ur=new F,Pn=new F,Vs=new F,Br=new F,Ws=new F;class Ql{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.direction).multiplyScalar(e).add(this.origin),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gs.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Gs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),s=Pn.dot(this.direction),l=-Pn.dot(Ur),c=Pn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-s,d=a*s-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,m=h*(h+a*d+2*s)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+s)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+s)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+s)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+s)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+s)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ur).multiplyScalar(d).add(Gs),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(s=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,i,r){Vs.subVectors(e,t),Br.subVectors(n,t),Ws.crossVectors(Vs,Br);let a=this.direction.dot(Ws),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=s*this.direction.dot(Br.crossVectors(Pn,Br));if(l<0)return null;const c=s*this.direction.dot(Vs.cross(Pn));if(c<0||l+c>a)return null;const u=-s*Pn.dot(Ws);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,h,d,m,g,f,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=s,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=m,x[7]=g,x[11]=f,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*h,g=s*u,f=s*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-f*c,e[9]=-s*l,e[2]=f-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,f=c*h;e[0]=d+f*s,e[4]=g*s-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=f+d*s,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,f=c*h;e[0]=d-f*s,e[4]=-a*h,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=f-d*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,g=s*u,f=s*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+f,e[1]=l*h,e[5]=f*c+d,e[9]=m*c-g,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=s*l,f=s*c;e[0]=l*u,e[4]=f-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-f*h}else if(t.order==="XZY"){const d=a*l,m=a*c,g=s*l,f=s*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+f,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=s*u,e[10]=f*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,vh)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Dn.crossVectors(n,De),Dn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Dn.crossVectors(n,De)),Dn.normalize(),kr.crossVectors(De,Dn),i[0]=Dn.x,i[4]=kr.x,i[8]=De.x,i[1]=Dn.y,i[5]=kr.y,i[9]=De.y,i[2]=Dn.z,i[6]=kr.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],x=n[14],y=n[3],v=n[7],M=n[11],S=n[15],E=i[0],C=i[4],_=i[8],w=i[12],L=i[1],N=i[5],B=i[9],R=i[13],D=i[2],z=i[6],X=i[10],Z=i[14],k=i[3],Q=i[7],$=i[11],G=i[15];return r[0]=a*E+s*L+l*D+c*k,r[4]=a*C+s*N+l*z+c*Q,r[8]=a*_+s*B+l*X+c*$,r[12]=a*w+s*R+l*Z+c*G,r[1]=u*E+h*L+d*D+m*k,r[5]=u*C+h*N+d*z+m*Q,r[9]=u*_+h*B+d*X+m*$,r[13]=u*w+h*R+d*Z+m*G,r[2]=g*E+f*L+p*D+x*k,r[6]=g*C+f*N+p*z+x*Q,r[10]=g*_+f*B+p*X+x*$,r[14]=g*w+f*R+p*Z+x*G,r[3]=y*E+v*L+M*D+S*k,r[7]=y*C+v*N+M*z+S*Q,r[11]=y*_+v*B+M*X+S*$,r[15]=y*w+v*R+M*Z+S*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],f=t[7],p=t[11],x=t[15];return g*(+r*l*h-i*c*h-r*s*d+n*c*d+i*s*m-n*l*m)+f*(+e*l*m-e*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+p*(+e*c*h-e*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+x*(-i*s*u-e*l*h+e*s*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],f=t[13],p=t[14],x=t[15],y=h*p*c-f*d*c+f*l*m-s*p*m-h*l*x+s*d*x,v=g*d*c-u*p*c-g*l*m+a*p*m+u*l*x-a*d*x,M=u*f*c-g*h*c+g*s*m-a*f*m-u*s*x+a*h*x,S=g*h*l-u*f*l-g*s*d+a*f*d+u*s*p-a*h*p,E=e*y+n*v+i*M+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=y*C,t[1]=(f*d*r-h*p*r-f*i*m+n*p*m+h*i*x-n*d*x)*C,t[2]=(s*p*r-f*l*r+f*i*c-n*p*c-s*i*x+n*l*x)*C,t[3]=(h*l*r-s*d*r-h*i*c+n*d*c+s*i*m-n*l*m)*C,t[4]=v*C,t[5]=(u*p*r-g*d*r+g*i*m-e*p*m-u*i*x+e*d*x)*C,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*x-e*l*x)*C,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*m+e*l*m)*C,t[8]=M*C,t[9]=(g*h*r-u*f*r-g*n*m+e*f*m+u*n*x-e*h*x)*C,t[10]=(a*f*r-g*s*r+g*n*c-e*f*c-a*n*x+e*s*x)*C,t[11]=(u*s*r-a*h*r-u*n*c+e*h*c+a*n*m-e*s*m)*C,t[12]=S*C,t[13]=(u*f*i-g*h*i+g*n*d-e*f*d-u*n*p+e*h*p)*C,t[14]=(g*s*i-a*f*i-g*n*l+e*f*l+a*n*p-e*s*p)*C,t[15]=(a*h*i-u*s*i+u*n*l-e*h*l-a*n*d+e*s*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,h=s+s,d=r*c,m=r*u,g=r*h,f=a*u,p=a*h,x=s*h,y=l*c,v=l*u,M=l*h,S=n.x,E=n.y,C=n.z;return i[0]=(1-(f+x))*S,i[1]=(m+M)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+x))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+v)*C,i[9]=(p-y)*C,i[10]=(1-(d+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Mi.set(i[0],i[1],i[2]).length();const a=Mi.set(i[4],i[5],i[6]).length(),s=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const c=1/r,u=1/a,h=1/s;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=h,Qe.elements[9]*=h,Qe.elements[10]*=h,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,d=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new F,Qe=new $t,xh=new F(0,0,0),vh=new F(1,1,1),Dn=new F,kr=new F,De=new F,Vo=new $t,Wo=new Ar;class Lr{constructor(t=0,e=0,n=0,i=Lr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Lr.DefaultOrder="XYZ";Lr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mh=0;const Ho=new F,yi=new Ar,xn=new $t,Gr=new F,ir=new F,yh=new F,Sh=new Ar,Xo=new F(1,0,0),qo=new F(0,1,0),Yo=new F(0,0,1),bh={type:"added"},jo={type:"removed"};class ce extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DefaultUp.clone();const t=new F,e=new Lr,n=new Ar,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ne}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ce.DefaultMatrixWorldAutoUpdate,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Ho.copy(t).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ir,Gr,this.up):xn.lookAt(Gr,ir,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(xn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(jo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DefaultUp=new F(0,1,0);ce.DefaultMatrixAutoUpdate=!0;ce.DefaultMatrixWorldAutoUpdate=!0;const tn=new F,vn=new F,Hs=new F,Mn=new F,Si=new F,bi=new F,Zo=new F,Xs=new F,qs=new F,Ys=new F;class bn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),vn.subVectors(n,e),Hs.subVectors(t,e);const a=tn.dot(tn),s=tn.dot(vn),l=tn.dot(Hs),c=vn.dot(vn),u=vn.dot(Hs),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(c*l-s*u)*d,g=(a*u-s*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Mn),l.set(0,0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(s,Mn.z),l}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),vn.subVectors(t,e),tn.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),tn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return bn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Si.subVectors(i,n),bi.subVectors(r,n),Xs.subVectors(t,n);const l=Si.dot(Xs),c=bi.dot(Xs);if(l<=0&&c<=0)return e.copy(n);qs.subVectors(t,i);const u=Si.dot(qs),h=bi.dot(qs);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Si,a);Ys.subVectors(t,r);const m=Si.dot(Ys),g=bi.dot(Ys);if(g>=0&&m<=g)return e.copy(r);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(bi,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Zo.subVectors(r,i),s=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Zo,s);const x=1/(p+f+d);return a=f*x,s=d*x,e.copy(n).addScaledVector(Si,a).addScaledVector(bi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let wh=0;class Ji extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Oi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ec extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jt=new F,Vr=new It;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nc extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ic extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const Ve=new $t,js=new ce,wi=new F,Re=new Cr,rr=new Cr,se=new F;class an extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jl(t)?ic:nc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];rr.setFromBufferAttribute(s),this.morphTargetsRelative?(se.addVectors(Re.min,rr.min),Re.expandByPoint(se),se.addVectors(Re.max,rr.max),Re.expandByPoint(se)):(Re.expandByPoint(rr.min),Re.expandByPoint(rr.max))}Re.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(se));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)se.fromBufferAttribute(s,c),l&&(wi.fromBufferAttribute(t,c),se.add(wi)),i=Math.max(i,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new F,u[L]=new F;const h=new F,d=new F,m=new F,g=new It,f=new It,p=new It,x=new F,y=new F;function v(L,N,B){h.fromArray(i,L*3),d.fromArray(i,N*3),m.fromArray(i,B*3),g.fromArray(a,L*2),f.fromArray(a,N*2),p.fromArray(a,B*2),d.sub(h),m.sub(h),f.sub(g),p.sub(g);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(R),y.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(R),c[L].add(x),c[N].add(x),c[B].add(x),u[L].add(y),u[N].add(y),u[B].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,N=M.length;L<N;++L){const B=M[L],R=B.start,D=B.count;for(let z=R,X=R+D;z<X;z+=3)v(n[z+0],n[z+1],n[z+2])}const S=new F,E=new F,C=new F,_=new F;function w(L){C.fromArray(r,L*3),_.copy(C);const N=c[L];S.copy(N),S.sub(C.multiplyScalar(C.dot(N))).normalize(),E.crossVectors(_,N);const R=E.dot(u[L])<0?-1:1;l[L*4]=S.x,l[L*4+1]=S.y,l[L*4+2]=S.z,l[L*4+3]=R}for(let L=0,N=M.length;L<N;++L){const B=M[L],R=B.start,D=B.count;for(let z=R,X=R+D;z<X;z+=3)w(n[z+0]),w(n[z+1]),w(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new F,r=new F,a=new F,s=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,f),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*u;for(let x=0;x<u;x++)d[g++]=c[m++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new $t,Ti=new Ql,Zs=new gs,sr=new F,ar=new F,or=new F,$s=new F,Wr=new F,Hr=new It,Xr=new It,qr=new It,Ks=new F,Yr=new F;class Rn extends ce{constructor(t=new an,e=new ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const s=this.morphTargetInfluences;if(r&&s){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&($s.fromBufferAttribute(h,t),a?Wr.addScaledVector($s,u):Wr.addScaledVector($s.sub(e),u))}e.add(Wr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),t.ray.intersectsSphere(Zs)===!1)||($o.copy(r).invert(),Ti.copy(t.ray).applyMatrix4($o),n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const f=h[m],p=i[f.materialIndex],x=Math.max(f.start,d.start),y=Math.min(s.count,Math.min(f.start+f.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){const S=s.getX(v),E=s.getX(v+1),C=s.getX(v+2);a=jr(this,p,t,Ti,c,u,S,E,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const x=s.getX(f),y=s.getX(f+1),v=s.getX(f+2);a=jr(this,i,t,Ti,c,u,x,y,v),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const f=h[m],p=i[f.materialIndex],x=Math.max(f.start,d.start),y=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){const S=v,E=v+1,C=v+2;a=jr(this,p,t,Ti,c,u,S,E,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const x=f,y=f+1,v=f+2;a=jr(this,i,t,Ti,c,u,x,y,v),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}}function Eh(o,t,e,n,i,r,a,s){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side===ci,s),l===null)return null;Yr.copy(s),Yr.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:o}}function jr(o,t,e,n,i,r,a,s,l){o.getVertexPosition(a,sr),o.getVertexPosition(s,ar),o.getVertexPosition(l,or);const c=Eh(o,t,e,n,sr,ar,or,Ks);if(c){i&&(Hr.fromBufferAttribute(i,a),Xr.fromBufferAttribute(i,s),qr.fromBufferAttribute(i,l),c.uv=bn.getUV(Ks,sr,ar,or,Hr,Xr,qr,new It)),r&&(Hr.fromBufferAttribute(r,a),Xr.fromBufferAttribute(r,s),qr.fromBufferAttribute(r,l),c.uv2=bn.getUV(Ks,sr,ar,or,Hr,Xr,qr,new It));const u={a,b:s,c:l,normal:new F,materialIndex:0};bn.getNormal(sr,ar,or,u.normal),c.face=u}return c}class Pr extends an{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function g(f,p,x,y,v,M,S,E,C,_,w){const L=M/C,N=S/_,B=M/2,R=S/2,D=E/2,z=C+1,X=_+1;let Z=0,k=0;const Q=new F;for(let $=0;$<X;$++){const G=$*N-R;for(let U=0;U<z;U++){const nt=U*L-B;Q[f]=nt*y,Q[p]=G*v,Q[x]=D,c.push(Q.x,Q.y,Q.z),Q[f]=0,Q[p]=0,Q[x]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(U/C),h.push(1-$/_),Z+=1}}for(let $=0;$<_;$++)for(let G=0;G<C;G++){const U=d+G+z*$,nt=d+G+z*($+1),K=d+(G+1)+z*($+1),it=d+(G+1)+z*$;l.push(U,nt,it),l.push(nt,K,it),k+=6}s.addGroup(m,k,w),m+=k,d+=Z}}static fromJSON(t){return new Pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ye(o){const t={};for(let e=0;e<o.length;e++){const n=Wi(o[e]);for(const i in n)t[i]=n[i]}return t}function Ah(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function rc(o){return o.getRenderTarget()===null&&o.outputEncoding===Bt?on:xr}const Ch={clone:Wi,merge:ye};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sc extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends sc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,Ai=1;class Dh extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new en(Ei,Ai,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new en(Ei,Ai,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new en(Ei,Ai,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new en(Ei,Ai,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new en(Ei,Ai,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new en(Ei,Ai,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=Tn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ac extends we{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rh extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pr(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Nn});r.uniforms.tEquirect.value=e;const a=new Rn(i,r),s=e.minFilter;return e.minFilter===gr&&(e.minFilter=Xe),new Dh(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Js=new F,Ih=new F,Fh=new Ne;class Kn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Js.subVectors(n,e).cross(Ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fh.getNormalMatrix(t),i=this.coplanarPoint(Js).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new gs,Zr=new F;class Ba{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],x=n[13],y=n[14],v=n[15];return e[0].setComponents(s-i,h-l,f-d,v-p).normalize(),e[1].setComponents(s+i,h+l,f+d,v+p).normalize(),e[2].setComponents(s+r,h+c,f+m,v+x).normalize(),e[3].setComponents(s-r,h-c,f-m,v-x).normalize(),e[4].setComponents(s-a,h-u,f-g,v-y).normalize(),e[5].setComponents(s+a,h+u,f+g,v+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function Oh(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,d):(e?o.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class ka extends an{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=t/s,d=e/l,m=[],g=[],f=[],p=[];for(let x=0;x<u;x++){const y=x*d-a;for(let v=0;v<c;v++){const M=v*h-r;g.push(M,-y,0),f.push(0,0,1),p.push(v/s),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<s;y++){const v=y+c*x,M=y+c*(x+1),S=y+1+c*(x+1),E=y+1+c*x;m.push(v,M,E),m.push(M,S,E)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2))}static fromJSON(t){return new ka(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh="vec3 transformed = vec3( position );",Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ef=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,If=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Kf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ed=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ad=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Cd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ld=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Pd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Dd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Id=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yt={alphamap_fragment:Nh,alphamap_pars_fragment:zh,alphatest_fragment:Uh,alphatest_pars_fragment:Bh,aomap_fragment:kh,aomap_pars_fragment:Gh,begin_vertex:Vh,beginnormal_vertex:Wh,bsdfs:Hh,iridescence_fragment:Xh,bumpmap_pars_fragment:qh,clipping_planes_fragment:Yh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:$h,color_fragment:Kh,color_pars_fragment:Jh,color_pars_vertex:Qh,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:rf,displacementmap_pars_vertex:sf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,encodings_fragment:cf,encodings_pars_fragment:uf,envmap_fragment:hf,envmap_common_pars_fragment:ff,envmap_pars_fragment:df,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Ef,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:_f,fog_fragment:xf,fog_pars_fragment:vf,gradientmap_pars_fragment:Mf,lightmap_fragment:yf,lightmap_pars_fragment:Sf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:wf,lights_pars_begin:Tf,lights_toon_fragment:Af,lights_toon_pars_fragment:Cf,lights_phong_fragment:Lf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Df,lights_physical_pars_fragment:Rf,lights_fragment_begin:If,lights_fragment_maps:Ff,lights_fragment_end:Of,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Gf,map_particle_fragment:Vf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:jf,morphtarget_vertex:Zf,normal_fragment_begin:$f,normal_fragment_maps:Kf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:rd,iridescence_pars_fragment:sd,output_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:ud,dithering_pars_fragment:hd,roughnessmap_fragment:fd,roughnessmap_pars_fragment:dd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:xd,skinning_pars_vertex:vd,skinning_vertex:Md,skinnormal_vertex:yd,specularmap_fragment:Sd,specularmap_pars_fragment:bd,tonemapping_fragment:wd,tonemapping_pars_fragment:Td,transmission_fragment:Ed,transmission_pars_fragment:Ad,uv_pars_fragment:Cd,uv_pars_vertex:Ld,uv_vertex:Pd,uv2_pars_fragment:Dd,uv2_pars_vertex:Rd,uv2_vertex:Id,worldpos_vertex:Fd,background_vert:Od,background_frag:Nd,backgroundCube_vert:zd,backgroundCube_frag:Ud,cube_vert:Bd,cube_frag:kd,depth_vert:Gd,depth_frag:Vd,distanceRGBA_vert:Wd,distanceRGBA_frag:Hd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:jd,meshbasic_vert:Zd,meshbasic_frag:$d,meshlambert_vert:Kd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:rp,meshphysical_vert:sp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:up,shadow_vert:hp,shadow_frag:fp,sprite_vert:dp,sprite_frag:pp},rt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ne},uv2Transform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}}},ln={basic:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:ye([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:ye([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:ye([rt.points,rt.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:ye([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:ye([rt.common,rt.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:ye([rt.sprite,rt.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:ye([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:ye([rt.lights,rt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ln.physical={uniforms:ye([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new It(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const $r={r:0,b:0,g:0};function mp(o,t,e,n,i,r,a){const s=new Ut(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(p,x){let y=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v));const M=o.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?f(s,l):v&&v.isColor&&(f(v,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ms)?(u===void 0&&(u=new Rn(new Pr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Wi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=v.encoding!==Bt,(h!==v||d!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Rn(new ka(2,2),new di({name:"BackgroundMaterial",uniforms:Wi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=v.encoding!==Bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,x){p.getRGB($r,rc(o)),n.buffers.color.setClear($r.r,$r.g,$r.b,x,a)}return{getClearColor:function(){return s},setClearColor:function(p,x=1){s.set(p),l=x,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(s,l)},render:g}}function gp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(D,z,X,Z,k){let Q=!1;if(a){const $=f(Z,X,z);c!==$&&(c=$,m(c.object)),Q=x(D,Z,X,k),Q&&y(D,Z,X,k)}else{const $=z.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==$)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=$,Q=!0)}k!==null&&e.update(k,34963),(Q||u)&&(u=!1,_(D,z,X,Z),k!==null&&o.bindBuffer(34963,e.get(k).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function f(D,z,X){const Z=X.wireframe===!0;let k=s[D.id];k===void 0&&(k={},s[D.id]=k);let Q=k[z.id];Q===void 0&&(Q={},k[z.id]=Q);let $=Q[Z];return $===void 0&&($=p(d()),Q[Z]=$),$}function p(D){const z=[],X=[],Z=[];for(let k=0;k<i;k++)z[k]=0,X[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:Z,object:D,attributes:{},index:null}}function x(D,z,X,Z){const k=c.attributes,Q=z.attributes;let $=0;const G=X.getAttributes();for(const U in G)if(G[U].location>=0){const K=k[U];let it=Q[U];if(it===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),K===void 0||K.attribute!==it||it&&K.data!==it.data)return!0;$++}return c.attributesNum!==$||c.index!==Z}function y(D,z,X,Z){const k={},Q=z.attributes;let $=0;const G=X.getAttributes();for(const U in G)if(G[U].location>=0){let K=Q[U];K===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const it={};it.attribute=K,K&&K.data&&(it.data=K.data),k[U]=it,$++}c.attributes=k,c.attributesNum=$,c.index=Z}function v(){const D=c.newAttributes;for(let z=0,X=D.length;z<X;z++)D[z]=0}function M(D){S(D,0)}function S(D,z){const X=c.newAttributes,Z=c.enabledAttributes,k=c.attributeDivisors;X[D]=1,Z[D]===0&&(o.enableVertexAttribArray(D),Z[D]=1),k[D]!==z&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),k[D]=z)}function E(){const D=c.newAttributes,z=c.enabledAttributes;for(let X=0,Z=z.length;X<Z;X++)z[X]!==D[X]&&(o.disableVertexAttribArray(X),z[X]=0)}function C(D,z,X,Z,k,Q){n.isWebGL2===!0&&(X===5124||X===5125)?o.vertexAttribIPointer(D,z,X,k,Q):o.vertexAttribPointer(D,z,X,Z,k,Q)}function _(D,z,X,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const k=Z.attributes,Q=X.getAttributes(),$=z.defaultAttributeValues;for(const G in Q){const U=Q[G];if(U.location>=0){let nt=k[G];if(nt===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),nt!==void 0){const K=nt.normalized,it=nt.itemSize,Y=e.get(nt);if(Y===void 0)continue;const Lt=Y.buffer,ct=Y.type,xt=Y.bytesPerElement;if(nt.isInterleavedBufferAttribute){const lt=nt.data,Ft=lt.stride,St=nt.offset;if(lt.isInstancedInterleavedBuffer){for(let _t=0;_t<U.locationSize;_t++)S(U.location+_t,lt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let _t=0;_t<U.locationSize;_t++)M(U.location+_t);o.bindBuffer(34962,Lt);for(let _t=0;_t<U.locationSize;_t++)C(U.location+_t,it/U.locationSize,ct,K,Ft*xt,(St+it/U.locationSize*_t)*xt)}else{if(nt.isInstancedBufferAttribute){for(let lt=0;lt<U.locationSize;lt++)S(U.location+lt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<U.locationSize;lt++)M(U.location+lt);o.bindBuffer(34962,Lt);for(let lt=0;lt<U.locationSize;lt++)C(U.location+lt,it/U.locationSize,ct,K,it*xt,it/U.locationSize*lt*xt)}}else if($!==void 0){const K=$[G];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(U.location,K);break;case 3:o.vertexAttrib3fv(U.location,K);break;case 4:o.vertexAttrib4fv(U.location,K);break;default:o.vertexAttrib1fv(U.location,K)}}}}E()}function w(){B();for(const D in s){const z=s[D];for(const X in z){const Z=z[X];for(const k in Z)g(Z[k].object),delete Z[k];delete z[X]}delete s[D]}}function L(D){if(s[D.id]===void 0)return;const z=s[D.id];for(const X in z){const Z=z[X];for(const k in Z)g(Z[k].object),delete Z[k];delete z[X]}delete s[D.id]}function N(D){for(const z in s){const X=s[z];if(X[D.id]===void 0)continue;const Z=X[D.id];for(const k in Z)g(Z[k].object),delete Z[k];delete X[D.id]}}function B(){R(),u=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:E}}function _p(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=o,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function xp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),x=o.getParameter(36348),y=o.getParameter(36349),v=d>0,M=a||t.has("OES_texture_float"),S=v&&M,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:E}}function vp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Kn,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,m){const g=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,x=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,v=y*4;let M=x.clippingState||null;l.value=M,M=u(g,d,v,m);for(let S=0;S!==v;++S)M[S]=e[S];x.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const x=m+f*4,y=d.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<x)&&(p=new Float32Array(x));for(let v=0,M=m;v!==f;++v,M+=4)a.copy(h[v]).applyMatrix4(y,s),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Mp(o){let t=new WeakMap;function e(a,s){return s===pa?a.mapping=ki:s===ma&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===pa||s===ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rh(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class lc extends sc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ri=4,Ko=[.125,.215,.35,.446,.526,.582],ti=20,Qs=new lc,Jo=new Ut;let ta=null;const Jn=(1+Math.sqrt(5))/2,Li=1/Jn,Qo=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Jn,Li),new F(0,Jn,-Li),new F(Li,0,Jn),new F(-Li,0,Jn),new F(Jn,Li,0),new F(-Jn,Li,0)];class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta),t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:_r,format:rn,encoding:hi,depthBuffer:!1},i=el(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=Sp(r,t,e)}return i}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,i){const s=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Tn,u.autoClear=!1;const m=new ec({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Rn(new Pr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(Jo),f=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(s.up.set(0,l[x],0),s.lookAt(c[x],0,0)):y===1?(s.up.set(0,0,l[x]),s.lookAt(0,c[x],0)):(s.up.set(0,l[x],0),s.lookAt(0,0,c[x]));const v=this._cubeSize;Kr(i,y*v,x>2?v:0,v,v),u.setRenderTarget(i),f&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ki||t.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Rn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Qo[(i-1)%Qo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ti-1),f=r/g,p=isFinite(r)?1+Math.floor(u*f):ti;p>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const x=[];let y=0;for(let C=0;C<ti;++C){const _=C/f,w=Math.exp(-_*_/2);x.push(w),C===0?y+=w:C<p&&(y+=2*w)}for(let C=0;C<x.length;C++)x[C]=x[C]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=x,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-Ri?i-v+Ri:0),E=4*(this._cubeSize-M);Kr(e,S,E,3*M,2*M),l.setRenderTarget(e),l.render(h,Qs)}}function yp(o){const t=[],e=[],n=[];let i=o;const r=o-Ri+1+Ko.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-Ri?l=Ko[a-o+Ri-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,f=3,p=2,x=1,y=new Float32Array(f*g*m),v=new Float32Array(p*g*m),M=new Float32Array(x*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,_=E>2?0:-1,w=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];y.set(w,f*g*E),v.set(d,p*g*E);const L=[E,E,E,E,E,E];M.set(L,x*g*E)}const S=new an;S.setAttribute("position",new un(y,f)),S.setAttribute("uv",new un(v,p)),S.setAttribute("faceIndex",new un(M,x)),t.push(S),i>Ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function el(o,t,e){const n=new fi(o,t,e);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Sp(o,t,e){const n=new Float32Array(ti),i=new F(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function nl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function il(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===pa||l===ma,u=l===ki||l===Gi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new tl(o)),h=c?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new tl(o));const d=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(o,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function s(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const f=m[g];for(let p=0,x=f.length;p<x;p++)t.update(f[p],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let f=0;if(m!==null){const y=m.array;f=m.version;for(let v=0,M=y.length;v<M;v+=3){const S=y[v+0],E=y[v+1],C=y[v+2];d.push(S,E,E,C,C,S)}}else{const y=g.array;f=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const S=v+0,E=v+1,C=v+2;d.push(S,E,E,C,C,S)}}const p=new(jl(d)?ic:nc)(d,1);p.version=f;const x=r.get(h);x&&t.remove(x),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Ep(o,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,m){o.drawElements(r,m,s,d*l),e.update(m,r,1)}function h(d,m,g){if(g===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,d*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Ap(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cp(o,t){return o[0]-t[0]}function Lp(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Pp(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ae,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==f){let z=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",z)};p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],_=u.morphAttributes.color||[];let w=0;v===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let L=u.attributes.position.count*w,N=1;L>t.maxTextureSize&&(N=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const B=new Float32Array(L*N*4*f),R=new Jl(B,L,N,f);R.type=ni,R.needsUpdate=!0;const D=w*4;for(let X=0;X<f;X++){const Z=E[X],k=C[X],Q=_[X],$=L*N*4*X;for(let G=0;G<Z.count;G++){const U=G*D;v===!0&&(a.fromBufferAttribute(Z,G),B[$+U+0]=a.x,B[$+U+1]=a.y,B[$+U+2]=a.z,B[$+U+3]=0),M===!0&&(a.fromBufferAttribute(k,G),B[$+U+4]=a.x,B[$+U+5]=a.y,B[$+U+6]=a.z,B[$+U+7]=0),S===!0&&(a.fromBufferAttribute(Q,G),B[$+U+8]=a.x,B[$+U+9]=a.y,B[$+U+10]=a.z,B[$+U+11]=Q.itemSize===4?a.w:1)}}p={count:f,texture:R,size:new It(L,N)},r.set(u,p),u.addEventListener("dispose",z)}let x=0;for(let v=0;v<m.length;v++)x+=m[v];const y=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let f=n[u.id];if(f===void 0||f.length!==g){f=[];for(let M=0;M<g;M++)f[M]=[M,0];n[u.id]=f}for(let M=0;M<g;M++){const S=f[M];S[0]=M,S[1]=m[M]}f.sort(Lp);for(let M=0;M<8;M++)M<g&&f[M][1]?(s[M][0]=f[M][0],s[M][1]=f[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Cp);const p=u.morphAttributes.position,x=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const S=s[M],E=S[0],C=S[1];E!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+M)!==p[E]&&u.setAttribute("morphTarget"+M,p[E]),x&&u.getAttribute("morphNormal"+M)!==x[E]&&u.setAttribute("morphNormal"+M,x[E]),i[M]=C,y+=C):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),x&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Dp(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const cc=new we,uc=new Jl,hc=new gh,fc=new ac,rl=[],sl=[],al=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function Qi(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=rl[i];if(r===void 0&&(r=new Float32Array(i),rl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function te(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ee(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function _s(o,t){let e=sl[t];e===void 0&&(e=new Int32Array(t),sl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Rp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Ip(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;o.uniform2fv(this.addr,t),ee(e,t)}}function Fp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(te(e,t))return;o.uniform3fv(this.addr,t),ee(e,t)}}function Op(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;o.uniform4fv(this.addr,t),ee(e,t)}}function Np(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;ll.set(n),o.uniformMatrix2fv(this.addr,!1,ll),ee(e,n)}}function zp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;ol.set(n),o.uniformMatrix3fv(this.addr,!1,ol),ee(e,n)}}function Up(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;al.set(n),o.uniformMatrix4fv(this.addr,!1,al),ee(e,n)}}function Bp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function kp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;o.uniform2iv(this.addr,t),ee(e,t)}}function Gp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;o.uniform3iv(this.addr,t),ee(e,t)}}function Vp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;o.uniform4iv(this.addr,t),ee(e,t)}}function Wp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Hp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;o.uniform2uiv(this.addr,t),ee(e,t)}}function Xp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;o.uniform3uiv(this.addr,t),ee(e,t)}}function qp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;o.uniform4uiv(this.addr,t),ee(e,t)}}function Yp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||cc,i)}function jp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hc,i)}function Zp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fc,i)}function $p(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uc,i)}function Kp(o){switch(o){case 5126:return Rp;case 35664:return Ip;case 35665:return Fp;case 35666:return Op;case 35674:return Np;case 35675:return zp;case 35676:return Up;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Hp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return $p}}function Jp(o,t){o.uniform1fv(this.addr,t)}function Qp(o,t){const e=Qi(t,this.size,2);o.uniform2fv(this.addr,e)}function tm(o,t){const e=Qi(t,this.size,3);o.uniform3fv(this.addr,e)}function em(o,t){const e=Qi(t,this.size,4);o.uniform4fv(this.addr,e)}function nm(o,t){const e=Qi(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function im(o,t){const e=Qi(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function rm(o,t){const e=Qi(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function sm(o,t){o.uniform1iv(this.addr,t)}function am(o,t){o.uniform2iv(this.addr,t)}function om(o,t){o.uniform3iv(this.addr,t)}function lm(o,t){o.uniform4iv(this.addr,t)}function cm(o,t){o.uniform1uiv(this.addr,t)}function um(o,t){o.uniform2uiv(this.addr,t)}function hm(o,t){o.uniform3uiv(this.addr,t)}function fm(o,t){o.uniform4uiv(this.addr,t)}function dm(o,t,e){const n=this.cache,i=t.length,r=_s(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||cc,r[a])}function pm(o,t,e){const n=this.cache,i=t.length,r=_s(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||hc,r[a])}function mm(o,t,e){const n=this.cache,i=t.length,r=_s(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fc,r[a])}function gm(o,t,e){const n=this.cache,i=t.length,r=_s(e,i);te(n,r)||(o.uniform1iv(this.addr,r),ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||uc,r[a])}function _m(o){switch(o){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return um;case 36295:return hm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Kp(e.type)}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function cl(o,t){o.seq.push(t),o.map[t.id]=t}function ym(o,t,e){const n=o.name,i=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){cl(e,c===void 0?new xm(s,o,t):new vm(s,o,t));break}else{let h=e.map[s];h===void 0&&(h=new Mm(s),cl(e,h)),e=h}}}class is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);ym(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ul(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Sm=0;function bm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function wm(o){switch(o){case hi:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function hl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+bm(o.getShaderSource(t),a)}else return i}function Tm(o,t){const e=wm(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Em(o,t){let e;switch(t){case Wu:e="Linear";break;case Hu:e="Reinhard";break;case Xu:e="OptimizedCineon";break;case qu:e="ACESFilmic";break;case Yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Am(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ur).join(`
`)}function Cm(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function ur(o){return o!==""}function fl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(o){return o.replace(Pm,Dm)}function Dm(o,t){const e=yt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ma(e)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(o){return o.replace(Rm,Im)}function Im(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ml(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===cr&&(t="SHADOWMAP_TYPE_VSM"),t}function Om(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ki:case Gi:t="ENVMAP_TYPE_CUBE";break;case ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function Um(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bm(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=Fm(e),c=Om(e),u=Nm(e),h=zm(e),d=Um(e),m=e.isWebGL2?"":Am(e),g=Cm(r),f=i.createProgram();let p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(ur).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(ur).join(`
`),x.length>0&&(x+=`
`)):(p=[ml(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),x=[m,ml(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?yt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Em("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",yt.encodings_pars_fragment,Tm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=Ma(a),a=fl(a,e),a=dl(a,e),s=Ma(s),s=fl(s,e),s=dl(s,e),a=pl(a),s=pl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=y+p+a,M=y+x+s,S=ul(i,35633,v),E=ul(i,35632,M);if(i.attachShader(f,S),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(E).trim();let B=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){B=!1;const D=hl(i,S,"vertex"),z=hl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+D+`
`+z)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||N==="")&&(R=!1);R&&(this.diagnostics={runnable:B,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:x}})}i.deleteShader(S),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new is(i,f)),C};let _;return this.getAttributes=function(){return _===void 0&&(_=Lm(i,f)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=E,this}let km=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vm(t),e.set(t,n)),n}}class Vm{constructor(t){this.id=km++,this.code=t,this.usedTimes=0}}function Wm(o,t,e,n,i,r,a){const s=new tc,l=new Gm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_,w,L,N,B){const R=N.fog,D=B.geometry,z=_.isMeshStandardMaterial?N.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||z),Z=X&&X.mapping===ms?X.image.height:null,k=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=Q!==void 0?Q.length:0;let G=0;D.morphAttributes.position!==void 0&&(G=1),D.morphAttributes.normal!==void 0&&(G=2),D.morphAttributes.color!==void 0&&(G=3);let U,nt,K,it;if(k){const Ft=ln[k];U=Ft.vertexShader,nt=Ft.fragmentShader}else U=_.vertexShader,nt=_.fragmentShader,l.update(_),K=l.getVertexShaderID(_),it=l.getFragmentShaderID(_);const Y=o.getRenderTarget(),Lt=_.alphaTest>0,ct=_.clearcoat>0,xt=_.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:_.type,vertexShader:U,fragmentShader:nt,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:it,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Y===null?o.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:hi,map:!!_.map,matcap:!!_.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Z,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===fh,tangentSpaceNormalMap:_.normalMapType===Yl,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Bt,clearcoat:ct,clearcoatMap:ct&&!!_.clearcoatMap,clearcoatRoughnessMap:ct&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ct&&!!_.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!_.iridescenceMap,iridescenceThicknessMap:xt&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Oi,alphaMap:!!_.alphaMap,alphaTest:Lt,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!D.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:G,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:Tn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ua,flipSided:_.side===Ze,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(w,_),y(w,_),w.push(o.outputEncoding)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputEncoding),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.combine),_.push(w.vertexUvs),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),_.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),_.push(s.mask)}function v(_){const w=g[_.type];let L;if(w){const N=ln[w];L=Ch.clone(N.uniforms)}else L=_.uniforms;return L}function M(_,w){let L;for(let N=0,B=c.length;N<B;N++){const R=c[N];if(R.cacheKey===w){L=R,++L.usedTimes;break}}return L===void 0&&(L=new Bm(o,w,_,r),c.push(L)),L}function S(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),_.destroy()}}function E(_){l.remove(_)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function Hm(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Xm(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function gl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function _l(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,m,g,f,p){let x=o[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:p},o[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=f,x.group=p),t++,x}function s(h,d,m,g,f,p){const x=a(h,d,m,g,f,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function l(h,d,m,g,f,p){const x=a(h,d,m,g,f,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function c(h,d){e.length>1&&e.sort(h||Xm),n.length>1&&n.sort(d||gl),i.length>1&&i.sort(d||gl)}function u(){for(let h=t,d=o.length;h<d;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function qm(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new _l,o.set(n,[a])):i>=r.length?(a=new _l,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Ym(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ut};break;case"SpotLight":e={position:new F,direction:new F,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new F,halfWidth:new F,halfHeight:new F};break}return o[t.id]=e,e}}}function jm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Zm=0;function $m(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Km(o,t){const e=new Ym,n=jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,a=new $t,s=new $t;function l(u,h){let d=0,m=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,x=0,y=0,v=0,M=0,S=0,E=0,C=0,_=0;u.sort($m);const w=h!==!0?Math.PI:1;for(let N=0,B=u.length;N<B;N++){const R=u[N],D=R.color,z=R.intensity,X=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=D.r*z*w,m+=D.g*z*w,g+=D.b*z*w;else if(R.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],z);else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const Q=R.shadow,$=n.get(R);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=R.shadow.matrix,M++}i.directional[f]=k,f++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(D).multiplyScalar(z*w),k.distance=X,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[x]=k;const Q=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,Q.updateMatrices(R),R.castShadow&&_++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){const $=n.get(R);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=Z,E++}x++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(D).multiplyScalar(z),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=k,y++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*w),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Q=R.shadow,$=n.get(R);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=R.shadow.matrix,S++}i.point[p]=k,p++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(z*w),k.groundColor.copy(R.groundColor).multiplyScalar(z*w),i.hemi[v]=k,v++}}y>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==y||L.hemiLength!==v||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==E||L.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+C-_,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=_,L.directionalLength=f,L.pointLength=p,L.spotLength=x,L.rectAreaLength=y,L.hemiLength=v,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=E,L.numSpotMaps=C,i.version=Zm++)}function c(u,h){let d=0,m=0,g=0,f=0,p=0;const x=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const M=u[y];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),d++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),g++}else if(M.isRectAreaLight){const S=i.rectArea[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),s.identity(),a.copy(M.matrixWorld),a.premultiply(x),s.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),f++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),p++}}}return{setup:l,setupView:c,state:i}}function xl(o,t){const e=new Km(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Jm(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new xl(o,t),e.set(r,[l])):a>=s.length?(l=new xl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Qm extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(o,t,e){let n=new Ba;const i=new It,r=new It,a=new ae,s=new Qm({depthPacking:hh}),l=new tg,c={},u=e.maxTextureSize,h={0:Ze,1:ci,2:Ua},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Rn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl,this.render=function(M,S,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const C=o.getRenderTarget(),_=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Nn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let N=0,B=M.length;N<B;N++){const R=M[N],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const z=D.getFrameExtents();if(i.multiply(z),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,D.mapSize.y=r.y)),D.map===null){const Z=this.type!==cr?{minFilter:Se,magFilter:Se}:{};D.map=new fi(i.x,i.y,Z),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const X=D.getViewportCount();for(let Z=0;Z<X;Z++){const k=D.getViewport(Z);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(a),D.updateMatrices(R,Z),n=D.getFrustum(),v(S,E,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===cr&&x(D,E),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,_,w)};function x(M,S){const E=t.update(f);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new fi(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(S,null,E,d,f,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(S,null,E,m,f,null)}function y(M,S,E,C,_,w){let L=null;const N=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)L=N;else if(L=E.isPointLight===!0?l:s,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const B=L.uuid,R=S.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let z=D[R];z===void 0&&(z=L.clone(),D[R]=z),L=z}return L.visible=S.visible,L.wireframe=S.wireframe,w===cr?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:h[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.map=S.map,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=C,L.farDistance=_),L}function v(M,S,E,C,_){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===cr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const N=t.update(M),B=M.material;if(Array.isArray(B)){const R=N.groups;for(let D=0,z=R.length;D<z;D++){const X=R[D],Z=B[X.materialIndex];if(Z&&Z.visible){const k=y(M,Z,C,E.near,E.far,_);o.renderBufferDirect(E,null,N,k,M,X)}}}else if(B.visible){const R=y(M,B,C,E.near,E.far,_);o.renderBufferDirect(E,null,N,R,M,null)}}const L=M.children;for(let N=0,B=L.length;N<B;N++)v(L[N],S,E,C,_)}}function rg(o,t,e){const n=e.isWebGL2;function i(){let P=!1;const V=new ae;let J=null;const ot=new ae(0,0,0,0);return{setMask:function(ht){J!==ht&&!P&&(o.colorMask(ht,ht,ht,ht),J=ht)},setLocked:function(ht){P=ht},setClear:function(ht,Rt,ie,ue,Vn){Vn===!0&&(ht*=ue,Rt*=ue,ie*=ue),V.set(ht,Rt,ie,ue),ot.equals(V)===!1&&(o.clearColor(ht,Rt,ie,ue),ot.copy(V))},reset:function(){P=!1,J=null,ot.set(-1,0,0,0)}}}function r(){let P=!1,V=null,J=null,ot=null;return{setTest:function(ht){ht?Lt(2929):ct(2929)},setMask:function(ht){V!==ht&&!P&&(o.depthMask(ht),V=ht)},setFunc:function(ht){if(J!==ht){switch(ht){case Fu:o.depthFunc(512);break;case Ou:o.depthFunc(519);break;case Nu:o.depthFunc(513);break;case da:o.depthFunc(515);break;case zu:o.depthFunc(514);break;case Uu:o.depthFunc(518);break;case Bu:o.depthFunc(516);break;case ku:o.depthFunc(517);break;default:o.depthFunc(515)}J=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ot!==ht&&(o.clearDepth(ht),ot=ht)},reset:function(){P=!1,V=null,J=null,ot=null}}}function a(){let P=!1,V=null,J=null,ot=null,ht=null,Rt=null,ie=null,ue=null,Vn=null;return{setTest:function(Gt){P||(Gt?Lt(2960):ct(2960))},setMask:function(Gt){V!==Gt&&!P&&(o.stencilMask(Gt),V=Gt)},setFunc:function(Gt,pn,Ge){(J!==Gt||ot!==pn||ht!==Ge)&&(o.stencilFunc(Gt,pn,Ge),J=Gt,ot=pn,ht=Ge)},setOp:function(Gt,pn,Ge){(Rt!==Gt||ie!==pn||ue!==Ge)&&(o.stencilOp(Gt,pn,Ge),Rt=Gt,ie=pn,ue=Ge)},setLocked:function(Gt){P=Gt},setClear:function(Gt){Vn!==Gt&&(o.clearStencil(Gt),Vn=Gt)},reset:function(){P=!1,V=null,J=null,ot=null,ht=null,Rt=null,ie=null,ue=null,Vn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,f=[],p=null,x=!1,y=null,v=null,M=null,S=null,E=null,C=null,_=null,w=!1,L=null,N=null,B=null,R=null,D=null;const z=o.getParameter(35661);let X=!1,Z=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=Z>=2);let Q=null,$={};const G=o.getParameter(3088),U=o.getParameter(2978),nt=new ae().fromArray(G),K=new ae().fromArray(U);function it(P,V,J){const ot=new Uint8Array(4),ht=o.createTexture();o.bindTexture(P,ht),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let Rt=0;Rt<J;Rt++)o.texImage2D(V+Rt,0,6408,1,1,0,6408,5121,ot);return ht}const Y={};Y[3553]=it(3553,3553,1),Y[34067]=it(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(2929),l.setFunc(da),xe(!1),ke(lo),Lt(2884),ge(Nn);function Lt(P){d[P]!==!0&&(o.enable(P),d[P]=!0)}function ct(P){d[P]!==!1&&(o.disable(P),d[P]=!1)}function xt(P,V){return m[P]!==V?(o.bindFramebuffer(P,V),m[P]=V,n&&(P===36009&&(m[36160]=V),P===36160&&(m[36009]=V)),!0):!1}function lt(P,V){let J=f,ot=!1;if(P)if(J=g.get(V),J===void 0&&(J=[],g.set(V,J)),P.isWebGLMultipleRenderTargets){const ht=P.texture;if(J.length!==ht.length||J[0]!==36064){for(let Rt=0,ie=ht.length;Rt<ie;Rt++)J[Rt]=36064+Rt;J.length=ht.length,ot=!0}}else J[0]!==36064&&(J[0]=36064,ot=!0);else J[0]!==1029&&(J[0]=1029,ot=!0);ot&&(e.isWebGL2?o.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ft(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const St={[Di]:32774,[bu]:32778,[wu]:32779};if(n)St[fo]=32775,St[po]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(St[fo]=P.MIN_EXT,St[po]=P.MAX_EXT)}const _t={[Tu]:0,[Eu]:1,[Au]:768,[Vl]:770,[Iu]:776,[Du]:774,[Lu]:772,[Cu]:769,[Wl]:771,[Ru]:775,[Pu]:773};function ge(P,V,J,ot,ht,Rt,ie,ue){if(P===Nn){x===!0&&(ct(3042),x=!1);return}if(x===!1&&(Lt(3042),x=!0),P!==Su){if(P!==y||ue!==w){if((v!==Di||E!==Di)&&(o.blendEquation(32774),v=Di,E=Di),ue)switch(P){case Oi:o.blendFuncSeparate(1,771,1,771);break;case co:o.blendFunc(1,1);break;case uo:o.blendFuncSeparate(0,769,0,1);break;case ho:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Oi:o.blendFuncSeparate(770,771,1,771);break;case co:o.blendFunc(770,1);break;case uo:o.blendFuncSeparate(0,769,0,1);break;case ho:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,C=null,_=null,y=P,w=ue}return}ht=ht||V,Rt=Rt||J,ie=ie||ot,(V!==v||ht!==E)&&(o.blendEquationSeparate(St[V],St[ht]),v=V,E=ht),(J!==M||ot!==S||Rt!==C||ie!==_)&&(o.blendFuncSeparate(_t[J],_t[ot],_t[Rt],_t[ie]),M=J,S=ot,C=Rt,_=ie),y=P,w=!1}function _e(P,V){P.side===Ua?ct(2884):Lt(2884);let J=P.side===Ze;V&&(J=!J),xe(J),P.blending===Oi&&P.transparent===!1?ge(Nn):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const ot=P.stencilWrite;c.setTest(ot),ot&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Lt(32926):ct(32926)}function xe(P){L!==P&&(P?o.frontFace(2304):o.frontFace(2305),L=P)}function ke(P){P!==vu?(Lt(2884),P!==N&&(P===lo?o.cullFace(1029):P===Mu?o.cullFace(1028):o.cullFace(1032))):ct(2884),N=P}function Kt(P){P!==B&&(X&&o.lineWidth(P),B=P)}function Ot(P,V,J){P?(Lt(32823),(R!==V||D!==J)&&(o.polygonOffset(V,J),R=V,D=J)):ct(32823)}function dn(P){P?Lt(3089):ct(3089)}function Ke(P){P===void 0&&(P=33984+z-1),Q!==P&&(o.activeTexture(P),Q=P)}function A(P,V,J){J===void 0&&(Q===null?J=33984+z-1:J=Q);let ot=$[J];ot===void 0&&(ot={type:void 0,texture:void 0},$[J]=ot),(ot.type!==P||ot.texture!==V)&&(Q!==J&&(o.activeTexture(J),Q=J),o.bindTexture(P,V||Y[P]),ot.type=P,ot.texture=V)}function b(){const P=$[Q];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(P){nt.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),nt.copy(P))}function ft(P){K.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),K.copy(P))}function Pt(P,V){let J=h.get(V);J===void 0&&(J=new WeakMap,h.set(V,J));let ot=J.get(P);ot===void 0&&(ot=o.getUniformBlockIndex(V,P.name),J.set(P,ot))}function kt(P,V){const ot=h.get(V).get(P);u.get(V)!==ot&&(o.uniformBlockBinding(V,ot,P.__bindingPointIndex),u.set(V,ot))}function ne(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},Q=null,$={},m={},g=new WeakMap,f=[],p=null,x=!1,y=null,v=null,M=null,S=null,E=null,C=null,_=null,w=!1,L=null,N=null,B=null,R=null,D=null,nt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Lt,disable:ct,bindFramebuffer:xt,drawBuffers:lt,useProgram:Ft,setBlending:ge,setMaterial:_e,setFlipSided:xe,setCullFace:ke,setLineWidth:Kt,setPolygonOffset:Ot,setScissorTest:dn,activeTexture:Ke,bindTexture:A,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:tt,texImage2D:gt,texImage3D:ut,updateUBOMapping:Pt,uniformBlockBinding:kt,texStorage2D:j,texStorage3D:pt,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:vt,compressedTexSubImage3D:at,scissor:mt,viewport:ft,reset:ne}}function sg(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,b){return x?new OffscreenCanvas(A,b):vr("canvas")}function v(A,b,H,tt){let et=1;if((A.width>tt||A.height>tt)&&(et=tt/Math.max(A.width,A.height)),et<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const st=b?va:Math.floor,vt=st(et*A.width),at=st(et*A.height);f===void 0&&(f=y(vt,at));const j=H?y(vt,at):f;return j.width=vt,j.height=at,j.getContext("2d").drawImage(A,0,0,vt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+at+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return ko(A.width)&&ko(A.height)}function S(A){return s?!1:A.wrapS!==nn||A.wrapT!==nn||A.minFilter!==Se&&A.minFilter!==Xe}function E(A,b){return A.generateMipmaps&&b&&A.minFilter!==Se&&A.minFilter!==Xe}function C(A){o.generateMipmap(A)}function _(A,b,H,tt,et=!1){if(s===!1)return b;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=b;return b===6403&&(H===5126&&(st=33326),H===5131&&(st=33325),H===5121&&(st=33321)),b===33319&&(H===5126&&(st=33328),H===5131&&(st=33327),H===5121&&(st=33323)),b===6408&&(H===5126&&(st=34836),H===5131&&(st=34842),H===5121&&(st=tt===Bt&&et===!1?35907:32856),H===32819&&(st=32854),H===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function w(A,b,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Se&&A.minFilter!==Xe?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function L(A){return A===Se||A===mo||A===Ts?9728:9729}function N(A){const b=A.target;b.removeEventListener("dispose",N),R(b),b.isVideoTexture&&g.delete(b)}function B(A){const b=A.target;b.removeEventListener("dispose",B),z(b)}function R(A){const b=n.get(A);if(b.__webglInit===void 0)return;const H=A.source,tt=p.get(H);if(tt){const et=tt[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(A),Object.keys(tt).length===0&&p.delete(H)}n.remove(A)}function D(A){const b=n.get(A);o.deleteTexture(b.__webglTexture);const H=A.source,tt=p.get(H);delete tt[b.__cacheKey],a.memory.textures--}function z(A){const b=A.texture,H=n.get(A),tt=n.get(b);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)o.deleteFramebuffer(H.__webglFramebuffer[et]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[et]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let et=0;et<H.__webglColorRenderbuffer.length;et++)H.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[et]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,st=b.length;et<st;et++){const vt=n.get(b[et]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(b[et])}n.remove(b),n.remove(A)}let X=0;function Z(){X=0}function k(){const A=X;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),X+=1,A}function Q(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function $(A,b){const H=n.get(A);if(A.isVideoTexture&&dn(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(H,A,b);return}}e.bindTexture(3553,H.__webglTexture,33984+b)}function G(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ct(H,A,b);return}e.bindTexture(35866,H.__webglTexture,33984+b)}function U(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ct(H,A,b);return}e.bindTexture(32879,H.__webglTexture,33984+b)}function nt(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){xt(H,A,b);return}e.bindTexture(34067,H.__webglTexture,33984+b)}const K={[ga]:10497,[nn]:33071,[_a]:33648},it={[Se]:9728,[mo]:9984,[Ts]:9986,[Xe]:9729,[ju]:9985,[gr]:9987};function Y(A,b,H){if(H?(o.texParameteri(A,10242,K[b.wrapS]),o.texParameteri(A,10243,K[b.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,K[b.wrapR]),o.texParameteri(A,10240,it[b.magFilter]),o.texParameteri(A,10241,it[b.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(b.wrapS!==nn||b.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,L(b.magFilter)),o.texParameteri(A,10241,L(b.minFilter)),b.minFilter!==Se&&b.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Se||b.minFilter!==Ts&&b.minFilter!==gr||b.type===ni&&t.has("OES_texture_float_linear")===!1||s===!1&&b.type===_r&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Lt(A,b){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N));const tt=b.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const st=Q(b);if(st!==A.__cacheKey){et[st]===void 0&&(et[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[st].usedTimes++;const vt=et[A.__cacheKey];vt!==void 0&&(et[A.__cacheKey].usedTimes--,vt.usedTimes===0&&D(b)),A.__cacheKey=st,A.__webglTexture=et[st].texture}return H}function ct(A,b,H){let tt=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=35866),b.isData3DTexture&&(tt=32879);const et=Lt(A,b),st=b.source;e.bindTexture(tt,A.__webglTexture,33984+H);const vt=n.get(st);if(st.version!==vt.__version||et===!0){e.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const at=S(b)&&M(b.image)===!1;let j=v(b.image,at,!1,u);j=Ke(b,j);const pt=M(j)||s,gt=r.convert(b.format,b.encoding);let ut=r.convert(b.type),mt=_(b.internalFormat,gt,ut,b.encoding,b.isVideoTexture);Y(tt,b,pt);let ft;const Pt=b.mipmaps,kt=s&&b.isVideoTexture!==!0,ne=vt.__version===void 0||et===!0,P=w(b,j,pt);if(b.isDepthTexture)mt=6402,s?b.type===ni?mt=36012:b.type===ei?mt=33190:b.type===Ni?mt=35056:mt=33189:b.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ri&&mt===6402&&b.type!==ql&&b.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ei,ut=r.convert(b.type)),b.format===Vi&&mt===6402&&(mt=34041,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,ut=r.convert(b.type))),ne&&(kt?e.texStorage2D(3553,1,mt,j.width,j.height):e.texImage2D(3553,0,mt,j.width,j.height,0,gt,ut,null));else if(b.isDataTexture)if(Pt.length>0&&pt){kt&&ne&&e.texStorage2D(3553,P,mt,Pt[0].width,Pt[0].height);for(let V=0,J=Pt.length;V<J;V++)ft=Pt[V],kt?e.texSubImage2D(3553,V,0,0,ft.width,ft.height,gt,ut,ft.data):e.texImage2D(3553,V,mt,ft.width,ft.height,0,gt,ut,ft.data);b.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(3553,P,mt,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,gt,ut,j.data)):e.texImage2D(3553,0,mt,j.width,j.height,0,gt,ut,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(35866,P,mt,Pt[0].width,Pt[0].height,j.depth);for(let V=0,J=Pt.length;V<J;V++)ft=Pt[V],b.format!==rn?gt!==null?kt?e.compressedTexSubImage3D(35866,V,0,0,0,ft.width,ft.height,j.depth,gt,ft.data,0,0):e.compressedTexImage3D(35866,V,mt,ft.width,ft.height,j.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(35866,V,0,0,0,ft.width,ft.height,j.depth,gt,ut,ft.data):e.texImage3D(35866,V,mt,ft.width,ft.height,j.depth,0,gt,ut,ft.data)}else{kt&&ne&&e.texStorage2D(3553,P,mt,Pt[0].width,Pt[0].height);for(let V=0,J=Pt.length;V<J;V++)ft=Pt[V],b.format!==rn?gt!==null?kt?e.compressedTexSubImage2D(3553,V,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(3553,V,mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(3553,V,0,0,ft.width,ft.height,gt,ut,ft.data):e.texImage2D(3553,V,mt,ft.width,ft.height,0,gt,ut,ft.data)}else if(b.isDataArrayTexture)kt?(ne&&e.texStorage3D(35866,P,mt,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,gt,ut,j.data)):e.texImage3D(35866,0,mt,j.width,j.height,j.depth,0,gt,ut,j.data);else if(b.isData3DTexture)kt?(ne&&e.texStorage3D(32879,P,mt,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,gt,ut,j.data)):e.texImage3D(32879,0,mt,j.width,j.height,j.depth,0,gt,ut,j.data);else if(b.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(3553,P,mt,j.width,j.height);else{let V=j.width,J=j.height;for(let ot=0;ot<P;ot++)e.texImage2D(3553,ot,mt,V,J,0,gt,ut,null),V>>=1,J>>=1}}else if(Pt.length>0&&pt){kt&&ne&&e.texStorage2D(3553,P,mt,Pt[0].width,Pt[0].height);for(let V=0,J=Pt.length;V<J;V++)ft=Pt[V],kt?e.texSubImage2D(3553,V,0,0,gt,ut,ft):e.texImage2D(3553,V,mt,gt,ut,ft);b.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(3553,P,mt,j.width,j.height),e.texSubImage2D(3553,0,0,0,gt,ut,j)):e.texImage2D(3553,0,mt,gt,ut,j);E(b,pt)&&C(tt),vt.__version=st.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xt(A,b,H){if(b.image.length!==6)return;const tt=Lt(A,b),et=b.source;e.bindTexture(34067,A.__webglTexture,33984+H);const st=n.get(et);if(et.version!==st.__version||tt===!0){e.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const vt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,j=[];for(let V=0;V<6;V++)!vt&&!at?j[V]=v(b.image[V],!1,!0,c):j[V]=at?b.image[V].image:b.image[V],j[V]=Ke(b,j[V]);const pt=j[0],gt=M(pt)||s,ut=r.convert(b.format,b.encoding),mt=r.convert(b.type),ft=_(b.internalFormat,ut,mt,b.encoding),Pt=s&&b.isVideoTexture!==!0,kt=st.__version===void 0||tt===!0;let ne=w(b,pt,gt);Y(34067,b,gt);let P;if(vt){Pt&&kt&&e.texStorage2D(34067,ne,ft,pt.width,pt.height);for(let V=0;V<6;V++){P=j[V].mipmaps;for(let J=0;J<P.length;J++){const ot=P[J];b.format!==rn?ut!==null?Pt?e.compressedTexSubImage2D(34069+V,J,0,0,ot.width,ot.height,ut,ot.data):e.compressedTexImage2D(34069+V,J,ft,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+V,J,0,0,ot.width,ot.height,ut,mt,ot.data):e.texImage2D(34069+V,J,ft,ot.width,ot.height,0,ut,mt,ot.data)}}}else{P=b.mipmaps,Pt&&kt&&(P.length>0&&ne++,e.texStorage2D(34067,ne,ft,j[0].width,j[0].height));for(let V=0;V<6;V++)if(at){Pt?e.texSubImage2D(34069+V,0,0,0,j[V].width,j[V].height,ut,mt,j[V].data):e.texImage2D(34069+V,0,ft,j[V].width,j[V].height,0,ut,mt,j[V].data);for(let J=0;J<P.length;J++){const ht=P[J].image[V].image;Pt?e.texSubImage2D(34069+V,J+1,0,0,ht.width,ht.height,ut,mt,ht.data):e.texImage2D(34069+V,J+1,ft,ht.width,ht.height,0,ut,mt,ht.data)}}else{Pt?e.texSubImage2D(34069+V,0,0,0,ut,mt,j[V]):e.texImage2D(34069+V,0,ft,ut,mt,j[V]);for(let J=0;J<P.length;J++){const ot=P[J];Pt?e.texSubImage2D(34069+V,J+1,0,0,ut,mt,ot.image[V]):e.texImage2D(34069+V,J+1,ft,ut,mt,ot.image[V])}}}E(b,gt)&&C(34067),st.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function lt(A,b,H,tt,et){const st=r.convert(H.format,H.encoding),vt=r.convert(H.type),at=_(H.internalFormat,st,vt,H.encoding);n.get(b).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,at,b.width,b.height,b.depth,0,st,vt,null):e.texImage2D(et,0,at,b.width,b.height,0,st,vt,null)),e.bindFramebuffer(36160,A),Ot(b)?d.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(H).__webglTexture,0,Kt(b)):(et===3553||et>=34069&&et<=34074)&&o.framebufferTexture2D(36160,tt,et,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(A,b,H){if(o.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let tt=33189;if(H||Ot(b)){const et=b.depthTexture;et&&et.isDepthTexture&&(et.type===ni?tt=36012:et.type===ei&&(tt=33190));const st=Kt(b);Ot(b)?d.renderbufferStorageMultisampleEXT(36161,st,tt,b.width,b.height):o.renderbufferStorageMultisample(36161,st,tt,b.width,b.height)}else o.renderbufferStorage(36161,tt,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const tt=Kt(b);H&&Ot(b)===!1?o.renderbufferStorageMultisample(36161,tt,35056,b.width,b.height):Ot(b)?d.renderbufferStorageMultisampleEXT(36161,tt,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const tt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0;et<tt.length;et++){const st=tt[et],vt=r.convert(st.format,st.encoding),at=r.convert(st.type),j=_(st.internalFormat,vt,at,st.encoding),pt=Kt(b);H&&Ot(b)===!1?o.renderbufferStorageMultisample(36161,pt,j,b.width,b.height):Ot(b)?d.renderbufferStorageMultisampleEXT(36161,pt,j,b.width,b.height):o.renderbufferStorage(36161,j,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function St(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const tt=n.get(b.depthTexture).__webglTexture,et=Kt(b);if(b.depthTexture.format===ri)Ot(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(b.depthTexture.format===Vi)Ot(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function _t(A){const b=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,A)}else if(H){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]=o.createRenderbuffer(),Ft(b.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ft(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function ge(A,b,H){const tt=n.get(A);b!==void 0&&lt(tt.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&_t(A)}function _e(A){const b=A.texture,H=n.get(A),tt=n.get(b);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=b.version,a.memory.textures++);const et=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,vt=M(A)||s;if(et){H.__webglFramebuffer=[];for(let at=0;at<6;at++)H.__webglFramebuffer[at]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),st)if(i.drawBuffers){const at=A.texture;for(let j=0,pt=at.length;j<pt;j++){const gt=n.get(at[j]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Ot(A)===!1){const at=st?b:[b];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let j=0;j<at.length;j++){const pt=at[j];H.__webglColorRenderbuffer[j]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[j]);const gt=r.convert(pt.format,pt.encoding),ut=r.convert(pt.type),mt=_(pt.internalFormat,gt,ut,pt.encoding,A.isXRRenderTarget===!0),ft=Kt(A);o.renderbufferStorageMultisample(36161,ft,mt,A.width,A.height),o.framebufferRenderbuffer(36160,36064+j,36161,H.__webglColorRenderbuffer[j])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),Y(34067,b,vt);for(let at=0;at<6;at++)lt(H.__webglFramebuffer[at],A,b,36064,34069+at);E(b,vt)&&C(34067),e.unbindTexture()}else if(st){const at=A.texture;for(let j=0,pt=at.length;j<pt;j++){const gt=at[j],ut=n.get(gt);e.bindTexture(3553,ut.__webglTexture),Y(3553,gt,vt),lt(H.__webglFramebuffer,A,gt,36064+j,3553),E(gt,vt)&&C(3553)}e.unbindTexture()}else{let at=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?at=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,tt.__webglTexture),Y(at,b,vt),lt(H.__webglFramebuffer,A,b,36064,at),E(b,vt)&&C(at),e.unbindTexture()}A.depthBuffer&&_t(A)}function xe(A){const b=M(A)||s,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,et=H.length;tt<et;tt++){const st=H[tt];if(E(st,b)){const vt=A.isWebGLCubeRenderTarget?34067:3553,at=n.get(st).__webglTexture;e.bindTexture(vt,at),C(vt),e.unbindTexture()}}}function ke(A){if(s&&A.samples>0&&Ot(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,tt=A.height;let et=16384;const st=[],vt=A.stencilBuffer?33306:36096,at=n.get(A),j=A.isWebGLMultipleRenderTargets===!0;if(j)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,at.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,at.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){st.push(36064+pt),A.depthBuffer&&st.push(vt);const gt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(gt===!1&&(A.depthBuffer&&(et|=256),A.stencilBuffer&&(et|=1024)),j&&o.framebufferRenderbuffer(36008,36064,36161,at.__webglColorRenderbuffer[pt]),gt===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),j){const ut=n.get(b[pt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ut,0)}o.blitFramebuffer(0,0,H,tt,0,0,H,tt,et,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,at.__webglColorRenderbuffer[pt]);const gt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,gt,0)}e.bindFramebuffer(36009,at.__webglMultisampledFramebuffer)}}function Kt(A){return Math.min(h,A.samples)}function Ot(A){const b=n.get(A);return s&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dn(A){const b=a.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function Ke(A,b){const H=A.encoding,tt=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xa||H!==hi&&(H===Bt?s===!1?t.has("EXT_sRGB")===!0&&tt===rn?(A.format=xa,A.minFilter=Xe,A.generateMipmaps=!1):b=$l.sRGBToLinear(b):(tt!==rn||et!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=nt,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot}function ag(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===ui)return 5121;if(r===Ju)return 32819;if(r===Qu)return 32820;if(r===Zu)return 5120;if(r===$u)return 5122;if(r===ql)return 5123;if(r===Ku)return 5124;if(r===ei)return 5125;if(r===ni)return 5126;if(r===_r)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===th)return 6406;if(r===rn)return 6408;if(r===nh)return 6409;if(r===ih)return 6410;if(r===ri)return 6402;if(r===Vi)return 34041;if(r===eh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===xa)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===rh)return 6403;if(r===sh)return 36244;if(r===ah)return 33319;if(r===oh)return 33320;if(r===lh)return 36249;if(r===Es||r===As||r===Cs||r===Ls)if(a===Bt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===As)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===go||r===_o||r===xo||r===vo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ch)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mo||r===yo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Mo)return a===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===yo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===So||r===bo||r===wo||r===To||r===Eo||r===Ao||r===Co||r===Lo||r===Po||r===Do||r===Ro||r===Io||r===Fo||r===Oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===So)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===To)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ao)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Co)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Po)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Do)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ro)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Io)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oo)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===No)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===No)return a===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ni?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class og extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jr extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),x=this._getHandJoint(c,f);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cg extends we{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=ei),n===void 0&&u===Vi&&(n=Ni),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1}}class ug extends Ki{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const g=e.getContextAttributes();let f=null,p=null;const x=[],y=[],v=new Set,M=new Map,S=new en;S.layers.enable(1),S.viewport=new ae;const E=new en;E.layers.enable(2),E.viewport=new ae;const C=[S,E],_=new og;_.layers.enable(1),_.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let U=x[G];return U===void 0&&(U=new na,x[G]=U),U.getTargetRaySpace()},this.getControllerGrip=function(G){let U=x[G];return U===void 0&&(U=new na,x[G]=U),U.getGripSpace()},this.getHand=function(G){let U=x[G];return U===void 0&&(U=new na,x[G]=U),U.getHandSpace()};function N(G){const U=y.indexOf(G.inputSource);if(U===-1)return;const nt=x[U];nt!==void 0&&nt.dispatchEvent({type:G.type,data:G.inputSource})}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",R);for(let G=0;G<x.length;G++){const U=y[G];U!==null&&(y[G]=null,x[G].disconnect(U))}w=null,L=null,t.setRenderTarget(f),d=null,h=null,u=null,i=null,p=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:d}),p=new fi(d.framebufferWidth,d.framebufferHeight,{format:rn,type:ui,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,nt=null,K=null;g.depth&&(K=g.stencil?35056:33190,U=g.stencil?Vi:ri,nt=g.stencil?Ni:ei);const it={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(it),i.updateRenderState({layers:[h]}),p=new fi(h.textureWidth,h.textureHeight,{format:rn,type:ui,depthTexture:new cg(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const Y=t.properties.get(p);Y.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(G){for(let U=0;U<G.removed.length;U++){const nt=G.removed[U],K=y.indexOf(nt);K>=0&&(y[K]=null,x[K].disconnect(nt))}for(let U=0;U<G.added.length;U++){const nt=G.added[U];let K=y.indexOf(nt);if(K===-1){for(let Y=0;Y<x.length;Y++)if(Y>=y.length){y.push(nt),K=Y;break}else if(y[Y]===null){y[Y]=nt,K=Y;break}if(K===-1)break}const it=x[K];it&&it.connect(nt)}}const D=new F,z=new F;function X(G,U,nt){D.setFromMatrixPosition(U.matrixWorld),z.setFromMatrixPosition(nt.matrixWorld);const K=D.distanceTo(z),it=U.projectionMatrix.elements,Y=nt.projectionMatrix.elements,Lt=it[14]/(it[10]-1),ct=it[14]/(it[10]+1),xt=(it[9]+1)/it[5],lt=(it[9]-1)/it[5],Ft=(it[8]-1)/it[0],St=(Y[8]+1)/Y[0],_t=Lt*Ft,ge=Lt*St,_e=K/(-Ft+St),xe=_e*-Ft;U.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xe),G.translateZ(_e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ke=Lt+_e,Kt=ct+_e,Ot=_t-xe,dn=ge+(K-xe),Ke=xt*ct/Kt*ke,A=lt*ct/Kt*ke;G.projectionMatrix.makePerspective(Ot,dn,Ke,A,ke,Kt)}function Z(G,U){U===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(U.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;_.near=E.near=S.near=G.near,_.far=E.far=S.far=G.far,(w!==_.near||L!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,L=_.far);const U=G.parent,nt=_.cameras;Z(_,U);for(let it=0;it<nt.length;it++)Z(nt[it],U);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),G.matrix.copy(_.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const K=G.children;for(let it=0,Y=K.length;it<Y;it++)K[it].updateMatrixWorld(!0);nt.length===2?X(_,S,E):_.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.getPlanes=function(){return v};let k=null;function Q(G,U){if(c=U.getViewerPose(l||a),m=U,c!==null){const nt=c.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let K=!1;nt.length!==_.cameras.length&&(_.cameras.length=0,K=!0);for(let it=0;it<nt.length;it++){const Y=nt[it];let Lt=null;if(d!==null)Lt=d.getViewport(Y);else{const xt=u.getViewSubImage(h,Y);Lt=xt.viewport,it===0&&(t.setRenderTargetTextures(p,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(p))}let ct=C[it];ct===void 0&&(ct=new en,ct.layers.enable(it),ct.viewport=new ae,C[it]=ct),ct.matrix.fromArray(Y.transform.matrix),ct.projectionMatrix.fromArray(Y.projectionMatrix),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),it===0&&_.matrix.copy(ct.matrix),K===!0&&_.cameras.push(ct)}}for(let nt=0;nt<x.length;nt++){const K=y[nt],it=x[nt];K!==null&&it!==void 0&&it.update(K,U,l||a)}if(k&&k(G,U),U.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let nt=null;for(const K of v)U.detectedPlanes.has(K)||(nt===null&&(nt=[]),nt.push(K));if(nt!==null)for(const K of nt)v.delete(K),M.delete(K),n.dispatchEvent({type:"planeremoved",data:K});for(const K of U.detectedPlanes)if(!v.has(K))v.add(K),M.set(K,U.lastChangedTime),n.dispatchEvent({type:"planeadded",data:K});else{const it=M.get(K);K.lastChangedTime>it&&(M.set(K,K.lastChangedTime),n.dispatchEvent({type:"planechanged",data:K}))}}m=null}const $=new oc;$.setAnimationLoop(Q),this.setAnimationLoop=function(G){k=G},this.dispose=function(){}}}function hg(o,t){function e(f,p){p.color.getRGB(f.fogColor.value,rc(o)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,v)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?s(f,p,x,y):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Ze&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Ze&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,x,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=y*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ze&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function fg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const S=v.program;n.updateUBOMapping(y,S);const E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const M=o.createBuffer(),S=y.__size,E=y.usage;return o.bindBuffer(35345,M),o.bufferData(35345,S,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,M),M}function h(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],M=y.uniforms,S=y.__cache;o.bindBuffer(35345,v);for(let E=0,C=M.length;E<C;E++){const _=M[E];if(m(_,E,S)===!0){const w=_.__offset,L=Array.isArray(_.value)?_.value:[_.value];let N=0;for(let B=0;B<L.length;B++){const R=L[B],D=f(R);typeof R=="number"?(_.__data[0]=R,o.bufferSubData(35345,w+N,_.__data)):R.isMatrix3?(_.__data[0]=R.elements[0],_.__data[1]=R.elements[1],_.__data[2]=R.elements[2],_.__data[3]=R.elements[0],_.__data[4]=R.elements[3],_.__data[5]=R.elements[4],_.__data[6]=R.elements[5],_.__data[7]=R.elements[0],_.__data[8]=R.elements[6],_.__data[9]=R.elements[7],_.__data[10]=R.elements[8],_.__data[11]=R.elements[0]):(R.toArray(_.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,_.__data)}}o.bindBuffer(35345,null)}function m(y,v,M){const S=y.value;if(M[v]===void 0){if(typeof S=="number")M[v]=S;else{const E=Array.isArray(S)?S:[S],C=[];for(let _=0;_<E.length;_++)C.push(E[_].clone());M[v]=C}return!0}else if(typeof S=="number"){if(M[v]!==S)return M[v]=S,!0}else{const E=Array.isArray(M[v])?M[v]:[M[v]],C=Array.isArray(S)?S:[S];for(let _=0;_<E.length;_++){const w=E[_];if(w.equals(C[_])===!1)return w.copy(C[_]),!0}}return!1}function g(y){const v=y.uniforms;let M=0;const S=16;let E=0;for(let C=0,_=v.length;C<_;C++){const w=v[C],L={boundary:0,storage:0},N=Array.isArray(w.value)?w.value:[w.value];for(let B=0,R=N.length;B<R;B++){const D=N[B],z=f(D);L.boundary+=z.boundary,L.storage+=z.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,C>0){E=M%S;const B=S-E;E!==0&&B-L.boundary<0&&(M+=S-E,w.__offset=M)}M+=L.storage}return E=M%S,E>0&&(M+=S-E),y.__size=M,y.__cache={},this}function f(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function x(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:x}}function dg(){const o=vr("canvas");return o.style.display="block",o}function pg(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:dg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hi,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const f=this;let p=!1,x=0,y=0,v=null,M=-1,S=null;const E=new ae,C=new ae;let _=null,w=t.width,L=t.height,N=1,B=null,R=null;const D=new ae(0,0,w,L),z=new ae(0,0,w,L);let X=!1;const Z=new Ba;let k=!1,Q=!1,$=null;const G=new $t,U=new It,nt=new F,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return v===null?N:1}let Y=e;function Lt(T,O){for(let W=0;W<T.length;W++){const I=T[W],q=t.getContext(I,O);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),Y===null){const O=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&O.shift(),Y=Lt(O,T),Y===null)throw Lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ct,xt,lt,Ft,St,_t,ge,_e,xe,ke,Kt,Ot,dn,Ke,A,b,H,tt,et,st,vt,at,j,pt;function gt(){ct=new wp(Y),xt=new xp(Y,ct,o),ct.init(xt),at=new ag(Y,ct,xt),lt=new rg(Y,ct,xt),Ft=new Ap,St=new Hm,_t=new sg(Y,ct,lt,St,xt,at,Ft),ge=new Mp(f),_e=new bp(f),xe=new Oh(Y,xt),j=new gp(Y,ct,xe,xt),ke=new Tp(Y,xe,Ft,j),Kt=new Dp(Y,ke,xe,Ft),et=new Pp(Y,xt,_t),b=new vp(St),Ot=new Wm(f,ge,_e,ct,xt,j,b),dn=new hg(f,St),Ke=new qm,A=new Jm(ct,xt),tt=new mp(f,ge,_e,lt,Kt,u,a),H=new ig(f,Kt,xt),pt=new fg(Y,Ft,xt,lt),st=new _p(Y,ct,Ft,xt),vt=new Ep(Y,ct,Ft,xt),Ft.programs=Ot.programs,f.capabilities=xt,f.extensions=ct,f.properties=St,f.renderLists=Ke,f.shadowMap=H,f.state=lt,f.info=Ft}gt();const ut=new ug(f,Y);this.xr=ut,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=ct.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ct.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,O,W){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=O,t.width=Math.floor(T*N),t.height=Math.floor(O*N),W!==!1&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(w*N,L*N).floor()},this.setDrawingBufferSize=function(T,O,W){w=T,L=O,N=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,O,W,I){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,O,W,I),lt.viewport(E.copy(D).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,O,W,I){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,O,W,I),lt.scissor(C.copy(z).multiplyScalar(N).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){lt.setScissorTest(X=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,O=!0,W=!0){let I=0;T&&(I|=16384),O&&(I|=256),W&&(I|=1024),Y.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),Ke.dispose(),A.dispose(),St.dispose(),ge.dispose(),_e.dispose(),Kt.dispose(),j.dispose(),pt.dispose(),Ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ot),ut.removeEventListener("sessionend",ht),$&&($.dispose(),$=null),Rt.stop()};function mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ft.autoReset,O=H.enabled,W=H.autoUpdate,I=H.needsUpdate,q=H.type;gt(),Ft.autoReset=T,H.enabled=O,H.autoUpdate=W,H.needsUpdate=I,H.type=q}function Pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kt(T){const O=T.target;O.removeEventListener("dispose",kt),ne(O)}function ne(T){P(T),St.remove(T)}function P(T){const O=St.get(T).programs;O!==void 0&&(O.forEach(function(W){Ot.releaseProgram(W)}),T.isShaderMaterial&&Ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,I,q,dt){O===null&&(O=K);const Mt=q.isMesh&&q.matrixWorld.determinant()<0,bt=mu(T,O,W,I,q);lt.setMaterial(I,Mt);let wt=W.index,Dt=1;I.wireframe===!0&&(wt=ke.getWireframeAttribute(W),Dt=2);const Et=W.drawRange,At=W.attributes.position;let qt=Et.start*Dt,Ce=(Et.start+Et.count)*Dt;dt!==null&&(qt=Math.max(qt,dt.start*Dt),Ce=Math.min(Ce,(dt.start+dt.count)*Dt)),wt!==null?(qt=Math.max(qt,0),Ce=Math.min(Ce,wt.count)):At!=null&&(qt=Math.max(qt,0),Ce=Math.min(Ce,At.count));const mn=Ce-qt;if(mn<0||mn===1/0)return;j.setup(q,I,bt,W,wt);let Wn,Yt=st;if(wt!==null&&(Wn=xe.get(wt),Yt=vt,Yt.setIndex(Wn)),q.isMesh)I.wireframe===!0?(lt.setLineWidth(I.wireframeLinewidth*it()),Yt.setMode(1)):Yt.setMode(4);else if(q.isLine){let Ct=I.linewidth;Ct===void 0&&(Ct=1),lt.setLineWidth(Ct*it()),q.isLineSegments?Yt.setMode(1):q.isLineLoop?Yt.setMode(2):Yt.setMode(3)}else q.isPoints?Yt.setMode(0):q.isSprite&&Yt.setMode(4);if(q.isInstancedMesh)Yt.renderInstances(qt,mn,q.count);else if(W.isInstancedBufferGeometry){const Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ys=Math.min(W.instanceCount,Ct);Yt.renderInstances(qt,mn,ys)}else Yt.render(qt,mn)},this.compile=function(T,O){function W(I,q,dt){I.transparent===!0&&I.side===Rr?(I.side=Ze,I.needsUpdate=!0,Ge(I,q,dt),I.side=ci,I.needsUpdate=!0,Ge(I,q,dt),I.side=Rr):Ge(I,q,dt)}d=A.get(T),d.init(),g.push(d),T.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let dt=0;dt<q.length;dt++){const Mt=q[dt];W(Mt,T,I)}else W(q,T,I)}),g.pop(),d=null};let V=null;function J(T){V&&V(T)}function ot(){Rt.stop()}function ht(){Rt.start()}const Rt=new oc;Rt.setAnimationLoop(J),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(T){V=T,ut.setAnimationLoop(T),T===null?Rt.stop():Rt.start()},ut.addEventListener("sessionstart",ot),ut.addEventListener("sessionend",ht),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,O,v),d=A.get(T,g.length),d.init(),g.push(d),G.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(G),Q=this.localClippingEnabled,k=b.init(this.clippingPlanes,Q,O),h=Ke.get(T,m.length),h.init(),m.push(h),ie(T,O,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(B,R),k===!0&&b.beginShadows();const W=d.state.shadowsArray;if(H.render(W,T,O),k===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,T),d.setupLights(f.physicallyCorrectLights),O.isArrayCamera){const I=O.cameras;for(let q=0,dt=I.length;q<dt;q++){const Mt=I[q];ue(h,T,Mt,Mt.viewport)}}else ue(h,T,O);v!==null&&(_t.updateMultisampleRenderTarget(v),_t.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(f,T,O),j.resetDefaultState(),M=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ie(T,O,W,I){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){I&&nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const Mt=Kt.update(T),bt=T.material;bt.visible&&h.push(T,Mt,bt,W,nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ft.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ft.render.frame),!T.frustumCulled||Z.intersectsObject(T))){I&&nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const Mt=Kt.update(T),bt=T.material;if(Array.isArray(bt)){const wt=Mt.groups;for(let Dt=0,Et=wt.length;Dt<Et;Dt++){const At=wt[Dt],qt=bt[At.materialIndex];qt&&qt.visible&&h.push(T,Mt,qt,W,nt.z,At)}}else bt.visible&&h.push(T,Mt,bt,W,nt.z,null)}}const dt=T.children;for(let Mt=0,bt=dt.length;Mt<bt;Mt++)ie(dt[Mt],O,W,I)}function ue(T,O,W,I){const q=T.opaque,dt=T.transmissive,Mt=T.transparent;d.setupLightsView(W),dt.length>0&&Vn(q,O,W),I&&lt.viewport(E.copy(I)),q.length>0&&Gt(q,O,W),dt.length>0&&Gt(dt,O,W),Mt.length>0&&Gt(Mt,O,W),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Vn(T,O,W){const I=xt.isWebGL2;$===null&&($=new fi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?_r:ui,minFilter:gr,samples:I&&r===!0?4:0})),f.getDrawingBufferSize(U),I?$.setSize(U.x,U.y):$.setSize(va(U.x),va(U.y));const q=f.getRenderTarget();f.setRenderTarget($),f.clear();const dt=f.toneMapping;f.toneMapping=Tn,Gt(T,O,W),f.toneMapping=dt,_t.updateMultisampleRenderTarget($),_t.updateRenderTargetMipmap($),f.setRenderTarget(q)}function Gt(T,O,W){const I=O.isScene===!0?O.overrideMaterial:null;for(let q=0,dt=T.length;q<dt;q++){const Mt=T[q],bt=Mt.object,wt=Mt.geometry,Dt=I===null?Mt.material:I,Et=Mt.group;bt.layers.test(W.layers)&&pn(bt,O,W,wt,Dt,Et)}}function pn(T,O,W,I,q,dt){T.onBeforeRender(f,O,W,I,q,dt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(f,O,W,I,T,dt),q.transparent===!0&&q.side===Rr?(q.side=Ze,q.needsUpdate=!0,f.renderBufferDirect(W,O,I,q,T,dt),q.side=ci,q.needsUpdate=!0,f.renderBufferDirect(W,O,I,q,T,dt),q.side=Rr):f.renderBufferDirect(W,O,I,q,T,dt),T.onAfterRender(f,O,W,I,q,dt)}function Ge(T,O,W){O.isScene!==!0&&(O=K);const I=St.get(T),q=d.state.lights,dt=d.state.shadowsArray,Mt=q.state.version,bt=Ot.getParameters(T,q.state,dt,O,W),wt=Ot.getProgramCacheKey(bt);let Dt=I.programs;I.environment=T.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(T.isMeshStandardMaterial?_e:ge).get(T.envMap||I.environment),Dt===void 0&&(T.addEventListener("dispose",kt),Dt=new Map,I.programs=Dt);let Et=Dt.get(wt);if(Et!==void 0){if(I.currentProgram===Et&&I.lightsStateVersion===Mt)return so(T,bt),Et}else bt.uniforms=Ot.getUniforms(T),T.onBuild(W,bt,f),T.onBeforeCompile(bt,f),Et=Ot.acquireProgram(bt,wt),Dt.set(wt,Et),I.uniforms=bt.uniforms;const At=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=b.uniform),so(T,bt),I.needsLights=_u(T),I.lightsStateVersion=Mt,I.needsLights&&(At.ambientLightColor.value=q.state.ambient,At.lightProbe.value=q.state.probe,At.directionalLights.value=q.state.directional,At.directionalLightShadows.value=q.state.directionalShadow,At.spotLights.value=q.state.spot,At.spotLightShadows.value=q.state.spotShadow,At.rectAreaLights.value=q.state.rectArea,At.ltc_1.value=q.state.rectAreaLTC1,At.ltc_2.value=q.state.rectAreaLTC2,At.pointLights.value=q.state.point,At.pointLightShadows.value=q.state.pointShadow,At.hemisphereLights.value=q.state.hemi,At.directionalShadowMap.value=q.state.directionalShadowMap,At.directionalShadowMatrix.value=q.state.directionalShadowMatrix,At.spotShadowMap.value=q.state.spotShadowMap,At.spotLightMatrix.value=q.state.spotLightMatrix,At.spotLightMap.value=q.state.spotLightMap,At.pointShadowMap.value=q.state.pointShadowMap,At.pointShadowMatrix.value=q.state.pointShadowMatrix);const qt=Et.getUniforms(),Ce=is.seqWithValue(qt.seq,At);return I.currentProgram=Et,I.uniformsList=Ce,Et}function so(T,O){const W=St.get(T);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function mu(T,O,W,I,q){O.isScene!==!0&&(O=K),_t.resetTextureUnits();const dt=O.fog,Mt=I.isMeshStandardMaterial?O.environment:null,bt=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:hi,wt=(I.isMeshStandardMaterial?_e:ge).get(I.envMap||Mt),Dt=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Et=!!I.normalMap&&!!W.attributes.tangent,At=!!W.morphAttributes.position,qt=!!W.morphAttributes.normal,Ce=!!W.morphAttributes.color,mn=I.toneMapped?f.toneMapping:Tn,Wn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=Wn!==void 0?Wn.length:0,Ct=St.get(I),ys=d.state.lights;if(k===!0&&(Q===!0||T!==S)){const Le=T===S&&I.id===M;b.setState(I,T,Le)}let re=!1;I.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ys.state.version||Ct.outputEncoding!==bt||q.isInstancedMesh&&Ct.instancing===!1||!q.isInstancedMesh&&Ct.instancing===!0||q.isSkinnedMesh&&Ct.skinning===!1||!q.isSkinnedMesh&&Ct.skinning===!0||Ct.envMap!==wt||I.fog===!0&&Ct.fog!==dt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==b.numPlanes||Ct.numIntersection!==b.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Et||Ct.morphTargets!==At||Ct.morphNormals!==qt||Ct.morphColors!==Ce||Ct.toneMapping!==mn||xt.isWebGL2===!0&&Ct.morphTargetsCount!==Yt)&&(re=!0):(re=!0,Ct.__version=I.version);let Hn=Ct.currentProgram;re===!0&&(Hn=Ge(I,O,q));let ao=!1,tr=!1,Ss=!1;const ve=Hn.getUniforms(),Xn=Ct.uniforms;if(lt.useProgram(Hn.program)&&(ao=!0,tr=!0,Ss=!0),I.id!==M&&(M=I.id,tr=!0),ao||S!==T){if(ve.setValue(Y,"projectionMatrix",T.projectionMatrix),xt.logarithmicDepthBuffer&&ve.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,tr=!0,Ss=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Le=ve.map.cameraPosition;Le!==void 0&&Le.setValue(Y,nt.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ve.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&ve.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){ve.setOptional(Y,q,"bindMatrix"),ve.setOptional(Y,q,"bindMatrixInverse");const Le=q.skeleton;Le&&(xt.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),ve.setValue(Y,"boneTexture",Le.boneTexture,_t),ve.setValue(Y,"boneTextureSize",Le.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bs=W.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&xt.isWebGL2===!0)&&et.update(q,W,I,Hn),(tr||Ct.receiveShadow!==q.receiveShadow)&&(Ct.receiveShadow=q.receiveShadow,ve.setValue(Y,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Xn.envMap.value=wt,Xn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),tr&&(ve.setValue(Y,"toneMappingExposure",f.toneMappingExposure),Ct.needsLights&&gu(Xn,Ss),dt&&I.fog===!0&&dn.refreshFogUniforms(Xn,dt),dn.refreshMaterialUniforms(Xn,I,N,L,$),is.upload(Y,Ct.uniformsList,Xn,_t)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(is.upload(Y,Ct.uniformsList,Xn,_t),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ve.setValue(Y,"center",q.center),ve.setValue(Y,"modelViewMatrix",q.modelViewMatrix),ve.setValue(Y,"normalMatrix",q.normalMatrix),ve.setValue(Y,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Le=I.uniformsGroups;for(let ws=0,xu=Le.length;ws<xu;ws++)if(xt.isWebGL2){const oo=Le[ws];pt.update(oo,Hn),pt.bind(oo,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function gu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function _u(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,O,W){St.get(T.texture).__webglTexture=O,St.get(T.depthTexture).__webglTexture=W;const I=St.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const W=St.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){v=T,x=O,y=W;let I=!0,q=null,dt=!1,Mt=!1;if(T){const wt=St.get(T);wt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),I=!1):wt.__webglFramebuffer===void 0?_t.setupRenderTarget(T):wt.__hasExternalTextures&&_t.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Mt=!0);const Et=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Et[O],dt=!0):xt.isWebGL2&&T.samples>0&&_t.useMultisampledRTT(T)===!1?q=St.get(T).__webglMultisampledFramebuffer:q=Et,E.copy(T.viewport),C.copy(T.scissor),_=T.scissorTest}else E.copy(D).multiplyScalar(N).floor(),C.copy(z).multiplyScalar(N).floor(),_=X;if(lt.bindFramebuffer(36160,q)&&xt.drawBuffers&&I&&lt.drawBuffers(T,q),lt.viewport(E),lt.scissor(C),lt.setScissorTest(_),dt){const wt=St.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+O,wt.__webglTexture,W)}else if(Mt){const wt=St.get(T.texture),Dt=O||0;Y.framebufferTextureLayer(36160,36064,wt.__webglTexture,W||0,Dt)}M=-1},this.readRenderTargetPixels=function(T,O,W,I,q,dt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){lt.bindFramebuffer(36160,bt);try{const wt=T.texture,Dt=wt.format,Et=wt.type;if(Dt!==rn&&at.convert(Dt)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const At=Et===_r&&(ct.has("EXT_color_buffer_half_float")||xt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Et!==ui&&at.convert(Et)!==Y.getParameter(35738)&&!(Et===ni&&(xt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!At){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-I&&W>=0&&W<=T.height-q&&Y.readPixels(O,W,I,q,at.convert(Dt),at.convert(Et),dt)}finally{const wt=v!==null?St.get(v).__webglFramebuffer:null;lt.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(T,O,W=0){const I=Math.pow(2,-W),q=Math.floor(O.image.width*I),dt=Math.floor(O.image.height*I);_t.setTexture2D(O,0),Y.copyTexSubImage2D(3553,W,0,0,T.x,T.y,q,dt),lt.unbindTexture()},this.copyTextureToTexture=function(T,O,W,I=0){const q=O.image.width,dt=O.image.height,Mt=at.convert(W.format),bt=at.convert(W.type);_t.setTexture2D(W,0),Y.pixelStorei(37440,W.flipY),Y.pixelStorei(37441,W.premultiplyAlpha),Y.pixelStorei(3317,W.unpackAlignment),O.isDataTexture?Y.texSubImage2D(3553,I,T.x,T.y,q,dt,Mt,bt,O.image.data):O.isCompressedTexture?Y.compressedTexSubImage2D(3553,I,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Mt,O.mipmaps[0].data):Y.texSubImage2D(3553,I,T.x,T.y,Mt,bt,O.image),I===0&&W.generateMipmaps&&Y.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W,I,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=T.max.x-T.min.x+1,Mt=T.max.y-T.min.y+1,bt=T.max.z-T.min.z+1,wt=at.convert(I.format),Dt=at.convert(I.type);let Et;if(I.isData3DTexture)_t.setTexture3D(I,0),Et=32879;else if(I.isDataArrayTexture)_t.setTexture2DArray(I,0),Et=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,I.flipY),Y.pixelStorei(37441,I.premultiplyAlpha),Y.pixelStorei(3317,I.unpackAlignment);const At=Y.getParameter(3314),qt=Y.getParameter(32878),Ce=Y.getParameter(3316),mn=Y.getParameter(3315),Wn=Y.getParameter(32877),Yt=W.isCompressedTexture?W.mipmaps[0]:W.image;Y.pixelStorei(3314,Yt.width),Y.pixelStorei(32878,Yt.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?Y.texSubImage3D(Et,q,O.x,O.y,O.z,dt,Mt,bt,wt,Dt,Yt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Et,q,O.x,O.y,O.z,dt,Mt,bt,wt,Yt.data)):Y.texSubImage3D(Et,q,O.x,O.y,O.z,dt,Mt,bt,wt,Dt,Yt),Y.pixelStorei(3314,At),Y.pixelStorei(32878,qt),Y.pixelStorei(3316,Ce),Y.pixelStorei(3315,mn),Y.pixelStorei(32877,Wn),q===0&&I.generateMipmaps&&Y.generateMipmap(Et),lt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?_t.setTextureCube(T,0):T.isData3DTexture?_t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_t.setTexture2DArray(T,0):_t.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){x=0,y=0,v=null,lt.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class mg extends pg{}mg.prototype.isWebGL1Renderer=!0;class U_ extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class gg extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vl=new $t,ya=new Ql,Qr=new gs,ts=new F;class B_ extends ce{constructor(t=new an,e=new gg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;vl.copy(i).invert(),ya.copy(t.ray).applyMatrix4(vl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,f=m;g<f;g++){const p=c.getX(g);ts.fromBufferAttribute(h,p),Ml(ts,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,f=m;g<f;g++)ts.fromBufferAttribute(h,g),Ml(ts,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Ml(o,t,e,n,i,r,a){const s=ya.distanceSqToPoint(o);if(s<e){const l=new F;ya.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:a})}}class Va extends an{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],m=[];let g=0;const f=[],p=n/2;let x=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2));function y(){const M=new F,S=new F;let E=0;const C=(e-t)/n;for(let _=0;_<=r;_++){const w=[],L=_/r,N=L*(e-t)+t;for(let B=0;B<=i;B++){const R=B/i,D=R*l+s,z=Math.sin(D),X=Math.cos(D);S.x=N*z,S.y=-L*n+p,S.z=N*X,h.push(S.x,S.y,S.z),M.set(z,C,X).normalize(),d.push(M.x,M.y,M.z),m.push(R,1-L),w.push(g++)}f.push(w)}for(let _=0;_<i;_++)for(let w=0;w<r;w++){const L=f[w][_],N=f[w+1][_],B=f[w+1][_+1],R=f[w][_+1];u.push(L,N,R),u.push(N,B,R),E+=6}c.addGroup(x,E,0),x+=E}function v(M){const S=g,E=new It,C=new F;let _=0;const w=M===!0?t:e,L=M===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,p*L,0),d.push(0,L,0),m.push(.5,.5),g++;const N=g;for(let B=0;B<=i;B++){const D=B/i*l+s,z=Math.cos(D),X=Math.sin(D);C.x=w*X,C.y=p*L,C.z=w*z,h.push(C.x,C.y,C.z),d.push(0,L,0),E.x=z*.5+.5,E.y=X*.5*L+.5,m.push(E.x,E.y),g++}for(let B=0;B<i;B++){const R=S+B,D=N+B;M===!0?u.push(D,D+1,R):u.push(D+1,D,R),_+=3}c.addGroup(x,_,M===!0?1:2),x+=_}}static fromJSON(t){return new Va(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dc extends Va{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,s=Math.PI*2){super(0,t,e,n,i,r,a,s),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}static fromJSON(t){return new dc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pc extends an{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],s=[],l=[],c=[],u=new F,h=new F,d=new F;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const f=g/i*r,p=m/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(f),h.y=(t+e*Math.cos(p))*Math.sin(f),h.z=e*Math.sin(p),s.push(h.x,h.y,h.z),u.x=t*Math.cos(f),u.y=t*Math.sin(f),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const f=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,x=(i+1)*(m-1)+g,y=(i+1)*m+g;a.push(f,p,y),a.push(p,x,y)}this.setIndex(a),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}static fromJSON(t){return new pc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mc extends an{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const s=[],l=[],c=[],u=[],h=new F,d=new F,m=new F,g=new F,f=new F,p=new F,x=new F;for(let v=0;v<=n;++v){const M=v/n*r*Math.PI*2;y(M,r,a,t,m),y(M+.01,r,a,t,g),p.subVectors(g,m),x.addVectors(g,m),f.crossVectors(p,x),x.crossVectors(f,p),f.normalize(),x.normalize();for(let S=0;S<=i;++S){const E=S/i*Math.PI*2,C=-e*Math.cos(E),_=e*Math.sin(E);h.x=m.x+(C*x.x+_*f.x),h.y=m.y+(C*x.y+_*f.y),h.z=m.z+(C*x.z+_*f.z),l.push(h.x,h.y,h.z),d.subVectors(h,m).normalize(),c.push(d.x,d.y,d.z),u.push(v/n),u.push(S/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){const S=(i+1)*(v-1)+(M-1),E=(i+1)*v+(M-1),C=(i+1)*v+M,_=(i+1)*(v-1)+M;s.push(S,E,_),s.push(E,C,_)}this.setIndex(s),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2));function y(v,M,S,E,C){const _=Math.cos(v),w=Math.sin(v),L=S/M*v,N=Math.cos(L);C.x=E*(2+N)*.5*_,C.y=E*(2+N)*w*.5,C.z=E*Math.sin(L)*.5}}static fromJSON(t){return new mc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class k_ extends Ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class _g{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const xg=new _g;class gc{constructor(t){this.manager=t!==void 0?t:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class vg extends gc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=yl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=vr("img");function l(){u(),yl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class G_ extends gc{constructor(t){super(t)}load(t,e,n,i){const r=new we,a=new vg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Mg extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ia=new $t,Sl=new F,bl=new F;class yg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sg extends yg{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends Mg{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DefaultUp),this.updateMatrix(),this.target=new ce,this.shadow=new Sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function yn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function _c(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ze={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hi={duration:.5,overwrite:!1,delay:0},Wa,pe,Zt,qe=1e8,zt=1/qe,Sa=Math.PI*2,bg=Sa/4,wg=0,xc=Math.sqrt,Tg=Math.cos,Eg=Math.sin,oe=function(t){return typeof t=="string"},Ht=function(t){return typeof t=="function"},En=function(t){return typeof t=="number"},Ha=function(t){return typeof t>"u"},fn=function(t){return typeof t=="object"},Te=function(t){return t!==!1},vc=function(){return typeof window<"u"},es=function(t){return Ht(t)||oe(t)},Mc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},me=Array.isArray,ba=/(?:-?\.?\d|\.)+/gi,yc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ii=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sc=/[+-]=-?[.\d]+/,bc=/[^,'"\[\]\s]+/gi,Ag=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,He,wa,Xa,Ue={},os={},wc,Tc=function(t){return(os=pi(t,Ue))&&Be},qa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ls=function(t,e){return!e&&console.warn(t)},Ec=function(t,e){return t&&(Ue[t]=e)&&os&&(os[t]=e)||Ue},Mr=function(){return 0},Cg={suppressEvents:!0,isStart:!0,kill:!1},rs={suppressEvents:!0,kill:!1},Lg={suppressEvents:!0},Ya={},zn=[],Ta={},Ac,Ie={},sa={},Tl=30,ss=[],ja="",Za=function(t){var e=t[0],n,i;if(fn(e)||Ht(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ss.length;i--&&!ss[i].targetTest(e););n=ss[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zc(t[i],n)))||t.splice(i,1);return t},ai=function(t){return t._gsap||Za(Ye(t))[0]._gsap},Cc=function(t,e,n){return(n=t[e])&&Ht(n)?t[e]():Ha(n)&&t.getAttribute&&t.getAttribute(e)||n},Ee=function(t,e){return(t=t.split(",")).forEach(e)||t},Xt=function(t){return Math.round(t*1e5)/1e5||0},le=function(t){return Math.round(t*1e7)/1e7||0},zi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Pg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},cs=function(){var t=zn.length,e=zn.slice(0),n,i;for(Ta={},zn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lc=function(t,e,n,i){zn.length&&!pe&&cs(),t.render(e,n,i||pe&&e<0&&(t._initted||t._startAt)),zn.length&&!pe&&cs()},Pc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(bc).length<2?e:oe(t)?t.trim():t},Dc=function(t){return t},$e=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Dg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},pi=function(t,e){for(var n in e)t[n]=e[n];return t},El=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=fn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},us=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},dr=function(t){var e=t.parent||Vt,n=t.keyframes?Dg(me(t.keyframes)):$e;if(Te(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Rg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Rc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},xs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Bn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},oi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ig=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ea=function(t,e,n,i){return t._startAt&&(pe?t._startAt.revert(rs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Fg=function o(t){return!t||t._ts&&o(t.parent)},Al=function(t){return t._repeat?Xi(t._tTime,t=t.duration()+t._rDelay)*t:0},Xi=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},hs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vs=function(t){return t._end=le(t._start+(t._tDur/Math.abs(t._ts||t._rts||zt)||0))},Ms=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vs(t),n._dirty||oi(n,t)),t},Ic=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=hs(t.rawTime(),e),(!e._dur||Dr(0,e.totalDuration(),n)-e._tTime>zt)&&e.render(n,!0)),oi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-zt}},cn=function(t,e,n,i){return e.parent&&Bn(e),e._start=le((En(n)?n:n||t!==Vt?We(t,n,e):t._time)+e._delay),e._end=le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Rc(t,e,"_first","_last",t._sort?"_start":0),Aa(e)||(t._recent=e),i||Ic(t,e),t._ts<0&&Ms(t,t._tTime),t},Fc=function(t,e){return(Ue.ScrollTrigger||qa("scrollTrigger",e))&&Ue.ScrollTrigger.create(e,t)},Oc=function(t,e,n,i,r){if(Ka(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!pe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ac!==Oe.frame)return zn.push(t),t._lazy=[r,i],1},Og=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Aa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ng=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Og(t)&&!(!t._initted&&Aa(t))||(t._ts<0||t._dp._ts<0)&&!Aa(t))?0:1,s=t._rDelay,l=0,c,u,h;if(s&&t._repeat&&(l=Dr(0,t._tDur,e),u=Xi(l,s),t._yoyo&&u&1&&(a=1-a),u!==Xi(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||pe||i||t._zTime===zt||!e&&t._zTime){if(!t._initted&&Oc(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?zt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ea(t,e,n,!0),t._onUpdate&&!n&&je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Bn(t,1),!n&&!pe&&(je(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},zg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},qi=function(t,e,n,i){var r=t._repeat,a=le(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:le(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Ms(t,t._tTime=t._tDur*s),t.parent&&vs(t),n||oi(t.parent,t),t},Cl=function(t){return t instanceof be?oi(t):qi(t,t._dur)},Ug={_start:0,endTime:Mr,totalDuration:Mr},We=function o(t,e,n){var i=t.labels,r=t._recent||Ug,a=t.duration()>=qe?r.endTime(!1):t._dur,s,l,c;return oe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(me(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},pr=function(t,e,n){var i=En(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Te(l.vars.inherit)&&l.parent;a.immediateRender=Te(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Qt(e[0],a,e[r+1])},Gn=function(t,e){return t||t===0?e(t):e},Dr=function(t,e,n){return n<t?t:n>e?e:n},fe=function(t,e){return!oe(t)||!(e=Ag.exec(t))?"":e[1]},Bg=function(t,e,n){return Gn(n,function(i){return Dr(t,e,i)})},Ca=[].slice,Nc=function(t,e){return t&&fn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&fn(t[0]))&&!t.nodeType&&t!==He},kg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return oe(i)&&!e||Nc(i,1)?(r=n).push.apply(r,Ye(i)):n.push(i)})||n},Ye=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):oe(t)&&!n&&(wa||!Yi())?Ca.call((e||Xa).querySelectorAll(t),0):me(t)?kg(t,n):Nc(t)?Ca.call(t,0):t?[t]:[]},La=function(t){return t=Ye(t)[0]||ls("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ye(e,n.querySelectorAll?n:n===t?ls("Invalid scope")||Xa.createElement("div"):t)}},zc=function(t){return t.sort(function(){return .5-Math.random()})},Uc=function(t){if(Ht(t))return t;var e=fn(t)?t:{each:t},n=li(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,h=i;return oe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(d,m,g){var f=(g||e).length,p=a[f],x,y,v,M,S,E,C,_,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,qe])[1],!w){for(C=-qe;C<(C=g[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=a[f]=[],x=l?Math.min(w,f)*u-.5:i%w,y=w===qe?0:l?f*h/w-.5:i/w|0,C=0,_=qe,E=0;E<f;E++)v=E%w-x,M=y-(E/w|0),p[E]=S=c?Math.abs(c==="y"?M:v):xc(v*v+M*M),S>C&&(C=S),S<_&&(_=S);i==="random"&&zc(p),p.max=C-_,p.min=_,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=fe(e.amount||e.each)||0,n=n&&f<0?qc(n):n}return f=(p[d]-p.min)/p.max||0,le(p.b+(n?n(f):f)*p.v)+p.u}},Pa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(En(n)?0:fe(n))}},Bc=function(t,e){var n=me(t),i,r;return!n&&fn(t)&&(i=n=t.radius||qe,t.values?(t=Ye(t.values),(r=!En(t[0]))&&(i*=i)):t=Pa(t.increment)),Gn(e,n?Ht(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=qe,u=0,h=t.length,d,m;h--;)r?(d=t[h].x-s,m=t[h].y-l,d=d*d+m*m):d=Math.abs(t[h]-s),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,r||u===a||En(a)?u:u+fe(a)}:Pa(t))},kc=function(t,e,n,i){return Gn(me(t)?!e:n===!0?!!(n=0):!i,function(){return me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Gg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Vg=function(t,e){return function(n){return t(parseFloat(n))+(e||fe(n))}},Wg=function(t,e,n){return Vc(t,e,0,1,n)},Gc=function(t,e,n){return Gn(n,function(i){return t[~~e(i)]})},Hg=function o(t,e,n){var i=e-t;return me(t)?Gc(t,o(0,t.length),e):Gn(n,function(r){return(i+(r-t)%i)%i+t})},Xg=function o(t,e,n){var i=e-t,r=i*2;return me(t)?Gc(t,o(0,t.length-1),e):Gn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},yr=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?bc:ba),n+=t.substr(e,i-e)+kc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Vc=function(t,e,n,i,r){var a=e-t,s=i-n;return Gn(r,function(l){return n+((l-t)/a*s||0)})},qg=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=oe(t),s={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(me(t)&&!me(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(o(t[c-1],t[c]));h--,r=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=e}else i||(t=pi(me(t)?[]:{},t));if(!u){for(l in e)$a.call(s,t,l,"get",e[l]);r=function(g){return to(g,s)||(a?t.p:t)}}}return Gn(n,r)},Ll=function(t,e,n){var i=t.labels,r=qe,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},je=function(t,e,n){var i=t.vars,r=i[e],a=Zt,s=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&zn.length&&cs(),s&&(Zt=s),u=l?r.apply(c,l):r.call(c),Zt=a,u},hr=function(t){return Bn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pe),t.progress()<1&&je(t,"onInterrupt"),t},Fi,Yg=function(t){t=!t.name&&t.default||t;var e=t.name,n=Ht(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Mr,render:to,add:$a,kill:c_,modifier:l_,rawVars:0},a={targetTest:0,get:0,getSetter:Qa,aliases:{},register:0};if(Yi(),t!==i){if(Ie[e])return;$e(i,$e(us(t,r),a)),pi(i.prototype,pi(r,us(t,a))),Ie[i.prop=e]=i,t.targetTest&&(ss.push(i),Ya[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ec(e,i),t.register&&t.register(Be,i,Ae)},Nt=255,fr={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},aa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Nt+.5|0},Wc=function(t,e,n){var i=t?En(t)?[t>>16,t>>8&Nt,t&Nt]:0:fr.black,r,a,s,l,c,u,h,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),fr[t])i=fr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Nt,i&Nt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Nt,t&Nt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ba),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=aa(l+1/3,r,a),i[1]=aa(l,r,a),i[2]=aa(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(yc),n&&i.length<4&&(i[3]=1),i}else i=t.match(ba)||fr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Nt,a=i[1]/Nt,s=i[2]/Nt,h=Math.max(r,a,s),d=Math.min(r,a,s),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Hc=function(t){var e=[],n=[],i=-1;return t.split(Un).forEach(function(r){var a=r.match(Ii)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Pl=function(t,e,n){var i="",r=(t+i).match(Un),a=e?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return t;if(r=r.map(function(d){return(d=Wc(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Hc(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Un,"1").split(Ii),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Un),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Un=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in fr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),jg=/hsl[a]?\(/,Xc=function(t){var e=t.join(" "),n;if(Un.lastIndex=0,Un.test(e))return n=jg.test(e),t[1]=Pl(t[1],n),t[0]=Pl(t[0],n,Hc(t[1])),!0},Sr,Oe=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,d,m,g=function f(p){var x=o()-i,y=p===!0,v,M,S,E;if(x>t&&(n+=x-e),i+=x,S=i-n,v=S-a,(v>0||y)&&(E=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,a+=v+(v>=r?4:r-v),M=1),y||(l=c(f)),M)for(m=0;m<s.length;m++)s[m](S,d,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){wc&&(!wa&&vc()&&(He=wa=window,Xa=He.document||{},Ue.gsap=Be,(He.gsapVersions||(He.gsapVersions=[])).push(Be.version),Tc(os||He.GreenSockGlobals||!He.gsap&&He||{}),u=He.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Sr=1,g(2))},sleep:function(){(u?He.cancelAnimationFrame:clearTimeout)(l),Sr=0,c=Mr},lagSmoothing:function(p,x){t=p||1/0,e=Math.min(x||33,t)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,x,y){var v=x?function(M,S,E,C){p(M,S,E,C),h.remove(v)}:p;return h.remove(p),s[y?"unshift":"push"](v),Yi(),v},remove:function(p,x){~(x=s.indexOf(p))&&s.splice(x,1)&&m>=x&&m--},_listeners:s},h}(),Yi=function(){return!Sr&&Oe.wake()},Tt={},Zg=/^[\d.\-M][\d.\-,\s]/,$g=/["']/g,Kg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace($g,"").trim():+c,i=l.substr(s+1).trim();return e},Jg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Qg=function(t){var e=(t+"").split("("),n=Tt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Kg(e[1])]:Jg(t).split(",").map(Pc)):Tt._CE&&Zg.test(t)?Tt._CE("",t):n},qc=function(t){return function(e){return 1-t(1-e)}},Yc=function o(t,e){for(var n=t._first,i;n;)n instanceof be?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},li=function(t,e){return t&&(Ht(t)?t:Tt[t]||Qg(t))||e},mi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ee(t,function(s){Tt[s]=Ue[s]=r,Tt[a=s.toLowerCase()]=n;for(var l in r)Tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Tt[s+"."+l]=r[l]}),r},jc=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oa=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Sa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Eg((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:jc(s);return r=Sa/r,l.config=function(c,u){return o(t,c,u)},l},la=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:jc(n);return i.config=function(r){return o(t,r)},i};Ee("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;mi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;mi("Elastic",oa("in"),oa("out"),oa());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};mi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);mi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});mi("Circ",function(o){return-(xc(1-o*o)-1)});mi("Sine",function(o){return o===1?1:-Tg(o*bg)+1});mi("Back",la("in"),la("out"),la());Tt.SteppedEase=Tt.steps=Ue.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-zt;return function(s){return((i*Dr(0,a,s)|0)+r)*n}}};Hi.ease=Tt["quad.out"];Ee("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return ja+=o+","+o+"Params,"});var Zc=function(t,e){this.id=wg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cc,this.set=e?e.getSetter:Qa},ji=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,qi(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Sr||Oe.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,qi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Yi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ms(this,n),!r._dp||r.parent||Ic(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Al(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Al(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Xi(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?hs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-zt?0:this._rts,this.totalTime(Dr(-this._delay,this._tDur,i),!0),vs(this),Ig(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&cn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Te(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Lg);var i=pe;return pe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(We(this,n),Te(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Te(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-zt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-zt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Ht(n)?n:Dc,s=function(){var c=i.then;i.then=null,Ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){hr(this)},o}();$e(ji.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var be=function(o){_c(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Te(n.sortChildren),Vt&&cn(n.parent||Vt,yn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Fc(yn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return pr(0,arguments,this),this},e.from=function(i,r,a){return pr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return pr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,dr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qt(i,r,We(this,a),1),this},e.call=function(i,r,a){return cn(this,Qt.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Qt(i,a,We(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,dr(a).immediateRender=Te(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,dr(s).immediateRender=Te(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:le(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,f,p,x,y,v,M,S,E,C;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),d=u,M=this._start,v=this._ts,x=!v,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=le(u%p),u===l?(f=this._repeat,d=c):(f=~~(u/p),f&&f===u/p&&(d=c,f--),d>c&&(d=c)),S=Xi(this._tTime,p),!s&&this._tTime&&S!==f&&(S=f),E&&f&1&&(d=c-d,C=1),f!==S&&!this._lock){var _=E&&S&1,w=_===(E&&f&1);if(f<S&&(_=!_),s=_?0:c,this._lock=1,this.render(s||(C?0:le(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&je(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=_?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Yc(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=zg(this,le(s),le(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!r&&(je(this,"onStart"),this._tTime!==u))return this;if(d>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!x){y=0,g&&(u+=this._zTime=-zt);break}}m=g}else{m=this._last;for(var L=i<0?i:d;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||pe&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!x){y=0,g&&(u+=this._zTime=L?-zt:zt);break}}m=g}}if(y&&!r&&(this.pause(),y.render(d>=s?0:-zt)._zTime=d>=s?1:-1,this._ts))return this._start=M,vs(this),this.render(i,r,a);this._onUpdate&&!r&&je(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(je(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(En(r)||(r=We(this,r,i)),!(i instanceof ji)){if(me(i))return i.forEach(function(s){return a.add(s,r)}),this;if(oe(i))return this.addLabel(i,r);if(Ht(i))i=Qt.delayedCall(0,i);else return this}return this!==i?cn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-qe);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Qt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return oe(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(xs(this,i),i===this._recent&&(this._recent=this._last),oi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=le(Oe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=We(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=Qt.delayedCall(0,r||Mr,a);return s.data="isPause",this._hasPause=1,cn(this,s,We(this,i))},e.removePause=function(i){var r=this._first;for(i=We(this,i);r;)r._start===i&&r.data==="isPause"&&Bn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)In!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Ye(i),l=this._first,c=En(r),u;l;)l instanceof Qt?Pg(l._targets,s)&&(c?(!In||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=We(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=Qt.to(a,$e({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||zt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&qi(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,$e({startAt:{time:We(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ll(this,We(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ll(this,We(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+zt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return oi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),oi(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=qe,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,cn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;qi(a,a===Vt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Vt._ts&&(Lc(Vt,hs(i,Vt)),Ac=Oe.frame),Oe.frame>=Tl){Tl+=ze.autoSleep||120;var r=Vt._first;if((!r||!r._ts)&&ze.autoSleep&&Oe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Oe.sleep()}}},t}(ji);$e(be.prototype,{_lock:0,_hasPause:0,_forcing:0});var t_=function(t,e,n,i,r,a,s){var l=new Ae(this._pt,t,e,0,1,eu,null,r),c=0,u=0,h,d,m,g,f,p,x,y;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=yr(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(ra)||[];h=ra.exec(i);)g=h[0],f=i.substring(c,h.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?zi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ra.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Sc.test(i)||x)&&(l.e=0),this._pt=l,l},$a=function(t,e,n,i,r,a,s,l,c,u){Ht(i)&&(i=i(r||0,t,a));var h=t[e],d=n!=="get"?n:Ht(h)?c?t[e.indexOf("set")||!Ht(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=Ht(h)?c?s_:Qc:Ja,g;if(oe(i)&&(~i.indexOf("random(")&&(i=yr(i)),i.charAt(1)==="="&&(g=zi(d,i)+(fe(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Da)return!isNaN(d*i)&&i!==""?(g=new Ae(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?o_:tu,0,m),c&&(g.fp=c),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&qa(e,i),t_.call(this,t,e,d,i,m,l||ze.stringFilter,c))},e_=function(t,e,n,i,r){if(Ht(t)&&(t=mr(t,r,e,n,i)),!fn(t)||t.style&&t.nodeType||me(t)||Mc(t))return oe(t)?mr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=mr(t[s],r,e,n,i);return a},$c=function(t,e,n,i,r,a){var s,l,c,u;if(Ie[t]&&(s=new Ie[t]).init(r,s.rawVars?e[t]:e_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ae(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Fi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},In,Da,Ka=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,g=i.keyframes,f=i.autoRevert,p=t._dur,x=t._startAt,y=t._targets,v=t.parent,M=v&&v.data==="nested"?v.vars.targets:y,S=t._overwrite==="auto"&&!Wa,E=t.timeline,C,_,w,L,N,B,R,D,z,X,Z,k,Q;if(E&&(!g||!r)&&(r="none"),t._ease=li(r,Hi.ease),t._yEase=m?qc(li(m===!0?r:m,Hi.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(D=y[0]?ai(y[0]).harness:0,k=D&&i[D.prop],C=us(i,Ya),x&&(x._zTime<0&&x.progress(1),e<0&&d&&s&&!f?x.render(-1,!0):x.revert(d&&p?rs:Cg),x._lazy=0),a){if(Bn(t._startAt=Qt.set(y,$e({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!x&&Te(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pe||!s&&!f)&&t._startAt.revert(rs),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&p&&!x){if(e&&(s=!1),w=$e({overwrite:!1,data:"isFromStart",lazy:s&&!x&&Te(l),immediateRender:s,stagger:0,parent:v},C),k&&(w[D.prop]=k),Bn(t._startAt=Qt.set(y,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pe?t._startAt.revert(rs):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,zt,zt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Te(l)||l&&!p,_=0;_<y.length;_++){if(N=y[_],R=N._gsap||Za(y)[_]._gsap,t._ptLookup[_]=X={},Ta[R.id]&&zn.length&&cs(),Z=M===y?_:M.indexOf(N),D&&(z=new D).init(N,k||C,t,Z,M)!==!1&&(t._pt=L=new Ae(t._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function($){X[$]=L}),z.priority&&(B=1)),!D||k)for(w in C)Ie[w]&&(z=$c(w,C,t,Z,N,M))?z.priority&&(B=1):X[w]=L=$a.call(t,N,w,"get",C[w],Z,M,0,i.stringFilter);t._op&&t._op[_]&&t.kill(N,t._op[_]),S&&t._pt&&(In=t,Vt.killTweensOf(N,X,t.globalTime(e)),Q=!t.parent,In=0),t._pt&&l&&(Ta[R.id]=1)}B&&nu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,g&&e<=0&&E.render(qe,!0,!0)},n_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,d;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Da=1,t.vars[e]="+=0",Ka(t,s),Da=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Xt(n)+fe(u.e)),u.b&&(u.b=c.s+fe(u.b))},i_=function(t,e){var n=t[0]?ai(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=pi({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},r_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(me(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},mr=function(t,e,n,i,r){return Ht(t)?t.call(e,n,i,r):oe(t)&&~t.indexOf("random(")?yr(t):t},Kc=ja+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jc={};Ee(Kc+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Jc[o]=1});var Qt=function(o){_c(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:dr(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,x=l.yoyoEase,y=i.parent||Vt,v=(me(n)||Mc(n)?En(n[0]):"length"in i)?[n]:Ye(n),M,S,E,C,_,w,L,N;if(s._targets=v.length?Za(v):ls("GSAP target "+n+" not found. https://greensock.com",!ze.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||d||es(c)||es(u)){if(i=s.vars,M=s.timeline=new be({data:"nested",defaults:f||{},targets:y&&y.data==="nested"?y.vars.targets:v}),M.kill(),M.parent=M._dp=yn(s),M._start=0,d||es(c)||es(u)){if(C=v.length,L=d&&Uc(d),fn(d))for(_ in d)~Kc.indexOf(_)&&(N||(N={}),N[_]=d[_]);for(S=0;S<C;S++)E=us(i,Jc),E.stagger=0,x&&(E.yoyoEase=x),N&&pi(E,N),w=v[S],E.duration=+mr(c,yn(s),S,w,v),E.delay=(+mr(u,yn(s),S,w,v)||0)-s._delay,!d&&C===1&&E.delay&&(s._delay=u=E.delay,s._start+=u,E.delay=0),M.to(w,E,L?L(S,w,v):0),M._ease=Tt.none;M.duration()?c=u=0:s.timeline=0}else if(g){dr($e(M.vars.defaults,{ease:"none"})),M._ease=li(g.ease||i.ease||"none");var B=0,R,D,z;if(me(g))g.forEach(function(X){return M.to(v,X,">")}),M.duration();else{E={};for(_ in g)_==="ease"||_==="easeEach"||r_(_,g[_],E,g.easeEach);for(_ in E)for(R=E[_].sort(function(X,Z){return X.t-Z.t}),B=0,S=0;S<R.length;S++)D=R[S],z={ease:D.e,duration:(D.t-(S?R[S-1].t:0))/100*c},z[_]=D.v,M.to(v,z,B),B+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return m===!0&&!Wa&&(In=yn(s),Vt.killTweensOf(v),In=0),cn(y,yn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===le(y._time)&&Te(h)&&Fg(yn(s))&&y.data!=="nested")&&(s._tTime=-zt,s.render(Math.max(0,-u)||0)),p&&Fc(yn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-zt&&!u?l:i<zt?0:i,d,m,g,f,p,x,y,v,M;if(!c)Ng(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,a);if(d=le(h%f),h===l?(g=this._repeat,d=c):(g=~~(h/f),g&&g===h/f&&(d=c,g--),d>c&&(d=c)),x=this._yoyo&&g&1,x&&(M=this._yEase,d=c-d),p=Xi(this._tTime,f),d===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(v&&this._yEase&&Yc(v,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render(le(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(Oc(this,u?i:d,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!s&&!r&&(je(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;v&&v.render(i<0?i:!d&&x?-zt:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ea(this,i,r,a),je(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&je(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ea(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Bn(this,1),!r&&!(u&&!s)&&(h||s||x)&&(je(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Sr||Oe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ka(this,l),c=this._ease(l/this._dur),n_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Ms(this,0),this.parent||Rc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?hr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,In&&In.vars.overwrite!==!0)._first||hr(this),this.parent&&a!==this.timeline.totalDuration()&&qi(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Ye(i):s,c=this._ptLookup,u=this._pt,h,d,m,g,f,p,x;if((!r||r==="all")&&Rg(s,l))return r==="all"&&(this._pt=0),hr(this);for(h=this._op=this._op||[],r!=="all"&&(oe(r)&&(f={},Ee(r,function(y){return f[y]=1}),r=f),r=i_(s,r)),x=s.length;x--;)if(~l.indexOf(s[x])){d=c[x],r==="all"?(h[x]=r,g=d,m={}):(m=h[x]=h[x]||{},g=r);for(f in g)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&xs(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&hr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return pr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return pr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Vt.killTweensOf(i,r,a)},t}(ji);$e(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ee("staggerTo,staggerFrom,staggerFromTo",function(o){Qt[o]=function(){var t=new be,e=Ca.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var Ja=function(t,e,n){return t[e]=n},Qc=function(t,e,n){return t[e](n)},s_=function(t,e,n,i){return t[e](i.fp,n)},a_=function(t,e,n){return t.setAttribute(e,n)},Qa=function(t,e){return Ht(t[e])?Qc:Ha(t[e])&&t.setAttribute?a_:Ja},tu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},o_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},eu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},to=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},l_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},c_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},u_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},nu=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ae=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||tu,this.d=l||this,this.set=c||Ja,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=u_,this.m=n,this.mt=r,this.tween=i},o}();Ee(ja+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ya[o]=1});Ue.TweenMax=Ue.TweenLite=Qt;Ue.TimelineLite=Ue.TimelineMax=be;Vt=new be({sortChildren:!1,defaults:Hi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ze.stringFilter=Xc;var Zi=[],as={},h_=[],Dl=0,ca=function(t){return(as[t]||h_).map(function(e){return e()})},Ra=function(){var t=Date.now(),e=[];t-Dl>2&&(ca("matchMediaInit"),Zi.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=He.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ca("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Dl=t,ca("matchMedia"))},iu=function(){function o(e,n){this.selector=n&&La(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Ht(n)&&(r=i,i=n,n=Ht);var a=this,s=function(){var c=Zt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=La(r)),Zt=a,h=i.apply(a,arguments),Ht(h)&&a._r.push(h),Zt=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===Ht?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ji)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=Zi.indexOf(this);~s&&Zi.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),f_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){fn(n)||(n={matches:n});var a=new iu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=He.matchMedia(n[c]),l&&(Zi.indexOf(a)<0&&Zi.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ra):l.addEventListener("change",Ra)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),fs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Yg(i)})},timeline:function(t){return new be(t)},getTweensOf:function(t,e){return Vt.getTweensOf(t,e)},getProperty:function(t,e,n,i){oe(t)&&(t=Ye(t)[0]);var r=ai(t||{}).get,a=n?Dc:Pc;return n==="native"&&(n=""),t&&(e?a((Ie[e]&&Ie[e].get||r)(t,e,n,i)):function(s,l,c){return a((Ie[s]&&Ie[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=Ye(t),t.length>1){var i=t.map(function(u){return Be.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Ie[e],s=ai(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Fi._pt=0,h.init(t,n?u+n:u,Fi,0,[t]),h.render(1,h),Fi._pt&&to(1,Fi)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Be.to(t,pi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Vt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=li(t.ease,Hi.ease)),El(Hi,t||{})},config:function(t){return El(ze,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ie[s]&&!Ue[s]&&ls(e+" effect requires "+s+" plugin.")}),sa[e]=function(s,l,c){return n(Ye(s),$e(l||{},r),c)},a&&(be.prototype[e]=function(s,l,c){return this.add(sa[e](s,fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Tt[t]=li(e)},parseEase:function(t,e){return arguments.length?li(t,e):Tt},getById:function(t){return Vt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new be(t),i,r;for(n.smoothChildTiming=Te(t.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&cn(n,i,i._start-i._delay),i=r;return cn(Vt,n,0),n},context:function(t,e){return t?new iu(t,e):Zt},matchMedia:function(t){return new f_(t)},matchMediaRefresh:function(){return Zi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ra()},addEventListener:function(t,e){var n=as[t]||(as[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=as[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Hg,wrapYoyo:Xg,distribute:Uc,random:kc,snap:Bc,normalize:Wg,getUnit:fe,clamp:Bg,splitColor:Wc,toArray:Ye,selector:La,mapRange:Vc,pipe:Gg,unitize:Vg,interpolate:qg,shuffle:zc},install:Tc,effects:sa,ticker:Oe,updateRoot:be.updateRoot,plugins:Ie,globalTimeline:Vt,core:{PropTween:Ae,globals:Ec,Tween:Qt,Timeline:be,Animation:ji,getCache:ai,_removeLinkedListItem:xs,reverting:function(){return pe},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return Wa=t}}};Ee("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return fs[o]=Qt[o]});Oe.add(be.updateRoot);Fi=fs.to({},{duration:0});var d_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},p_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=d_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},ua=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(oe(r)&&(l={},Ee(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}p_(s,r)}}}},Be=fs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)pe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ua("roundProps",Pa),ua("modifiers"),ua("snap",Bc))||fs;Qt.version=be.version=Be.version="3.11.4";wc=1;vc()&&Yi();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rl,Fn,Ui,eo,ii,Il,no,m_=function(){return typeof window<"u"},An={},Qn=180/Math.PI,Bi=Math.PI/180,Pi=Math.atan2,Fl=1e8,io=/([A-Z])/g,g_=/(left|right|width|margin|padding|x)/i,__=/[\s,\(]\S/,wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ia=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},v_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},M_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ru=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},su=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},y_=function(t,e,n){return t.style[e]=n},S_=function(t,e,n){return t.style.setProperty(e,n)},b_=function(t,e,n){return t._gsap[e]=n},w_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},T_=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},E_=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Wt="transform",sn=Wt+"Origin",A_=function(t,e){var n=this,i=this.target,r=i.style;if(t in An){if(this.tfm=this.tfm||{},t!=="transform"&&(t=wn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Sn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Sn(i,t)),this.props.indexOf(Wt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,e,"")),t=Wt}(r||e)&&this.props.push(t,e,r[t])},au=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},C_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(io,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=no(),r&&!r.isStart&&!n[Wt]&&(au(n),i.uncache=1)}},ou=function(t,e){var n={target:t,props:[],revert:C_,save:A_};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},lu,Fa=function(t,e){var n=Fn.createElementNS?Fn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fn.createElement(t);return n.style?n:Fn.createElement(t)},hn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(io,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,$i(e)||e,1)||""},Ol="O,Moz,ms,Ms,Webkit".split(","),$i=function(t,e,n){var i=e||ii,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ol[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Ol[a]:"")+t},Oa=function(){m_()&&window.document&&(Rl=window,Fn=Rl.document,Ui=Fn.documentElement,ii=Fa("div")||{style:{}},Fa("div"),Wt=$i(Wt),sn=Wt+"Origin",ii.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lu=!!$i("perspective"),no=Be.core.reverting,eo=1)},ha=function o(t){var e=Fa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Ui.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ui.removeChild(e),this.style.cssText=r,a},Nl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},cu=function(t){var e;try{e=t.getBBox()}catch{e=ha.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ha||(e=ha.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Nl(t,["x","cx","x1"])||0,y:+Nl(t,["y","cy","y1"])||0,width:0,height:0}:e},uu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cu(t))},br=function(t,e){if(e){var n=t.style;e in An&&e!==sn&&(e=Wt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(io,"-$1").toLowerCase())):n.removeAttribute(e)}},On=function(t,e,n,i,r,a){var s=new Ae(t._pt,e,n,0,1,a?su:ru);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},zl={deg:1,rad:1,turn:1},L_={grid:1,flex:1},kn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ii.style,l=g_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,f,p,x;return i===a||!r||zl[i]||zl[a]?r:(a!=="px"&&!d&&(r=o(t,e,n,"px")),x=t.getCTM&&uu(t),(m||a==="%")&&(An[e]||~e.indexOf("adius"))?(g=x?t.getBBox()[l?"width":"height"]:t[u],Xt(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(d?a:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,x&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Fn||!f.appendChild)&&(f=Fn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===Oe.time&&!p.uncache?Xt(r/p.width*h):((m||a==="%")&&!L_[hn(f,"display")]&&(s.position=hn(t,"position")),f===t&&(s.position="static"),f.appendChild(ii),g=ii[u],f.removeChild(ii),s.position="absolute",l&&m&&(p=ai(f),p.time=Oe.time,p.width=f[u]),Xt(d?g*r/h:g&&r?h/g*r:0))))},Sn=function(t,e,n,i){var r;return eo||Oa(),e in wn&&e!=="transform"&&(e=wn[e],~e.indexOf(",")&&(e=e.split(",")[0])),An[e]&&e!=="transform"?(r=Tr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ps(hn(t,sn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ds[e]&&ds[e](t,e,n)||hn(t,e)||Cc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?kn(t,e,r,n)+n:r},P_=function(t,e,n,i){if(!n||n==="none"){var r=$i(e,t,1),a=r&&hn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=hn(t,"borderTopColor"))}var s=new Ae(this._pt,t.style,e,0,1,eu),l=0,c=0,u,h,d,m,g,f,p,x,y,v,M,S;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=hn(t,e)||i,t.style[e]=n),u=[n,i],Xc(u),n=u[0],i=u[1],d=n.match(Ii)||[],S=i.match(Ii)||[],S.length){for(;h=Ii.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(f=d[c++]||"")&&(m=parseFloat(f)||0,M=f.substr((m+"").length),p.charAt(1)==="="&&(p=zi(m,p)+M),x=parseFloat(p),v=p.substr((x+"").length),l=Ii.lastIndex-v.length,v||(v=v||ze.units[e]||M,l===i.length&&(i+=v,s.e+=v)),M!==v&&(m=kn(t,e,f,v)||0),s._pt={_next:s._pt,p:y||c===1?y:",",s:m,c:x-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?su:ru;return Sc.test(i)&&(s.e=0),this._pt=s,s},Ul={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},D_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ul[n]||n,e[1]=Ul[i]||i,e.join(" ")},R_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],An[s]&&(l=1,s=s==="transformOrigin"?sn:Wt),br(n,s);l&&(br(n,Wt),a&&(a.svg&&n.removeAttribute("transform"),Tr(n,1),a.uncache=1,au(i)))}},ds={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ae(t._pt,e,n,0,0,R_);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},wr=[1,0,0,1,0,0],hu={},fu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bl=function(t){var e=hn(t,Wt);return fu(e)?wr:e.substr(7).match(yc).map(Xt)},ro=function(t,e){var n=t._gsap||ai(t),i=t.style,r=Bl(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?wr:r):(r===wr&&!t.offsetParent&&t!==Ui&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,Ui.appendChild(t)),r=Bl(t),l?i.display=l:br(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):Ui.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Na=function(t,e,n,i,r,a){var s=t._gsap,l=r||ro(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],x=l[4],y=l[5],v=e.split(" "),M=parseFloat(v[0])||0,S=parseFloat(v[1])||0,E,C,_,w;n?l!==wr&&(C=m*p-g*f)&&(_=M*(p/C)+S*(-f/C)+(f*y-p*x)/C,w=M*(-g/C)+S*(m/C)-(m*y-g*x)/C,M=_,S=w):(E=cu(t),M=E.x+(~v[0].indexOf("%")?M/100*E.width:M),S=E.y+(~(v[1]||v[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&s.smooth?(x=M-c,y=S-u,s.xOffset=h+(x*m+y*f)-x,s.yOffset=d+(x*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=S,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[sn]="0px 0px",a&&(On(a,s,"xOrigin",c,M),On(a,s,"yOrigin",u,S),On(a,s,"xOffset",h,s.xOffset),On(a,s,"yOffset",d,s.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},Tr=function(t,e){var n=t._gsap||new Zc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=hn(t,sn)||"0",u,h,d,m,g,f,p,x,y,v,M,S,E,C,_,w,L,N,B,R,D,z,X,Z,k,Q,$,G,U,nt,K,it;return u=h=d=f=p=x=y=v=M=0,m=g=1,n.svg=!!(t.getCTM&&uu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),i.scale=i.rotate=i.translate="none"),C=ro(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Na(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,C)),S=n.xOrigin||0,E=n.yOrigin||0,C!==wr&&(N=C[0],B=C[1],R=C[2],D=C[3],u=z=C[4],h=X=C[5],C.length===6?(m=Math.sqrt(N*N+B*B),g=Math.sqrt(D*D+R*R),f=N||B?Pi(B,N)*Qn:0,y=R||D?Pi(R,D)*Qn+f:0,y&&(g*=Math.abs(Math.cos(y*Bi))),n.svg&&(u-=S-(S*N+E*R),h-=E-(S*B+E*D))):(it=C[6],nt=C[7],$=C[8],G=C[9],U=C[10],K=C[11],u=C[12],h=C[13],d=C[14],_=Pi(it,U),p=_*Qn,_&&(w=Math.cos(-_),L=Math.sin(-_),Z=z*w+$*L,k=X*w+G*L,Q=it*w+U*L,$=z*-L+$*w,G=X*-L+G*w,U=it*-L+U*w,K=nt*-L+K*w,z=Z,X=k,it=Q),_=Pi(-R,U),x=_*Qn,_&&(w=Math.cos(-_),L=Math.sin(-_),Z=N*w-$*L,k=B*w-G*L,Q=R*w-U*L,K=D*L+K*w,N=Z,B=k,R=Q),_=Pi(B,N),f=_*Qn,_&&(w=Math.cos(_),L=Math.sin(_),Z=N*w+B*L,k=z*w+X*L,B=B*w-N*L,X=X*w-z*L,N=Z,z=k),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,x=180-x),m=Xt(Math.sqrt(N*N+B*B+R*R)),g=Xt(Math.sqrt(X*X+it*it)),_=Pi(z,X),y=Math.abs(_)>2e-4?_*Qn:0,M=K?1/(K<0?-K:K):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fu(hn(t,Wt)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Xt(m),n.scaleY=Xt(g),n.rotation=Xt(f)+s,n.rotationX=Xt(p)+s,n.rotationY=Xt(x)+s,n.skewX=y+s,n.skewY=v+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[sn]=ps(c)),n.xOffset=n.yOffset=0,n.force3D=ze.force3D,n.renderTransform=n.svg?F_:lu?du:I_,n.uncache=0,n},ps=function(t){return(t=t.split(" "))[0]+" "+t[1]},fa=function(t,e,n){var i=fe(e);return Xt(parseFloat(e)+parseFloat(kn(t,"x",n+"px",i)))+i},I_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,du(t,e)},Zn="0deg",lr="0px",$n=") ",du=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,x=n.force3D,y=n.target,v=n.zOrigin,M="",S=x==="auto"&&t&&t!==1||x===!0;if(v&&(h!==Zn||u!==Zn)){var E=parseFloat(u)*Bi,C=Math.sin(E),_=Math.cos(E),w;E=parseFloat(h)*Bi,w=Math.cos(E),a=fa(y,a,C*w*-v),s=fa(y,s,-Math.sin(E)*-v),l=fa(y,l,_*w*-v+v)}p!==lr&&(M+="perspective("+p+$n),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(S||a!==lr||s!==lr||l!==lr)&&(M+=l!==lr||S?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+$n),c!==Zn&&(M+="rotate("+c+$n),u!==Zn&&(M+="rotateY("+u+$n),h!==Zn&&(M+="rotateX("+h+$n),(d!==Zn||m!==Zn)&&(M+="skew("+d+", "+m+$n),(g!==1||f!==1)&&(M+="scale("+g+", "+f+$n),y.style[Wt]=M||"translate(0, 0)"},F_=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,x=n.yOffset,y=n.forceCSS,v=parseFloat(a),M=parseFloat(s),S,E,C,_,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bi,c*=Bi,S=Math.cos(l)*h,E=Math.sin(l)*h,C=Math.sin(l-c)*-d,_=Math.cos(l-c)*d,c&&(u*=Bi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,_*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),S*=w,E*=w)),S=Xt(S),E=Xt(E),C=Xt(C),_=Xt(_)):(S=h,_=d,E=C=0),(v&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(v=kn(m,"x",a,"px"),M=kn(m,"y",s,"px")),(g||f||p||x)&&(v=Xt(v+g-(g*S+f*C)+p),M=Xt(M+f-(g*E+f*_)+x)),(i||r)&&(w=m.getBBox(),v=Xt(v+i/100*w.width),M=Xt(M+r/100*w.height)),w="matrix("+S+","+E+","+C+","+_+","+v+","+M+")",m.setAttribute("transform",w),y&&(m.style[Wt]=w)},O_=function(t,e,n,i,r){var a=360,s=oe(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?Qn:1),c=l-i,u=i+c+"deg",h,d;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Fl)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Fl)%a-~~(c/a)*a)),t._pt=d=new Ae(t._pt,e,n,i,c,x_),d.e=u,d.u="deg",t._props.push(n),d},kl=function(t,e){for(var n in e)t[n]=e[n];return t},N_=function(t,e,n){var i=kl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Wt]=e,s=Tr(n,1),br(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],a[Wt]=e,s=Tr(n,1),a[Wt]=c);for(l in An)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=fe(c),g=fe(u),h=m!==g?kn(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Ae(t._pt,s,l,h,d-h,Ia),t._pt.u=g||0,t._props.push(l));kl(s,i)};Ee("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});ds[t>1?"border"+o:o]=function(s,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return Sn(s,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,f){return m[g]=d[f]=d[f]||d[(f-1)/2|0]}),s.init(l,m,h)}});var pu={name:"css",register:Oa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,h,d,m,g,f,p,x,y,v,M,S,E,C,_;eo||Oa(),this.styles=this.styles||ou(t),_=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(u=e[f],!(Ie[f]&&$c(f,e,n,i,t,r)))){if(m=typeof u,g=ds[f],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=yr(u)),g)g(this,t,f,u,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",Un.lastIndex=0,Un.test(c)||(p=fe(c),x=fe(u)),x?p!==x&&(c=kn(t,f,c,x)+x):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,f),a.push(f),_.push(f,0,s[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,t,r):l[f],oe(c)&&~c.indexOf("random(")&&(c=yr(c)),fe(c+"")||(c+=ze.units[f]||fe(Sn(t,f))||""),(c+"").charAt(1)==="="&&(c=Sn(t,f))):c=Sn(t,f),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),f in wn&&(f==="autoAlpha"&&(d===1&&Sn(t,"visibility")==="hidden"&&h&&(d=0),_.push("visibility",0,s.visibility),On(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=wn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),v=f in An,v){if(this.styles.save(f),M||(S=t._gsap,S.renderTransform&&!e.parseTransform||Tr(t,e.parseTransform),E=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new Ae(this._pt,s,Wt,0,1,S.renderTransform,S,0,-1),M.dep=1),f==="scale")this._pt=new Ae(this._pt,S,"scaleY",S.scaleY,(y?zi(S.scaleY,y+h):h)-S.scaleY||0,Ia),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){_.push(sn,0,s[sn]),u=D_(u),S.svg?Na(t,u,0,E,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==S.zOrigin&&On(this,S,"zOrigin",S.zOrigin,x),On(this,s,f,ps(c),ps(u)));continue}else if(f==="svgOrigin"){Na(t,u,1,E,0,this);continue}else if(f in hu){O_(this,S,f,d,y?zi(d,y+u):u);continue}else if(f==="smoothOrigin"){On(this,S,"smooth",S.smooth,u);continue}else if(f==="force3D"){S[f]=u;continue}else if(f==="transform"){N_(this,u,t);continue}}else f in s||(f=$i(f)||f);if(v||(h||h===0)&&(d||d===0)&&!__.test(u)&&f in s)p=(c+"").substr((d+"").length),h||(h=0),x=fe(u)||(f in ze.units?ze.units[f]:p),p!==x&&(d=kn(t,f,c,x)),this._pt=new Ae(this._pt,v?S:s,f,d,(y?zi(d,y+h):h)-d,!v&&(x==="px"||f==="zIndex")&&e.autoRound!==!1?M_:Ia),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=v_);else if(f in s)P_.call(this,t,f,c,y?y+u:u);else if(f in t)this.add(t,f,c||t[f],y?y+u:u,i,r);else if(f!=="parseTransform"){qa(f,u);continue}v||(f in s?_.push(f,0,s[f]):_.push(f,1,c||t[f])),a.push(f)}}C&&nu(this)},render:function(t,e){if(e.tween._time||!no())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Sn,aliases:wn,getSetter:function(t,e,n){var i=wn[e];return i&&i.indexOf(",")<0&&(e=i),e in An&&e!==sn&&(t._gsap.x||Sn(t,"x"))?n&&Il===n?e==="scale"?w_:b_:(Il=n||{})&&(e==="scale"?T_:E_):t.style&&!Ha(t.style[e])?y_:~e.indexOf("-")?S_:Qa(t,e)},core:{_removeProperty:br,_getMatrix:ro}};Be.utils.checkPrefix=$i;Be.core.getStyleSaver=ou;(function(o,t,e,n){var i=Ee(o+","+t+","+e,function(r){An[r]=1});Ee(t,function(r){ze.units[r]="deg",hu[r]=1}),wn[i[13]]=o+","+t,Ee(n,function(r){var a=r.split(":");wn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ee("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ze.units[o]="px"});Be.registerPlugin(pu);var z_=Be.registerPlugin(pu)||Be;z_.core.Tween;export{an as B,W_ as C,V_ as D,Jr as G,k_ as M,Se as N,gg as P,U_ as S,G_ as T,pg as W,Rn as a,pc as b,un as c,B_ as d,en as e,mc as f,z_ as g,dc as h};
