(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(30),r=a.n(c),l=(a(67),a(3)),o=a(8),s=a(5),m=a(4),u=a(6),d=a(26),p=a(21),b=a(11),f=a.n(b),h=a(27),g=a.n(h),k=a(61),E=a.n(k),y=(a(68),a(12)),v=a.n(y),j=a(23),w=a.n(j);var T=function(){return i.a.createElement("footer",{className:"mt-5"},i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"border-top justify-content-between p-3"},i.a.createElement(w.a,{className:"p-0",md:3,sm:12},"Simon Myers"),i.a.createElement(w.a,{className:"p-0 d-flex justify-content-end",md:3},"My Portfolio - Version 3"))))},C=a(46),N=a.n(C);var S=function(e){return i.a.createElement(N.a,{className:"bg-transparent jumbotron-fluid p-0"},i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"justify-content-center py-5"},i.a.createElement(w.a,{md:8,sm:12},e.title&&i.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&i.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&i.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},O=a(14),x=a(20);var I=function(e){var t=Object(x.b)({opacity:1,from:{opacity:0}});return i.a.createElement(x.a.div,{className:"g-card-info",style:t})};var M=function(e){return i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(I,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,link1:e.item.link1}))},A=a(47),J=a.n(A),L=a(48),B=a.n(L),_=a(49),H=a.n(_),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(O.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return i.a.createElement(M,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,imgSrc:J.a,selected:!1},{id:1,imgSrc:B.a,selected:!1},{id:2,imgSrc:H.a}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(i.a.Component);var Q=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(P,null))};var D=function(e){return i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"justify-content-center"},i.a.createElement(w.a,{md:8},e.children)))};var W=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title}),i.a.createElement(D,null,i.a.createElement("h1",null,"Je me pr\xe9sente..."),i.a.createElement("p",null,"I\u2019m originally from Stockport, and reside in North Manchester a mile from the city, because I love urban spaces, and the suburbs bore me!"),i.a.createElement("p",null,"I will be shortly completing a \u2018Full Stack Development Coding Bootcamp\u201d at Manchester University. This is a \u2018full immersion\u2019 learning environment. In the first phase I gained a practical understanding of Javascript, HTML 5, CSS and \u2018Bootstrap. In the second phase I\u2019ve been learning about the nodeJS eco-system, Express, templating engines, relational databases (SQL) and the technologies used to manipulate them (Sequelize)."),i.a.createElement("p",null,"I have consolidated my knowledge, in the form of practical projects, and am now using my knowledge to build full stack applications. I am presently learning about non-relational databases (MongoDB) and REACT and will be using them, along with other core technologies, during the completion of my final bootcamp project."),i.a.createElement("p",null,"I am looking forward to using my coding skills in a professional environment in the near future. I am presently engaging in the job search to allow me to do this as soon as possible!"),i.a.createElement("p",null,"My"," ",i.a.createElement("a",{href:"https://docs.google.com/document/d/1cwLg6QSnAdyWBL6xD1JkrPwEk77v7cA9eA_vtb9xyEk/edit"},"resume")," ","is available for anyone who wants to know more!")))};var G=function(e){var t=Object(x.b)({opacity:1,from:{opacity:0}});return i.a.createElement(x.a.div,{className:"g-card-info",style:t},i.a.createElement("p",{className:"g-card-title"},e.title),i.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"click here to access!"),i.a.createElement("br",null))};var F=function(e){return i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(G,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},R=a(50),Y=a.n(R),q=a(51),z=a.n(q),K=a(52),U=a.n(K),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(O.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return i.a.createElement(F,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Github",subTitle:"My GitHub Account",imgSrc:Y.a,link:"https://github.com/hyperkarmic",selected:!1},{id:1,title:"LinkedIn",subTitle:"My Linked In Account",imgSrc:z.a,link:"https://www.linkedin.com/in/simon-myers-8b43bb1a4/"},{id:2,title:"My E-mail and Phone",subTitle:"07513703245",imgSrc:U.a,link:"mailto:randy_pan@yahoo.com",selected:!1}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(i.a.Component);var $=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(V,null))};var X=function(e){var t=Object(x.b)({opacity:1,from:{opacity:0}});return i.a.createElement(x.a.div,{className:"g-card-info",style:t},i.a.createElement("p",{className:"g-card-title"},e.title),i.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Git hub repo"),i.a.createElement("br",null),i.a.createElement("a",{href:e.link1,target:"_blank",rel:"noopener noreferrer"},"Live demo"))};var Z=function(e){return i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(X,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,link1:e.item.link1}))},ee=a(53),te=a.n(ee),ae=a(54),ne=a.n(ae),ie=a(55),ce=a.n(ie),re=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(O.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return i.a.createElement(Z,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Lyricube",subTitle:"An app for searching info and music off lyrics",imgSrc:te.a,link:"https://github.com/Nuelthesupreme/lyricworks",link1:"https://nuelthesupreme.github.io/lyricworks/index.html",selected:!1},{id:1,title:"Employee tracker",subTitle:"An app for tracking various forms employee category information",imgSrc:ne.a,link:"https://github.com/hyperkarmic/w12-employee-tracker",link1:"https://drive.google.com/file/d/1reJwQhyHKoL9fYYeTQeiI0EFS_utcQds/view?usp=sharing",selected:!1},{id:2,title:"Meal Joy",subTitle:"An application for finding and storing recipes",imgSrc:ce.a,link:"https://github.com/hyperkarmic/Meal-Joy",link1:"https://immense-hamlet-67056.herokuapp.com/",selected:!1}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(i.a.Component),le=a(56),oe=a.n(le),se=a(57),me=a.n(se),ue=a(58),de=a.n(ue),pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(O.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return i.a.createElement(Z,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Employee directory",subTitle:"An appliation for finding employees and sorting them by criteria",imgSrc:oe.a,link:"https://github.com/hyperkarmic/react-employee-directory",link1:"https://stark-temple-63683.herokuapp.com/",selected:!1},{id:1,title:"Code Refactor",subTitle:"An analysis of some authentication code",imgSrc:me.a,link:"https://app.gitbook.com/@randy-pan/s/refactoring-code-homework-week-14/",link1:"https://app.gitbook.com/@randy-pan/s/refactoring-code-homework-week-14/",selected:!0},{id:2,title:"Covid Comparison",subTitle:"Comparing Covid Cases By District",imgSrc:de.a,link:"https://github.com/hyperkarmic/project3",link1:"https://github.com/hyperkarmic/project3",selected:!1}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(i.a.Component);var be=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(re,null),i.a.createElement(pe,null))},fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:"Simon Myers",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Changing my life - one concept...",subTitle:"One line of code...",text:"One day at a time..."},about:{title:"About Me"},contact:{title:"Want to know more...?",subTitle:"Just click on the images below"},projects:{title:"Some Projects",subTitle:"Just click on the images below"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement(f.a,{className:"p-0",fluid:!0},i.a.createElement(g.a,{className:"border-bottom",bg:"transparent",expand:"lg"},i.a.createElement(g.a.Brand,null,"Simon Myers"),i.a.createElement(g.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(g.a.Collapse,{id:"navbar-toggle"},i.a.createElement(E.a,{className:"ml-auto"},i.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),i.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),i.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact"),i.a.createElement(d.b,{className:"nav-link",to:"/projects"},"Projects")))),i.a.createElement(p.a,{path:"/",exact:!0,render:function(){return i.a.createElement(Q,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),i.a.createElement(p.a,{path:"/about",render:function(){return i.a.createElement(W,{title:e.state.about.title})}}),i.a.createElement(p.a,{path:"/contact",render:function(){return i.a.createElement($,{title:e.state.contact.title,subTitle:e.state.projects.subTitle})}}),i.a.createElement(p.a,{path:"/projects",render:function(){return i.a.createElement(be,{title:e.state.projects.title,subTitle:e.state.projects.subTitle})}}),i.a.createElement(T,null)))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104);r.a.render(i.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){e.exports=a.p+"static/media/hearts.18cbc2b3.png"},48:function(e,t,a){e.exports=a.p+"static/media/si.9b1d6af7.png"},49:function(e,t,a){e.exports=a.p+"static/media/exclaim.51ddbabc.png"},50:function(e,t,a){e.exports=a.p+"static/media/github.faa12251.png"},51:function(e,t,a){e.exports=a.p+"static/media/linkedin.5b90c3b7.png"},52:function(e,t,a){e.exports=a.p+"static/media/email.b4645497.png"},53:function(e,t,a){e.exports=a.p+"static/media/lyricube.36128b10.png"},54:function(e,t,a){e.exports=a.p+"static/media/employeetracker.9f3ec329.png"},55:function(e,t,a){e.exports=a.p+"static/media/mealjoy.9abbd60c.png"},56:function(e,t,a){e.exports=a.p+"static/media/employeedirectory.5dea2b25.png"},57:function(e,t,a){e.exports=a.p+"static/media/refactor.fcbf2dc9.png"},58:function(e,t,a){e.exports=a.p+"static/media/covid.55c1c11a.png"},62:function(e,t,a){e.exports=a(105)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.2e9d96e4.chunk.js.map