const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D__5tSmE.js","assets/react-BPlRjfAT.js","assets/hoist-non-react-statics-CuYXql3D.js","assets/react-is-8JwjhRSi.js","assets/Heading-DtMeTpqe.js","assets/Heading-C1-3k5mo.css","assets/CTAButton-Bc00MfFc.js","assets/react-router-CuWZLd_q.js","assets/@remix-run-Dg0JjUVP.js","assets/CTAButton-Da5vyUkg.css","assets/framer-motion-CvWWkNn4.js","assets/Home-BjN4Y5tW.css","assets/About-Bs5qiZ5Z.js","assets/Banner-D_tQXRmR.js","assets/Banner-BMhAO8w8.css","assets/swiper-CnoFRjpI.js","assets/swiper-CRwXTgs7.css","assets/react-intersection-observer-7zgCV4OB.js","assets/About-BFX7Kyxo.css","assets/Services-DhPu-BzZ.js","assets/Services-DsJhJprd.css","assets/Contacts-hc6MoXtP.js","assets/formik-YDElZc0y.js","assets/deepmerge-DhIoniG1.js","assets/lodash-es-DCtyUzqi.js","assets/react-fast-compare-BEmwAo5I.js","assets/yup-CgMa4v__.js","assets/property-expr-DEi1ZLzV.js","assets/tiny-case-BJ7jYKNY.js","assets/toposort-BhSZ4xpk.js","assets/Contacts-CZdhebLi.css","assets/Header-BKuDBcSz.js","assets/react-router-dom-4i71ytLR.js","assets/react-dom-Da-RRt2F.js","assets/scheduler-CzFDRTuY.js","assets/react-icons-BCLK1hxX.js","assets/Header-Cb7T-Ufi.css","assets/Footer-3cjJDqMo.js","assets/Footer-CrlXbtdk.css"])))=>i.map(i=>d[i]);
import{j as e,r as i,R as E}from"./react-BPlRjfAT.js";import{c as x}from"./react-dom-Da-RRt2F.js";import{B as j}from"./react-router-dom-4i71ytLR.js";import{d as v,e as d}from"./react-router-CuWZLd_q.js";import"./hoist-non-react-statics-CuYXql3D.js";import"./react-is-8JwjhRSi.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dg0JjUVP.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const P="modulepreload",R=function(m){return"/art-studio/"+m},f={},c=function(a,l,p){let t=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");t=Promise.all(l.map(s=>{if(s=R(s),s in f)return;f[s]=!0;const u=s.endsWith(".css"),_=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${_}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":P,u||(n.as="script",n.crossOrigin=""),n.href=s,o&&n.setAttribute("nonce",o),document.head.appendChild(n),u)return new Promise((h,y)=>{n.addEventListener("load",h),n.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}return t.then(()=>a()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},g=()=>e.jsx("div",{className:"spinner-container",children:e.jsx("div",{className:"spinner"})}),L=i.lazy(()=>c(()=>import("./Home-D__5tSmE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),O=i.lazy(()=>c(()=>import("./About-Bs5qiZ5Z.js"),__vite__mapDeps([12,1,2,3,4,5,13,6,7,8,9,14,15,16,17,18]))),b=i.lazy(()=>c(()=>import("./Services-DhPu-BzZ.js"),__vite__mapDeps([19,1,2,3,4,5,10,13,6,7,8,9,14,20]))),A=i.lazy(()=>c(()=>import("./Contacts-hc6MoXtP.js"),__vite__mapDeps([21,1,2,3,4,5,22,23,24,25,26,27,28,29,10,30]))),S=i.lazy(()=>c(()=>import("./Header-BKuDBcSz.js"),__vite__mapDeps([31,1,2,3,32,33,34,7,8,35,6,9,36]))),N=i.lazy(()=>c(()=>import("./Footer-3cjJDqMo.js"),__vite__mapDeps([37,1,2,3,6,7,8,9,38])));function w(){return e.jsx(j,{basename:"/art-studio",children:e.jsxs(i.Suspense,{fallback:e.jsx(g,{}),children:[e.jsx(S,{}),e.jsx("main",{className:"main",children:e.jsxs(v,{children:[e.jsx(d,{path:"/",element:e.jsx(L,{})}),e.jsx(d,{path:"/about",element:e.jsx(O,{})}),e.jsx(d,{path:"/services",element:e.jsx(b,{})}),e.jsx(d,{path:"/contacts",element:e.jsx(A,{})})]})}),e.jsx(N,{})]})})}x.createRoot(document.getElementById("root")).render(e.jsx(E.StrictMode,{children:e.jsx(w,{})}));