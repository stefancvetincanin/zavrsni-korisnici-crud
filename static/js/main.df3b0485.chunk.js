(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/loader.7ba725da.gif"},25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),i=a.n(s),l=(a(30),a(2)),c=a(3),o=a(5),u=a(4),m=a(6),d=a(7),h=a(12);a(31);function p(e){return r.a.createElement("header",{id:"top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"banner-container-large"},r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/"},r.a.createElement("h1",null,"USER DATABASE",r.a.createElement("br",null),"A CODE ASSIGNMENT"))),r.a.createElement("div",{className:"banner-container-small"},r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/"},r.a.createElement("h1",null,"CRUD DATABASE"))),r.a.createElement("div",{className:"nav-button-small"},r.a.createElement("i",{onClick:e.toggleNavMobile,className:"fas fa-bars"})),r.a.createElement("div",{className:"hide-log-out-mobile",style:{display:e.isLoggedIn?null:"none"}},r.a.createElement("span",null,"You are logged in.\xa0"),r.a.createElement("button",{onClick:function(){e.logOut()}},"Log out")))),r.a.createElement("nav",{className:"container"},r.a.createElement("ul",{style:{display:e.showNavMobile&&"block"}},r.a.createElement("li",{onClick:e.hideNavMobile},r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/"},r.a.createElement("div",{className:"link-item",style:{backgroundColor:1===e.linkActive&&"LightSeaGreen",textDecoration:1===e.linkActive&&"underline"}},"List of users"))),r.a.createElement("li",{onClick:e.hideNavMobile},r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/login"},r.a.createElement("div",{className:"link-item",style:{backgroundColor:2===e.linkActive&&"LightSeaGreen",textDecoration:2===e.linkActive&&"underline"}},"Log in"))),r.a.createElement("li",{onClick:e.hideNavMobile,id:"responsive-log-out"},r.a.createElement("div",{className:"link-item",style:{display:e.isLoggedIn?null:"none"},onClick:function(){return e.logOut()}},"Log out")),r.a.createElement("li",{onClick:e.hideNavMobile},r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/register"},r.a.createElement("div",{className:"link-item",style:{backgroundColor:3===e.linkActive&&"LightSeaGreen",textDecoration:3===e.linkActive&&"underline"}},"Add a User"))))))}var g=a(11);function E(e){return e.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}function v(e,t){return e.name.last.trim()<t.name.last.trim()?-1:e.name.last.trim()>t.name.last.trim()?1:0}function f(e,t){return t.name.last.trim()<e.name.last.trim()?-1:t.name.last.trim()>e.name.last.trim()?1:0}function y(e,t){return e.userId<t.userId?-1:e.userId>t.userId?1:0}function b(e,t){return t.userId<e.userId?-1:t.userId>e.userId?1:0}var k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{onClick:function(){return e.props.getModalId(e.props.user.userId)}},r.a.createElement("div",{className:"info-img-container"},r.a.createElement("div",{className:"info-container"},r.a.createElement("i",{className:"fas fa-info-circle user-info-button"}),r.a.createElement("h4",null,E(this.props.user.name.first+" "+this.props.user.name.last)),r.a.createElement("p",{className:"user-from"},"From: ",E(this.props.user.location.city),", ",E(this.props.user.location.state))),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:this.props.user.picture.large,alt:"User",width:"128",height:"128"}))),r.a.createElement("div",{className:"user-info-add"},r.a.createElement("div",null,r.a.createElement("p",{className:"user-dob"},r.a.createElement("i",{className:"fas fa-birthday-cake",title:void 0!==this.props.user.dob.date?"Birthday: ".concat(this.props.user.dob.date.substring(0,10)):null}),r.a.createElement("br",null),r.a.createElement("br",null),"User Id: ",this.props.user.userId),r.a.createElement("p",{className:"user-location"},"Location:",r.a.createElement("br",null)," ",E(this.props.user.location.city),",",r.a.createElement("br",null)," ",E(this.props.user.location.state))))))}}]),t}(n.Component);function N(){return r.a.createElement("div",{className:"users-not-found"},r.a.createElement("h3",null,"No users found matching the search parameters"))}function C(){return r.a.createElement("div",null,r.a.createElement("div",{className:"modal-label"},"Name:\xa0"),r.a.createElement("div",{className:"modal-label"},"Surname:\xa0"),r.a.createElement("div",{className:"modal-label"},"Born:\xa0"),r.a.createElement("div",{className:"modal-label"},"City:\xa0"),r.a.createElement("div",{className:"modal-label"},"State:\xa0"),r.a.createElement("div",{className:"modal-label"},"Email:\xa0"),r.a.createElement("div",{className:"modal-label"},"Phone:\xa0"))}var S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,first:"",last:"",date:"",state:"",city:"",phone:"",email:""},a.deleteConfirm=function(e){window.confirm("Are you sure you want to delete this user?")?a.deleteById(e):e.preventDefault()},a.deleteById=function(e){e.preventDefault(),a.props.isSendingData(!0),fetch("https://reqres.in/api/users/2",{method:"DELETE",headers:{Accept:"*/*","Content-Type":"application/json","Auth-Token":a.props.authToken}}).then(function(e){return e}).then(function(){a.props.deleteUser(a.props.user.userId),a.props.closeModal(),a.setState({editMode:!1}),a.props.isSendingData(!1)}).catch(function(e){a.props.isSendingData(!1),a.props.showServerError(),console.error("CUSTOM ERROR: "+e)})},a.handleSubmit=function(e){e.preventDefault();var t={name:{first:a.state.first.toLowerCase(),last:a.state.last.toLowerCase()},email:a.state.email,phone:a.state.phone,dob:{date:a.state.date},location:{city:a.state.city.toLowerCase(),state:a.state.state.toLowerCase()},userId:a.props.user.userId,picture:{large:a.props.user.picture.large}};a.props.isSendingData(!0),fetch("https://reqres.in/api/users/2",{method:"PUT",headers:{Accept:"*/*","Content-Type":"application/json","Auth-Token":a.props.authToken},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(){a.props.editUser(t,a.props.user.userId),a.viewMode(),a.props.isSendingData(!1)}).catch(function(e){a.props.isSendingData(!1),a.props.showServerError(),console.error("CUSTOM ERROR: "+e)})},a.editMode=function(){a.setState({editMode:!0})},a.viewMode=function(){a.setState({editMode:!1})},a.closeModal=function(){a.props.closeModal(),a.setState({editMode:!1})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.user!==e.user&&this.setState({first:this.props.user.name.first,last:this.props.user.name.last,date:this.props.user.dob.date,city:this.props.user.location.city,state:this.props.user.location.state,phone:this.props.user.phone,email:this.props.user.email})}},{key:"render",value:function(){var e=this;return this.props.displayModal?this.state.editMode?r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal"},r.a.createElement("i",{className:"fas fa-times-circle modal-close",onClick:this.closeModal}),r.a.createElement("div",{className:"modal-form-container"},r.a.createElement("img",{src:this.props.user.picture.large,alt:"User",width:"128",height:"128"}),r.a.createElement("button",{onClick:this.viewMode},"View Info"),r.a.createElement("div",{className:"modal-form-columns"},r.a.createElement(C,null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"first",value:this.state.first,onChange:this.handleChange,placeholder:"Name",required:!0}),r.a.createElement("input",{type:"text",name:"last",value:this.state.last,onChange:this.handleChange,placeholder:"Surname",required:!0}),r.a.createElement("input",{type:"date",name:"date",value:this.state.date.substring(0,10),onChange:this.handleChange,placeholder:"Date of Birth",required:!0}),r.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange,placeholder:"City",required:!0}),r.a.createElement("input",{type:"text",name:"state",value:this.state.state,onChange:this.handleChange,placeholder:"State",required:!0}),r.a.createElement("input",{type:"text",className:"modal-email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email",pattern:".{1,}(@)\\w{2,}\\.\\w{2,}",required:!0}),r.a.createElement("input",{type:"tel",name:"phone",value:this.state.phone,onChange:this.handleChange,placeholder:"Phone",pattern:".{6,16}",required:!0}),r.a.createElement("br",null),r.a.createElement("button",null,"Submit"),r.a.createElement("button",{onClick:function(t){return e.deleteConfirm(t)}},"Delete user"))))),r.a.createElement("div",{className:"mask",onClick:this.closeModal})):r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal"},r.a.createElement("i",{className:"fas fa-times-circle modal-close",onClick:this.closeModal}),r.a.createElement("div",{className:"modal-form-container"},r.a.createElement("img",{src:this.props.user.picture.large,alt:"User",width:"128",height:"128"}),r.a.createElement("button",{style:{display:!this.props.isLoggedIn&&"none"},onClick:this.editMode},"Edit User"),r.a.createElement("div",{style:{display:this.props.isLoggedIn&&"none",textAlign:"center"}},r.a.createElement("p",null,"You must ",r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/login"},r.a.createElement("span",{onClick:this.closeModal},"log in"))," before you can edit users")),r.a.createElement("div",{className:"modal-form-columns"},r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement("span",null,E(this.state.first),"\xa0"),r.a.createElement("span",null,E(this.state.last),"\xa0"),r.a.createElement("span",null,this.state.date.substring(0,10),"\xa0"),r.a.createElement("span",null,E(this.state.city),"\xa0"),r.a.createElement("span",null,E(this.state.state),"\xa0"),r.a.createElement("span",null,this.state.email,"\xa0"),r.a.createElement("span",null,this.state.phone,"\xa0"))))),r.a.createElement("div",{className:"mask",onClick:this.closeModal})):null}}]),t}(n.Component),w=a(14),P=a.n(w);function I(e){return r.a.createElement("div",{className:"page-button page-number ".concat(e.currentPage===e.pageNumber?"page-button-active":null),id:e.pageNumber,onClick:function(t){e.handlePageChange(t)}},e.pageNumber)}var L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentPage:1},a.handlePageChange=function(e){a.setState({currentPage:Number(e.target.id)}),a.props.handlePageChange(e.target.id)},a.handlePageBack=function(){var e=a.state.currentPage-1>0?a.state.currentPage-1:1;a.setState({currentPage:e}),a.props.handlePageChange(e)},a.handlePageForward=function(){var e=a.state.currentPage+1<=Math.ceil(a.props.totalUsers/a.props.usersPerPage)?a.state.currentPage+1:Math.ceil(a.props.totalUsers/a.props.usersPerPage);a.setState({currentPage:e}),a.props.handlePageChange(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.currentPage!==e.currentPage&&this.setState({currentPage:this.props.currentPage})}},{key:"render",value:function(){for(var e=Math.ceil(this.props.totalUsers/this.props.usersPerPage),t=[],a=0;a<e;a++)t.push(r.a.createElement(I,{key:a,pageNumber:a+1,handlePageChange:this.handlePageChange,currentPage:this.state.currentPage}));var n=1===this.state.currentPage?{backgroundColor:"rgb(158, 148, 148)",color:"lightgrey",cursor:"default"}:null,s=this.state.currentPage===e?{backgroundColor:"rgb(158, 148, 148)",color:"lightgrey",cursor:"default"}:null;return r.a.createElement("div",null,r.a.createElement("div",{className:"page-buttons-container"},r.a.createElement("div",{style:n,className:"page-button",onClick:this.handlePageBack},"<"),t,r.a.createElement("div",{style:s,className:"page-button",onClick:this.handlePageForward},">")))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:a.props.users,usersWorking:a.props.users,searchField:"",searchType:"text",modalId:0,displayModal:!1,userModal:{},inputType:"text",usersPerPage:10,currentPage:1},a.sortIdDsc=function(){a.setState({usersWorking:a.state.users.sort(b)})},a.sortNameAsc=function(){a.setState({usersWorking:a.state.users.sort(v)})},a.sortNameDsc=function(){a.setState({usersWorking:a.state.users.sort(f)})},a.sortIdAsc=function(){a.setState({usersWorking:a.state.users.sort(y)})},a.handleChange=function(e){var t,n=e.target,r=n.name,s=n.value;a.setState((t={},Object(g.a)(t,r,s),Object(g.a)(t,"currentPage",1),t))},a.getModalId=function(e){var t={};a.state.users.forEach(function(a){a.userId===e&&(t=a)}),a.setState({userModal:t,modalId:e,displayModal:!0}),document.querySelector("body").classList.add("stop-scroll")},a.closeModal=function(){a.setState({displayModal:!1}),document.querySelector("body").classList.remove("stop-scroll")},a.handlePageChange=function(e){a.setState({currentPage:Number(e)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.changeLinkActive(1)}},{key:"componentDidUpdate",value:function(e){this.props.users!==e.users&&this.setState({users:this.props.users,usersWorking:this.props.users})}},{key:"render",value:function(){var e=this,t=this.state.usersWorking,a=new RegExp(this.state.searchField,"i"),n=(t="text"===this.state.searchType?t.filter(function(e){return(e.name.first+" "+e.name.last).match(a)}).map(function(t,a){return r.a.createElement(k,{user:t,key:a,getModalId:e.getModalId})}):t.filter(function(e){return String(e.userId).match(a)}).map(function(t,a){return r.a.createElement(k,{user:t,key:a,getModalId:e.getModalId})})).filter(function(t,a){return a<e.state.currentPage*e.state.usersPerPage&&a>=e.state.currentPage*e.state.usersPerPage-e.state.usersPerPage});return void 0!==n&&0!==n.length||(n=r.a.createElement(N,null)),this.props.isLoading?r.a.createElement("main",{className:"container loader"},r.a.createElement("img",{src:P.a,alt:"Loading data",width:"50"})):r.a.createElement("main",null,r.a.createElement(S,{user:this.state.userModal,displayModal:this.state.displayModal,closeModal:this.closeModal,deleteUser:this.props.deleteUser,isLoggedIn:this.props.isLoggedIn,editUser:this.props.editUser,authToken:this.props.authToken,isSendingData:this.props.isSendingData,showServerError:this.props.showServerError}),r.a.createElement("div",{style:{filter:this.state.displayModal&&"blur(2px)"},className:"container"},r.a.createElement("div",{className:"users-list-form"},r.a.createElement("h2",null,"List of users"),r.a.createElement("input",{type:this.state.searchType,name:"searchField",onChange:this.handleChange,placeholder:"Search by ".concat("text"===this.state.searchType?"Name":"User ID","...")}),r.a.createElement("select",{value:this.state.searchType,name:"searchType",onChange:this.handleChange},r.a.createElement("option",{value:"text"},"Search by Name"),r.a.createElement("option",{value:"number"},"Search by ID")),r.a.createElement("div",{className:"sort-container"},r.a.createElement("div",null,"Sort by name: "),r.a.createElement("i",{className:"fas fa-arrow-alt-circle-up sort-button",onClick:this.sortNameAsc}),r.a.createElement("i",{className:"fas fa-arrow-alt-circle-down sort-button",onClick:this.sortNameDsc})),r.a.createElement("div",{className:"sort-container"},r.a.createElement("div",null,"Sort by ID: "),r.a.createElement("i",{className:"fas fa-arrow-alt-circle-up sort-button",onClick:this.sortIdAsc}),r.a.createElement("i",{className:"fas fa-arrow-alt-circle-down sort-button",onClick:this.sortIdDsc}))),r.a.createElement("div",{className:"select-users-container"},r.a.createElement("span",null,"Select number of users to display:\xa0"),r.a.createElement("select",{name:"usersPerPage",value:this.state.usersPerPage,onChange:this.handleChange},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"))),r.a.createElement("div",{className:"pagination-container",style:{display:t.length<=this.state.usersPerPage?"none":null}},r.a.createElement(L,{usersPerPage:this.state.usersPerPage,totalUsers:t.length,handlePageChange:this.handlePageChange,currentPage:this.state.currentPage})),r.a.createElement("div",{style:{display:t.length<=this.state.usersPerPage?"none":null,padding:"0px 10px"}},"Results found: ",t.length),r.a.createElement("div",{className:"users-list"},n),r.a.createElement("div",{className:"pagination-container",style:{display:t.length<=this.state.usersPerPage?"none":null}},r.a.createElement(L,{usersPerPage:this.state.usersPerPage,totalUsers:t.length,handlePageChange:this.handlePageChange,currentPage:this.state.currentPage})),r.a.createElement("div",{className:"select-users-container"},r.a.createElement("span",null,"Select number of users to display:\xa0"),r.a.createElement("select",{name:"usersPerPage",value:this.state.usersPerPage,onChange:this.handleChange},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20")))))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleReset=function(){a.setState({username:"",password:""})},a.handleSubmit=function(e){e.preventDefault(),"admin"===a.state.username&&"password"===a.state.password?(a.props.isSendingData(!0),fetch("https://reqres.in/api/login",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify({email:a.state.username,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){var t=e.token;a.props.logIn(t),a.handleReset(),a.props.isSendingData(!1)}).catch(function(e){a.props.isSendingData(!1),a.props.showServerError(),console.error("CUSTOM ERROR: "+e)})):alert("Your username and/or password were incorrect")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.changeLinkActive(2)}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container login-container"},r.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:this.props.isLoggedIn&&"none"}},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange,required:!0})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})," ",r.a.createElement("br",null),r.a.createElement("button",null,"Log in"),r.a.createElement("input",{type:"reset",onClick:this.handleReset})),r.a.createElement("div",{style:{display:!this.props.isLoggedIn&&"none"}},r.a.createElement("h3",null,"You are logged in."),r.a.createElement("button",{onClick:function(){e.props.logOut()}},"Log out")))}}]),t}(r.a.Component),U=a(24),A=a.n(U);function D(e){var t=new RegExp(/\w/,"i"),a=new RegExp(/.{1,}(@)\w{2,}\.\w{2,}/,"i"),n=new RegExp(/[(]\d{3}[)]\s\d{3}-\d+/,"i"),s=new RegExp(/\d{4}(-)\d{2}(-)\d{2}/,"i","g");return r.a.createElement("div",{className:"add-user-signals"},r.a.createElement("div",{className:"checklist-filler"}),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:t.test(e.first)?"1":"0"},className:"fas fa-check-circle ".concat(t.test(e.first)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:t.test(e.last)?"1":"0"},className:"fas fa-check-circle ".concat(t.test(e.last)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:a.test(e.email)?"1":"0"},className:"fas fa-check-circle ".concat(a.test(e.email)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:n.test(e.phone)?"1":"0"},className:"fas fa-check-circle ".concat(n.test(e.phone)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:s.test(e.date)?"1":"0"},className:"fas fa-check-circle ".concat(s.test(e.date)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:t.test(e.city)?"1":"0"},className:"fas fa-check-circle ".concat(t.test(e.city)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:t.test(e.state)?"1":"0"},className:"fas fa-check-circle ".concat(t.test(e.state)?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:e.imgUrlCorrect?"1":"0"},className:"fas fa-check-circle ".concat(e.imgUrlCorrect?"animated-check":null)})),r.a.createElement("div",{className:"checklist-div"},r.a.createElement("i",{style:{opacity:e.agreePrivacy?"1":"0"},className:"fas fa-check-circle ".concat(e.agreePrivacy?"animated-check":null)})))}function j(e){return r.a.createElement("div",{style:{display:e.showInstructions?"block":"none"}},r.a.createElement("div",{className:"server-error-notification"},r.a.createElement("p",null,"E-mail format:",r.a.createElement("br",null),"#@##.##"),r.a.createElement("p",null,"Phone format:",r.a.createElement("br",null),"(123) 456-789"),r.a.createElement("p",null,"Picture format:",r.a.createElement("br",null),"http://###.###/###"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.hideInstructions(!1)}},"Close notification")),r.a.createElement("div",{className:"mask app-mask"}))}var T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={first:"",last:"",email:"",phone:"",date:"",city:"",state:"",agreePrivacy:!1,imgUrl:"",imgUrlCorrect:!1,showInstructions:!1,userAdded:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.type,s=t.value,i=t.checked;"checkbox"===r?a.setState(Object(g.a)({},n,i)):a.setState(Object(g.a)({},n,s))},a.handleForm=function(e){e.preventDefault();var t={name:{first:a.state.first.toLowerCase(),last:a.state.last.toLowerCase()},email:a.state.email,phone:a.state.phone,dob:{date:a.state.date},location:{city:a.state.city.toLowerCase(),state:a.state.state.toLowerCase()},userId:a.props.usersLength,picture:{large:a.state.imgUrl}};a.state.imgUrlCorrect?(a.props.isSendingData(!0),fetch("https://reqres.in/api/users",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json","Auth-Token":a.props.authToken},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(){a.props.isSendingData(!1),a.props.createUser(t),a.handleReset(),a.setState({userAdded:!0})}).catch(function(e){a.props.isSendingData(!1),a.props.showServerError(),console.error("CUSTOM ERROR: "+e)})):alert("The image url you entered failed to load. Please check your link and try again.")},a.handleReset=function(){a.setState({first:"",last:"",email:"",phone:"",date:"",city:"",state:"",agreePrivacy:!1,imgUrl:""})},a.imageLoaded=function(){a.setState({imgUrlCorrect:!0})},a.imageError=function(){a.setState({imgUrlCorrect:!1})},a.showInstructions=function(e){a.setState({showInstructions:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.changeLinkActive(3)}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("h2",{style:{display:!this.state.userAdded&&"none",textAlign:"center",margin:"15px 0"}},"User added successfully."),r.a.createElement("form",{className:"add-user-form",style:{display:!this.props.isLoggedIn&&"none"},onSubmit:this.handleForm},r.a.createElement("div",{className:"add-user-inputs"},r.a.createElement("h2",null,"Add a new user \xa0\xa0",r.a.createElement("i",{className:"fas fa-info-circle",onClick:function(){return e.showInstructions(!0)}})),r.a.createElement("input",{type:"text",placeholder:"First Name",name:"first",value:this.state.first,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Last Name",name:"last",value:this.state.last,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",placeholder:"E-mail",name:"email",value:this.state.email,onChange:this.handleChange,required:!0,pattern:".{1,}(@)\\w{2,}\\.\\w{2,}"}),r.a.createElement("br",null),r.a.createElement(A.a,{mask:["(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"Enter a phone number",value:this.state.phone,guide:!1,onChange:this.handleChange,name:"phone",pattern:"[(]\\d{3}[)]\\s\\d{3}-\\d+",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",placeholder:"Date of Birth",name:"date",onChange:this.handleChange,value:this.state.date,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Country",name:"state",value:this.state.state,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"url",placeholder:"Link your picture",name:"imgUrl",value:this.state.imgUrl,onChange:this.handleChange,required:!0,className:"img-url",style:{overflow:"hidden"}}),r.a.createElement("br",null),r.a.createElement("label",{className:"lbl-check"},r.a.createElement("small",null,"Accept privacy policy?"),r.a.createElement("input",{type:"checkbox",name:"agreePrivacy",checked:this.state.agreePrivacy,onChange:this.handleChange,required:!0}),r.a.createElement("span",{className:"checkbox-custom"})),r.a.createElement("br",null),r.a.createElement("button",null,"Submit user"),r.a.createElement("input",{type:"reset",onClick:this.handleReset}),r.a.createElement("div",{className:"img-validation-msg"},r.a.createElement("p",{style:{display:this.state.imgUrlCorrect?"none":null}},r.a.createElement("small",null,"If you are seeing this message,",r.a.createElement("br",null)," it means that the URL",r.a.createElement("br",null)," you have entered is invalid."))),r.a.createElement("br",null),r.a.createElement("img",{style:{opacity:this.state.imgUrlCorrect?"1":"0"},width:"128",src:this.state.imgUrl,alt:"",onLoad:this.imageLoaded,onError:this.imageError,height:this.state.imgUrlCorrect?null:"0"})),r.a.createElement(D,{first:this.state.first,last:this.state.last,email:this.state.email,phone:this.state.phone,date:this.state.date,city:this.state.city,state:this.state.state,imgUrlCorrect:this.state.imgUrlCorrect,agreePrivacy:this.state.agreePrivacy})),r.a.createElement("p",{style:{display:this.props.isLoggedIn&&"none",padding:"0 10px"}},"You cannot register new users until you\xa0",r.a.createElement(d.b,{to:"/zavrsni-korisnici-crud/login"},"log in")),r.a.createElement(j,{showInstructions:this.state.showInstructions,hideInstructions:this.showInstructions}))}}]),t}(r.a.Component);function x(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("a",{href:"https://www.github.com/stefancvetincanin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("small",null,"\xa9 by Stefan Cvetin\u010danin"),r.a.createElement("a",{href:"http://www.linkedin.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})))}function R(){return r.a.createElement("div",null,r.a.createElement("div",{className:"sending-loader"},r.a.createElement("img",{style:{position:"relative",display:"block"},src:P.a,alt:"",width:"100"})),r.a.createElement("div",{className:"mask app-mask"}))}function q(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"server-error-notification"},r.a.createElement("p",null,"We're sorry but there seems to be a problem with the API server. Please try again later."),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.hideServerError()}},"Close notification")),r.a.createElement("div",{className:"mask app-mask"}))}var B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,users:[],isLoggedIn:!1,authToken:"",loginName:"",linkActive:1,isSendingData:!1,showNavMobile:!1,serverError:!1},a.deleteUser=function(e){a.setState(function(t){return{users:t.users.filter(function(t){return t.userId!==e})}})},a.createUser=function(e){var t=a.state.users;t.push(e),a.setState({users:t})},a.editUser=function(e,t){a.setState(function(a){return{users:a.users.map(function(a){return a.userId===t?e:a})}})},a.getHighestId=function(){var e=0;return a.state.users.forEach(function(t){t.userId>e&&(e=t.userId)}),++e},a.logIn=function(e){a.setState({isLoggedIn:!0,authToken:e})},a.logOut=function(){a.setState({isLoggedIn:!1,authToken:""})},a.changeLinkActive=function(e){a.setState({linkActive:e})},a.isSendingData=function(e){a.setState({isSendingData:e})},a.toggleNavMobile=function(){a.setState(function(e){return{showNavMobile:!e.showNavMobile}})},a.hideNavMobile=function(){a.setState({showNavMobile:!1})},a.hideServerError=function(){a.setState({serverError:!1})},a.showServerError=function(){a.setState({serverError:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://randomuser.me/api/?results=40").then(function(e){return e.json()}).then(function(t){for(var a=0;a<t.results.length;a++)t.results[a].userId=a+1;e.setState({users:t.results,isLoading:!1})}).catch(function(){e.showServerError()}),window.addEventListener("scroll",function(){document.documentElement.scrollTop>=200?document.getElementById("back-to-top").classList.add("btt-visible"):document.getElementById("back-to-top").classList.remove("btt-visible")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"grid-container"},r.a.createElement(d.a,null,r.a.createElement(p,{linkActive:this.state.linkActive,changeLinkActive:this.changeLinkActive,logOut:this.logOut,isLoggedIn:this.state.isLoggedIn,toggleNavMobile:this.toggleNavMobile,showNavMobile:this.state.showNavMobile,hideNavMobile:this.hideNavMobile}),r.a.createElement(h.a,{path:"/zavrsni-korisnici-crud/",exact:!0,render:function(t){return r.a.createElement(M,Object.assign({},t,{users:e.state.users,isLoading:e.state.isLoading,deleteUser:e.deleteUser,authToken:e.state.authToken,isLoggedIn:e.state.isLoggedIn,changeLinkActive:e.changeLinkActive,editUser:e.editUser,isSendingData:e.isSendingData,showServerError:e.showServerError}))}}),r.a.createElement(h.a,{path:"/zavrsni-korisnici-crud/login",exact:!0,render:function(t){return r.a.createElement(O,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn,logIn:e.logIn,logOut:e.logOut,changeLinkActive:e.changeLinkActive,isSendingData:e.isSendingData,showServerError:e.showServerError}))}}),r.a.createElement(h.a,{path:"/zavrsni-korisnici-crud/register",exact:!0,render:function(t){return r.a.createElement(T,Object.assign({},t,{usersLength:e.getHighestId(),isLoggedIn:e.state.isLoggedIn,authToken:e.state.authToken,createUser:e.createUser,changeLinkActive:e.changeLinkActive,isSendingData:e.isSendingData,showServerError:e.showServerError}))}})),r.a.createElement(x,null),r.a.createElement("div",{style:{display:!this.state.isSendingData&&"none"}},r.a.createElement(R,null)),r.a.createElement("div",{style:{display:!this.state.serverError&&"none"}},r.a.createElement(q,{hideServerError:this.hideServerError})),r.a.createElement("a",{id:"back-to-top",className:"btt",href:"#top"},r.a.createElement("i",{className:"fas fa-chevron-up"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.df3b0485.chunk.js.map