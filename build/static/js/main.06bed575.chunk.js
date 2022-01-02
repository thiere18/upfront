(this["webpackJsonpfastapi-react"]=this["webpackJsonpfastapi-react"]||[]).push([[0],{393:function(e,a,t){e.exports=t(560)},398:function(e,a,t){},521:function(e,a){},560:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),l=t.n(c),s=t(18),o=(t(398),t(16)),i=t(145),m=t(40),u=t.n(m),d=t(70),p=t(66),E="https://backs.thiere18.studio",b=t(135),g=function(){var e=localStorage.getItem("permissions");return!!e&&("user"===e||"admin"===e)},f=function(){var e=Object(d.a)(u.a.mark((function e(a,t){var r,n,c,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.length>0&&t.length>0){e.next=2;break}throw new Error("Email or password was not provided");case 2:return(r=new FormData).append("username",a),r.append("password",t),n=new Request("".concat(E,"/api/token"),{method:"POST",body:r}),e.next=8,fetch(n);case 8:if(500!==(c=e.sent).status){e.next=11;break}throw new Error("Internal server error");case 11:return e.next=13,c.json();case 13:if(l=e.sent,!(c.status>400&&c.status<500)){e.next=18;break}if(!l.detail){e.next=17;break}throw l.detail;case 17:throw l;case 18:return"access_token"in l&&(s=Object(b.a)(l.access_token),localStorage.setItem("token",l.access_token),localStorage.setItem("permissions",s.permissions)),e.abrupt("return",l);case 20:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(u.a.mark((function e(a,t,r){var n,c,l,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.length>0){e.next=2;break}throw new Error("Email was not provided");case 2:if(t.length>0){e.next=4;break}throw new Error("Password was not provided");case 4:if(r.length>0){e.next=6;break}throw new Error("Password confirmation was not provided");case 6:return(n=new FormData).append("username",a),n.append("password",t),c=new Request("/api/signup",{method:"POST",body:n}),e.next=12,fetch(c);case 12:if(500!==(l=e.sent).status){e.next=15;break}throw new Error("Internal server error");case 15:return e.next=17,l.json();case 17:if(s=e.sent,!(l.status>400&&l.status<500)){e.next=22;break}if(!s.detail){e.next=21;break}throw s.detail;case 21:throw s;case 22:return"access_token"in s&&(o=Object(b.a)(s.access_token),localStorage.setItem("token",s.access_token),localStorage.setItem("permissions",o.permissions)),e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(a,t,r){return e.apply(this,arguments)}}(),h=Object(i.a)((function(e){return{link:{color:"#61dafb"}}})),w=function(){var e=Object(r.useState)(""),a=Object(p.a)(e,2),t=(a[0],a[1],Object(r.useState)("")),c=Object(p.a)(t,2);c[0],c[1],h();return n.a.createElement(n.a.Fragment,null,g()?n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{to:"/admin"})):n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{to:"/login"})))},j=t(561),O=t(622),k=t(563),x=t(627),S=t(660),y=t(567),I=t(623),T=t(626),_=t(656),C=Object(i.a)((function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(1)},button:{textTransform:"none"},marginTop:{marginTop:10}}})),P=function(){var e=C(),a=Object(o.g)(),t=Object(r.useState)(""),c=Object(p.a)(t,2),l=c[0],s=c[1],i=Object(r.useState)(""),m=Object(p.a)(i,2),E=m[0],b=m[1],v=Object(r.useState)(""),h=Object(p.a)(v,2),w=h[0],P=h[1],F=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(""),e.prev=1,e.next=4,f(l,E);case 4:e.sent&&a.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Error?P(e.t0.message):P(String(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return g()?n.a.createElement(o.a,{to:"/"}):n.a.createElement(j.a,{className:e.padding},n.a.createElement("div",{className:e.margin},n.a.createElement(O.a,{container:!0,spacing:8,alignItems:"flex-end"},n.a.createElement(O.a,{item:!0},n.a.createElement(I.a,null)),n.a.createElement(O.a,{item:!0,md:!0,sm:!0,xs:!0},n.a.createElement(k.a,{id:"email",label:"Email",type:"email",value:l,onChange:function(e){return s(e.currentTarget.value)},fullWidth:!0,autoFocus:!0,required:!0}))),n.a.createElement(O.a,{container:!0,spacing:8,alignItems:"flex-end"},n.a.createElement(O.a,{item:!0},n.a.createElement(T.a,null)),n.a.createElement(O.a,{item:!0,md:!0,sm:!0,xs:!0},n.a.createElement(k.a,{id:"password",label:"Password",type:"password",value:E,onChange:function(e){return b(e.currentTarget.value)},fullWidth:!0,required:!0}))),n.a.createElement("br",null),n.a.createElement(O.a,{container:!0,alignItems:"center"},w&&n.a.createElement(O.a,{item:!0},n.a.createElement(_.a,{severity:"error"},w))),n.a.createElement(O.a,{container:!0,alignItems:"center",justify:"space-between"},n.a.createElement(O.a,{item:!0},n.a.createElement(x.a,{control:n.a.createElement(S.a,{color:"primary"}),label:"Remember me"})),n.a.createElement(O.a,{item:!0},n.a.createElement(y.a,{disableFocusRipple:!0,disableRipple:!0,className:e.button,variant:"text",color:"primary"},"Forgot password ?"))),n.a.createElement(O.a,{container:!0,justify:"center",className:e.marginTop}," ",n.a.createElement(y.a,{variant:"outlined",color:"primary",className:e.button,onClick:function(){return a.push("/signup")}},"Sign Up")," ","\xa0",n.a.createElement(y.a,{variant:"outlined",color:"primary",className:e.button,onClick:F},"Login"))))},F=Object(i.a)((function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(1)},button:{textTransform:"none"},marginTop:{marginTop:10}}})),N=function(){var e=F(),a=Object(o.g)(),t=Object(r.useState)(""),c=Object(p.a)(t,2),l=c[0],s=c[1],i=Object(r.useState)(""),m=Object(p.a)(i,2),E=m[0],b=m[1],f=Object(r.useState)(""),h=Object(p.a)(f,2),w=h[0],x=h[1],S=Object(r.useState)(""),C=Object(p.a)(S,2),P=C[0],N=C[1],q=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E===w){e.next=4;break}N("Passwords do not match"),e.next=15;break;case 4:return N(""),e.prev=5,e.next=8,v(l,E,w);case 8:e.sent&&a.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),e.t0 instanceof Error?N(e.t0.message):N(String(e.t0));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(a){return e.apply(this,arguments)}}();return g()?n.a.createElement(o.a,{to:"/"}):n.a.createElement(j.a,{className:e.padding},n.a.createElement("div",{className:e.margin},n.a.createElement(O.a,{container:!0,spacing:8,alignItems:"flex-end"},n.a.createElement(O.a,{item:!0},n.a.createElement(I.a,null)),n.a.createElement(O.a,{item:!0,md:!0,sm:!0,xs:!0},n.a.createElement(k.a,{id:"email",label:"Email",type:"email",value:l,onChange:function(e){return s(e.currentTarget.value)},fullWidth:!0,autoFocus:!0,required:!0}))),n.a.createElement(O.a,{container:!0,spacing:8,alignItems:"flex-end"},n.a.createElement(O.a,{item:!0},n.a.createElement(T.a,null)),n.a.createElement(O.a,{item:!0,md:!0,sm:!0,xs:!0},n.a.createElement(k.a,{id:"password",label:"Password",type:"password",value:E,onChange:function(e){return b(e.currentTarget.value)},fullWidth:!0,required:!0}))),n.a.createElement(O.a,{container:!0,spacing:8,alignItems:"flex-end"},n.a.createElement(O.a,{item:!0},n.a.createElement(T.a,null)),n.a.createElement(O.a,{item:!0,md:!0,sm:!0,xs:!0},n.a.createElement(k.a,{id:"passwordConfirmation",label:"Confirm password",type:"password",value:w,onChange:function(e){return x(e.currentTarget.value)},fullWidth:!0,required:!0}))),n.a.createElement("br",null),n.a.createElement(O.a,{container:!0,alignItems:"center"},P&&n.a.createElement(O.a,{item:!0},n.a.createElement(_.a,{severity:"error"},P))),n.a.createElement(O.a,{container:!0,justify:"center",className:e.marginTop},n.a.createElement(y.a,{variant:"outlined",color:"primary",className:e.button,onClick:q},"Sign Up"))))},q=function(){return n.a.createElement("h1",null,"This component is protected")},D=t(359),J=["component"],R=function(e){var a=e.component,t=Object(D.a)(e,J);return n.a.createElement(o.b,Object.assign({},t,{render:function(e){return!0===g()?n.a.createElement(a,e):n.a.createElement(o.a,{to:"/login"})}}))},W=t(86),A=t(648),z=t(647),B=t(344),H={login:function(e){var a=e.username,t=e.password,r=new FormData;r.append("username",a),r.append("password",t);var n=new Request("".concat(E,"/api/token"),{method:"POST",body:r});return fetch(n).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var a=e.access_token,t=Object(b.a)(a);if("restricted"===t.permissions)throw new Error("Forbidden");localStorage.setItem("token",a),localStorage.setItem("permissions",t.permissions)}))},logout:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),Promise.resolve()},checkError:function(e){var a=e.status;return 401===a||403===a?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(e):Promise.reject()}},U=t(317),V=t(654),L=t(653),G=t(650),K=t(330),M=t(641),Q=t(659),X=t(661),Y=t(127),Z=function(e){return n.a.createElement(L.a,e,n.a.createElement(G.a,null,n.a.createElement(K.a,{disabled:!0,source:"id"}),n.a.createElement(K.a,{source:"username"}),n.a.createElement(K.a,{source:"email"}),n.a.createElement(K.a,{source:"first_name"}),n.a.createElement(K.a,{source:"last_name"}),n.a.createElement(M.a,{source:"password"}),n.a.createElement(Y.a,{source:"restricted",jsonString:!1,reactJsonOptions:{name:null,collapsed:!0,enableClipboard:!1,displayDataTypes:!1}}),n.a.createElement(Y.a,{source:"permitted",jsonString:!1,reactJsonOptions:{name:null,collapsed:!0,enableClipboard:!1,displayDataTypes:!1}}),n.a.createElement(V.a,{source:"role_id",reference:"roles"},n.a.createElement(Q.a,{optionText:"name",optionValue:"id",validate:[Object(U.b)()]})),n.a.createElement(X.a,{source:"is_active"})))},$=t(663),ee=t(649),ae=t(651),te=t(644),re=t(665),ne=t(645),ce=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ee.a,e,n.a.createElement(ae.a,{rowClick:"show"},n.a.createElement(te.a,{source:"id"}),n.a.createElement(te.a,{source:"username"}),n.a.createElement(re.a,{source:"email"}),n.a.createElement(te.a,{source:"first_name"}),n.a.createElement(te.a,{source:"last_name"}),n.a.createElement(ne.a,{source:"is_active"}),n.a.createElement(te.a,{source:"role"}),n.a.createElement($.a,{source:"restricted.sources",label:"r.sources"}),n.a.createElement($.a,{source:"restricted.areas",label:"r.areas"}),n.a.createElement($.a,{source:"restricted.tags",label:"r.tags"}),n.a.createElement($.a,{source:"permitted.sources",label:"p.sources"}),n.a.createElement($.a,{source:"permitted.areas",label:"p.areas"}),n.a.createElement($.a,{source:"permitted.tags",label:"p.tags"}))))},le=t(657),se=function(e){return n.a.createElement(le.a,e,n.a.createElement(G.a,null,n.a.createElement(K.a,{source:"username",variant:"outlined",validate:[Object(U.b)()]}),n.a.createElement(K.a,{source:"email",variant:"outlined",validate:[Object(U.b)()]}),n.a.createElement(K.a,{source:"first_name",variant:"outlined"}),n.a.createElement(K.a,{source:"last_name",variant:"outlined"}),n.a.createElement(M.a,{source:"password",variant:"outlined",validate:[Object(U.b)()]}),n.a.createElement(Y.a,{validate:[Object(U.b)()],source:"restricted",jsonString:!1,reactJsonOptions:{name:null,collapsed:!0,enableClipboard:!1,displayDataTypes:!1}}),n.a.createElement(Y.a,{validate:[Object(U.b)()],source:"permitted",jsonString:!1,reactJsonOptions:{name:null,collapsed:!0,enableClipboard:!1,displayDataTypes:!1}}),n.a.createElement(V.a,{source:"role_id",reference:"roles",variant:"outlined"},n.a.createElement(Q.a,{optionText:"name",optionValue:"id",validate:[Object(U.b)()]})),n.a.createElement(X.a,{source:"is_active"})))},oe=t(655),ie=t(652),me=t(666),ue=function(e){return console.log(e),n.a.createElement(n.a.Fragment,null,n.a.createElement(oe.a,e,n.a.createElement(ie.a,null,n.a.createElement(me.a,{label:"summary"},n.a.createElement(te.a,{label:"Id",source:"id"}),n.a.createElement(te.a,{source:"username"}),n.a.createElement(te.a,{source:"email"}),n.a.createElement(te.a,{source:"role"}),n.a.createElement(te.a,{source:"first_name"}),n.a.createElement(te.a,{source:"last_name"}),n.a.createElement(te.a,{source:"is_active"})),n.a.createElement(me.a,{label:"restrctions"},n.a.createElement($.a,{source:"restricted.sources",label:"sources"}),n.a.createElement($.a,{source:"restricted.areas",label:"areas"}),n.a.createElement($.a,{source:"restricted.tags",label:"tags"})),n.a.createElement(me.a,{label:"permissions"},n.a.createElement($.a,{source:"permitted.sources",label:"sources"}),n.a.createElement($.a,{source:"permitted.areas",label:"areas"}),n.a.createElement($.a,{source:"permitted.tags",label:"tags"})))))},de=function(e){return n.a.createElement(L.a,e,n.a.createElement(G.a,null,n.a.createElement(K.a,{disabled:!0,source:"id",variant:"outlined"}),n.a.createElement(K.a,{source:"name",variant:"outlined"})))},pe=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ee.a,e,n.a.createElement(ae.a,{rowClick:"show"},n.a.createElement(te.a,{source:"id"}),n.a.createElement(te.a,{source:"name"}))))},Ee=function(e){return n.a.createElement(le.a,e,n.a.createElement(G.a,null,n.a.createElement(K.a,{source:"name",variant:"outlined"})))},be=t(646),ge=function(e){return console.log(e),n.a.createElement(n.a.Fragment,null,n.a.createElement(oe.a,e,n.a.createElement(ie.a,null,n.a.createElement(me.a,{label:"summary"},n.a.createElement(te.a,{label:"Id",source:"id"}),n.a.createElement(te.a,{source:"name"})),n.a.createElement(me.a,{label:"related users"},n.a.createElement(be.a,{source:"users"},n.a.createElement(ae.a,null,n.a.createElement(te.a,{source:"username",label:"username"}),n.a.createElement(te.a,{source:"email",label:"email"}),n.a.createElement(ne.a,{source:"is_active",label:"Is active"})))))))},fe=Object(B.a)("".concat(E,"/api/v1"),(function(e,a){a||(a={}),a.headers||(a.headers=new Headers({Accept:"application/json"}));var t=localStorage.getItem("token");return a.headers.set("Authorization","Bearer ".concat(t)),W.a.fetchJson(e,a)})),ve=function(){return n.a.createElement(A.a,{dataProvider:fe,authProvider:H},(function(e){return["admin"===e?n.a.createElement(z.a,{name:"users",list:ce,edit:Z,create:se,show:ue}):n.a.createElement(z.a,{name:"users",list:ce}),n.a.createElement(z.a,{name:"roles",list:pe,edit:de,create:Ee,show:ge})]}))},he=Object(i.a)((function(e){return{app:{textAlign:"center"},header:{backgroundColor:"#282c34",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white"}}})),we=function(){var e=he(),a=Object(o.g)();return n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/admin"},n.a.createElement(ve,null)),n.a.createElement("div",{className:e.app},n.a.createElement("header",{className:e.header},n.a.createElement(o.b,{path:"/login",component:P}),n.a.createElement(o.b,{path:"/signup",component:N}),n.a.createElement(o.b,{path:"/logout",render:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),a.push("/"),null}}),n.a.createElement(R,{path:"/protected",component:q}),n.a.createElement(o.b,{exact:!0,path:"/",component:w}))))},je=function(){return n.a.createElement(we,null)};l.a.render(n.a.createElement(s.a,null,n.a.createElement(je,null)),document.getElementById("root"))}},[[393,1,2]]]);
//# sourceMappingURL=main.06bed575.chunk.js.map