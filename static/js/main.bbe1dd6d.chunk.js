(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),l=a(2),u=a.n(l),o=a(5),i=a(1),m=(a(12),a(13),function(e){var t=e.data,a=e.artist.map((function(e){return e.user}));return console.log(a),c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("div",{className:"showResult",key:t},c.a.createElement("img",{src:e.artwork_url,alt:e.policy}),c.a.createElement("div",{className:"basic-info"},c.a.createElement("h4",null,"Artist name: ",a[t].username),c.a.createElement("h5",null,"Song Name: ",e.title," ")),c.a.createElement("a",{href:e.permalink_url},"Listen song"))})))}),p=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(""),p=Object(i.a)(l,2),f=p[0],d=p[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),v=h[0],b=h[1],j=Object(n.useState)(!1),g=Object(i.a)(j,2),k=g[0],O=g[1],N="https://api.soundcloud.com/tracks?q=".concat(v,"&client_id=").concat("PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1");function y(){return(y=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a),d(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),console.log(f);return c.a.createElement("div",{className:"searchMain"},c.a.createElement("div",{className:"inputHolder"},c.a.createElement("input",{className:"searchInput",placeholder:"Search...",type:"text",autoFocus:!0,value:v,onChange:function(e){e.preventDefault(),b(e.target.value)}}),c.a.createElement("button",{className:"searchButton",onClick:function(){O(""!==v&&!k)}},"Go!")),c.a.createElement("div",{className:"displayData"},k?c.a.createElement(m,{data:r,artist:f}):c.a.createElement("div",null,"Looking for a song?")))};var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))};s.a.render(c.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.bbe1dd6d.chunk.js.map