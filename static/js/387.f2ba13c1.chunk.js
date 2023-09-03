"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[387],{9387:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(9434),r=n(2791),s=function(e){return e.contacts.items},i=function(e){return e.contacts.loading},c=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},o=n(2e3),l={},u=n(9439),m=n(1686),d="ContactForm_form__wDWPz",f="ContactForm_label__ZUV0d",h="ContactForm_inputName__r-48-",_="ContactForm_inputNumber__fa7KQ ContactForm_inputName__r-48-",p="ContactForm_buttonAdd__+rjKu",b=n(184),v=function(){var e=(0,r.useState)(""),t=(0,u.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)(""),l=(0,u.Z)(c,2),v=l[0],x=l[1],j=(0,a.v9)(s),N=(0,a.I0)(),C=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":x(a);break;default:return}},g=function(e){var t=e.name,n=e.number,a=(0,o.uK)({name:t,number:n});N(a)};return(0,b.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var t=j.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})),a=j.some((function(e){return e.number===v}));t?m.Notify.failure("".concat(n," is alredy in contacts")):a?m.Notify.failure("".concat(v," is alredy in contacts")):(g({name:n,number:v}),i(""),x(""))},children:[(0,b.jsxs)("label",{className:f,children:["Name",(0,b.jsx)("input",{className:h,value:n,onChange:C,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)("label",{className:f,children:["Number",(0,b.jsx)("input",{className:_,value:v,onChange:C,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},x="ContactList_list__PZmSu",j="ContactListItem_item__IktUt",N="ContactListItem_contact__NLz0u",C="ContactListItem_buttonDelete__-vd30",g=function(e){var t=e.id,n=e.name,r=e.phone,s=(0,a.I0)();return(0,b.jsxs)("li",{className:j,children:[(0,b.jsxs)("p",{className:N,children:[n," ",r]}),(0,b.jsx)("button",{className:C,type:"submit",onClick:function(){return e=t,void s((0,o.GK)(e));var e},children:"Delete"})]})},y=function(){var e=(0,a.v9)(c);return(0,b.jsx)("ul",{className:x,children:e.map((function(e){var t=e.id,n=e.name,a=e.phone;return(0,b.jsx)(g,{name:n,phone:a,id:t},t)}))})},k=n(5653),w=function(e){return e.filter},F={filter:"Filter_filter__9XhGP",filterInput:"Filter_filterInput__cXwzH"},I=function(){var e=(0,a.v9)(w),t=(0,a.I0)();return(0,b.jsx)("div",{className:F.filter,children:(0,b.jsxs)("label",{className:F.labelFilter,children:["Find contacts by name",(0,b.jsx)("input",{className:F.filterInput,type:"text",name:"filter",value:e,onChange:function(e){t((0,k.T)(e.currentTarget.value.trim()))}})]})})},L="Notification_title__VBwHl",A=function(e){var t=e.message;return(0,b.jsx)("p",{className:L,children:t})},Z=n(5070);var z=function(){var e=(0,a.v9)(s),t=Boolean(e.length),n=(0,a.v9)(i),c=(0,a.I0)();return(0,r.useEffect)((function(){c((0,o.yF)())}),[c]),(0,b.jsxs)("div",{children:[n&&(0,b.jsx)(Z.Z,{}),(0,b.jsxs)("div",{className:l.phonebookContainer,children:[(0,b.jsx)("h1",{className:l.titlePhonebook,children:"Phonebook"}),(0,b.jsx)(v,{}),(0,b.jsx)("h2",{className:l.titleContacts,children:"Contacts"}),(0,b.jsxs)("div",{className:l.allContacts,children:["All contacts: ",e.length]}),t?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(I,{}),(0,b.jsx)(y,{})]}):(0,b.jsx)(A,{message:"Contact list is empty"})]})]})},P=function(){return(0,b.jsx)("div",{children:(0,b.jsx)(z,{})})}}}]);
//# sourceMappingURL=387.f2ba13c1.chunk.js.map