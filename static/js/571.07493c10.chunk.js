"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[571],{5571:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var s=n(9434),t=n(7689),r=n(4942),i=n(1413),l=n(9439),o=n(2791),u=function(e){var a=e.initialState,n=e.onSubmit,s=(0,o.useState)((0,i.Z)({},a)),t=(0,l.Z)(s,2),u=t[0],c=t[1],m=(0,o.useCallback)((function(e){var a=e.target,n=a.name,s=a.value;c((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},n,s))}))}),[c]);return{state:u,setState:c,handleChange:m,handleSubmit:function(e){e.preventDefault(),n((0,i.Z)({},u)),c((0,i.Z)({},a))}}},c="RegisterForm_group__kFqh2",m="RegisterForm_label__4pTXF",h="RegisterForm_input__FsgBz",d={name:"",email:"",password:""},p=n(184),g=function(e){var a=e.onSubmit,n=u({initialState:d,onSubmit:a}),s=n.state,t=n.handleChange,r=n.handleSubmit,i=s.name,l=s.email,o=s.password;return(0,p.jsxs)("form",{action:"",onSubmit:r,children:[(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("label",{className:m,htmlFor:"",children:"Username:"}),(0,p.jsx)("input",{value:i,name:"name",onChange:t,className:h,type:"text",placeholder:"Enter username",required:!0})]}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("label",{className:m,htmlFor:"",children:"User email:"}),(0,p.jsx)("input",{value:l,name:"email",onChange:t,className:h,type:"email",placeholder:"Enter user email",required:!0})]}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("label",{className:m,htmlFor:"",children:"User password:"}),(0,p.jsx)("input",{value:o,name:"password",onChange:t,className:h,type:"password",placeholder:"Enter user password",required:!0})]}),(0,p.jsx)("div",{className:c,children:(0,p.jsx)("button",{type:"submit",children:"Registration"})})]})},b=n(1260),x=function(e){return e.auth.error||{}},j=function(e){return e.auth.isLogin},v=function(){var e=(0,s.I0)(),a=(0,s.v9)(x),n=a.status,r=a.message;return(0,s.v9)(j)?(0,p.jsx)(t.Fg,{to:"/contacts"}):(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Register page"}),(0,p.jsx)(g,{onSubmit:function(a){e((0,b.I)(a))}}),n&&(0,p.jsxs)("p",{style:{color:"red"},children:[" ",r]})]})}}}]);
//# sourceMappingURL=571.07493c10.chunk.js.map