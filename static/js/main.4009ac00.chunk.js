(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),r=n.n(i),l=n(2),s=(n(13),n(8)),u=n(6),a=n(0),d=function(t){var e=t.todos,n=t.setTodos,o=Object(c.useState)(""),i=Object(l.a)(o,2),r=i[0],d=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){n((function(e){return e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{completed:!t.completed}):e}))}))}})}),t.text,Object(a.jsx)("button",{type:"button",onClick:function(){n(e.filter((function(e){return t.id!==e.id})))},children:"X"})]},t.id)}))}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r&&(n((function(t){return[].concat(Object(s.a)(t),[{text:r,completed:!1,id:t.length+1}])})),d(""))},children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"todo",placeholder:"Add todo",value:r,onChange:function(t){d(t.target.value)}})}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})]})};var j=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),s=r[0],u=r[1],j=Object(c.useState)(""),b=Object(l.a)(j,2),h=b[0],O=b[1],p=n.filter((function(t){switch(h){case"active":return!1===t.completed;case"completed":return!0===t.completed;default:return t}}));return p=p.filter((function(t){return t.text.includes(s)})),Object(a.jsx)("section",{className:"todo",children:Object(a.jsxs)("div",{className:"todo__wrapper",children:[Object(a.jsx)("h1",{className:"app__title",children:"TODO"}),Object(a.jsx)("div",{className:"todo-search",children:Object(a.jsx)("form",{children:Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Search",value:s,onChange:function(t){u(t.target.value)}})})})}),Object(a.jsx)("button",{type:"button",onClick:function(){return O("all")},children:"All"}),Object(a.jsx)("button",{type:"button",onClick:function(){return O("active")},children:"Active"}),Object(a.jsx)("button",{type:"button",onClick:function(){return O("completed")},children:"Completed"}),Object(a.jsx)("div",{className:"todo-list",children:Object(a.jsx)(d,{todos:p,setTodos:o})})]})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.4009ac00.chunk.js.map