(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{19:function(t,e,o){},21:function(t,e,o){"use strict";o.r(e);o(0);var c=o(5),n=o.n(c),a=o(3),d=o(4),l=o(10),s=o(6),r=o(2),i="app/DELETE_TODO",u="app/ADD_TODO",b="app/SET_TODOS",j="app/SET_SEARCH_FIELD",p="app/SET_FILTER_TODO_BY",O=function(t){return{type:i,payload:t}},h=function(t){return{type:u,payload:t}},m=function(t){return{type:b,payload:t}},f=function(t){return{type:j,payload:t}},x=function(t){return{type:p,payload:t}},_={todos:[],searchField:"",filterTodoBy:"all"},y="todoForm/SET_ADD_TODO_FIELD",v=function(t){return{type:y,payload:t}},N={addTodoField:""},T=Object(d.combineReducers)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:return Object(r.a)(Object(r.a)({},t),{},{todos:Object(s.a)(t.todos).filter((function(t){return+e.payload!==t.id}))});case u:return Object(r.a)(Object(r.a)({},t),{},{todos:[].concat(Object(s.a)(t.todos),[{text:e.payload,completed:!1,id:t.todos.length+1}])});case b:return Object(r.a)(Object(r.a)({},t),{},{todos:Object(s.a)(t.todos).map((function(t){return t.id===e.payload.id?Object(r.a)(Object(r.a)({},t),{},{completed:!e.payload.completed}):t}))});case j:return Object(r.a)(Object(r.a)({},t),{},{searchField:e.payload});case p:return Object(r.a)(Object(r.a)({},t),{},{filterTodoBy:e.payload});default:return t}},todoForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(r.a)(Object(r.a)({},t),{},{addTodoField:e.payload});default:return t}}}),g=Object(d.createStore)(T,Object(l.composeWithDevTools)(Object(d.applyMiddleware)())),F=a.c,D=(o(19),o(1)),C=function(t){var e=t.todo,o=Object(a.b)();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("label",{className:"todo-list__label",children:[Object(D.jsx)("input",{type:"checkbox",className:"todo-list__input",checked:e.completed,onChange:function(){o(m(e))}}),e.completed&&Object(D.jsx)("span",{className:"todo-list__label-done",children:"\u2714\ufe0f"})]}),Object(D.jsx)("p",{children:e.completed?Object(D.jsx)("s",{children:e.text}):e.text}),Object(D.jsx)("button",{className:"todo-button todo-button--delete",type:"button",onClick:function(){var t;t=e.id,o(O(t))},children:"Delete"})]})},E=function(){var t=Object(a.b)(),e=F((function(t){return t.todoForm})).addTodoField;return Object(D.jsxs)("form",{className:"todo-search",onSubmit:function(o){var c;(o.preventDefault(),e)&&(c="",t(h(e)),t(v(c)))},children:[Object(D.jsx)("label",{className:"todo-search__label",children:Object(D.jsx)("input",{type:"text",name:"todo",maxLength:300,className:"todo-search__input todo-search__input--add",placeholder:"Add todo...",value:e,onChange:function(e){!function(e){t(v(e.target.value))}(e)}})}),Object(D.jsx)("button",{className:"todo-button todo-button--add",type:"submit",children:"Add"})]})},S=function(t){var e=t.todos;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("ul",{className:"todo-list__list",children:e.map((function(t){return Object(D.jsx)("li",{className:"todo-list__item",children:Object(D.jsx)(C,{todo:t})},t.id)}))}),Object(D.jsx)(E,{})]})},k=function(){var t=Object(a.b)(),e=F((function(t){return t.todos})),o=e.filterTodoBy,c=e.todos,n=e.searchField,d=function(e){t(x(e))},l=c.filter((function(t){switch(o){case"active":return!1===t.completed;case"completed":return!0===t.completed;default:return t}})).filter((function(t){return t.text.includes(n)}));return Object(D.jsx)("section",{className:"todo",children:Object(D.jsxs)("div",{className:"todo__wrapper",children:[Object(D.jsx)("h1",{className:"todo__title",children:"TODO"}),Object(D.jsx)("div",{className:"todo-search",children:Object(D.jsx)("form",{className:"todo-search__form",children:Object(D.jsx)("label",{className:"todo-search__label",children:Object(D.jsx)("input",{type:"text",name:"search",className:"todo-search__input",placeholder:"Search",value:n,onChange:function(e){var o;o=e.target.value,t(f(o))}})})})}),Object(D.jsxs)("div",{className:"todo-button__wrapper",children:[Object(D.jsx)("button",{className:"todo-button ".concat("all"===o&&"todo-button--active"),type:"button",onClick:function(){return d("all")},children:"All"}),Object(D.jsx)("button",{className:"todo-button ".concat("active"===o&&"todo-button--active"),type:"button",onClick:function(){return d("active")},children:"Active"}),Object(D.jsx)("button",{className:"todo-button ".concat("completed"===o&&"todo-button--active"),type:"button",onClick:function(){return d("completed")},children:"Completed"})]}),Object(D.jsx)("div",{className:"todo-list",children:Object(D.jsx)(S,{todos:l})}),Object(D.jsxs)("span",{children:["Tasks:\xa0",c.length]})]})})},w=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,22)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,d=e.getTTFB;o(t),c(t),n(t),a(t),d(t)}))};n.a.render(Object(D.jsx)(a.a,{store:g,children:Object(D.jsx)(k,{})}),document.getElementById("root")),w()}},[[21,1,2]]]);
//# sourceMappingURL=main.b2cf8538.chunk.js.map