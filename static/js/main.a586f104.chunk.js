(this.webpackJsonpmyreads=this.webpackJsonpmyreads||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/no_cover_available.dee850f9.png"},24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/left.6c7df99d.svg"},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),s=n.n(r),l=(n(29),n(7)),c=n(8),i=n(10),u=n(9),h=n(11),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={moved:!1},n.moveShelf=function(e){n.props.onMove(n.props.book,e.target.value),n.setState({moved:!n.state.moved})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,n=e.books,a=e.shelves,r="none",s=!0,l=!1,c=void 0;try{for(var i,u=n[Symbol.iterator]();!(s=(i=u.next()).done);s=!0){var h=i.value;if(h.id===t.id){r=h.shelf;break}}}catch(f){l=!0,c=f}finally{try{s||null==u.return||u.return()}finally{if(l)throw c}}return o.a.createElement("div",{className:"shelf-menu-btn"},o.a.createElement("select",{onChange:this.moveShelf,defaultValue:r},o.a.createElement("option",{value:"none",disabled:!0},"Move to..."),a.map((function(e,t){return o.a.createElement("option",{key:t,value:e.value},e.title)})),"none"!==t.shelf&&o.a.createElement("option",{value:"none"},"Remove")))}}]),t}(a.Component),v=n(20),m=n.n(v),d=function(e){return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"imgcont"},o.a.createElement(f,{key:e.book.id,book:e.book,books:e.books,onMove:e.onMove,shelves:e.shelves}),o.a.createElement("img",{src:e.book.imageLinks&&e.book.imageLinks.thumbnail?e.book.imageLinks.thumbnail:m.a,alt:e.book.title?e.book.title:"Untitled"})),o.a.createElement("h5",null,e.book.title?e.book.title:"No Title Available"),o.a.createElement("h6",null,e.book.authors?e.book.authors.join(", "):"No Authors Available"))},b=function(e){return o.a.createElement("div",{className:"shelf"},e.shelf.title&&o.a.createElement("div",null,o.a.createElement("h2",{className:"shelf-title"},e.shelf.title)),o.a.createElement("div",{className:"shelf-books"},e.books.map((function(t,n){return o.a.createElement(d,{key:n,book:t,books:e.books,onMove:e.onMove,shelves:e.shelves})}))))},p=function(e){return o.a.createElement("div",{className:"shelves"},e.shelves.map((function(t,n){var a=e.books.filter((function(e){return e.shelf===t.value}));return o.a.createElement(b,{key:n,shelves:e.shelves,shelf:t,books:a,onMove:e.onMove})})))},k=n(21);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(O=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:O},S=function(e,t){return fetch("".concat(g,"/books/").concat(e.id),{method:"PUT",headers:E({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},w=function(e){return fetch("".concat(g,"/search"),{method:"POST",headers:E({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},M=n(5),N=n(13),P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",results:[],catchError:!1},n.filterBooks=function(e){return e.forEach((function(e){var t=!0,a=!1,o=void 0;try{for(var r,s=n.props.shelvedBooks[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var l=r.value;if(e.id===l.id){e.shelf=l.shelf;break}e.shelf="none"}}catch(c){a=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(a)throw o}}})),e},n.searchResults=function(e){w(e.trim()).then((function(t){e===n.state.query&&(t&&t.length>0?n.setState({results:n.props.shelvedBooks?n.filterBooks(t):t,catchError:!1}):n.setState({results:[],catchError:!0}))}))},n.updateQuery=function(e){n.setState((function(){return{query:e}})),e?n.searchResults(e):n.setState({results:[],catchErr:!1})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.results,r=t.catchError,s=this.props.shelves;return o.a.createElement("div",{id:"search-pg"},o.a.createElement("input",{id:"search-bar",type:"text",value:n,placeholder:"Search for books",onChange:function(t){return e.updateQuery(t.target.value)}}),o.a.createElement("div",{className:"shelves"},o.a.createElement("div",{className:"shelf"},a&&a.length>0&&o.a.createElement("h3",null,a.length," Results"),o.a.createElement("div",{className:"shelf-books"},o.a.createElement("div",{className:"imgcont"},o.a.createElement(b,{shelf:"Search Results",books:a,shelves:s,onMove:this.props.onMove}))))),r&&o.a.createElement("h3",null,'Your search - "',n,'" - did not match with any books.'))}}]),t}(a.Component),R=(n(30),n(31),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],shelves:[{value:"currentlyReading",title:"Currently Reading"},{value:"wantToRead",title:"Want to Read"},{value:"read",title:"Read"}],error:!1},n.handleMove=function(e,t){S(e,t).then((function(a){e.shelf=t,n.setState((function(t){return{books:t.books.filter((function(t){return t.id!==e.id})).concat(e)}}))})).catch((function(){return n.setState({error:!0})}))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(g,"/books"),{headers:j}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){return e.setState({books:t})})).catch((function(){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this;return this.state.error?o.a.createElement("p",null,"Please try again later."):o.a.createElement("div",{id:"maincontainer"},o.a.createElement("div",{id:"header"},o.a.createElement(M.c,null,o.a.createElement(M.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{id:"empty"})}})),o.a.createElement(N.b,{to:"/"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{id:"empty"})),o.a.createElement(M.c,null,o.a.createElement(M.a,{exact:!0,path:"/",render:function(t){return o.a.createElement("div",null,o.a.createElement(p,{books:e.state.books,onMove:e.handleMove,shelves:e.state.shelves}),o.a.createElement(N.b,{to:"/search"},o.a.createElement("button",{id:"search-btn",type:"submit"},"+")))}}),o.a.createElement(M.a,{path:"/search",render:function(){return o.a.createElement(P,{shelves:e.state.shelves,onMove:e.handleMove,shelvedBooks:e.state.books})}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(N.a,{basename:"/"},o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a586f104.chunk.js.map