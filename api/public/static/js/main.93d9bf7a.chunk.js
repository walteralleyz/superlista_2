(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/error.cbc8724a.svg"},31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(5),o=a(3),u=(a(36),a(30)),s=function(e){var t=d(e)||{};return t.id&&t.email&&t.token},m=function(e,t){"undefined"!==typeof window&&localStorage.setItem(e,JSON.stringify(t))},d=function(e){if("undefined"!==typeof window)return JSON.parse(localStorage.getItem(e))},f=function(e){"undefined"!==typeof window&&localStorage.removeItem(e)},v="/signin",p="/signup",E="/signout",g="/new",b="/edit/:ID",h="/",O="https://".concat(window.location.host),y={base:"/item",new:"/new"},j={base:"/user",signup:"/signup",signin:"/signin",verify:"/verifysign"};function x(e){var t=e.children,a=Object(u.a)(e,["children"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){var a=e.location;return s("user")?t:r.a.createElement(o.a,{to:{pathname:v,state:{from:a}}})}}))}var S=a(28),N=a.n(S);function _(){return r.a.createElement("div",{className:"holder--404"},r.a.createElement("h1",{className:"text-danger"},"404"),r.a.createElement("p",null,"N\xe3o encontrado!"),r.a.createElement("img",{src:N.a,alt:"Not Found"}))}var w=a(4),k=a(2),T=a(10),I=function(e){var t=e.children,a=e.title;return r.a.createElement("form",{className:"form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("h2",{className:"form__title"},a),t)},C=function(e){var t=e.type,a=e.value,n=e.changer,c=e.text,l=e.name;return r.a.createElement("div",{className:"form__holder--input"},r.a.createElement("label",{htmlFor:l},l),r.a.createElement("input",{className:"form__input",type:t,value:a,onChange:n,id:l,placeholder:c}))},L=function(e){var t=e.type,a=e.color,n=e.size,c=e.text,l=e.handler;return r.a.createElement("button",{className:"button button--".concat(a," button--").concat(n),type:t,onClick:l},c)};L.defaultProps={handler:function(){return null},type:"button",color:"blue",size:"small",text:"Enviar"};var F=L,P=function(e){var t=e.email,a=e.handleSubmit;return r.a.createElement(I,{title:"Bem vindo de volta!"},r.a.createElement(C,{type:"email",value:t.value,changer:function(e){return t.changer(e.currentTarget.value)},text:"Ex.: roberto@gmail.com",name:"Email"}),r.a.createElement(i.b,{to:p,className:"anchor"},"Ainda n\xe3o tem uma conta? Crie Agora!"),r.a.createElement(F,{type:"submit",color:"purple",handler:a}))},A=function(e){var t=e.children,a=e.title,n=e.code,c=e.setCode,l=e.verifySign;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__container"},r.a.createElement("div",{className:"modal__head"},r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"modal__body"},t||r.a.createElement("div",{className:"holder--code"},r.a.createElement("input",{onChange:function(e){return e.currentTarget.value=e.currentTarget.value.split("")[0]},onKeyPress:function(e){return c(Object(w.a)(Object(w.a)({},n),{},{a:+e.key}))},type:"number",max:9,value:n.a}),r.a.createElement("input",{onChange:function(e){return e.currentTarget.value=e.currentTarget.value.split("")[0]},onKeyPress:function(e){return c(Object(w.a)(Object(w.a)({},n),{},{b:+e.key}))},type:"number",max:9,min:0,value:n.b}),r.a.createElement("input",{onChange:function(e){return e.currentTarget.value=e.currentTarget.value.split("")[0]},onKeyPress:function(e){return c(Object(w.a)(Object(w.a)({},n),{},{c:+e.key}))},type:"number",max:9,min:0,value:n.c}),r.a.createElement("input",{onChange:function(e){return e.currentTarget.value=e.currentTarget.value.split("")[0]},onKeyPress:function(e){return c(Object(w.a)(Object(w.a)({},n),{},{d:+e.key}))},type:"number",max:9,min:0,value:n.d})),r.a.createElement(F,{type:"submit",text:"Confirmar",color:"red",size:"large",handler:l}))))},q=a(16),D=a.n(q),M=a(24),J=function(){var e=Object(M.a)(D.a.mark((function e(t,a){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:new Headers({"x-access-token":a})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),G=function(){var e=Object(M.a)(D.a.mark((function e(t,a,n,r){var c,l;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,body:a,headers:new Headers({"content-type":"application/json","x-access-token":r})});case 2:return c=e.sent,e.next=5,c.json();case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),R=function(e){return{type:"TOOGLE_LOGGED",logged:e}};var z=Object(T.b)((function(e,t){return{logged:e.logged}}),(function(e){return{toggleLogged:function(t){return e(R(t))}}}))((function(e){var t=e.toggleLogged,a=Object(n.useState)(""),c=Object(k.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(!1),s=Object(k.a)(u,2),d=s[0],f=s[1],v=Object(n.useState)({a:0,b:0,c:0,d:0}),p=Object(k.a)(v,2),E=p[0],g=p[1],b=Object(n.useState)({title:"Insira seu c\xf3digo de confirma\xe7\xe3o",visible:!1}),y=Object(k.a)(b,2),x=y[0],S=y[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{email:{value:l,changer:i},handleSubmit:function(){/\S+@\S+\.\S+/.test(l)&&(G(O+j.base+j.signin,JSON.stringify({email:l}),"POST").then((function(e){return m("user",e)})),S(Object(w.a)(Object(w.a)({},x),{},{visible:!0})))}}),x.visible&&r.a.createElement(A,{title:x.title,code:E,setCode:g,verifySign:function(){var e=E.a,a=E.b,n=E.c,r=E.d;G(O+j.base+j.verify,JSON.stringify({code:parseInt("".concat(e).concat(a).concat(n).concat(r)),email:l}),"POST").then((function(e){t(!0),m("user",e),f(!0)}))}}),d&&r.a.createElement(o.a,{to:h}))})),K=function(e){var t=e.name,a=e.email;return r.a.createElement(I,{title:"Vamos Cadastrar!"},r.a.createElement(C,{type:"text",value:t.value,changer:function(e){return t.changer(e.currentTarget.value)},text:"Ex.: Roberto da Silva",name:"Name"}),r.a.createElement(C,{type:"email",value:a.value,changer:function(e){return a.changer(e.currentTarget.value)},text:"Ex.: roberto@gmail.com",name:"Email"}),r.a.createElement(i.b,{to:v,className:"anchor"},"J\xe1 tenho uma conta. Me tire daqui!"),r.a.createElement(F,{type:"submit",color:"purple"}))};function B(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(k.a)(l,2),o=i[0],u=i[1];return r.a.createElement(K,{name:{value:o,changer:u},email:{value:a,changer:c}})}var H=Object(T.b)((function(e,t){return{logged:e.logged}}),(function(e){return{toggleLogged:function(t){return e(R(t))}}}))((function(e){var t=e.toggleLogged,a=Object(n.useState)(!1),c=Object(k.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){f("user"),t(!1),i(!0)}),[t]),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(o.a,{to:"/"}))})),U=a(25),V=a(19),Q=function(e){var t=e.value,a=e.changer,n=e.name,c=e.options;return r.a.createElement("div",{className:"form__holder--input"},r.a.createElement("label",{htmlFor:n},n),r.a.createElement("select",{className:"form__input",value:t,onChange:a,id:n},c.map((function(e,t){return r.a.createElement("option",{key:"select-option-".concat(t),value:e.value},e.text)}))))},W=function(e){var t=e.section,a=e.item,n=e.quantity,c=e.type,l=e.handleAdd;return r.a.createElement(I,{title:"Cadastro de Item"},r.a.createElement(Q,{value:t.value,changer:function(e){return t.changer(e.currentTarget.value)},name:"Setor",options:[{value:"mercearia",text:"Mercearia"},{value:"acougue",text:"A\xe7ougue"},{value:"frios",text:"Frios"},{value:"adega",text:"Adega"},{value:"higiene",text:"Higiene"},{value:"horti",text:"Hortifruti"},{value:"padaria",text:"Padaria"},{value:"rotisseria",text:"Rotisseria"}]}),r.a.createElement(C,{type:"text",value:a.value,changer:function(e){return a.changer(e.currentTarget.value)},text:"Ex.: Tomate",name:"Produto"}),r.a.createElement(C,{type:"number",value:n.value,changer:function(e){return n.changer(e.currentTarget.value)},text:"Ex.: 10",name:"Quantidade"}),r.a.createElement(Q,{value:c.value,changer:function(e){return c.changer(e.currentTarget.value)},name:"Unidade",options:[{value:"kg",text:"Kg"},{value:"un",text:"Unidade"}]}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"32px"}},r.a.createElement(F,{type:"submit",color:"purple",text:"Adicionar Item",handler:l})))},$=function(e){var t=e.icon,a=e.description,n=e.handler;return r.a.createElement("span",{role:"img","aria-label":a,title:a,onClick:n},X[t])},X={laptop:r.a.createElement(r.a.Fragment,null,"\ud83d\udcbb"),book:r.a.createElement(r.a.Fragment,null,"\ud83d\udcd6"),market:r.a.createElement(r.a.Fragment,null,"\ud83d\uded2"),phone:r.a.createElement(r.a.Fragment,null,"\ud83d\udce2"),doc:r.a.createElement(r.a.Fragment,null,"\ud83d\udcdd"),exit:r.a.createElement(r.a.Fragment,null,"\u274c"),pencil:r.a.createElement(r.a.Fragment,null,"\ud83d\udd8d")};$.defaultProps={handler:function(){return null}};var Y=$,Z=function(e){var t=e.products,a=e.handler,n=e.store,c=e.submit,l=e.expand;return r.a.createElement("aside",{className:"aside"},r.a.createElement("div",{className:"holder--product ".concat("Fechar"===l.text&&"slide--down")},t.map((function(e,t){return r.a.createElement("div",{key:"product-".concat(t),className:"product","data-id":t},r.a.createElement("h4",{className:"product__title"},e.item,r.a.createElement(Y,{icon:"exit",description:"excluir",handler:a})),r.a.createElement("div",{className:"product__description"},r.a.createElement("small",null,e.section),r.a.createElement("small",null,e.quantity),r.a.createElement("small",null,e.type)))}))),r.a.createElement("div",{className:"aside__bottom"},r.a.createElement("span",{className:"aside__expand",onClick:function(){return l.handle("Expandir"===l.text?"Fechar":"Expandir")}},l.text),r.a.createElement("input",{type:"text",value:n.value,onChange:function(e){return n.changer(e.currentTarget.value)},placeholder:"Nome do Mercado",style:{width:"100%"},minLength:4,required:!0}),r.a.createElement(F,{type:"submit",text:"Salvar Lista",size:"full",handler:c})))};var ee=Object(T.b)((function(e){return{itemsProps:e.item}}),(function(e){return{addItem:function(t){return e(function(e){return{type:"ADD_ITEM",item:e}}(t))},removeItem:function(t){return e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},clearItem:function(){return e({type:"CLEAR_ITEM"})}}}))((function(e){var t=e.itemsProps,a=e.addItem,c=e.removeItem,l=e.clearItem,i=Object(n.useState)(""),u=Object(k.a)(i,2),s=u[0],v=u[1],p=Object(n.useState)("mercearia"),E=Object(k.a)(p,2),g=E[0],b=E[1],h=Object(n.useState)(""),j=Object(k.a)(h,2),x=j[0],S=j[1],N=Object(n.useState)(0),_=Object(k.a)(N,2),T=_[0],I=_[1],C=Object(n.useState)("kg"),L=Object(k.a)(C,2),F=L[0],P=L[1],A=Object(n.useState)(0),q=Object(k.a)(A,2),D=q[0],M=q[1],J=Object(n.useState)(!1),R=Object(k.a)(J,2),z=R[0],K=R[1],B=Object(n.useState)("Expandir"),H=Object(k.a)(B,2),Q=H[0],$=H[1],X=Object(o.g)().ID,Y=function(e){var t=d("list")||!1;t?(t=[].concat(Object(V.a)(t),[e]),m("list",t)):m("list",[e])},ee=function(){b("mercearia"),S(""),I(0),P("kg")},te=Object(n.useCallback)((function(){var e=d("list")||!1;if(e&&!t.length){M(e.length);var n,r=Object(U.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;a(c)}}catch(l){r.e(l)}finally{r.f()}}}),[a,t]);return Object(n.useEffect)((function(){te()}),[te]),Object(n.useEffect)((function(){l()}),[l]),r.a.createElement("div",{className:"holder--list"},r.a.createElement(Z,{products:t,handler:function(e){var a=e.currentTarget.parentNode.parentNode.dataset.id,n=t.filter((function(e,t){return t!==+a}));m("list",n),c(a)},store:{value:s,changer:v},submit:function(){var e={store:s,section:[],item:[],type:[],quantity:[]},a=d("user"),n=X?O+y.base+"/"+X:O+y.base+y.new,r=X?"PUT":"POST";if(s&&s.length>=4){var c,l=Object(U.a)(t);try{for(l.s();!(c=l.n()).done;){var i=c.value;e.section.push(i.section),e.item.push(i.item),e.type.push(i.type),e.quantity.push(i.quantity)}}catch(o){l.e(o)}finally{l.f()}G(n,JSON.stringify(Object(w.a)({email:a.email},e)),r,a.token).then((function(e){e.error||(f("list"),K(!0))}))}},expand:{text:Q,handle:$}}),r.a.createElement(W,{type:{value:F,changer:P},section:{value:g,changer:b},quantity:{value:T,changer:I},item:{value:x,changer:S},handleAdd:function(){M((function(e){return e+1}));var e={section:g,item:x,quantity:T,type:F,id:D};Y(e),ee(),a(e)}}),z&&r.a.createElement(o.a,{to:"/"}))})),te=function(e){var t=e.item,a=e.i,n=e.obj,c=e.remove,l=e.edit;return r.a.createElement("table",{className:"table",key:"table-".concat(a)},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text--light text--bold text--shadow text--small",colSpan:3},"Mercado: ",t.store," -\xa0",new Date(+t.updatedAt).toLocaleDateString()),r.a.createElement("td",{className:"d--flex justify--evenly clicable"},r.a.createElement(Y,{icon:"pencil",description:"Editar",handler:function(){return l(t.id)}}),r.a.createElement(Y,{icon:"exit",description:"Excluir",handler:function(){return c(t.id)}}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Se\xe7\xe3o"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Qtd"),r.a.createElement("th",null,"Und"))),r.a.createElement("tbody",null,n.map((function(e,t){return r.a.createElement("tr",{key:"product-".concat(t)},r.a.createElement("td",null,e.section),r.a.createElement("td",null,e.item),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.type))}))))};function ae(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(k.a)(l,2),u=i[0],s=i[1],f=Object(n.useState)(!1),v=Object(k.a)(f,2),p=v[0],E=v[1],g=Object(n.useState)({title:"Tem certeza que deseja excluir?",visible:!1}),b=Object(k.a)(g,2),h=b[0],j=b[1],x=Object(n.useState)(!1),S=Object(k.a)(x,2),N=S[0],_=S[1],T=Object(n.useCallback)((function(){if(u){var e="".concat(O).concat(y.base,"/").concat(u.id);J(e,u.token).then((function(e){return c(e)}))}}),[u]),I=function(e){E(e),j(Object(w.a)(Object(w.a)({},h),{},{visible:!0})),console.log(e)},C=function(e){var t=a.filter((function(t){return t.id===e})),n=ne(t[0]);m("list",n),E(e),_(!0)};return Object(n.useEffect)((function(){return s(d("user"))}),[]),Object(n.useEffect)((function(){return T()}),[T]),r.a.createElement("div",{className:"holder--table"},a?a.map((function(e,t){return r.a.createElement(te,{item:e,i:t,obj:ne(e),remove:I,key:t,edit:C})})):"main",h.visible&&r.a.createElement(A,{title:h.title,verifySign:function(){G(O+y.base+"/"+p,null,"DELETE",u.token).then((function(e){return window.location.reload()}))}},r.a.createElement("p",{style:{marginBottom:"16px"}},"Deseja excluir?")),N&&r.a.createElement(o.a,{to:"/edit/".concat(p)}))}var ne=function(e){for(var t=[],a=JSON.parse(e.items),n=0;n<a.section.length;n++){var r={section:a.section[n],item:a.item[n],type:a.type[n],quantity:a.quantity[n]};t.push(r)}return t.sort((function(e,t){return e.section.localeCompare(t.section)}))},re=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)},ce=function(e){var t=e.title,a=e.options;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",null,r.a.createElement(i.b,{to:t.route,className:"nav__title"},r.a.createElement(Y,{description:t.description,icon:t.icon}),"\xa0 ",t.text)),r.a.createElement("li",{className:"text--right"},r.a.createElement("ul",{className:"nav__list"},a.map((function(e,t){return r.a.createElement("li",{className:"small",key:"option-".concat(t)},r.a.createElement(i.b,{to:e.route},r.a.createElement(Y,{description:e.descrition,icon:e.icon}),"\xa0 ",e.text))}))))))};var le=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{toggleLogged:function(t){return e(R(t))}}}))((function(e){var t=e.user,a=e.toggleLogged,c={text:"SuperLista",icon:"market",description:"titulo do site",route:h},l=t.logged?[{text:"Nova Lista",icon:"doc",description:"minhas compras",route:g},{text:"Sair",icon:"exit",description:"sair",route:E}]:[{text:"Sobre N\xf3s",icon:"book",description:"sobre",route:"/about"},{text:"Contato",icon:"phone",description:"contate-nos",route:"/contact"},{text:"API",icon:"laptop",description:"api",route:"/api"}];return Object(n.useEffect)((function(){s("user")&&a(!0)}),[a]),r.a.createElement(ce,{title:c,options:l})}));var ie=function(){return r.a.createElement(re,null,r.a.createElement(i.a,null,r.a.createElement(le,null),r.a.createElement(o.d,null,r.a.createElement(x,{exact:!0,path:h},r.a.createElement(ae,null)),r.a.createElement(x,{exact:!0,path:E},r.a.createElement(H,null)),r.a.createElement(x,{exact:!0,path:g},r.a.createElement(ee,null)),r.a.createElement(x,{path:b},r.a.createElement(ee,null)),r.a.createElement(o.b,{path:v},r.a.createElement(z,null)),r.a.createElement(o.b,{path:p},r.a.createElement(B,null)),r.a.createElement(o.b,{path:"*"},r.a.createElement(_,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(13),ue=Object(oe.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{logged:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOOGLE_LOGGED":return Object(w.a)(Object(w.a)({},e),{},{logged:t.logged});default:return e}},item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(V.a)(e),[t.item]);case"REMOVE_ITEM":return e.filter((function(e,a){return a!==+t.id}));case"CLEAR_ITEM":return[];default:return e}}});var se,me=Object(oe.c)(ue,se);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.a,{store:me},r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.93d9bf7a.chunk.js.map