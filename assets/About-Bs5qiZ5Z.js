import{j as e,r as l}from"./react-BPlRjfAT.js";import{H as m}from"./Heading-DtMeTpqe.js";import{B as p}from"./Banner-D_tQXRmR.js";import{S as h,P as x,A as w,a as b}from"./swiper-CnoFRjpI.js";import{u as g}from"./react-intersection-observer-7zgCV4OB.js";import"./hoist-non-react-statics-CuYXql3D.js";import"./react-is-8JwjhRSi.js";import"./CTAButton-Bc00MfFc.js";import"./react-router-CuWZLd_q.js";import"./@remix-run-Dg0JjUVP.js";const j=[{photo:"img/about/anne-whiteman.webp",alt:"A woman with long hair wearing a hat.",name:"Anne Whiteman",position:"Creative DIRECTOR",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",linkedin:"https://www.linkedin.com",twitter:"https://twitter.com"},{photo:"img/about/aurelia-hawthorne.webp",alt:"A stylish woman in a white blazer and gold necklace.",name:"Aurelia Hawthorne",position:"head of photography",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",linkedin:"https://www.linkedin.com",twitter:"https://twitter.com"},{photo:"img/about/isabella-kensington.webp",alt:"A woman in a black blazer accessorized with a gold bracelet.",name:"Isabella Kensington",position:"VP Content",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",linkedin:"https://www.linkedin.com",twitter:"https://twitter.com"},{photo:"img/about/genevieve-laurent.webp",alt:"A woman in a black suit sitting on a chair.",name:"Genevieve Laurent",position:"Sales and marketing",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",linkedin:"https://www.linkedin.com",twitter:"https://twitter.com"},{photo:"img/about/profile.webp",alt:"A woman in a black suit sitting on a chair.",name:"Alice Mann",position:"Sales and marketing",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",linkedin:"https://www.linkedin.com",twitter:"https://twitter.com"}],f=()=>e.jsx("div",{className:"team",children:e.jsx(h,{modules:[x,w],spaceBetween:15,slidesPerView:1,pagination:{clickable:!0},autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:2},1100:{slidesPerView:3}},children:j.map((i,t)=>e.jsx(b,{children:e.jsxs("div",{className:"team__card",children:[e.jsx("img",{src:i.photo,alt:i.alt,className:"team__photo",loading:"lazy"}),e.jsx("h3",{className:"team__name",children:i.name}),e.jsx("p",{className:"team__position",children:i.position}),e.jsx("p",{className:"team__text",children:i.text}),e.jsxs("div",{className:"team__socials",children:[e.jsx("a",{href:i.linkedin,target:"_blank",children:"LinkedIn"}),e.jsx("a",{href:i.twitter,target:"_blank",children:"Twitter"})]})]})},t))})}),n=({end:i,duration:t})=>{const[u,o]=l.useState(0),{ref:c,inView:s}=g({triggerOnce:!0});return l.useEffect(()=>{if(s){let a=0;const d=i/(t*1e3/50),r=()=>{a+=d,a>i?o(i):(o(Math.ceil(a)),requestAnimationFrame(r))};requestAnimationFrame(r)}},[s,i,t]),e.jsx("p",{ref:c,className:"about-info__heading--large",children:u})},C=()=>e.jsxs("div",{className:"about-page",children:[e.jsx("section",{className:"about-info",children:e.jsxs("div",{className:"container",children:[e.jsx(m,{subtitle:"Who we are",title:"About us"}),e.jsxs("div",{className:"about-info__container",children:[e.jsxs("div",{className:"about-info__first-row",children:[e.jsx("p",{className:"about-info__heading",children:"Elevate your online presence with our exquisite Framer template"}),e.jsx("p",{className:"about-info__heading--medium",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),e.jsxs("div",{className:"about-info__statistics",children:[e.jsxs("div",{className:"about-info__stat",children:[e.jsx(n,{end:127,duration:5}),e.jsx("span",{children:"Connection"})]}),e.jsxs("div",{className:"about-info__stat",children:[e.jsx(n,{end:400,duration:5}),e.jsx("span",{children:"Members"})]}),e.jsxs("div",{className:"about-info__stat",children:[e.jsx(n,{end:854,duration:5}),e.jsx("span",{children:"Projects"})]})]}),e.jsxs("div",{className:"about-info__text",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fgiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})]})}),e.jsx("section",{className:"about-banner",children:e.jsx(p,{src:"img/about/background.webp",alt:"A person with blonde hair wearing a white blazer, gold jewelry, and a serious expression poses against a warm, brown backdrop.",subtitle:"LET’S TALK",title:"Elegant designs, fine craftsmanship, and attention to detail, which can elevate the visual appeal and professionalism of your brand"})}),e.jsx("section",{className:"about-team",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"about-team__container",children:[e.jsxs("div",{className:"about-team__text",children:[e.jsx("span",{children:"Our Team"}),e.jsx("h2",{children:"Know the incredible people who form our great team"})]}),e.jsx("p",{className:"about-team__description",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),e.jsx(f,{})]})})]});export{C as default};
