(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{52:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),l=(a(0),a(75)),d={id:"featureScheduledTask",title:"Scheduled Tasks",sidebar_label:"Scheduled Tasks"},c={unversionedId:"featureScheduledTask",id:"featureScheduledTask",isDocsHomePage:!1,title:"Scheduled Tasks",description:"ScheduledTask",source:"@site/docs/featureScheduledTask.md",slug:"/featureScheduledTask",permalink:"/docs/featureScheduledTask",editUrl:"https://github.com/yazilim-vip/spring-vip-wiki/blob/master/docs/featureScheduledTask.md",version:"current",sidebar_label:"Scheduled Tasks",sidebar:"someSidebar",previous:{title:"Generic CRUD Rest",permalink:"/docs/featureGenericCrudRest"},next:{title:"Utility Classes",permalink:"/docs/featureUtilityClasses"}},b=[{value:"ScheduledTask",id:"scheduledtask",children:[{value:"Example",id:"example",children:[]}]}],i={rightToc:b};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"scheduledtask"},"ScheduledTask"),Object(l.b)("p",null,"To define a instance with a task that will be executed periodically."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"log"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"logger will be used for inform (slf4j logger instance)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"threadName"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Name of the thread")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"threadInterval"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Interval of the thread in milliseconds")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"errorTryCountThreshold"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Threshold to try on error condition")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"errorSleepTime"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Time to sleep on error in milliseconds")))),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("p",null,'The following example logs "Hello World" to the consle for each 2 seconds'),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'\n@Component\n@Slf4j\npublic class MyScheduledTask extends ScheduledTask {\n\n    public MyScheduledTask() {\n        super(log\n                , "MyThread"\n                , 2 * 1000\n                , 0\n                , 1000 * 15);\n    }\n\n    @Override\n    protected void doThreadJob() throws Exception {\n        log.info("Hello World!!");\n    }\n}\n\n')))}o.isMDXComponent=!0}}]);