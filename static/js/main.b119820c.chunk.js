(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{55:function(e,t,r){},56:function(e,t,r){},58:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){"use strict";r.r(t);var c=r(7),n=r(32),a=r.n(n),s=(r(55),r(11));var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,r=Object(c.useState)(!1),n=Object(s.a)(r,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){var r=new IntersectionObserver((function(e){var t,r=Object(s.a)(e,1)[0];i(null!==(t=null===r||void 0===r?void 0:r.isIntersecting)&&void 0!==t&&t)}),{rootMargin:"0px",threshold:t}),c=e.current;return c&&r.observe(c),function(){c&&r.unobserve(c)}}),[e,t]),a},o=r(39),l=r.n(o),j=(r(56),r(6));function d(){var e=Object(c.useRef)(null),t=i(e,.5);return Object(j.jsxs)("div",{className:"about","data-scroll-container":!0,id:"about-container",children:[Object(j.jsx)("div",{className:l()("about-heading",{"is-reveal":t}),"data-scroll":!0,children:Object(j.jsx)("span",{children:"A B O U T"})}),Object(j.jsxs)("div",{className:l()("about-info",{"is-reveal":t}),"data-scroll":!0,children:[Object(j.jsx)("span",{children:"My name is Neerav, a passionate self-taught web developer from India. "}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"I like to perform design and develop new websites. Proficient and have a solid knowledge of Data Structures & Algorithms, Object-Oriented Programming and Full Stack Web application development."}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"Experience with working on programming languages such as Java, Python and different Frontend & Backend Frameworks."})]})]})}r(58);function b(){return Object(j.jsx)("div",{className:"contact",id:"contact-container",children:Object(j.jsx)("div",{className:"contact-container",children:Object(j.jsx)("div",{className:"contact-top",children:Object(j.jsx)("div",{className:"contact-top-links",children:Object(j.jsxs)("div",{className:"contact-top-links-items",children:[Object(j.jsx)("div",{className:"LinkedIn",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://linkedin.com/in/neeravbhaskarla",target:"_blank",children:"LinkedIn"})}),Object(j.jsx)("div",{className:"Github",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://github.com/neeravbhaskarla",target:"_blank",children:"Github"})}),Object(j.jsx)("div",{className:"Email",children:Object(j.jsx)("a",{rel:"noreferrer",href:"mailto:ananthaneerav@gmail.com",target:"_blank",children:"Email"})})]})})})})})}var u=r(13),h=r.n(u),m=r(18),p=r(46),O=r.n(p),f=r(10),x=r(19),v=r(3),g=r(17),N=r(81),k=r(83),w=r(82),y=r(22),I=r(20),E=r(40),M=r(50),P=["open","hinge"],S=new v.Vector3;function C(e){var t=e.open,r=e.hinge,n=Object(x.a)(e,P),a=Object(c.useRef)(),i=Object(N.a)("./mac-draco.glb"),o=i.nodes,l=i.materials,d=Object(c.useState)(!1),b=Object(s.a)(d,2),u=b[0],h=b[1];return Object(c.useEffect)((function(){document.body.style.cursor=u?"pointer":"auto"}),[u]),Object(g.d)((function(e){var r=e.clock.getElapsedTime();e.camera.position.lerp(S.set(0,0,-28),.1),e.camera.lookAt(0,0,0),a.current.rotation.x=v.MathUtils.lerp(a.current.rotation.x,t?Math.cos(r/2)/8+.25:0,.1),a.current.rotation.y=v.MathUtils.lerp(a.current.rotation.y,t?Math.sin(r/4)/4:0,.1),a.current.rotation.z=v.MathUtils.lerp(a.current.rotation.z,t?Math.sin(r/4)/4:0,.1),a.current.position.y=v.MathUtils.lerp(a.current.position.y,t?(-2+Math.sin(r))/3:-4.3,.1)})),Object(j.jsxs)("group",Object(f.a)(Object(f.a)({ref:a},n),{},{onPointerOver:function(e){e.stopPropagation(),h(!0)},onPointerOut:function(e){return h(!1)},dispose:null,children:[Object(j.jsx)(E.a.group,{"rotation-x":r,position:[0,-.04,.41],children:Object(j.jsxs)("group",{position:[0,2.96,-.13],rotation:[Math.PI/2,0,0],children:[Object(j.jsx)("mesh",{material:l.aluminium,geometry:o.Cube008.geometry}),Object(j.jsx)("mesh",{material:l["matte.001"],geometry:o.Cube008_1.geometry}),Object(j.jsx)("mesh",{material:l["screen.001"],geometry:o.Cube008_2.geometry})]})}),Object(j.jsx)("mesh",{material:l.keys,geometry:o.keyboard.geometry,position:[1.79,0,3.45]}),Object(j.jsxs)("group",{position:[0,-.1,3.39],children:[Object(j.jsx)("mesh",{material:l.aluminium,geometry:o.Cube002.geometry}),Object(j.jsx)("mesh",{material:l.trackpad,geometry:o.Cube002_1.geometry})]}),Object(j.jsx)("mesh",{material:l.touchbar,geometry:o.touchbar.geometry,position:[0,-.03,1.2]})]}))}function T(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),r=t[0],n=t[1],a=Object(I.useSpring)({open:Number(r)});return Object(j.jsx)(M.a.main,{style:{position:"relative",height:y.isMobile?320:520},children:Object(j.jsxs)(g.a,{dpr:[1,2],camera:{position:[0,15,-28],fov:35},children:[Object(j.jsx)(E.a.pointLight,{position:[10,10,10],intensity:1.5}),Object(j.jsxs)(c.Suspense,{fallback:null,children:[Object(j.jsx)("group",{rotation:[0,Math.PI,0],onClick:function(e){e.stopPropagation(),n(!r)},children:Object(j.jsx)(C,{open:r,hinge:a.open.to([0,1],[1.575,-.425])})}),Object(j.jsx)(k.a,{preset:"city"})]}),Object(j.jsx)(w.a,{"rotation-x":Math.PI/2,position:[0,-4.5,0],opacity:.4,width:20,height:20,blur:2,far:4.5})]})})}r(69);var _=["Software Developer","Blockchain Developer","UX Designer","3D Artist"];function D(){var e=O()(_[0]),t=Object(s.a)(e,3),r=t[0],n=t[1],a=t[2],i=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return Object(c.useEffect)((function(){var e=setInterval(Object(m.a)(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.current,r=0;case 2:if(!(r<15)){e.next=9;break}return n(Math.random().toString(36).substring(2)),e.next=6,i(50);case 6:r++,e.next=2;break;case 9:n(_[_.indexOf(t)+1]||_[0]);case 10:case"end":return e.stop()}}),e)}))),3e3);return function(){return clearInterval(e)}})),Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsxs)("div",{className:"main-left",children:[Object(j.jsxs)("div",{className:"main-left-name",children:[Object(j.jsx)("div",{className:"main-left-name-first",children:Object(j.jsx)("span",{children:"Neerav"})}),Object(j.jsx)("div",{className:"main-left-name-last",children:Object(j.jsx)("span",{children:"Bhaskarla"})})]}),Object(j.jsx)("div",{className:"main-left-roles",children:Object(j.jsxs)("p",{children:["I am a ",y.isMobile?Object(j.jsx)("br",{}):null,Object(j.jsx)("span",{children:r})]})})]}),Object(j.jsx)("div",{className:"main-right",children:Object(j.jsx)(c.Suspense,{fallback:null,children:Object(j.jsx)(T,{})})})]})})}function B(){return Object(j.jsx)("div",{className:"home-container","data-scroll-container":!0,children:Object(j.jsx)(D,{})})}r(70);function R(){return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"navbar-container",children:Object(j.jsx)("div",{className:"navbar-left",children:Object(j.jsx)("div",{className:"navbar-left-logo",children:y.isMobile?Object(j.jsx)("h3",{className:"name",children:"Neerav Bhaskarla"}):Object(j.jsx)("span",{className:"logo",children:"NB"})})})})})}var U=r.p+"static/media/P1Image1.c67bfd76.png",A=r.p+"static/media/P1Image2.51d535dc.png";r(71);function L(){return Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsx)("div",{className:"project1",children:Object(j.jsxs)("div",{className:"project1-wrapper",children:[Object(j.jsxs)("div",{className:"project1-name",children:[Object(j.jsx)("h6",{children:"E-Commerce"}),Object(j.jsx)("span",{children:"W E B S I T E"})]}),Object(j.jsx)("div",{className:"project1-image1",children:Object(j.jsx)("a",{href:"https://e-commerce-app-2e624.web.app/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:U,alt:"","data-scroll":!0})})}),Object(j.jsx)("div",{className:"project1-image2",children:Object(j.jsx)("a",{href:"https://e-commerce-app-2e624.web.app/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:A,alt:"","data-scroll":!0})})})]})})})}var F=r.p+"static/media/P2Image2.29026841.png";r(72);function G(){return Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsx)("div",{className:"project2",children:Object(j.jsxs)("div",{className:"project2-wrapper",children:[Object(j.jsxs)("div",{className:"project2-name",children:[Object(j.jsx)("h6",{children:"Group Chat"}),Object(j.jsx)("span",{children:"Application"})]}),Object(j.jsx)("div",{className:"project2-image2",children:Object(j.jsx)("a",{href:"https://chat-application-a41a4.web.app",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:F,alt:"","data-scroll":!0})})})]})})})}var J=r.p+"static/media/DashboardImg.84ea63cd.png",W=r.p+"static/media/cardekoImg.de363220.png",z=r.p+"static/media/CRUDtable.93e63a7b.png";r(73);function q(){return Object(j.jsxs)("div",{className:"otherprojects",children:[Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsxs)("div",{className:"otherprojects-wrapper",children:[Object(j.jsxs)("div",{className:"otherprojects-name1",children:[Object(j.jsx)("h6",{children:"Interactive"}),Object(j.jsx)("span",{children:"Dashboard"})]}),Object(j.jsx)("div",{className:"otherprojects-image1",children:Object(j.jsx)("a",{href:"https://dashboard-task01.herokuapp.com/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:J,alt:"",className:"image1","data-scroll":!0})})})]})}),Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsxs)("div",{className:"otherprojects-wrapper",children:[Object(j.jsxs)("div",{className:"otherprojects-name2",children:[Object(j.jsx)("h6",{children:"Cardekho"}),Object(j.jsx)("span",{children:"Clone"})]}),Object(j.jsx)("div",{className:"otherprojects-image2",children:Object(j.jsx)("a",{href:"https://cardekho-clone1.herokuapp.com/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:W,alt:"",className:"image2","data-scroll":!0})})})]})}),Object(j.jsx)("div",{className:"projects-item-wrapper",children:Object(j.jsxs)("div",{className:"otherprojects-wrapper",children:[Object(j.jsxs)("div",{className:"otherprojects-name3",children:[Object(j.jsx)("h6",{children:"CRUD"}),Object(j.jsx)("span",{children:"Table"})]}),Object(j.jsx)("div",{className:"otherprojects-image3",children:Object(j.jsx)("a",{href:"https://crud-table1.herokuapp.com/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:z,alt:"",className:"image3","data-scroll":!0})})})]})})]})}var H=r(26),V=r(24);r(74);function X(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){setTimeout((function(){if(!y.isMobile){var t=H.b.utils.toArray(".projects-item-wrapper");H.b.to(t,{xPercent:-100*(t.length-1),ease:"none",scrollTrigger:{start:"top top",trigger:e.current,scroller:"#main-container",pin:!0,scrub:.5,end:function(){return"+=".concat(e.current.offsetWidth)}}}),V.a.refresh()}}))}),[]),Object(j.jsx)("div",{"data-scroll-container":!0,id:"projects-container",children:Object(j.jsxs)("div",{className:"projects",ref:y.isMobile?null:e,children:[Object(j.jsx)(L,{}),Object(j.jsx)(G,{}),Object(j.jsx)(q,{})]})})}r(75);var K=r(51);r(77);H.a.registerPlugin(V.a);var Q=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),r=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){100!==r&&n(r+1)}),5);return function(){return clearTimeout(e)}}),[r]),Object(j.jsx)("div",{className:"loader-component",children:Object(j.jsx)("h1",{children:r})})};function Y(){var e,t=Object(c.useRef)(null),r=Object(c.useState)(!0),n=Object(s.a)(r,2),a=n[0],i=n[1];e=!a,Object(c.useEffect)((function(){if(e){var t=null,r=document.querySelector("#main-container");(t=new K.a({el:r,smooth:!0,multiplier:1,class:"is-reveal"})).on("scroll",(function(){V.a.update()})),V.a.scrollerProxy(r,{scrollTop:function(e){return t?arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.y:null},scrollLeft:function(e){return t?arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.x:null}});var c=function(){t&&t.update()};return V.a.addEventListener("refresh",c),V.a.refresh(),function(){t&&(V.a.removeEventListener("refresh",c),t.destroy(),t=null)}}}),[e]);var o=Object(c.useRef)(null);Object(c.useEffect)((function(){a||!t||"undefined"!==typeof window&&window.document}),[a]),Object(c.useEffect)((function(){H.b.to(o.current,{y:1.5*-window.innerHeight,duration:1.5,delay:1})}),[]);var l=Object(c.useState)(2),u=Object(s.a)(l,2),h=u[0],m=u[1],p=Object(c.useRef)(null),O=function(){window.clearInterval(p.current),i(!1)};return Object(c.useEffect)((function(){return p.current=window.setInterval((function(){m((function(e){return e-1}))}),1e3),function(){return O()}}),[]),Object(c.useEffect)((function(){0===h&&O()}),[h]),"undefined"!==typeof window&&window.document?Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)("div",{ref:o,children:Object(j.jsx)(Q,{})}):Object(j.jsx)(c.Suspense,{fallback:null,children:Object(j.jsxs)("div",{id:"main-container","data-scroll-container":!0,ref:t,children:[Object(j.jsx)(R,{}),Object(j.jsx)(B,{}),Object(j.jsx)(X,{}),Object(j.jsx)(d,{}),Object(j.jsx)(b,{})]})})}):null}r(78);function Z(){return Object(j.jsx)("div",{class:"main-page",children:Object(j.jsx)(Y,{})})}a.a.render(Object(j.jsx)(Z,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b119820c.chunk.js.map