const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DbvNk8mQ.js","assets/react-BPlRjfAT.js","assets/hoist-non-react-statics-CuYXql3D.js","assets/react-is-8JwjhRSi.js","assets/Heading-DtMeTpqe.js","assets/Heading-C1-3k5mo.css","assets/framer-motion-CvWWkNn4.js","assets/react-dom-Da-RRt2F.js","assets/scheduler-CzFDRTuY.js","assets/react-router-dom-WgzufYl3.js","assets/react-router-CYCk9qES.js","assets/@remix-run-BFLWy9pZ.js","assets/react-icons-BCLK1hxX.js","assets/Home-BjN4Y5tW.css","assets/About-DmgYxG1Q.js","assets/Banner-BVFo-QU6.js","assets/Banner-BMhAO8w8.css","assets/swiper-CnoFRjpI.js","assets/swiper-CRwXTgs7.css","assets/react-intersection-observer-7zgCV4OB.js","assets/About-BFX7Kyxo.css","assets/Services-Ch2tnqiv.js","assets/Services-DsJhJprd.css","assets/Contacts-hc6MoXtP.js","assets/formik-YDElZc0y.js","assets/deepmerge-DhIoniG1.js","assets/lodash-es-DCtyUzqi.js","assets/react-fast-compare-BEmwAo5I.js","assets/yup-CgMa4v__.js","assets/property-expr-DEi1ZLzV.js","assets/tiny-case-BJ7jYKNY.js","assets/toposort-BhSZ4xpk.js","assets/Contacts-CZdhebLi.css"])))=>i.map(i=>d[i]);
import{j as e,r as c,R as v}from"./react-BPlRjfAT.js";import{c as g}from"./react-dom-Da-RRt2F.js";import{L as m,B as b}from"./react-router-dom-WgzufYl3.js";import{F as y,a as E}from"./react-icons-BCLK1hxX.js";import{a as C,d as O,e as h}from"./react-router-CYCk9qES.js";import"./hoist-non-react-statics-CuYXql3D.js";import"./react-is-8JwjhRSi.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&_(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function _(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const A="modulepreload",L=function(i){return"/art-studio/"+i},f={},u=function(n,r,_){let t=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");t=Promise.all(r.map(a=>{if(a=L(a),a in f)return;f[a]=!0;const d=a.endsWith(".css"),j=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${j}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":A,d||(l.as="script",l.crossOrigin=""),l.href=a,o&&l.setAttribute("nonce",o),document.head.appendChild(l),d)return new Promise((p,N)=>{l.addEventListener("load",p),l.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${a}`)))})}))}return t.then(()=>n()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},x=({transparent:i})=>{const n=C(),r=()=>{n("/contacts")};return e.jsx("button",{className:`cta-button ${i?"cta--transparent":""}`,onClick:r,children:"Book a call"})},R=()=>{const[i,n]=c.useState(!1),r=()=>{n(!i)};return e.jsxs("header",{className:"header",children:[e.jsx("img",{className:"header__logo",src:"logo.svg",alt:"Logo"}),e.jsx("nav",{className:`header__nav nav ${i?"nav-open":""}`,children:e.jsxs("ul",{className:"nav__list",children:[e.jsx("li",{className:"nav__list-item",children:e.jsx(m,{to:"/",onClick:r,children:"Home"})}),e.jsx("li",{className:"nav__list-item",children:e.jsx(m,{to:"/about",onClick:r,children:"About"})}),e.jsx("li",{className:"nav__list-item",children:e.jsx(m,{to:"/services",onClick:r,children:"Services"})}),e.jsx("li",{className:"nav__list-item",children:e.jsx(m,{to:"/contacts",onClick:r,children:"Contacts"})})]})}),e.jsx("div",{className:"header__btn",children:e.jsx(x,{})}),e.jsx("div",{className:"burger-menu",onClick:r,children:i?e.jsx(y,{size:24}):e.jsx(E,{size:24})})]})},T=()=>e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer__container",children:[e.jsxs("div",{className:"footer__column",children:[e.jsx("h2",{className:"footer__title",children:"Let’s us Collaborate"}),e.jsx(x,{})]}),e.jsxs("div",{className:"footer__column",children:[e.jsx("h3",{className:"footer__heading",children:"SOCIALS"}),e.jsxs("ul",{className:"footer__list",children:[e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"https://instagram.com",target:"_blank",children:"INSTAGRAM"})}),e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"https://twitter.com",target:"_blank",children:"TWITTER"})}),e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"https://facebook.com",target:"_blank",children:"FACEBOOK"})}),e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"https://tiktok.com",target:"_blank",children:"TIKTOK"})})]})]}),e.jsxs("div",{className:"footer__column",children:[e.jsx("h3",{className:"footer__heading",children:"TRANSPARENCY"}),e.jsxs("ul",{className:"footer__list",children:[e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"#",children:"WHAT YOU GET"})}),e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"#",children:"TERMS & CONDITIONS"})}),e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"#",children:"FAQs"})}),e.jsx("li",{className:"footer__list-item",children:e.jsx("a",{href:"#",children:"PRIVACY POLICY"})})]})]})]}),e.jsx("div",{className:"footer__bottom",children:e.jsx("p",{children:"Copyright 2023. Framer template handcrafted by Biyified"})})]}),S=c.lazy(()=>u(()=>import("./Home-DbvNk8mQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),k=c.lazy(()=>u(()=>import("./About-DmgYxG1Q.js"),__vite__mapDeps([14,1,2,3,4,5,15,16,17,18,19,7,8,9,10,11,12,20]))),P=c.lazy(()=>u(()=>import("./Services-Ch2tnqiv.js"),__vite__mapDeps([21,1,2,3,4,5,6,15,16,7,8,9,10,11,12,22]))),I=c.lazy(()=>u(()=>import("./Contacts-hc6MoXtP.js"),__vite__mapDeps([23,1,2,3,4,5,24,25,26,27,28,29,30,31,6,32])));function w(){return e.jsxs(b,{basename:"/art-studio",children:[e.jsx(R,{}),e.jsx("main",{className:"main",children:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(O,{children:[e.jsx(h,{path:"/",element:e.jsx(S,{})}),e.jsx(h,{path:"/about",element:e.jsx(k,{})}),e.jsx(h,{path:"/services",element:e.jsx(P,{})}),e.jsx(h,{path:"/contacts",element:e.jsx(I,{})})]})})}),e.jsx(T,{})]})}g.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(w,{})}));export{x as C};
