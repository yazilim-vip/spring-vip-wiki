(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(76),i=n(73),c=(n(74),["0.1.00.220"]);t.default=function(){var e=Object(a.useState)(void 0),t=e[0],n=e[1];Object(a.useEffect)((function(){fetch("https://api.github.com/repos/yazilim-vip/spring-vip/releases").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var s=c[0];return c.filter((function(e){return e!==s})).length,r.a.createElement(l.a,{permalink:"/versions",description:"Neutron JS - CLI Versions page listing all documented site versions"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("h1",null,"Spring VIP - Releases"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("table",null,r.a.createElement("tbody",null,t?Object.keys(t).map((function(e,n){var a=t[e];return r.a.createElement("tr",{key:a.tag_name},r.a.createElement("th",null,a.tag_name),r.a.createElement("td",null,r.a.createElement(i.a,{to:a.html_url},"Release Notes")))})):r.a.createElement("div",null,"loading..."))))))}}}]);