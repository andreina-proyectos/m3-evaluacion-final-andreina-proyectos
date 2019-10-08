(window["webpackJsonpm3-evaluacion-final-andreina-proyectos"]=window["webpackJsonpm3-evaluacion-final-andreina-proyectos"]||[]).push([[0],{23:function(e,a,n){e.exports=n(35)},28:function(e,a,n){},29:function(e,a,n){},35:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(15),c=n.n(l),i=(n(28),n(16)),s=n(17),m=n(21),o=n(18),u=n(7),h=n(22),d=(n(29),n(5)),p=n(6),g=function(e){var a=e.handleInputChange,n=e.query,t=e.getUserGender,l=e.handleIsHuman,c=e.handleIsAlien,i=e.handleChangeOrigin,s=e.origin;return r.a.createElement("div",{className:"app__filters"},r.a.createElement("label",{htmlFor:"input"},"Busca tu personaje favorito por nombre o g\xe9nero "),r.a.createElement("input",{value:n,onChange:a,id:"input",type:"text",className:"filter",placeholder:"                    Buscar\ud83d\udd0e"}),r.a.createElement("select",{className:"filter__select",name:"",id:"",onChange:t},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"unknown"},"Unknown")),r.a.createElement("label",{htmlFor:"human",className:"filter-human"},"Human",r.a.createElement("input",{onChange:l,type:"checkbox",name:"",id:"human"})),r.a.createElement("label",{htmlFor:"human",className:"filter-human"},"Alien",r.a.createElement("input",{onChange:c,type:"checkbox",name:"",id:"human"})),r.a.createElement("label",{htmlFor:"origin"}),r.a.createElement("input",{value:s,onChange:i,id:"origin",type:"text",className:"filter-origin inputfilter",placeholder:"Escribe un planeta"}))},E=function(e){var a=e.name,n=e.img,t=e.species;return r.a.createElement("div",{className:"card__content"},r.a.createElement("img",{src:n,alt:"Imagen de ".concat(a),className:"character__image"}),r.a.createElement("h2",{className:"character__name"},a),r.a.createElement("p",{className:"character__specie"},t))},f=function(e){var a=e.rmData,n=e.query,t=e.gender,l=e.alien,c=e.human,i=e.origin;return r.a.createElement("div",{className:"app__list-container"},r.a.createElement("ul",{className:"character-list"},a.filter((function(e){return e.origin.name.toUpperCase().includes(i.toUpperCase())})).filter((function(e){return!(!c||"Human"!==e.species)||(!c||"Human"===e.species)})).filter((function(e){return!(!l||"Alien"!==e.species)||(!l||"Alien"===e.species)})).filter((function(e){return t===e.gender||"all"===t})).filter((function(e){return e.name.toUpperCase().includes(n.toUpperCase())})).map((function(e){return r.a.createElement("li",{key:e.id,className:"character__card"},r.a.createElement(d.b,{to:"/character-detail/".concat(e.id)},r.a.createElement(E,{name:e.name,img:e.image,species:e.species})))}))))},_=function(e){var a=e.rmData,n=e.query,t=e.handleInputChange,l=e.gender,c=e.getUserGender,i=e.handleIsHuman,s=e.handleIsAlien,m=e.human,o=e.alien,u=e.handleChangeOrigin,h=e.origin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{getUserGender:c,handleInputChange:t,query:n,handleIsHuman:i,handleIsAlien:s,handleChangeOrigin:u,origin:h}),r.a.createElement(f,{rmData:a,query:n,gender:l,human:m,alien:o,origin:h}))},b=function(e){var a=e.rmData,n=e.routerProps,t=parseInt(n.match.params.id);if(t>a.length)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"message-route"},"S\xf3lo tenemos 20 personajes!"),r.a.createElement(d.b,{to:"/",className:"link__go-back"},"Go back!"));var l=a.find((function(e){return e.id===t}));if(l){var c=l.name,i=l.image,s=l.species,m=l.origin,o=l.episode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/",className:"link__go-back"},"Go back! ",r.a.createElement("span",{role:"img","aria-label":"arrow to go back "},"\u2b05\ufe0f")),r.a.createElement("div",{className:"app__detail"},r.a.createElement("div",{className:"detail__card character__card"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:"Imagen de ".concat(c),className:"detail__image"})),r.a.createElement("h2",{className:"character__name"},c),r.a.createElement("p",{className:"detail__status"},"Dead"===l.status?"Status: ".concat(l.status,"\u2620\ufe0f"):"Alive"===l.status?"Status: ".concat(l.status,"\ud83e\udd38\ud83c\udffc\u200d\u2640\ufe0f"):"Status: ".concat(l.status,"\u2753")),r.a.createElement("p",{className:"character__specie"},"Species: ".concat(s)),r.a.createElement("p",{className:"detail__origin"},"Origin: ".concat(m.name)),r.a.createElement("p",{className:"detail__episode"},"Episodes: ".concat(o.length)))))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"not-found-phrase"},"No tenemos este personaje"),r.a.createElement(d.b,{to:"/",className:"link__go-back"},"Go back! ",r.a.createElement("span",{role:"img","aria-label":"arrow to go back "},"\u2b05\ufe0f")))},v=function(e){function a(e){var n;return Object(i.a)(this,a),(n=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={rmData:[],query:"",gender:"all",human:!1,alien:!1,origin:""},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.getUserGender=n.getUserGender.bind(Object(u.a)(n)),n.handleIsHuman=n.handleIsHuman.bind(Object(u.a)(n)),n.handleIsAlien=n.handleIsAlien.bind(Object(u.a)(n)),n.handleChangeOrigin=n.handleChangeOrigin.bind(Object(u.a)(n)),n}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getFetchData()}},{key:"getFetchData",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(a){e.setState({rmData:a.results})}))}},{key:"handleInputChange",value:function(e){var a=e.currentTarget.value;this.setState({query:a})}},{key:"getUserGender",value:function(e){var a=e.currentTarget.value;this.setState({gender:a})}},{key:"handleIsHuman",value:function(e){var a=e.currentTarget.checked;this.setState({human:a})}},{key:"handleIsAlien",value:function(e){var a=e.currentTarget.checked;this.setState({alien:a})}},{key:"handleChangeOrigin",value:function(e){var a=e.currentTarget.value;this.setState({origin:a})}},{key:"render",value:function(){var e=this,a=this.state,n=a.rmData,t=a.query,l=a.gender,c=a.human,i=a.alien,s=a.origin;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app__header"},r.a.createElement(d.b,{className:"app__title-link",to:"/"},r.a.createElement("h1",{className:"app__title"},"RICK AND MORTY CHARACTERS"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(_,{handleInputChange:e.handleInputChange,rmData:n,query:t,gender:l,getUserGender:e.getUserGender,handleIsHuman:e.handleIsHuman,handleIsAlien:e.handleIsAlien,human:c,alien:i,handleChangeOrigin:e.handleChangeOrigin,origin:s})}}),r.a.createElement(p.a,{path:"/character-detail/:id",render:function(e){return r.a.createElement(b,{routerProps:e,rmData:n})}})),r.a.createElement("footer",{className:"app__footer"},r.a.createElement("p",{className:"footer__phrase"},"Created with ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2763\ufe0f")," by Andreina Romero Garc\xeda \xa9 in Adalab")))}}]),a}(r.a.Component);c.a.render(r.a.createElement(d.a,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.83841f1d.chunk.js.map