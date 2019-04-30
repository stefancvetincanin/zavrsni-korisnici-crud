(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/loader.7ba725da.gif"},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),i=(a(29),a(2)),o=a(3),c=a(5),u=a(4),h=a(6),m=a(10),d=a(12),p=(a(30),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={liActive1:!0,liActive2:!1,liActive3:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",{className:"container"},"User database"),r.a.createElement("nav",{className:"container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/zavrsni-korisnici-crud/"},r.a.createElement("div",{className:"link-item",style:{backgroundColor:1===this.props.linkActive&&"LightSeaGreen",textDecoration:1===this.props.linkActive&&"underline"},onClick:function(){e.props.changeLinkActive(1)}},"Users list"))),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/zavrsni-korisnici-crud/login"},r.a.createElement("div",{className:"link-item",style:{backgroundColor:2===this.props.linkActive&&"LightSeaGreen",textDecoration:2===this.props.linkActive&&"underline"},onClick:function(){e.props.changeLinkActive(2)}},"Login"))),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/zavrsni-korisnici-crud/register"},r.a.createElement("div",{className:"link-item",style:{backgroundColor:3===this.props.linkActive&&"LightSeaGreen",textDecoration:3===this.props.linkActive&&"underline"},onClick:function(){e.props.changeLinkActive(3)}},"Create User")))))))}}]),t}(r.a.Component)),g=a(11);function E(e){return e.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}function f(e,t){return e.name.last.trim()<t.name.last.trim()?-1:e.name.last.trim()>t.name.last.trim()?1:0}function v(e,t){return t.name.last.trim()<e.name.last.trim()?-1:t.name.last.trim()>e.name.last.trim()?1:0}function b(e,t){return e.userId<t.userId?-1:e.userId>t.userId?1:0}function y(e,t){return t.userId<e.userId?-1:t.userId>e.userId?1:0}var C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={display:!0},a.getModalId=function(){a.props.getModalId(a.props.user.userId)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.getModalId,className:"user-info"},r.a.createElement("div",null,r.a.createElement("h3",null,E(this.props.user.name.first+" "+this.props.user.name.last)),r.a.createElement("p",null,"From: ",E(this.props.user.location.city),", ",r.a.createElement("br",null),E(this.props.user.location.state)),r.a.createElement("p",null,"User Id: ",this.props.user.userId),r.a.createElement("img",{src:this.props.user.picture.large,alt:"User",width:"128"})))}}]),t}(n.Component);function k(){return r.a.createElement("div",{className:"users-not-found"},r.a.createElement("h3",null,"No users found matching the search parameters"))}var P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1},a.deleteById=function(){a.props.deleteUser(a.props.user.userId),a.props.closeModal(),a.setState({editMode:!1})},a.editMode=function(){a.setState({editMode:!0})},a.viewMode=function(){a.setState({editMode:!1})},a.handleSubmit=function(e){e.preventDefault(),alert("user edited!")},a.closeModal=function(){a.props.closeModal(),a.setState({editMode:!1})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.displayModal?this.state.editMode?r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-close",onClick:this.closeModal},"X"),r.a.createElement("br",null),r.a.createElement("img",{src:this.props.user.picture.large,alt:"User",width:"128"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.viewMode},"View Info"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("p",null,"Name: ",E(this.props.user.name.first+" "+this.props.user.name.last),r.a.createElement("br",null),"Date of birth: ",this.props.user.dob.date.substring(10),r.a.createElement("br",null),"From: ",E(this.props.user.location.city),", ",E(this.props.user.location.state)),r.a.createElement("p",null,"E-mail: ",this.props.user.email,r.a.createElement("br",null),"Phone: ",this.props.user.phone,r.a.createElement("br",null),"User Id: ",this.props.user.userId),r.a.createElement("button",{onClick:this.handleSubmit},"Submit"),r.a.createElement("button",{onClick:this.deleteById},"Delete user"))),r.a.createElement("div",{className:"mask",onClick:this.closeModal})):r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-close",onClick:this.closeModal},"X"),r.a.createElement("br",null),r.a.createElement("img",{src:this.props.user.picture.large,alt:"User",width:"128"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.editMode},"Edit User"),r.a.createElement("br",null),r.a.createElement("p",null,"Name: ",E(this.props.user.name.first+" "+this.props.user.name.last),r.a.createElement("br",null),"Date of birth: ",this.props.user.dob.date.substring(0,10),r.a.createElement("br",null),"From: ",E(this.props.user.location.city),", ",E(this.props.user.location.state)),r.a.createElement("p",null,"E-mail: ",this.props.user.email,r.a.createElement("br",null),"Phone: ",this.props.user.phone,r.a.createElement("br",null),"User Id: ",this.props.user.userId)),r.a.createElement("div",{className:"mask",onClick:this.closeModal})):null}}]),t}(n.Component),I=a(23),L=a.n(I);function O(e){return r.a.createElement("div",{style:{backgroundColor:e.currentPage===e.pageNumber?"rgb(80, 209, 209)":null},className:"page-button page-number",id:e.pageNumber,onClick:function(t){e.handlePageChange(t)}},e.pageNumber)}var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentPage:1},a.handlePageChange=function(e){a.setState({currentPage:Number(e.target.id)}),a.props.handlePageChange(e.target.id)},a.handlePageBack=function(){var e=a.state.currentPage-1>0?a.state.currentPage-1:1;a.setState({currentPage:e}),a.props.handlePageChange(e)},a.handlePageForward=function(){var e=a.state.currentPage+1<=Math.ceil(a.props.totalUsers/a.props.usersPerPage)?a.state.currentPage+1:Math.ceil(a.props.totalUsers/a.props.usersPerPage);a.setState({currentPage:e}),a.props.handlePageChange(e)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.currentPage!==e.currentPage&&this.setState({currentPage:this.props.currentPage})}},{key:"render",value:function(){for(var e=Math.ceil(this.props.totalUsers/this.props.usersPerPage),t=[],a=0;a<e;a++)t.push(r.a.createElement(O,{key:a,pageNumber:a+1,handlePageChange:this.handlePageChange,currentPage:this.state.currentPage}));var n=1===this.state.currentPage?{backgroundColor:"rgb(158, 148, 148)",color:"lightgrey",cursor:"default"}:null,s=this.state.currentPage===e?{backgroundColor:"rgb(158, 148, 148)",color:"lightgrey",cursor:"default"}:null;return r.a.createElement("div",null,r.a.createElement("div",{className:"page-buttons-container"},r.a.createElement("div",{style:n,className:"page-button",onClick:this.handlePageBack},"<"),t,r.a.createElement("div",{style:s,className:"page-button",onClick:this.handlePageForward},">")))}}]),t}(r.a.Component),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:a.props.users,usersWorking:a.props.users,searchField:"",searchType:"text",modalId:0,displayModal:!1,userModal:{},inputType:"text",usersPerPage:10,currentPage:1},a.sortIdDsc=function(){a.setState({usersWorking:a.state.users.sort(y)})},a.sortNameAsc=function(){a.setState({usersWorking:a.state.users.sort(f)})},a.sortNameDsc=function(){a.setState({usersWorking:a.state.users.sort(v)})},a.sortIdAsc=function(){a.setState({usersWorking:a.state.users.sort(b)})},a.handleChange=function(e){var t,n=e.target,r=n.name,s=n.value;a.setState((t={},Object(g.a)(t,r,s),Object(g.a)(t,"currentPage",1),t))},a.getModalId=function(e){var t={};a.state.users.forEach(function(a){a.userId===e&&(t=a)}),a.setState({userModal:t,modalId:e,displayModal:!0})},a.closeModal=function(){a.setState({displayModal:!1})},a.handlePageChange=function(e){a.setState({currentPage:Number(e)})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.users!==e.users&&this.setState({users:this.props.users,usersWorking:this.props.users})}},{key:"render",value:function(){var e=this,t=this.state.usersWorking,a=new RegExp(this.state.searchField,"i"),n=(t="text"===this.state.searchType?t.filter(function(e){return(e.name.first+" "+e.name.last).match(a)}).map(function(t,a){return r.a.createElement(C,{user:t,key:a,getModalId:e.getModalId})}):t.filter(function(e){return String(e.userId).match(a)}).map(function(t,a){return r.a.createElement(C,{user:t,key:a,getModalId:e.getModalId})})).filter(function(t,a){return a<e.state.currentPage*e.state.usersPerPage&&a>=e.state.currentPage*e.state.usersPerPage-e.state.usersPerPage});return void 0!==n&&0!==n.length||(n=r.a.createElement(k,null)),this.props.isLoading?r.a.createElement("main",{className:"container loader"},r.a.createElement("img",{src:L.a,alt:"Loading data",width:"50"})):r.a.createElement("main",{className:"container"},r.a.createElement(P,{user:this.state.userModal,displayModal:this.state.displayModal,closeModal:this.closeModal,deleteUser:this.props.deleteUser}),r.a.createElement("h2",null,"List of users"),r.a.createElement("input",{type:this.state.searchType,name:"searchField",onChange:this.handleChange,placeholder:"Search by ".concat("text"===this.state.searchType?"Last Name":"User ID","...")}),r.a.createElement("select",{value:this.state.searchType,name:"searchType",onChange:this.handleChange},r.a.createElement("option",{value:"text"},"Search by Name"),r.a.createElement("option",{value:"number"},"Search by ID")),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.sortNameAsc},"Last name - ascending"),r.a.createElement("button",{onClick:this.sortNameDsc},"Last name - descending"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.sortIdAsc},"ID - ascending"),r.a.createElement("button",{onClick:this.sortIdDsc},"ID - descending"),r.a.createElement("br",null),r.a.createElement("select",{name:"usersPerPage",value:this.state.usersPerPage,onChange:this.handleChange},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20")),r.a.createElement("div",{className:"pagination-container",style:{display:t.length<=this.state.usersPerPage?"none":null}},r.a.createElement(j,{usersPerPage:this.state.usersPerPage,totalUsers:t.length,handlePageChange:this.handlePageChange,currentPage:this.state.currentPage})),r.a.createElement("div",{className:"users-list"},n),r.a.createElement("div",{className:"pagination-container",style:{display:t.length<=this.state.usersPerPage?"none":null}},r.a.createElement(j,{usersPerPage:this.state.usersPerPage,totalUsers:t.length,handlePageChange:this.handlePageChange,currentPage:this.state.currentPage})),r.a.createElement("select",{name:"usersPerPage",value:this.state.usersPerPage,onChange:this.handleChange},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20")))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleReset=function(){a.setState({username:"",password:""})},a.handleSubmit=function(e){if(e.preventDefault(),"admin"===a.state.username&&"password"===a.state.password){var t=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,n=0;n<10;n++)e+=t.charAt(Math.floor(Math.random()*a));return e}();a.props.logIn(t),a.handleReset()}else alert("incorrect credentials")},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:this.props.isLoggedIn&&"none"}},r.a.createElement("h2",null,"Login"),r.a.createElement("h4",{title:"Username: 'admin', password: 'password'"},"(mouse-over for hint!)"),r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange,required:!0})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})," ",r.a.createElement("br",null),r.a.createElement("button",null,"Log in"),r.a.createElement("input",{type:"reset",onClick:this.handleReset})),r.a.createElement("div",{style:{display:!this.props.isLoggedIn&&"none"}},r.a.createElement("h3",null,"You are logged in"),r.a.createElement("button",{onClick:function(){e.props.logOut()}},"Log out")))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={first:"",last:"",email:"",phone:"",date:"",city:"",state:"",agreePrivacy:!1,imgUrl:"",imgUrlCorrect:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.type,s=t.value,l=t.checked;"checkbox"===r?a.setState(Object(g.a)({},n,l)):a.setState(Object(g.a)({},n,s))},a.handleForm=function(e){e.preventDefault();var t={name:{first:a.state.first.toLowerCase(),last:a.state.last.toLowerCase()},email:a.state.email.toLowerCase(),phone:a.state.phone,dob:{date:a.state.date},location:{city:a.state.city.toLowerCase(),state:a.state.state.toLowerCase()},userId:a.props.usersLength,picture:{large:a.state.imgUrl}};a.state.imgUrlCorrect?(a.props.createUser(t),a.handleReset(),alert("Succesfully submited!")):alert("The image url you entered failed to load. Please check your link and try again.")},a.handleReset=function(){a.setState({first:"",last:"",email:"",phone:"",date:"",city:"",state:"",agreePrivacy:!1,imgUrl:""})},a.imageLoaded=function(){a.setState({imgUrlCorrect:!0})},a.imageError=function(){a.setState({imgUrlCorrect:!1})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("h2",null,"Create User"),r.a.createElement("form",{style:{display:!this.props.isLoggedIn&&"none"},onSubmit:this.handleForm},r.a.createElement("input",{type:"text",placeholder:"First Name",name:"first",value:this.state.first,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Last Name",name:"last",value:this.state.last,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",placeholder:"E-mail",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"tel",placeholder:"Phone number",name:"phone",value:this.state.phone,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",placeholder:"Date of Birth",name:"date",onChange:this.handleChange,value:this.state.date,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Country",name:"state",value:this.state.state,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"url",placeholder:"Link your picture",name:"imgUrl",value:this.state.imgUrl,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"agreePrivacy",checked:this.state.agreePrivacy,onChange:this.handleChange,required:!0}),"Do you agree to our privacy policy?"),r.a.createElement("br",null),r.a.createElement("button",null,"Submit user"),r.a.createElement("input",{type:"reset",onClick:this.handleReset}),r.a.createElement("hr",null),r.a.createElement("small",null,r.a.createElement("p",null,"First name: ",this.state.first),r.a.createElement("p",null,"Last name: ",this.state.last),r.a.createElement("p",null,"Email: ",this.state.email),r.a.createElement("p",null,"Phone: ",this.state.phone),r.a.createElement("p",null,"Date: ",this.state.date),r.a.createElement("p",null,"City: ",this.state.city),r.a.createElement("p",null,"Country: ",this.state.state),r.a.createElement("p",null,"Agreement to privacy policy: ",this.state.agreePrivacy?"agreed":"not agreed")),r.a.createElement("p",{style:{display:this.state.imgUrlCorrect?"none":null}},"Here should be a picture preview; if you cannot see it, that means the URL you entered is invalid"),r.a.createElement("img",{src:this.state.imgUrl,alt:"",onLoad:this.imageLoaded,onError:this.imageError})),r.a.createElement("p",{style:{display:this.props.isLoggedIn&&"none"}},"You cannot register new users until you\xa0",r.a.createElement(m.b,{to:"login",onClick:function(){e.props.changeLinkActive(2)}},"log in")))}}]),t}(r.a.Component);function U(){return r.a.createElement("footer",{className:"container"},r.a.createElement("small",null,"\xa9 by Stefan Cvetin\u010danin"))}var M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,users:[],isLoggedIn:!1,authToken:"",loginName:"",linkActive:1},a.deleteUser=function(e){a.setState(function(t){return{users:t.users.filter(function(t){return t.userId!==e})}})},a.createUser=function(e){var t=a.state.users;t.push(e),a.setState({users:t})},a.getHighestId=function(){var e=0;return a.state.users.forEach(function(t){t.userId>e&&(e=t.userId)}),++e},a.logIn=function(e){a.setState({isLoggedIn:!0,authToken:e})},a.logOut=function(){a.setState({isLoggedIn:!1,authToken:""})},a.changeLinkActive=function(e){a.setState({linkActive:e})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://randomuser.me/api/?results=40").then(function(e){return e.json()}).then(function(t){for(var a=0;a<t.results.length;a++)t.results[a].userId=a+1;e.setState({users:t.results,isLoading:!1})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(p,{linkActive:this.state.linkActive,changeLinkActive:this.changeLinkActive}),r.a.createElement(d.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(S,Object.assign({},t,{users:e.state.users,isLoading:e.state.isLoading,deleteUser:e.deleteUser,authToken:e.state.authToken,isLoggedIn:e.state.isLoggedIn}))}}),r.a.createElement(d.a,{path:"/login",exact:!0,render:function(t){return r.a.createElement(w,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn,logIn:e.logIn,logOut:e.logOut}))}}),r.a.createElement(d.a,{path:"/register",exact:!0,render:function(t){return r.a.createElement(N,Object.assign({},t,{usersLength:e.getHighestId(),isLoggedIn:e.state.isLoggedIn,authToken:e.state.authToken,createUser:e.createUser,changeLinkActive:e.changeLinkActive}))}})),r.a.createElement(U,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.5d2263c7.chunk.js.map