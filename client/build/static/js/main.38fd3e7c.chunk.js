(this.webpackJsonpescala=this.webpackJsonpescala||[]).push([[1],{45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";t.a=s.p+"static/media/logo-dark-gradient.b48d2241.png"},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(24),i=s.n(n),l=(s(56),s(57),s(58),s(59),s(60),s(61),s(13)),r=s(14),o=s(35),j=s(37),d=s(0),m=a.a.lazy((function(){return Promise.all([s.e(4),s.e(11)]).then(s.bind(null,106))})),b=a.a.lazy((function(){return Promise.all([s.e(0),s.e(9)]).then(s.bind(null,105))})),u=a.a.lazy((function(){return s.e(7).then(s.bind(null,103))})),h=a.a.lazy((function(){return Promise.all([s.e(0),s.e(6)]).then(s.bind(null,107))})),O=a.a.lazy((function(){return Promise.all([s.e(0),s.e(8)]).then(s.bind(null,104))})),x=a.a.lazy((function(){return Promise.all([s.e(5),s.e(10)]).then(s.bind(null,108))})),p=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).scrollNavigation=function(){document.documentElement.scrollTop>c.state.pos?c.setState({navClass:"nav-sticky",imglight:!1}):c.setState({navClass:"",imglight:!0})},c.PreLoader=function(){return Object(d.jsx)("div",{id:"preloader",children:Object(d.jsx)("div",{id:"status",children:Object(d.jsxs)("div",{className:"spinner",children:[Object(d.jsx)("div",{className:"bounce1"}),Object(d.jsx)("div",{className:"bounce2"}),Object(d.jsx)("div",{className:"bounce3"})]})})})},c.state={navItems:[{id:1,idnm:"home",navheading:"Home"},{id:2,idnm:"about",navheading:"About Us"},{id:3,idnm:"services",navheading:"Services"},{id:4,idnm:"features",navheading:"Features"},{id:5,idnm:"project",navheading:"Project"},{id:6,idnm:"clients",navheading:"Clients"},{id:7,idnm:"contact",navheading:"Contact Us"}],pos:document.documentElement.scrollTop,imglight:!1,navClass:""},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)(c.Suspense,{fallback:this.PreLoader(),children:[Object(d.jsx)(x,{}),Object(d.jsx)(m,{}),Object(d.jsx)(b,{}),Object(d.jsx)(u,{}),Object(d.jsx)(h,{}),Object(d.jsx)(O,{})]})})}}]),s}(c.Component),g=s(5),f=s(4),v=s(6),N=s(8),w=s(19),y="Bako Doe",k="Web Developer",C="/images/logo.png",S={facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://www.instagram.com/",youtue:"https://www.youtube.com/",dribbble:"https://dribbble.com/"};var L=function(e){var t=e.toggleHeader,s=e.toggleHandler,a=Object(c.useState)(""),n=Object(f.a)(a,2),i=n[0],l=n[1],r=Object(v.g)();return Object(c.useEffect)((function(){l(r.path)}),[r]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:t?"mobile-header py-2 px-3 mt-4 push":"mobile-header py-2 px-3 mt-4",children:[Object(d.jsxs)("button",{className:"menu-icon mr-2",onClick:s,children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsx)(N.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:C,alt:y})}),Object(d.jsx)(N.b,{to:"/",className:"site-title dot ml-2",children:y})]}),Object(d.jsxs)("header",{className:t?"left float-left shadow-dark open":"left float-left shadow-dark",children:[Object(d.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:s,children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(d.jsxs)("div",{className:"header-inner d-flex align-items-start flex-column",children:[Object(d.jsx)(N.b,{to:"/",children:Object(d.jsx)("img",{src:C,alt:y})}),Object(d.jsx)(N.b,{to:"/",className:"site-title dot mt-3",children:y}),Object(d.jsx)("span",{className:"site-slogan",children:k}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"vertical-menu scrollspy",children:[Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-home",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-home"}),"Home"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-home"}),"Home"]})}),Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-about",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-user"}),"About"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-user"}),"About"]})}),Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-services",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-bulb"}),"Services"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-bulb"}),"Services"]})}),Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-experiences",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-graduation"}),"Resume"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-graduation"}),"Resume"]})}),Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-portfolios",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-grid"}),"Works"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-grid"}),"Works"]})}),Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-blogs",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-pencil"}),"Blog"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-pencil"}),"Blog"]})}),Object(d.jsx)("li",{children:"/"===i?Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-contact",spy:!0,smooth:!0,offset:-50,duration:500,children:[Object(d.jsx)("i",{className:"icon-phone"}),"Contact"]}):Object(d.jsxs)(N.b,{to:"/",children:[Object(d.jsx)("i",{className:"icon-phone"}),"Contact"]})})]})}),Object(d.jsxs)("div",{className:"footer mt-auto",children:[Object(d.jsxs)("ul",{className:"social-icons list-inline",children:[S.facebook?Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:S.facebook,children:Object(d.jsx)(w.c,{})})}):null,S.twitter?Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:S.twitter,children:Object(d.jsx)(w.e,{})})}):null,S.instagram?Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:S.instagram,children:Object(d.jsx)(w.d,{})})}):null,S.youtue?Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:S.youtue,children:Object(d.jsx)(w.f,{})})}):null,S.dribbble?Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:S.dribbble,children:Object(d.jsx)(w.b,{})})}):null]}),Object(d.jsxs)("span",{className:"copyright",children:["\xa9 ",(new Date).getFullYear()," Escala Resume"]})]})]})]})]})};var E=function(e){var t=e.children,s=Object(c.useState)(!1),a=Object(f.a)(s,2),n=a[0],i=a[1];return Object(d.jsxs)("div",{className:"site-wrapper",children:[Object(d.jsx)(L,{toggleHeader:n,toggleHandler:function(){i(!n)}}),Object(d.jsx)("main",{className:n?"content float-right push":"content float-right",children:t})]})},A="media/empty.pdf",D="images/about.png",P="Bako Doe",B="London, UK",q="14 August, 1990",H="hello@bako.com",z="I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.";var W=function(){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("img",{src:D,alt:P})}),Object(d.jsxs)("div",{className:"col-md-9",children:[Object(d.jsx)("h2",{className:"mt-4 mt-md-0 mb-4",children:"Hello,"}),Object(d.jsx)("p",{className:"mb-0",children:z}),Object(d.jsxs)("div",{className:"row my-4",children:[Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsxs)("p",{className:"mb-2",children:["Name: ",Object(d.jsx)("span",{className:"text-dark",children:P})]}),Object(d.jsxs)("p",{className:"mb-0",children:["Birthday: ",Object(d.jsx)("span",{className:"text-dark",children:q})]})]}),Object(d.jsxs)("div",{className:"col-md-6 mt-2 mt-md-0 mt-sm-2",children:[Object(d.jsxs)("p",{className:"mb-2",children:["Location: ",Object(d.jsx)("span",{className:"text-dark",children:B})]}),Object(d.jsxs)("p",{className:"mb-0",children:["Email: ",Object(d.jsx)("span",{className:"text-dark",children:H})]})]})]}),Object(d.jsxs)("a",{href:A,className:"btn btn-default mr-3",children:[Object(d.jsx)("i",{className:"icon-cloud-download"}),"Download CV"]}),Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-contact",spy:!0,smooth:!0,duration:500,offset:50,className:"btn btn-alt mt-2 mt-md-0 mt-xs-2",children:[Object(d.jsx)("i",{className:"icon-envelope"}),"Hire me"]})]})]})},I="Bako Doe",F="He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.";var U=function(){return Object(d.jsxs)("section",{className:"hero background parallax shadow-dark d-flex align-items-center",style:{backgroundImage:"url(/images/hero.jpg)"},children:[Object(d.jsxs)("div",{className:"cta mx-auto mt-2",children:[Object(d.jsxs)("h1",{className:"mt-0 mb-4",children:["I\u2019m ",I,Object(d.jsx)("span",{className:"dot"})]}),Object(d.jsx)("p",{className:"mb-4",children:F}),Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-portfolios",spy:!0,smooth:!0,duration:500,offset:50,className:"btn btn-default btn-lg mr-3",children:[Object(d.jsx)("i",{className:"icon-grid"}),"View Portfolio"]}),Object(d.jsx)("div",{className:"spacer d-md-none d-lg-none d-sm-none","data-height":"10"}),Object(d.jsxs)(g.Link,{activeClass:"active",to:"section-contact",spy:!0,smooth:!0,duration:500,offset:50,className:"btn btn-border-light btn-lg",children:[Object(d.jsx)("i",{className:"icon-envelope"}),"Hire me"]})]}),Object(d.jsx)("div",{className:"overlay"})]})};var M=function(e){var t=e.title;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"section-title",children:t}),Object(d.jsx)("div",{className:"spacer","data-height":"80"})]})},R=s(26),T=s.n(R);var V=function(e){var t=e.progress,s=t.name,c=t.percentage,a=e.isVisible,n=window.innerWidth;return Object(d.jsxs)("div",{className:"skill-item",children:[Object(d.jsxs)("div",{className:"skill-info clearfix",children:[Object(d.jsx)("h4",{className:"float-left mb-3 mt-0",children:s}),Object(d.jsxs)("span",{className:"float-right",children:[c,"%"]})]}),Object(d.jsx)("div",{className:"progress",children:n&&n>767?Object(d.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":c,style:a?{width:"".concat(c,"%")}:{width:0}}):Object(d.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":c,style:{width:"".concat(c,"%")}})})]})},Z={skillContent:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",progressData:[{id:1,name:"Wordpress",percentage:85},{id:2,name:"HTML & CSS",percentage:90},{id:3,name:"jQuery",percentage:60},{id:4,name:"Sketch",percentage:70}]};var J=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"mb-0",children:Z.skillContent}),Object(d.jsx)("div",{className:"mt-5",children:Object(d.jsx)("div",{className:"row -mt-50",children:Z.progressData.map((function(e){return Object(d.jsx)("div",{className:"col-md-6 mt-50",children:Object(d.jsx)(T.a,{once:!0,children:Object(d.jsx)(V,{progress:e})})},e.id)}))})})]})},Y=s(34),K=s.n(Y);var $=function(e){var t=e.funfact,s=t.title,c=t.count,a=t.icon,n=void 0===a?null:a,i=e.isVisible,l=window.innerWidth;return Object(d.jsxs)("div",{className:"fact-item text-center",children:[n?Object(d.jsx)("i",{className:"".concat(n," icon-circle")}):null,Object(d.jsx)("h2",{className:"count",children:l&&l>767?Object(d.jsx)(K.a,{end:i?c:0}):Object(d.jsx)(K.a,{end:c})}),Object(d.jsx)("span",{children:s})]})},G=[{id:1,title:"Projects completed",count:157,icon:"icon-like"},{id:2,title:"Cup of coffee",count:2765,icon:"icon-cup"},{id:3,title:"Happy customers",count:350,icon:"icon-emotsmile"},{id:4,title:"Awards won",count:29,icon:"icon-trophy"}];var Q=function(){return Object(d.jsxs)("section",{className:"shadow-dark color-white background parallax padding-50",children:[Object(d.jsx)("div",{className:"row relative z-1 -mt-50",children:G.map((function(e){return Object(d.jsx)("div",{className:"col-md-3 col-sm-6 mt-50",children:Object(d.jsx)(T.a,{once:!0,children:Object(d.jsx)($,{funfact:e})})},e.id)}))}),Object(d.jsx)("div",{className:"overlay"})]})};var _=function(e){var t=e.service,s=t.name,c=t.content,a=t.icon;return Object(d.jsxs)("div",{className:"service-item text-center",children:[Object(d.jsx)("i",{className:"".concat(a," icon-simple")}),Object(d.jsx)("h4",{className:"my-3",children:s}),Object(d.jsx)("p",{className:"mb-0",children:c})]})},X=[{id:1,name:"Development",content:"Lorem ipsum dolor sit amet consectetuer elit.",icon:"icon-globe"},{id:2,name:"Design",content:"Lorem ipsum dolor sit amet consectetuer elit.",icon:"icon-chemistry"},{id:3,name:"Advertising",content:"Lorem ipsum dolor sit amet consectetuer elit.",icon:"icon-directions"},{id:4,name:"SEO",content:"Lorem ipsum dolor sit amet consectetuer elit.",icon:"icon-rocket"},{id:5,name:"Copy Write",content:"Lorem ipsum dolor sit amet consectetuer elit.",icon:"icon-note"},{id:6,name:"Support",content:"Lorem ipsum dolor sit amet consectetuer elit.",icon:"icon-bubbles"}];var ee=function(){return Object(d.jsx)("div",{className:"row -mt-20",children:X.map((function(e){return Object(d.jsx)("div",{className:"col-md-4 col-sm-6 mt-20",children:Object(d.jsx)(_,{service:e})},e.id)}))})};var te=function(e){var t=e.experience,s=t.year,c=t.degree,a=t.content;return Object(d.jsxs)("div",{className:"entry",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("span",{children:s})}),Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)("h4",{className:"mt-0",children:c}),Object(d.jsx)("p",{children:a})]})]})},se=[{id:1,year:"2019 - Present",degree:"Academic Degree",content:"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa."},{id:2,year:"2018 - 2015",degree:"Bachelor\u2019s Degree",content:"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa."},{id:3,year:"2015 - 2012",degree:"Honours Degree",content:"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa."}];var ce=function(){return Object(d.jsxs)("div",{className:"timeline",children:[se.map((function(e){return Object(d.jsx)(te,{experience:e},e.id)})),Object(d.jsx)("span",{className:"timeline-line"})]})};var ae=function(e){var t=e.portfolio,s=t.id,c=t.name,a=t.category,n=t.image,i=t.slug;return Object(d.jsx)("a",{href:"works/".concat(s,"/").concat(i),children:Object(d.jsxs)("div",{className:"portfolio-item",children:[Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("h4",{className:"title",children:c}),Object(d.jsx)("span",{className:"term",children:a.join(",  ")})]}),Object(d.jsx)("span",{className:"plus-icon",children:"+"}),Object(d.jsxs)("div",{className:"thumb",children:[Object(d.jsx)("img",{src:n,alt:c}),Object(d.jsx)("div",{className:"mask"})]})]})})},ne=[{id:1,name:"All Projects"},{id:2,name:"Branding"},{id:3,name:"Creative"},{id:4,name:"Design"},{id:5,name:"Art"}],ie=[{id:1,name:"Creative Art",category:["creative"],image:"images/portfolio/1.jpg",slug:"creative-art"},{id:2,name:"Apple USB",category:["creative","design"],image:"images/portfolio/2.jpg",slug:"apple-usb"},{id:3,name:"Work Space",category:["branding"],image:"images/portfolio/3.jpg",slug:"work-space"},{id:4,name:"Creative Bulb",category:["creative"],image:"images/portfolio/4.jpg",slug:"creative-bulb"},{id:5,name:"Iphone 8",category:["branding","art"],image:"images/portfolio/5.jpg",slug:"iphone-8"},{id:6,name:"Minimal Art",category:["design","creative"],image:"images/portfolio/6.jpg",slug:"minimal-art"},{id:7,name:"Creative Art",category:["creative"],image:"images/portfolio/1.jpg",slug:"creative-art"},{id:8,name:"Apple USB",category:["creative","design"],image:"images/portfolio/2.jpg",slug:"apple-usb"},{id:9,name:"Work Space",category:["branding"],image:"images/portfolio/3.jpg",slug:"work-space"}];var le=function(){var e=Object(c.useState)(ie),t=Object(f.a)(e,1)[0],s=Object(c.useState)(6),a=Object(f.a)(s,2),n=a[0],i=a[1],l=Object(c.useState)(3),r=Object(f.a)(l,1)[0],o=Object(c.useState)(""),j=Object(f.a)(o,2),m=j[0],b=j[1],u=Object(c.useState)([]),h=Object(f.a)(u,2),O=h[0],x=h[1],p=Object(c.useState)(!1),g=Object(f.a)(p,2),v=g[0],N=g[1];Object(c.useEffect)((function(){b(ne[0].name.toLowerCase()),x(t.filter((function(e){return e.id<=6})))}),[t]);var w=function(e){console.log(e.target.value),e.preventDefault();var s,c=e.target.value?e.target.value.toLowerCase():e.target.textContent.toLowerCase();b(c),s=c===ne[0].name.toLowerCase()?t.filter((function(e){return e.id<=n})):t.filter((function(e){return e.category.includes(c)&&e.id<=n})),x(s)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"portfolio-filter list-inline",children:ne.map((function(e){return Object(d.jsx)("li",{className:e.name.toLowerCase()===m?"list-inline-item current":"list-inline-item",onClick:w,children:e.name},e.id)}))}),Object(d.jsx)("div",{className:"pf-filter-wrapper mb-4",children:Object(d.jsx)("select",{className:"portfolio-filter-mobile",onChange:function(e){return w(e)},children:ne.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.id)}))})}),Object(d.jsx)("div",{className:"row portfolio-wrapper",children:O.map((function(e){return Object(d.jsx)("div",{className:"col-md-4 col-sm-6 grid-item",children:Object(d.jsx)(ae,{portfolio:e})},e.id)}))}),v?null:Object(d.jsx)("div",{className:"load-more text-center mt-4",children:Object(d.jsxs)("a",{href:"#!",className:"btn btn-default",onClick:function(e){return function(e){e.preventDefault();var s=n+r;if(s>t.length)N(!0);else if(i(s),m===ne[0].name.toLowerCase())x(t.filter((function(e){return e.id<=s})));else{var c=t.filter((function(e){return e.category.includes(m)&&e.id<=s}));x(c)}}(e)},children:[Object(d.jsx)("i",{className:"fas fa-circle-notch"})," Load more"]})})]})},re=s(17),oe=s(18),je={phone:["+44 1632 960428"],email:["hello@bako.com"],location:"West Palm Beach, 4669 Travis Street"};var de=function(){var e=Object(c.useState)({name:"",email:"",subject:"",message:""}),t=Object(f.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(f.a)(n,2),l=i[0],r=i[1],o=Object(c.useState)(""),j=Object(f.a)(o,2),m=j[0],b=j[1],u=function(e){a(Object(oe.a)(Object(oe.a)({},s),{},Object(re.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-4 mb-4 mb-md-0",children:[Object(d.jsxs)("div",{className:"contact-info mb-5",children:[Object(d.jsx)("i",{className:"icon-phone"}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("h5",{children:"Phone"}),je.phone.map((function(e,t){return Object(d.jsx)("span",{children:e},t)}))]})]}),Object(d.jsxs)("div",{className:"contact-info mb-5",children:[Object(d.jsx)("i",{className:"icon-envelope"}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("h5",{children:"Email address"}),je.email.map((function(e,t){return Object(d.jsx)("span",{children:e},t)}))]})]}),Object(d.jsxs)("div",{className:"contact-info",children:[Object(d.jsx)("i",{className:"icon-location-pin"}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("h5",{children:"Location"}),Object(d.jsx)("span",{children:je.location})]})]})]}),Object(d.jsxs)("div",{className:"col-md-8",children:[Object(d.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),s.name?s.email?s.subject?s.message?(r(!1),b("You message has been sent!!!")):(r(!0),b("Message is required")):(r(!0),b("Subject is required")):(r(!0),b("Email is required")):(r(!0),b("Name is required"))},children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"column col-md-6",children:Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"Your name",onChange:u,value:s.name})})}),Object(d.jsx)("div",{className:"column col-md-6",children:Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"email",className:"form-control",name:"email",placeholder:"Email address",onChange:u,value:s.email})})}),Object(d.jsx)("div",{className:"column col-md-12",children:Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",name:"subject",placeholder:"Subject",onChange:u,value:s.subject})})}),Object(d.jsx)("div",{className:"column col-md-12",children:Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("textarea",{name:"message",className:"form-control",rows:"5",placeholder:"Message",onChange:u,value:s.message})})})]}),Object(d.jsxs)("button",{type:"submit",name:"submit",value:"Submit",className:"btn btn-default",children:[Object(d.jsx)("i",{className:"icon-paper-plane"}),"Send Message"]})]}),l&&m?Object(d.jsx)("div",{className:"alert alert-danger mt-4",children:m}):!l&&m?Object(d.jsx)("div",{className:"alert alert-success mt-4",children:m}):null]})]})};var me=function(){return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(d.jsxs)(E,{children:[Object(d.jsx)(g.Element,{name:"section-home",children:Object(d.jsx)(U,{})}),Object(d.jsx)(g.Element,{name:"section-about",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"About Me"}),Object(d.jsx)(W,{})]})}),Object(d.jsx)(g.Element,{name:"section-experiences",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"Experience"}),Object(d.jsx)(ce,{})]})}),Object(d.jsx)(g.Element,{name:"section-experiences",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"Experience"}),Object(d.jsx)(ce,{})]})}),Object(d.jsx)(g.Element,{name:"section-skills",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"My skills"}),Object(d.jsx)(J,{})]})}),Object(d.jsx)(g.Element,{name:"section-funfacts",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(g.Element,{name:"section-services",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"Services"}),Object(d.jsx)(ee,{})]})}),Object(d.jsx)(g.Element,{name:"section-portfolios",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"Portfolio"}),Object(d.jsx)(le,{})]})}),Object(d.jsx)(g.Element,{name:"section-contact",children:Object(d.jsxs)("section",{className:"shadow-blue white-bg padding",children:[Object(d.jsx)(M,{title:"Get in touch"}),Object(d.jsx)(de,{})]})})]})},be=(s(45),s(82)),ue=function(e,t,s){var a=Object(c.useState)(e),n=Object(f.a)(a,2),i=n[0],l=n[1],r=Object(c.useState)({}),o=Object(f.a)(r,2),j=o[0],d=o[1],m=Object(c.useState)(!1),b=Object(f.a)(m,2),u=b[0],h=b[1];return Object(c.useEffect)((function(){u&&(0===Object.keys(j).length?(s(),h(!1)):h(!1))}),[j,u,s]),{handleSubmit:function(e){e.preventDefault();var s=t(i);d(s),h(!0)},handleChange:function(e){l(Object(oe.a)(Object(oe.a)({},i),{},Object(re.a)({},e.target.name,e.target.value)))},values:i,errors:j,isSubmitting:u,setValues:l}},he=function(e){var t={};return Object.keys(e).forEach((function(s){switch(s){case"username":e.username||(t.username="Required username.");break;case"email":e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address."):t.email="Required Email.";break;case"password":e.password?e.password.length<6&&(t.password="Password must be at least 6 characters."):t.password="Required Password."}})),t},Oe=(s(46),s(47),s(48)),xe=s.p+"static/media/graphic3.8296bc0f.svg",pe=function(){var e=ue({email:"",password:""},he,(function(){be.a.post("/auth/signin",c).then((function(e){localStorage.setItem("jwt",e.data),window.location="/admin"})).catch((function(e){var t=e.response.data;"Username/Email not found"===t&&console.log("Username not found"),"Invalid password"===t&&console.log("Wrong Password")}))})),t=e.handleSubmit,s=e.handleChange,c=e.values,n=e.isSubmitting;return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("div",{class:"form-body without-side",children:[Object(d.jsx)("div",{class:"website-logo",children:Object(d.jsx)("div",{class:"logo",children:Object(d.jsx)("img",{class:"logo-size",src:Oe.a,alt:""})})}),Object(d.jsxs)("div",{class:"row",children:[Object(d.jsxs)("div",{class:"img-holder",children:[Object(d.jsx)("div",{class:"bg"}),Object(d.jsx)("div",{class:"info-holder",children:Object(d.jsx)("img",{src:xe,alt:""})})]}),Object(d.jsx)("div",{class:"form-holder",children:Object(d.jsx)("div",{class:"form-content",children:Object(d.jsxs)("div",{class:"form-items",children:[Object(d.jsx)("h3",{children:"Bienvenid@ de vuelta"}),Object(d.jsx)("p",{children:"Entra a editar tu resume o a aplicar a miles de vacantes al insante."}),Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("input",{class:"form-control",type:"text",name:"email",required:!0,value:c.email,onChange:s,placeholder:"Username or Email",style:{color:"#fff"}}),Object(d.jsx)("input",{class:"form-control",type:"password",required:!0,name:"password",value:c.password,onChange:s,placeholder:"Password",autoComplete:"password",style:{color:"#fff"}}),Object(d.jsx)("div",{class:"form-button",children:Object(d.jsx)("button",{id:"submit",type:"submit",disabled:n,class:"btn btn-primary btn-block btn-sm",children:"Login"})})]}),Object(d.jsx)("div",{class:"other-links"}),Object(d.jsx)("div",{class:"page-links",children:Object(d.jsx)("a",{href:"register22.html",children:"\xbfNo tienes cuenta?"})})]})})})]})]})})},ge=s.p+"static/media/logo-light.3cbbacbf.svg",fe=function(){var e=Object(v.f)(),t=Object(c.useState)(""),s=Object(f.a)(t,2),n=s[0],i=s[1],l=Object(c.useState)(""),r=Object(f.a)(l,2),o=r[0],j=r[1],m=Object(c.useState)(""),b=Object(f.a)(m,2),u=b[0],h=b[1],O=Object(c.useState)(""),x=Object(f.a)(O,2),p=x[0],g=x[1],w=Object(c.useState)(""),y=Object(f.a)(w,2),k=y[0],C=y[1],S=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)?fetch("/auth/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,lastname:o,slug:u,password:k,email:p})}).then((function(e){return e.json()})).then((function(t){t.error?console.log("error"):(console.log("registrado"),e.push("/entrar"))})).catch((function(e){console.log(e)})):console.log("error")};return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("div",{class:"form-body without-side",children:[Object(d.jsx)("div",{class:"website-logo",children:Object(d.jsx)("a",{href:"index.html",children:Object(d.jsx)("div",{class:"logo",children:Object(d.jsx)("img",{class:"logo-size",src:ge,alt:""})})})}),Object(d.jsxs)("div",{class:"row",children:[Object(d.jsxs)("div",{class:"img-holder",children:[Object(d.jsx)("div",{class:"bg"}),Object(d.jsx)("div",{class:"info-holder",children:Object(d.jsx)("img",{src:xe,alt:""})})]}),Object(d.jsx)("div",{class:"form-holder",children:Object(d.jsx)("div",{class:"form-content",children:Object(d.jsxs)("div",{class:"form-items",children:[Object(d.jsx)("h3",{children:"Registrate"}),Object(d.jsx)("p",{children:"Access to the most powerfull tool in the entire design and web industry."}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{class:"form-control",type:"text",name:"name",placeholder:"Nombre",value:n,onChange:function(e){return i(e.target.value)},required:!0,style:{color:"#fff"}}),Object(d.jsx)("input",{class:"form-control",type:"text",name:"name",placeholder:"Apellido",value:o,onChange:function(e){return j(e.target.value)},required:!0,style:{color:"#fff"}}),Object(d.jsx)("input",{class:"form-control",type:"text",name:"slug",placeholder:"escala.ai/usuario",value:u,onChange:function(e){return h(e.target.value)},required:!0,style:{color:"#fff"}}),Object(d.jsx)("input",{class:"form-control",type:"email",name:"email",value:p,onChange:function(e){return g(e.target.value)},placeholder:"E-mail Address",required:!0,style:{color:"#fff"}}),Object(d.jsx)("input",{class:"form-control",type:"password",name:"password",placeholder:"Password",value:k,onChange:function(e){return C(e.target.value)},required:!0,style:{color:"#fff"}}),Object(d.jsx)("div",{class:"form-button",children:Object(d.jsx)("button",{id:"submit",type:"submit",class:"btn btn-primary btn-block btn-sm",onClick:function(){return S()},children:"Registrarme"})})]}),Object(d.jsx)("div",{class:"other-links"}),Object(d.jsx)("div",{class:"page-links",children:Object(d.jsx)(N.b,{to:"/entrar",children:"Login to account"})})]})})})]})]})})},ve=function(){return Object(d.jsx)(N.a,{children:Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(v.a,{path:"/entrar",component:pe}),Object(d.jsx)(v.a,{path:"/registro",component:fe}),Object(d.jsx)(v.a,{path:"/resume",children:Object(d.jsx)(me,{})})]})})};i.a.render(Object(d.jsx)(N.a,{children:Object(d.jsx)(ve,{})}),document.getElementById("root"))}},[[80,2,3]]]);
//# sourceMappingURL=main.38fd3e7c.chunk.js.map