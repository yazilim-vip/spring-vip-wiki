(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),a=(r(0),r(77)),c=r(78),o={id:"gettingStartedUsage",title:"Usage",sidebar_label:"Usage"},s={unversionedId:"gettingStartedUsage",id:"gettingStartedUsage",isDocsHomePage:!1,title:"Usage",description:"Add library as dependency",source:"@site/docs/gettingStartedUsage.md",slug:"/gettingStartedUsage",permalink:"/docs/gettingStartedUsage",editUrl:"https://github.com/yazilim-vip/spring-vip-wiki/blob/master/docs/gettingStartedUsage.md",version:"current",sidebar_label:"Usage",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Generic CRUD Service",permalink:"/docs/featureGenericCrudService"}},d=[{value:"Add library as dependency",id:"add-library-as-dependency",children:[]},{value:"Create Generic Service and REST",id:"create-generic-service-and-rest",children:[{value:"1) Create an Entity class",id:"1-create-an-entity-class",children:[]},{value:"2) Create a new repository",id:"2-create-a-new-repository",children:[]},{value:"3) Create a new service interface",id:"3-create-a-new-service-interface",children:[]},{value:"4) Implement service",id:"4-implement-service",children:[]},{value:"5) Create generic rest controller",id:"5-create-generic-rest-controller",children:[]}]}],l={rightToc:d};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"add-library-as-dependency"},"Add library as dependency"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>vip.yazilim.libs</groupId>\n    <artifactId>spring-vip</artifactId>\n    <version>VERSION</version>\n</dependency>\n")),Object(a.b)("h2",{id:"create-generic-service-and-rest"},"Create Generic Service and REST"),Object(a.b)("p",null,"At the end of the day, you will have the following;"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"IPersonService:")," provides basic CRUD methods for ",Object(a.b)("inlineCode",{parentName:"li"},"Person")," entity. ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/featureGenericCrudService"}),"see")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"RestPerson:")," provides selected REST api resources for ",Object(a.b)("inlineCode",{parentName:"li"},"Person")," entity. ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/featureGenericCrudRest"}),"see"))),Object(a.b)("h3",{id:"1-create-an-entity-class"},"1) Create an Entity class"),Object(a.b)(c.a,{id:"868d2ef37d839123f05f189ec4fd9a76",file:"Person.java",mdxType:"Gist"}),Object(a.b)("h3",{id:"2-create-a-new-repository"},"2) Create a new repository"),Object(a.b)(c.a,{id:"868d2ef37d839123f05f189ec4fd9a76",file:"IPersonRepo.java",mdxType:"Gist"}),Object(a.b)("h3",{id:"3-create-a-new-service-interface"},"3) Create a new service interface"),Object(a.b)(c.a,{id:"868d2ef37d839123f05f189ec4fd9a76",file:"IPersonService.java",mdxType:"Gist"}),Object(a.b)("h3",{id:"4-implement-service"},"4) Implement service"),Object(a.b)(c.a,{id:"868d2ef37d839123f05f189ec4fd9a76",file:"PersonServiceImpl.java",mdxType:"Gist"}),Object(a.b)("h3",{id:"5-create-generic-rest-controller"},"5) Create generic rest controller"),Object(a.b)(c.a,{id:"868d2ef37d839123f05f189ec4fd9a76",file:"RestPerson.java",mdxType:"Gist"}))}p.isMDXComponent=!0},78:function(e,t,r){"use strict";var n=r(0),i=r.n(n);r(7);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return a(this,t),c(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,r=e.file;return"https://gist.github.com/"+t+".js"+(r?"?file="+r:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,r=e.file,n=this.iframeNode,i=n.document;n.contentDocument?i=n.contentDocument:n.contentWindow&&(i=n.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(r?"gist-"+t+"-"+r:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(a),i.close()},t.prototype.render=function(){var e=this,t=this.props,r=t.id,n=t.file;return i.a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:n?"gist-"+r+"-"+n:"gist-"+r})},t}(i.a.PureComponent);t.a=o}}]);