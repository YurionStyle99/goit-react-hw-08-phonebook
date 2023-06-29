"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{2771:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(9439),u=t(2791),a=t(9434),i=t(547),o=t(4937),c=t(7223),s=t(184),l=function(){var e=(0,a.I0)(),n=(0,u.useState)(""),t=(0,r.Z)(n,2),l=t[0],f=t[1],v=(0,u.useState)(""),p=(0,r.Z)(v,2),m=p[0],d=p[1],h=(0,a.v9)(i.A);return(0,s.jsxs)("form",{className:c.Z.form,onSubmit:function(n){n.preventDefault(),h.find((function(e){return"string"===typeof e.name&&e.name.toLowerCase()===l.toLowerCase()}))?alert("".concat(l," already exists in contacts")):(e((0,o.uK)({name:l,number:m})),f(""),d(""))},children:[(0,s.jsx)("input",{type:"text",name:"name",value:l,onChange:function(e){f(e.target.value)},placeholder:"Name",className:c.Z.input,required:!0}),(0,s.jsx)("input",{type:"tel",name:"number",value:m,onChange:function(e){d(e.target.value)},placeholder:"Phone number",className:c.Z.input,required:!0}),(0,s.jsx)("button",{type:"submit",className:c.Z.button,children:"Add to contacts"})]})},f=t(2837),v="NOT_FOUND";var p=function(e,n){return e===n};function m(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,u=void 0===r?p:r,a=t.maxSize,i=void 0===a?1:a,o=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(u),s=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:v},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return v}return{get:r,put:function(n,u){r(n)===v&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var n=s.get(arguments);if(n===v){if(n=e.apply(null,arguments),o){var t=s.getEntries(),r=t.find((function(e){return o(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function h(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var a,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,f=void 0===l?t:l,v=Array.isArray(f)?f:[f],p=d(r),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(v)),h=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return u}var y=h(m),x=function(e){return e.filter},j=y([function(e){return e.contacts.items},x],(function(e,n){var t=null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.toLowerCase().includes(n)}));return null===t||void 0===t?void 0:t.filter((function(e,n,t){return n===t.findIndex((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))}))})),b=function(e){var n=e.id,t=e.name,r=e.number,u=e.onDeleteContact;return(0,s.jsxs)("li",{children:[t,": ",r,(0,s.jsx)("button",{type:"button",onClick:function(){return u(n)},children:"Delete"})]},n)},g=t(854),_=function(){var e=(0,a.v9)(j),n=(0,a.v9)(f.iH),t=(0,a.I0)(),r=(0,a.v9)(f.hg);(0,u.useEffect)((function(){t((0,o.yF)())}),[t,n]);return(0,s.jsx)("ul",{children:r?(0,s.jsx)(g.Z,{size:"100"}):e.map((function(e){var n=e.id,r=e.name,u=e.number;return(0,s.jsx)(b,{id:n,name:r,number:u,onDeleteContact:function(){return function(e){t((0,o.GK)(e)).catch((function(e){return console.error(e)}))}(n)}},n)}))})},C=t(4302),N=function(){var e=(0,a.I0)(),n=(0,a.v9)(x);return(0,s.jsx)("div",{children:(0,s.jsxs)("label",{className:c.Z.label,children:["Find contacts by name",(0,s.jsx)("input",{className:c.Z.input,type:"text",value:n,placeholder:"Name",onChange:function(n){e((0,C.T)(n.target.value))}})]})})},w=t(1896),Z=function(){return(0,s.jsxs)("div",{className:w.Z.container,children:[(0,s.jsx)("div",{className:w.Z.stars}),(0,s.jsx)("div",{className:w.Z.stars2}),(0,s.jsx)("div",{className:w.Z.stars3}),(0,s.jsx)("div",{className:c.Z.contact_page_container,children:(0,s.jsxs)("div",{className:c.Z.container_contact,children:[(0,s.jsx)("h1",{children:"Name"}),(0,s.jsx)(l,{}),(0,s.jsx)("h2",{children:"Contacts"}),(0,s.jsx)(N,{}),(0,s.jsx)(_,{})]})})]})}},1896:function(e,n){n.Z={stars:"styles_stars__8PGWs",animStar:"styles_animStar__67xXU",stars2:"styles_stars2__svBMf",stars3:"styles_stars3__fjvJp",title:"styles_title__MHfNd"}}}]);
//# sourceMappingURL=771.b14b98b5.chunk.js.map