(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o),s=(a(85),a(32)),l=a(29),i=a(28),u=a(42),m=a(52),p=a(16),h=a(17),d=(a(26),function(){return r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",className:"nav"},r.a.createElement(i.a,null,r.a.createElement(u.a.Brand,{as:s.b,to:"/"},r.a.createElement(p.a,{className:"brand-logo",icon:h.a}),r.a.createElement("span",{className:"brand-name"},"Books")),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"}),r.a.createElement(m.a,null,r.a.createElement(m.a.Link,{as:s.b,to:"/favorites",className:"nav-text",style:{color:"#7fcd91"}},"Favorites")))))}),f=a(11),b=a(8),v=a(33),g=a(18),E=a(19),k=a(22),y=a(20),O=a(23),N=a(79),T=a(59),S=a(49),j=a(47),C=a(31),x=a.n(C),I=a(40),A=a(74),w=a.n(A).a.create({baseURL:"https://www.googleapis.com/books/v1"}),B=function(e,t){return function(){var a=Object(I.a)(x.a.mark((function a(n,r){var o,c,s,l,i;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=r().pagination,c=o.booksPerPage,s=o.totalBooks,a.prev=1,n({type:"ASYNC_ACTION_START"}),a.next=5,w.get("/volumes?q=".concat(e,"&maxResults=").concat(c,"&startIndex=").concat(t));case 5:if((l=a.sent).data.items){a.next=8;break}throw new Error("Couldn't find more books");case 8:n({type:"FETCH_BOOKS",payload:l.data.items}),i=s||l.data.totalItems,n({type:"UPDATE_PAGENATION",payload:{totalBooks:i,firstBookIndex:t}}),n({type:"UPDATE_SEARCH",payload:e}),n({type:"ASYNC_ACTION_FINISH"}),a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(1),n({type:"ASYNC_ACTION_ERROR"}),a.abrupt("return",a.t0);case 19:case"end":return a.stop()}}),a,null,[[1,15]])})));return function(e,t){return a.apply(this,arguments)}}()},_=a(21),P=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.findBooks(a.state.term)},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state.term;return r.a.createElement(N.a,{className:"mt-5",onSubmit:this.handleSubmit},r.a.createElement(T.a,{className:"mb-3"},r.a.createElement(j.a,{placeholder:"Search for books","aria-label":"Search for books","aria-describedby":"basic-addon2",value:e,name:"term",onChange:this.handleChange,autoComplete:"off"}),r.a.createElement(T.a.Append,null,r.a.createElement(S.a,{type:"submit",variant:"outline-secondary"},r.a.createElement(p.a,{icon:h.b})))))}}]),t}(r.a.Component),R=Object(_.b)((function(e){return{books:e.books,searchTerm:e.searchTerm}}),(function(e){return{findBooks:function(t){return e(function(e){return B(e,0)}(t))}}}))(P),F=function(){return r.a.createElement("div",{className:"header-img pt-5"},r.a.createElement(f.a,{className:"justify-content-center align-items-end h-25"},r.a.createElement(b.a,{className:"text-center",md:"8",lg:"8",xs:"12"},r.a.createElement("span",{className:"header-text"},"Discover your books"))),r.a.createElement(f.a,{className:"justify-content-center align-items-start"},r.a.createElement(b.a,{md:"8",lg:"8",xs:"12"},r.a.createElement(R,null))))},H=a(15),D=function(e){var t=e.book;return r.a.createElement(H.a,{as:s.b,to:"/books/".concat(t.id),style:{height:"330px",backgroundColor:" #ccedd2"}},r.a.createElement(H.a.Img,{variant:"top",src:t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.thumbnail,style:{height:"240px"}}),r.a.createElement(H.a.Body,{style:{overflow:"hidden"}},r.a.createElement("small",{className:"text-muted"},"By ",t.volumeInfo.authors&&t.volumeInfo.authors[0]," ")))},Y=a(76),J=function(){return r.a.createElement("div",{className:"pt-5"},r.a.createElement(f.a,{className:"justify-content-center align-items-end h-50"},r.a.createElement(b.a,{className:"text-center",md:"8",lg:"8",xs:"12"},r.a.createElement(Y.a,{animation:"border",variant:"secondary"}))))},M=a(43),L=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var t=(e-1)*a.props.pagination.booksPerPage;a.props.fetchNextBooks(a.props.searchTerm,t)},a.setPageNumbers=function(e){var t=a.props.pagination,n=t.currentPage,r=t.numberOfPages,o=[];if(n>Math.floor(r/2))if(n>=e-Math.floor(r/2))for(var c=r;c>0;c--)o.push(e-c+1);else for(var s=0;s<r;s++)o.push(n-Math.floor(r/2)+s);else for(var l=0;l<r;l++)o.push(l+1);return o},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.pagination.currentPage,a=Math.ceil(this.props.pagination.totalBooks/this.props.pagination.booksPerPage),n=this.setPageNumbers(a);return r.a.createElement(M.a,{className:"mt-5 justify-content-center "},r.a.createElement(M.a.Prev,{disabled:1===t,onClick:function(){return e.handleSubmit(t-1)}}),n.map((function(a){return r.a.createElement(M.a.Item,{key:a,onClick:function(){return e.handleSubmit(a)},className:t===a?"active-page":""},a)})),r.a.createElement(M.a.Next,{disabled:t===a,onClick:function(){return e.handleSubmit(t+1)}}))}}]),t}(r.a.Component),U=Object(_.b)((function(e){return{books:e.books,pagination:e.pagination,searchTerm:e.searchTerm}}),(function(e){return{fetchNextBooks:function(t,a){return e(function(e,t){return B(e,t)}(t,a))}}}))(L),K=function(e){function t(){return Object(g.a)(this,t),Object(k.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks(this.props.searchTerm,0)}},{key:"render",value:function(){return this.props.loading?r.a.createElement(J,null):r.a.createElement(i.a,null,r.a.createElement(f.a,null,this.props.books.map((function(e){return r.a.createElement(b.a,{className:"mt-4",key:e.id,xs:6,lg:2,md:4,xl:2},r.a.createElement(D,{book:e}))}))),r.a.createElement(U,null))}}]),t}(r.a.Component),W=Object(_.b)((function(e){return{books:e.books,loading:e.loading,searchTerm:e.searchTerm}}),(function(e){return{fetchBooks:function(t,a){return e(B(t,a))}}}))(K),G=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(F,null),r.a.createElement(W,null))},q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.componentDidMount=function(){var e=Object.entries(JSON.parse(localStorage.getItem("favorites")));a.setState({books:e})},a.removeFromFavorites=function(e){var t=JSON.parse(localStorage.getItem("favorites"));for(var n in t)n===e&&delete t[n];localStorage.setItem("favorites",JSON.stringify(t)),a.setState({books:Object.entries(t)})},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.books.length?r.a.createElement(J,null):r.a.createElement(i.a,{style:{height:"100vh"}},r.a.createElement(f.a,null,this.state.books.map((function(t){return r.a.createElement(b.a,{className:"mt-5",key:t[0],xs:6,lg:2,md:4,xl:2},r.a.createElement(D,{book:t[1]}),r.a.createElement(p.a,{className:"close-icon",icon:h.d,onClick:function(){return e.removeFromFavorites(t[0])}}))}))))}}]),t}(r.a.Component),z=a(77),$=function(){return r.a.createElement("div",{className:"pt-5",style:{height:"100vh",marginTop:"5rem"}},r.a.createElement(f.a,{className:"justify-content-center align-items-end h-25"},r.a.createElement(b.a,{className:"text-center",md:"8",lg:"8",xs:"12"},r.a.createElement(p.a,{icon:h.b,style:{fontSize:"3rem"}}),r.a.createElement("div",{className:"details-title mt-4"},"Oops - We couldn't find this page"))))},Q=a(53),V=function(e){var t=e.type,a=e.text,n=e.show,o=e.handleToastrClose;return r.a.createElement("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"100px"}},r.a.createElement(Q.a,{style:{position:"absolute",bottom:0,right:0},onClose:o,show:n,delay:4e3,autohide:!0},r.a.createElement(Q.a.Header,{style:{backgroundColor:"#7fcd91"}},r.a.createElement("strong",{className:"mr-auto",style:{color:"#332f2c"}},t)),r.a.createElement(Q.a.Body,{style:{backgroundColor:"#ccedd2",color:"#332f2c"}},a)))},X=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1,showToastr:!1},a.componentDidMount=Object(I.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({error:!1}),e.next=3,a.props.fetchBook(a.props.id);case 3:e.sent&&a.setState({error:!0});case 5:case"end":return e.stop()}}),e)}))),a.saveToFavorites=function(){if(null===localStorage.getItem("favorites")){var e=Object(v.a)({},a.props.book.id,a.props.book);localStorage.setItem("favorites",JSON.stringify(e))}else{var t=JSON.parse(localStorage.getItem("favorites"));Object.keys(t).includes(a.props.book.id)||(t=Object(z.a)({},t,Object(v.a)({},a.props.book.id,a.props.book)),localStorage.setItem("favorites",JSON.stringify(t)))}a.setState({showToastr:!0})},a.renderAuthors=function(e){var t="";return e&&0!==e.length?(e.forEach((function(e){t+=", "+e})),t.substring(2)):t},a.handleToastrClose=function(){a.setState({showToastr:!1})},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.book;return this.state.error?r.a.createElement($,null):0===Object.entries(e).length||this.props.loading?r.a.createElement(J,null):r.a.createElement(i.a,{className:"mt-5",style:{height:"100vh"}},r.a.createElement(H.a,{style:{backgroundColor:" #ccedd2"},mb:3},r.a.createElement(f.a,{className:"no-gutters justify-content-center align-items-center"},r.a.createElement(b.a,{md:4,sm:12,className:"text-center ",style:{marginTop:"20px",marginBottom:"20px"}},r.a.createElement(H.a.Img,{variant:"top",style:{width:"150px"},src:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail})),r.a.createElement(b.a,{md:8,sm:12},r.a.createElement(H.a.Body,{className:"details-text"},r.a.createElement(H.a.Title,{className:"details-title"},e.volumeInfo.title,r.a.createElement(S.a,{style:{float:"right",marginRight:"5px",backgroundColor:"#7fcd91"},onClick:this.saveToFavorites},r.a.createElement(p.a,{className:"brand-logo",icon:h.c}))),r.a.createElement(H.a.Text,null,"By"," ",r.a.createElement("span",{style:{fontWeight:600}},e.volumeInfo&&this.renderAuthors(this.props.book.volumeInfo.authors))),r.a.createElement(H.a.Text,null,e.volumeInfo.publishedDate),r.a.createElement(H.a.Text,null,e.volumeInfo.description))))),r.a.createElement(V,{type:"Success",text:"This book has been added to your favorites",show:this.state.showToastr,handleToastrClose:this.handleToastrClose}))}}]),t}(r.a.Component),Z=Object(_.b)((function(e,t){return{book:e.currentBook,loading:e.loading,id:t.match.params.id}}),(function(e){return{fetchBook:function(t){return e(function(e){return function(){var t=Object(I.a)(x.a.mark((function t(a){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"ASYNC_ACTION_START"}),t.next=4,w.get("/volumes/".concat(e));case 4:n=t.sent,a({type:"FETCH_BOOK",payload:n.data}),a({type:"ASYNC_ACTION_FINISH"}),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),a({type:"ASYNC_ACTION_ERROR"}),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(X),ee=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/favorites",component:q}),r.a.createElement(l.a,{path:"/books/:id",component:Z}),r.a.createElement(l.a,{path:"/",component:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111);var te=a(34),ae=a(78),ne={totalBooks:0,firstBookIndex:0,booksPerPage:24,currentPage:1,numberOfPages:7},re=Object(te.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return t.payload;default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PAGENATION":return Object.assign({},e,{totalBooks:t.payload.totalBooks,firstBookIndex:t.payload.firstBookIndex,currentPage:t.payload.firstBookIndex/e.booksPerPage+1});default:return e}},currentBook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOK":return t.payload;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASYNC_ACTION_START":return!0;case"ASYNC_ACTION_FINISH":case"ASYNC_ACTION_ERROR":return!1;default:return e}},searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"popular",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SEARCH":return t.payload;default:return e}}}),oe=Object(te.d)(re,Object(te.a)(ae.a));c.a.render(r.a.createElement(_.a,{store:oe},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,t,a){},80:function(e,t,a){e.exports=a(112)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.951888ac.chunk.js.map