import{S as T,T as z,N as C,M as E,a as G,f as F,D as b,B as k,c as A,P as R,d as W,G as Y,e as N,W as j,g as D,C as I}from"./index-70d3714b.js";const g={materialColor:"#0000FF"},q=document.querySelector("canvas.webgl"),a=new T,x=new z,f=x.load("textures/gradients/3.jpg");f.magFilter=C;const H=new E({color:g.materialColor,gradientMap:f}),d=4,l=new G(new F(.8,.35,100,16),H);l.position.x=2;l.position.y=-d*0;a.add(l);const m=[l],y=new b("#ffffff",1);y.position.set(1,1,0);a.add(y);const v=300,c=new Float32Array(v*3);for(let e=0;e<v;e++)c[e*3+0]=(Math.random()-.5)*10,c[e*3+1]=d*.5-Math.random()*d*m.length,c[e*3+2]=(Math.random()-.5)*10;const M=new k;M.setAttribute("position",new A(c,3));const X=new R({color:g.materialColor,sizeAttenuation:x,size:.03}),K=new W(M,X);a.add(K);const t={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,n.aspect=t.width/t.height,n.updateProjectionMatrix(),s.setSize(t.width,t.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2))});const o=new Y;a.add(o);const n=new N(35,t.width/t.height,.1,100);n.position.z=6;o.add(n);const s=new j({canvas:q,alpha:!0});s.setSize(t.width,t.height);s.setPixelRatio(Math.min(window.devicePixelRatio,2));let h=window.scrollY,w=0;window.addEventListener("scroll",()=>{h=window.scrollY;const e=Math.round(h/t.height);e!=w&&(w=e,D.to(m[w].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))});const i={};i.x=0;i.y=0;window.addEventListener("mousemove",e=>{i.x=e.clientX/t.width-.5,i.y=e.clientY/t.height-.5});const O=new I;let u=0;const B=()=>{const e=O.getElapsedTime(),r=e-u;u=e,n.position.y=-h/t.height*d;const S=i.x*.5,P=-i.y*.5;o.position.x+=(S-o.position.x)*5*r,o.position.y+=(P-o.position.y)*5*r;for(const p of m)p.rotation.x+=r*.1,p.rotation.y+=r*.12;s.render(a,n),window.requestAnimationFrame(B)};B();const L=document.getElementById("mySidenav"),J=document.getElementById("openBtn"),Q=document.getElementById("closeBtn");J.onclick=U;Q.onclick=V;function U(){L.classList.add("active")}function V(){L.classList.remove("active")}
