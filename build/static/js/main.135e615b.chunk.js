(this.webpackJsonptrip=this.webpackJsonptrip||[]).push([[0],{29:function(n){n.exports=JSON.parse('{"list":["\uc218\ub2e4\uc2a4\ub7fd\ub2e4.","\uc8fc\uc7a5\uc774 \uac15\ud558\ub2e4.","\ubaa8\ud5d8\uc801\uc774\ub2e4.","\ud798\uc774 \ub118\uce58\ub294 \ud3b8\uc774\ub2e4.","\ub300\ub2f4\ud558\ub2e4.","\uc0c1\uc0c1\ub825\uc774 \ud48d\ubd80\ud558\ub2e4.","\ucc3d\uc758\uc801\uc774\ub2e4.","\ud638\uae30\uc2ec\uc774 \ub9ce\ub2e4.","\uc0dd\uac01\uc774 \ub9ce\ub2e4.","\uc138\ub828\ub41c \ud3b8\uc774\ub2e4."]}')},34:function(n,t,e){n.exports=e.p+"static/media/tripsoda_icon.1d7a8f8c.png"},36:function(n,t,e){n.exports=e(63)},63:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),i=e(28),r=e.n(i),c=e(35),l=e(1),s=e(8),u=e(16),p=e(29),f=e(9);function m(){var n=Object(s.a)(["\n    display: none;\n    opacity: 0;\n    transition: opacity 500ms;\n\n    .question-title {\n        color: #222;\n        font-weight: bold;\n        font-size: 30px;\n        margin-bottom: 100px;\n        height: 40px;\n    }\n\n    &.active {\n        display: block;\n        opacity: 1;\n    }\n\n    li {\n        width: 100%;\n        height: 107px;\n        background: #2f3438;\n        border-radius: 10px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 20px;\n        color: #fff;\n        font-weight: bold;\n        cursor: pointer;\n    }\n\n    li:first-child {\n        margin-bottom: 20px;\n    }\n\n    li:active {\n        background: #35c5f0;\n    }\n"]);return m=function(){return n},n}function d(n){var t=n.title,e=n.count,a=n.index;return o.a.createElement(g,{className:e===a?"active":""},o.a.createElement("h2",{className:"question-title"},t),o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){return n.onClick(a,1)}},"\uadf8\ub807\ub2e4"),o.a.createElement("li",{onClick:function(){return n.onClick(a,-1)}},"\uadf8\ub807\uc9c0 \uc548\ub2e4")))}var g=f.a.div(m());function h(){var n=Object(s.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 50px;\n\n    .current-question span {\n        float: left;\n        color: #35c5f0;\n        font-weight: bold;\n    }\n\n    .current-question span:first-child {\n        font-size: 30px;\n    }\n\n    .current-question span:last-child {\n        font-size: 29px;\n        margin-top: 2px;\n        margin-left: 4px;\n    }\n\n    .total-question {\n        height: 31px;\n        width: 71px;\n        border-radius: 17px;\n        background: #eaebef;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #222;\n        font-weight: bold;\n        font-size: 14px;\n        letter-spacing: 3px;\n        padding-left: 7px;\n    }\n"]);return h=function(){return n},n}function x(n){var t=n.total,e=n.count;return o.a.createElement(b,null,o.a.createElement("p",{className:"current-question"},o.a.createElement("span",null,"Q"),o.a.createElement("span",null,e)),o.a.createElement("span",{className:"total-question"},e,"/",t))}var b=f.a.header(h()),v=e(33),E=e.n(v),w=e(34),y=e.n(w);function k(){var n=Object(s.a)(["\n    max-width: 752px;\n    margin: 0 auto;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 10px;\n    \n    .question-container {\n        margin-top: 100px;\n    }\n\n    .logo {\n        display: flex;\n        justify-content: center;\n        padding-top: 30px;\n    }\n"]);return k=function(){return n},n}function j(n){n.history;var t=Object(a.useState)([]),e=Object(u.a)(t,2),i=e[0],r=(e[1],Object(a.useState)(1)),c=Object(u.a)(r,2),l=c[0],s=c[1],f=p.list,m=f.map((function(n,t){return o.a.createElement(d,{key:t,onClick:g,title:n,index:t+1,count:l})}));function g(n,t){i[n-1]=t,s(l+1),f.length===n&&E.a.get("/getData").then((function(n){console.log(n.data)}))}return o.a.createElement(q,null,o.a.createElement(x,{count:l,total:f.length}),o.a.createElement("div",{className:"question-container"},m),o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:y.a})))}var q=f.a.div(k());function O(n){var t=n.location;return console.log(t.state.list),o.a.createElement("div",null,"\uacb0\uacfc")}e(58);var N=function(){return o.a.createElement(c.a,null,o.a.createElement(l.a,{exact:!0,path:"/",component:j}),o.a.createElement(l.a,{path:"/result",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.135e615b.chunk.js.map