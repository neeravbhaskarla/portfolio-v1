(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var r=c(7),n=c(31),a=c.n(n),s=(c(55),c(11));var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,c=Object(r.useState)(!1),n=Object(s.a)(c,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){var c=new IntersectionObserver((function(e){var t,c=Object(s.a)(e,1)[0];i(null!==(t=null===c||void 0===c?void 0:c.isIntersecting)&&void 0!==t&&t)}),{rootMargin:"0px",threshold:t}),r=e.current;return r&&c.observe(r),function(){r&&c.unobserve(r)}}),[e,t]),a},o=c(39),l=c.n(o),j=(c(56),c(6));function d(){var e=Object(r.useRef)(null),t=i(e,.5);return Object(j.jsxs)("div",{className:"about","data-scroll-container":!0,id:"about-container",children:[Object(j.jsx)("div",{className:l()("about-heading",{"is-reveal":t}),"data-scroll":!0,children:Object(j.jsx)("span",{children:"A B O U T"})}),Object(j.jsxs)("div",{className:l()("about-info",{"is-reveal":t}),"data-scroll":!0,children:[Object(j.jsx)("span",{children:"My name is Neerav, a passionate self-taught web developer and a freelance software engineer from India. "}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"I like to perform design and develop new websites. Proficient in Java, C#, Python, Javascript, SQL, React. Recently graduated in 2021 and Currently Looking for a Job."})]})]})}c(58);function b(){return Object(j.jsx)("div",{className:"contact",id:"contact-container",children:Object(j.jsxs)("div",{className:"contact-container",children:[Object(j.jsx)("div",{className:"contact-top",children:Object(j.jsxs)("div",{className:"contact-top-links",children:[Object(j.jsxs)("div",{className:"contact-top-links-left",children:[Object(j.jsx)("div",{className:"LinkedIn",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://linkedin.com/in/neeravbhaskarla",target:"_blank",children:"LinkedIn"})}),Object(j.jsx)("div",{className:"Github",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://github.com/neeravbhaskarla",target:"_blank",children:"Github"})})]}),Object(j.jsxs)("div",{className:"contact-top-links-right",children:[Object(j.jsx)("div",{className:"contact-mail",children:Object(j.jsx)("span",{children:"Contact Me"})}),Object(j.jsx)("div",{className:"contact-mailId",children:Object(j.jsx)("a",{href:"mailto:ananthaneerav@gmail.com",children:"ananthaneerav@gmail.com"})})]})]})}),Object(j.jsx)("div",{className:"contact-bottom",children:Object(j.jsx)("div",{className:"copyright",children:Object(j.jsx)("span",{children:"2021 @ Neerav Bhaskarla"})})})]})})}var u=c(13),h=c.n(u),m=c(18),p=c(46),O=c.n(p),x=c(10),f=c(19),v=c(3),g=c(17),N=c(81),k=c(83),w=c(82),y=c(34),I=c(20),M=c(40),C=c(50),E=["open","hinge"],S=new v.Vector3;function P(e){var t=e.open,c=e.hinge,n=Object(f.a)(e,E),a=Object(r.useRef)(),i=Object(N.a)("./mac-draco.glb"),o=i.nodes,l=i.materials,d=Object(r.useState)(!1),b=Object(s.a)(d,2),u=b[0],h=b[1];return Object(r.useEffect)((function(){document.body.style.cursor=u?"pointer":"auto"}),[u]),Object(g.d)((function(e){var c=e.clock.getElapsedTime();e.camera.position.lerp(S.set(0,0,-28),.1),e.camera.lookAt(0,0,0),a.current.rotation.x=v.MathUtils.lerp(a.current.rotation.x,t?Math.cos(c/2)/8+.25:0,.1),a.current.rotation.y=v.MathUtils.lerp(a.current.rotation.y,t?Math.sin(c/4)/4:0,.1),a.current.rotation.z=v.MathUtils.lerp(a.current.rotation.z,t?Math.sin(c/4)/4:0,.1),a.current.position.y=v.MathUtils.lerp(a.current.position.y,t?(-2+Math.sin(c))/3:-4.3,.1)})),Object(j.jsxs)("group",Object(x.a)(Object(x.a)({ref:a},n),{},{onPointerOver:function(e){e.stopPropagation(),h(!0)},onPointerOut:function(e){return h(!1)},dispose:null,children:[Object(j.jsx)(M.a.group,{"rotation-x":c,position:[0,-.04,.41],children:Object(j.jsxs)("group",{position:[0,2.96,-.13],rotation:[Math.PI/2,0,0],children:[Object(j.jsx)("mesh",{material:l.aluminium,geometry:o.Cube008.geometry}),Object(j.jsx)("mesh",{material:l["matte.001"],geometry:o.Cube008_1.geometry}),Object(j.jsx)("mesh",{material:l["screen.001"],geometry:o.Cube008_2.geometry})]})}),Object(j.jsx)("mesh",{material:l.keys,geometry:o.keyboard.geometry,position:[1.79,0,3.45]}),Object(j.jsxs)("group",{position:[0,-.1,3.39],children:[Object(j.jsx)("mesh",{material:l.aluminium,geometry:o.Cube002.geometry}),Object(j.jsx)("mesh",{material:l.trackpad,geometry:o.Cube002_1.geometry})]}),Object(j.jsx)("mesh",{material:l.touchbar,geometry:o.touchbar.geometry,position:[0,-.03,1.2]})]}))}function T(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(I.useSpring)({open:Number(c)});return Object(j.jsx)(C.a.main,{style:{position:"relative",height:y.isMobile?320:520},children:Object(j.jsxs)(g.a,{dpr:[1,2],camera:{position:[0,15,-28],fov:35},children:[Object(j.jsx)(M.a.pointLight,{position:[10,10,10],intensity:1.5}),Object(j.jsxs)(r.Suspense,{fallback:null,children:[Object(j.jsx)("group",{rotation:[0,Math.PI,0],onClick:function(e){e.stopPropagation(),n(!c)},children:Object(j.jsx)(P,{open:c,hinge:a.open.to([0,1],[1.575,-.425])})}),Object(j.jsx)(k.a,{preset:"city"})]}),Object(j.jsx)(w.a,{"rotation-x":Math.PI/2,position:[0,-4.5,0],opacity:.4,width:20,height:20,blur:2,far:4.5})]})})}c(69);var _=["Web Developer & UX Designer","Software Developer / Engineer","Data Analyst / Scientist"];function R(){var e=O()(_[0]),t=Object(s.a)(e,3),c=t[0],n=t[1],a=t[2],i=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return Object(r.useEffect)((function(){var e=setInterval(Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.current,c=0;case 2:if(!(c<15)){e.next=9;break}return n(Math.random().toString(36).substring(2)),e.next=6,i(50);case 6:c++,e.next=2;break;case 9:n(_[_.indexOf(t)+1]||_[0]);case 10:case"end":return e.stop()}}),e)}))),3e3);return function(){return clearInterval(e)}})),Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsxs)("div",{className:"main-left",children:[Object(j.jsxs)("div",{className:"main-left-name",children:[Object(j.jsx)("div",{className:"main-left-name-first",children:Object(j.jsx)("span",{children:"Neerav"})}),Object(j.jsx)("div",{className:"main-left-name-last",children:Object(j.jsx)("span",{children:"Bhaskarla"})})]}),Object(j.jsx)("div",{className:"main-left-roles",children:Object(j.jsxs)("span",{children:["I am a ",c]})})]}),Object(j.jsx)("div",{className:"main-right",children:Object(j.jsx)(r.Suspense,{fallback:null,children:Object(j.jsx)(T,{})})})]})})}function U(){return Object(j.jsx)("div",{className:"home-container","data-scroll-container":!0,children:Object(j.jsx)(R,{})})}c(70);function D(){return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"navbar-container",children:Object(j.jsx)("div",{className:"navbar-left",children:Object(j.jsx)("div",{className:"navbar-left-logo",children:Object(j.jsx)("span",{children:"NB"})})})})})}var L=c.p+"static/media/P1Image1.c67bfd76.png",B=c.p+"static/media/P1Image2.51d535dc.png";c(71);function A(){return Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsx)("div",{className:"project1",children:Object(j.jsxs)("div",{className:"project1-wrapper",children:[Object(j.jsxs)("div",{className:"project1-name",children:[Object(j.jsx)("h6",{children:"E-Commerce"}),Object(j.jsx)("span",{children:"W E B S I T E"})]}),Object(j.jsx)("div",{className:"project1-image1",children:Object(j.jsx)("a",{href:"https://e-commerce-app-2e624.web.app/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:L,alt:"","data-scroll":!0})})}),Object(j.jsx)("div",{className:"project1-image2",children:Object(j.jsx)("a",{href:"https://e-commerce-app-2e624.web.app/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:B,alt:"","data-scroll":!0})})})]})})})}var J=c.p+"static/media/P2Image2.29026841.png";c(72);function G(){return Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsx)("div",{className:"project2",children:Object(j.jsxs)("div",{className:"project2-wrapper",children:[Object(j.jsxs)("div",{className:"project2-name",children:[Object(j.jsx)("h6",{children:"Group Chat"}),Object(j.jsx)("span",{children:"Application"})]}),Object(j.jsx)("div",{className:"project2-image2",children:Object(j.jsx)("a",{href:"https://chat-application-a41a4.web.app",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:J,alt:"","data-scroll":!0})})})]})})})}var W=c.p+"static/media/DashboardImg.84ea63cd.png",z=c.p+"static/media/cardekoImg.de363220.png",V=c.p+"static/media/CRUDtable.93e63a7b.png";c(73);function q(){return Object(j.jsxs)("div",{className:"otherprojects",children:[Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsxs)("div",{className:"otherprojects-wrapper",children:[Object(j.jsxs)("div",{className:"otherprojects-name1",children:[Object(j.jsx)("h6",{children:"Interactive"}),Object(j.jsx)("span",{children:"Dashboard"})]}),Object(j.jsx)("div",{className:"otherprojects-image1",children:Object(j.jsx)("a",{href:"https://dashboard-task01.herokuapp.com/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:W,alt:"",className:"image1","data-scroll":!0})})})]})}),Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsxs)("div",{className:"otherprojects-wrapper",children:[Object(j.jsxs)("div",{className:"otherprojects-name2",children:[Object(j.jsx)("h6",{children:"Cardekho"}),Object(j.jsx)("span",{children:"Clone"})]}),Object(j.jsx)("div",{className:"otherprojects-image2",children:Object(j.jsx)("a",{href:"https://cardekho-clone1.herokuapp.com/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:z,alt:"",className:"image2","data-scroll":!0})})})]})}),Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsxs)("div",{className:"otherprojects-wrapper",children:[Object(j.jsxs)("div",{className:"otherprojects-name3",children:[Object(j.jsx)("h6",{children:"CRUD"}),Object(j.jsx)("span",{children:"Table"})]}),Object(j.jsx)("div",{className:"otherprojects-image3",children:Object(j.jsx)("a",{href:"https://crud-table1.herokuapp.com/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:V,alt:"",className:"image3","data-scroll":!0})})})]})})]})}var F=c(28),Q=c(23);c(74);function X(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){setTimeout((function(){var t=F.b.utils.toArray(".projects-item-wrapper");F.b.to(t,{xPercent:-100*(t.length-1),ease:"none",scrollTrigger:{start:"top top",trigger:e.current,scroller:"#main-container",pin:!0,scrub:.5,end:function(){return"+=".concat(e.current.offsetWidth)}}}),Q.a.refresh()}))}),[]),Object(j.jsx)("div",{"data-scroll-container":!0,id:"projects-container",children:Object(j.jsxs)("div",{className:"projects",ref:e,children:[Object(j.jsx)(A,{}),Object(j.jsx)(G,{}),Object(j.jsx)(q,{})]})})}c(75);var H=c(51);c(77);F.a.registerPlugin(Q.a);var K=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){100!==c&&n(c+1)}),10);return function(){return clearTimeout(e)}}),[c]),Object(j.jsx)("div",{className:"loader-component",children:Object(j.jsx)("h1",{children:c})})};function Y(){var e,t=Object(r.useRef)(null),c=Object(r.useState)(!0),n=Object(s.a)(c,2),a=n[0],i=n[1];e=!a,Object(r.useEffect)((function(){if(e){var t=null,c=document.querySelector("#main-container");(t=new H.a({el:c,smooth:!0,multiplier:1,class:"is-reveal"})).on("scroll",(function(){Q.a.update()})),Q.a.scrollerProxy(c,{scrollTop:function(e){return t?arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.y:null},scrollLeft:function(e){return t?arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.x:null}});var r=function(){t&&t.update()};return Q.a.addEventListener("refresh",r),Q.a.refresh(),function(){t&&(Q.a.removeEventListener("refresh",r),t.destroy(),t=null)}}}),[e]),Object(r.useEffect)((function(){a||!t||"undefined"!==typeof window&&window.document}),[a]);var o=Object(r.useState)(2),l=Object(s.a)(o,2),u=l[0],h=l[1],m=Object(r.useRef)(null),p=function(){window.clearInterval(m.current),i(!1)};return Object(r.useEffect)((function(){return m.current=window.setInterval((function(){h((function(e){return e-1}))}),1e3),function(){return p()}}),[]),Object(r.useEffect)((function(){0===u&&p()}),[u]),"undefined"!==typeof window&&window.document?Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)(K,{}):Object(j.jsx)(r.Suspense,{fallback:null,children:Object(j.jsxs)("div",{id:"main-container","data-scroll-container":!0,ref:t,children:[Object(j.jsx)(D,{}),Object(j.jsx)(U,{}),Object(j.jsx)(X,{}),Object(j.jsx)(d,{}),Object(j.jsx)(b,{})]})})}):null}c(78);var Z=function(){return Object(j.jsxs)("div",{className:"construction",children:[Object(j.jsx)("div",{className:"construction-logo",children:Object(j.jsx)(T,{})}),Object(j.jsx)("div",{className:"construction-title",children:Object(j.jsxs)("span",{children:["Mobile Version ",Object(j.jsx)("br",{})," is Under Construction"]})}),Object(j.jsx)("div",{className:"construction-detail",children:Object(j.jsx)("span",{children:"Coming Soon...."})})]})};function $(){return Object(j.jsx)("div",{children:y.isMobile?Object(j.jsx)(Z,{}):Object(j.jsx)(Y,{})})}a.a.render(Object(j.jsx)($,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.d6d90599.chunk.js.map