(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/cat.3b320027.svg"},27:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},35:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(33),a(2)),i=a(3),m=a(5),s=a(4),u=a(6),d=(a(35),a(37),a(11)),p=a(46),f=a(22),g=a.n(f),b=a(12);function E(){var e=Object(d.a)(["\n  text-transform:capitalize;\n  font-size:1.4rem;\n  background:transparent;\n  border: 0.05rem solid var(--lightBlue);\n  border-color: ",";\n  color:",";\n  border-radius:0.5rem;\n  padding: 0.2rem 0.5rem;\n  cursor:pointer;\n  margin:0.2rem 0.5rem 0.2rem 0;\n  transition: all 0.5s ease-in-out;\n  &:hover{\n  background:",";\n  color:",";\n  }\n  &:focus{\n    outline:none;\n  }\n"]);return E=function(){return e},e}var v=b.a.button(E(),function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainDark)":"var(--mainBlue)"});function h(){var e=Object(d.a)(["\nbackground: var(--mainBlue);\n.nav-link{\n  color:var(--mainWhite) !important;\n  font-size:1.3rem;\n  text-transform: capitalize;\n}\n"]);return h=function(){return e},e}var x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},r.a.createElement(p.a,{to:"/"},r.a.createElement("img",{src:g.a,alt:"store",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(p.a,{to:"/",className:"nav-link"},"products"))),r.a.createElement(p.a,{to:"/cart",className:"nav-link ml-auto"},r.a.createElement(v,null,r.a.createElement("span",{className:"rm-2"},r.a.createElement("i",{className:"fas fa-cart-plus"}," My Cart")))))}}]),t}(n.Component),N=b.a.nav(h()),y=a(1),w=a.n(y),O=a(10),k=a(20),j=[{id:1,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"GOOGLE",info:"GOOGLE Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:3,total:4},{id:2,title:"Samsung Note 7 - White",img:"img/product-2.png",price:15,company:"SAMSUNG",info:"SAMSUNG Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:2,total:3},{id:3,title:"Xiaomi Mix 3 - Black",img:"img/product-3.png",price:12,company:"Xiaomi",info:"Xiaomi Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:5,total:9},{id:4,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"GOOGLE",info:"GOOGLE Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:3,total:4},{id:5,title:"Samsung Note 7 - White",img:"img/product-2.png",price:15,company:"SAMSUNG",info:"SAMSUNG Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:2,total:3},{id:6,title:"Xiaomi Mix 3 - Black",img:"img/product-3.png",price:12,company:"Xiaomi",info:"Xiaomi Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:5,total:9}],C={id:3,title:"Xiaomi Mix 3 - Black",img:"img/product-3.png",price:12,company:"Xiaomi",info:"Xiaomi Supposedly there are over one million words in the English Language. We trimmed some fat to take away really odd words and determiners. Then we grabbed the most popular words and built this word randomizer. Just keep clicking generate\u2014chances are you won't find a repeat!",inCart:!1,count:5,total:9},S=r.a.createContext(),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],detailProduct:C,cart:[],modalOpen:!1,modalProduct:C,cartSubTotal:0,cartTax:0,cartTotal:0},a.setProducts=function(){var e=[];j.forEach(function(t){var a=Object(k.a)({},t);e.push(a)}),a.setState(function(){return{products:e}},function(){console.log(a.state.products)})},a.getItem=function(e){return a.state.products.find(function(t){return t.id==e})},a.handleDetail=function(e){var t=a.getItem(e);a.setState(function(){return{detailProduct:t}})},a.addToCart=function(e){var t=Object(O.a)(a.state.products),n=t.indexOf(a.getItem(e)),r=t[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,a.setState(function(){return{product:t,cart:[].concat(Object(O.a)(a.state.cart),[r])}},function(){a.addTotals()})},a.openModal=function(e){var t=a.getItem(e);a.setState(function(){return{modalProduct:t,modalOpen:!0}})},a.closeModal=function(){a.setState(function(){return{modalOpen:!1}})},a.increment=function(e){var t=Object(O.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count+1,c.total=c.count*c.price,a.setState(function(){return{cart:Object(O.a)(t)}},function(){a.addTotals()})},a.decrement=function(e){var t=Object(O.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count-1,0===c.count?(a.removeItem(e),console.log("run remove item")):(c.total=c.count*c.price,a.setState(function(){return{cart:Object(O.a)(t)}},function(){a.addTotals()}))},a.removeItem=function(e){var t=Object(O.a)(a.state.products),n=Object(O.a)(a.state.cart);n=n.filter(function(t){return t.id!==e});var r=t.indexOf(a.getItem(e)),c=t[r];c.inCart=!1,c.count=0,c.total=0,a.setState(function(){return{cart:Object(O.a)(n),products:Object(O.a)(t)}},function(){a.addTotals()})},a.clearCart=function(){a.setState(function(){return{cart:[]}},function(){a.setProducts(),a.addTotals()})},a.addTotals=function(){var e=0;a.state.cart.map(function(t){return e+=t.total});var t=parseFloat((.1*e).toFixed(2)),n=e+t;a.setState(function(){return{cartSubTotal:e,cartTax:t,cartTotal:n}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(S.Provider,{value:Object(k.a)({},this.state,{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})}," ",this.props.children," ")}}]),t}(n.Component),z=S.Consumer;function M(){var e=Object(d.a)(["\n  .card{\n    border-color:transparent;\n    transition:all 0.1s linear;\n  }\n  .card-footer{\n    background:transparent;\n    border-top:transparent;\n    transition:all 0.1s linear;\n  }\n  &:hover{\n    .card{\n      border:0.1rem solid rgba(0,0,0,0.2);\n      box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);\n    }\n    .card-footer{\n      background:rgba(247,247,247);\n    }\n  }\n  .img-container{\n    position:relative;\n    overflow:hidden;\n  }\n  .card-img-top{\n    transition:all 1s linear;\n  }\n  .img-container:hover .card-img-top{\n    transform:scale(1.2);\n  }\n  .cart-btn{\n    position:absolute;\n    bottom:0;\n    right:0;\n    padding:0.2rem 0.4rem;\n    background: var(--lightBlue);\n    color:var(--mainWhite);\n    font-size:1.4rem;\n    border-radius:0.5rem 0 0 0;\n    transform:translate(100%, 100%);\n    transition: all 0.5s linear;\n  }\n  .img-container:hover .cart-btn{\n    transform:translate(0,0);\n  }\n  .cart-btn:hover{\n    color:var(--mainBlue);\n    cursor:pointer;\n  }\n"]);return M=function(){return e},e}var B=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,c=e.price,l=e.inCart;return r.a.createElement(G,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement(z,null,function(e){return r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(p.a,{to:"/details"},r.a.createElement("img",{src:n,alt:a,className:"card-img-top"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0}," "," in Cart"):r.a.createElement("i",{className:"fa fa-cart-plus","aria-hidden":"true"})))}),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"$"),c))))}}]),t}(n.Component);B.protoTypes={product:w.a.shape({id:w.a.number,img:w.a.string,title:w.a.string,price:w.a.number,inCart:w.a.bool}).isRequired};var G=b.a.div(M());function P(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},t," ",r.a.createElement("strong",{className:"text-blue"},a))))}var W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={products:j},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(P,{name:"our",title:"products"}),r.a.createElement("div",{className:"row"},r.a.createElement(z,null,function(e){return console.log(e),e.products.map(function(e){return r.a.createElement(B,{key:e.id,product:e})})})))))}}]),t}(n.Component);function I(){return r.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name of product")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}function L(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title"},r.a.createElement("h1",null,"your cart is currently empty"))))}function J(e){var t=e.item,a=e.value;console.log(t),console.log(a);var n=t.id,c=t.title,l=t.img,o=t.price,i=t.total,m=t.count,s=a.increment,u=a.decrement,d=a.removeItem;return r.a.createElement("div",{className:"row my-1 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:l,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"product: "),c),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"price: "),o),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return u(n)}},"-"),r.a.createElement("span",{className:"btn btn-black mx-1"},m),r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return s(n)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("div",{className:"cart-icon",onClick:function(){return d(n)}},r.a.createElement("i",{className:"fas fa-trash"}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",{className:""},"item total: $ ",i)))}function X(e){var t=e.value,a=t.cart;return r.a.createElement("div",{className:"container-fluid"},a.map(function(e){return r.a.createElement(J,{key:e.id,item:e,value:t})}))}function $(e){var t=e.value,a=t.cartSubTotal,n=t.cartTax,c=t.cartTotal,l=t.clearCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(p.a,{to:"/cart"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){return l()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal : $ ",r.a.createElement("strong",null,a))),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"tax : $ ",r.a.createElement("strong",null,n))),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"total : $ ",r.a.createElement("strong",null,c)))))))}var F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(z,null,function(e){return e.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{name:"your",title:"cart"}),r.a.createElement(I,null),r.a.createElement(X,{value:e}),r.a.createElement($,{value:e})):r.a.createElement(L,null)}))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Page not found"))}}]),t}(n.Component),D=a(48),U=a(49),Y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,function(e){console.log(e.detailProduct);var t=e.detailProduct,a=t.id,n=t.company,c=t.img,l=t.info,o=t.price,i=t.title,m=t.inCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("img",{src:c,alt:i,className:"img-fluid"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h2",null,"model: ",i),r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"made by: ",r.a.createElement("span",{className:"text-uppercase"},n)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price: ",r.a.createElement("span",null,"$ ",o))),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about the product:"),r.a.createElement("p",{className:"text-muted lead"},l),r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{to:"/"},r.a.createElement(v,null,r.a.createElement("div",{className:"text"},"Back to Product"))),r.a.createElement(v,{cart:!0,disabled:m,onClick:function(){return e.addToCart(a)}},m?"inCart":"add to cart"))))))})}}]),t}(n.Component);function q(){var e=Object(d.a)(["\n    position: fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    background:rgba(0,0,0,.3);\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    #modal{\n        background:var(--mainWhite);\n    }\n"]);return q=function(){return e},e}var R=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,c=n.img,l=n.title,o=n.price;return t?r.a.createElement(H,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"modal",className:"col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-5"},r.a.createElement("h5",null,"item added to the cart"),r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"}),r.a.createElement("h5",null,l),r.a.createElement("h5",{className:"text-muted"},"price : $ ",o),r.a.createElement(p.a,{to:"/"},r.a.createElement(v,{onClick:function(){return a()}},"Store")),r.a.createElement(p.a,{to:"/cart"},r.a.createElement(v,{cart:!0,onClick:function(){return a()}},"Go to the cart")))))):null})}}]),t}(n.Component),H=b.a.div(q()),K=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(D.a,null,r.a.createElement(U.a,{path:"/",exact:!0,component:W}),r.a.createElement(U.a,{path:"/details",component:Y}),r.a.createElement(U.a,{path:"/cart",component:F}),r.a.createElement(U.a,{component:A})),r.a.createElement(R,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(47);l.a.render(r.a.createElement(T,null,r.a.createElement(Q.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.d1fd7990.chunk.js.map