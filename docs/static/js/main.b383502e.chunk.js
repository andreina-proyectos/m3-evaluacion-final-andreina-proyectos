(window["webpackJsonpm3-evaluacion-final-andreina-proyectos"]=window["webpackJsonpm3-evaluacion-final-andreina-proyectos"]||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),s=(t(28),t(16)),m=t(17),i=t(21),o=t(18),u=t(9),p=t(22),d=(t(29),t(6)),h=function(e){var a=e.handleInputChange,t=e.query;return r.a.createElement("div",{className:"app__filters"},r.a.createElement("label",{htmlFor:"input"},"Busca tu personaje favorito "),r.a.createElement("input",{value:t,onChange:a,id:"input",type:"text",className:"filter",placeholder:"                    Buscar\ud83d\udd0e"}))},E=function(e){var a=e.name,t=e.img,n=e.species;return r.a.createElement("div",{className:"card__content"},r.a.createElement("img",{src:t,alt:"Imagen de ".concat(a),className:"character__image"}),r.a.createElement("h2",{className:"character__name"},a),r.a.createElement("p",{className:"character__specie"},n))},_=t(4),g=function(e){var a=e.rmData,t=e.query;return r.a.createElement("div",{className:"app__list-container"},r.a.createElement("ul",{className:"character-list"},a.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return r.a.createElement("li",{key:e.id,className:"character__card"},r.a.createElement(_.b,{to:"/character-detail/".concat(e.id)},r.a.createElement(E,{name:e.name,img:e.image,species:e.species})))}))))},f=function(e){var a=e.rmData,t=e.query,n=e.handleInputChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{handleInputChange:n,query:t}),r.a.createElement(g,{rmData:a,query:t}))},N=function(e){var a=e.rmData,t=e.routerProps,n=parseInt(t.match.params.id);if(n>a.length)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"message-route"},"S\xf3lo tenemos 20 personajes!"),r.a.createElement(_.b,{to:"/",className:"link__go-back"},"Go back!"));var c=a.find((function(e){return e.id===n}));if(c){var l=c.name,s=c.image,m=c.species,i=(c.status,c.origin),o=c.episode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.b,{to:"/",className:"link__go-back"},"Go back! ",r.a.createElement("span",{role:"img","aria-label":"arrow to go back "},"\u2b05\ufe0f")),r.a.createElement("div",{className:"app__detail"},r.a.createElement("div",{className:"detail__card character__card"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:"Imagen de ".concat(l),className:"detail__image"})),r.a.createElement("h2",{className:"character__name"},l),r.a.createElement("p",{className:"detail__status"},"Dead"===c.status?"Status: ".concat(c.status,"\u2620\ufe0f"):"Alive"===c.status?"Status: ".concat(c.status,"\ud83e\udd38\ud83c\udffc\u200d\u2640\ufe0f"):"Status: ".concat(c.status,"\u2753")),r.a.createElement("p",{className:"character__specie"},"Species: ".concat(m)),r.a.createElement("p",{className:"detail__origin"},"Origin: ".concat(i.name)),r.a.createElement("p",{className:"detail__episode"},"Episodes: ".concat(o.length)))))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"not-found-phrase"},"No tenemos este personaje"),r.a.createElement(_.b,{to:"/",className:"link__go-back"},"Go back! ",r.a.createElement("span",{role:"img","aria-label":"arrow to go back "},"\u2b05\ufe0f")))},b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={rmData:[],query:""},t.handleInputChange=t.handleInputChange.bind(Object(u.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getFetchData()}},{key:"getFetchData",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(a){e.setState({rmData:a.results})}))}},{key:"handleInputChange",value:function(e){var a=e.currentTarget.value;this.setState({query:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.rmData,n=a.query;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app__header"},r.a.createElement(_.b,{className:"app__title-link",to:"/"},r.a.createElement("h1",{className:"app__title"},"RICK AND MORTY CHARACTERS"))),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(f,{handleInputChange:e.handleInputChange,rmData:t,query:n})}}),r.a.createElement(d.a,{path:"/character-detail/:id",render:function(e){return r.a.createElement(N,{routerProps:e,rmData:t})}})),r.a.createElement("footer",{className:"app__footer"},r.a.createElement("p",{className:"footer__phrase"},"Created with ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2763\ufe0f")," by Andreina Romero Garc\xeda in Adalab")))}}]),a}(r.a.Component);l.a.render(r.a.createElement(_.a,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b383502e.chunk.js.map