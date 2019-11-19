System.register(["./index-d1b5633b.js","./defineProperty-556b7d97.js"],function(e){"use strict";var t,n,r,a,l,i,o,s;return{setters:[function(e){t=e.c,n=e.g,r=e._,a=e.u,l=e.h,i=e.n},function(e){o=e.a,s=e._}],execute:function(){var c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e},m=t(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(r){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=n=function(e){return t(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},n(r)}e.exports=n});var d=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};var f=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?d(e):t},h=t(function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t}),v=t(function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t});var g=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)},b=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t?(0,o.render)(s.default.createElement(m,e),t):(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t),(0,o.render)(s.default.createElement(m,e),t))}(e)};var s=u(r),c=u(n);function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=(l=a=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),i=0;i<a;i++)l[i]=arguments[i];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,l=e.target===r.overlay;n&&l&&(a(),r.close())},r.close=function(){var e,t;document.body.classList.remove("react-confirm-alert-body-element"),e=document.getElementById("react-confirm-alert"),(0,o.unmountComponentAtNode)(e),e.parentNode.removeChild(e),(t=document.getElementById("react-confirm-alert-firm-svg")).parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur")},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,l=27===e.keyCode;n&&l&&(a(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message;return(0,e.customUI)({title:t,message:n,onClose:r.close})},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,a=t.buttons,l=t.childrenElement,i=t.customUI;return s.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},i?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},n&&s.default.createElement("h1",null,n),r,l(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map(function(t,n){return s.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)}},t.label)})))))}}]),t}(),a.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},a.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null}},{label:"Confirm",onClick:function(){return null}}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},l);t.default=m});a(b);var y=b.confirmAlert,E=function(e){function t(e){return c(this,t),f(this,h(t).call(this,e))}return g(t,l),p(t,[{key:"render",value:function(e){var t;return 1!==this.props.currentStep?null:r.createElement("div",{id:"number-pane",className:"registerP--tab"},r.createElement("span",{className:"registerP--logo heading"},"Confirm phone number"),r.createElement("div",null,r.createElement("p",null,r.createElement("select",{id:"countryCode",value:this.props.country,name:"country",onChange:this.props.handleChange,className:"form-control"},r.createElement("option",{value:"+233"},"Ghana"),r.createElement("option",{value:"+237"},"Cameroon"))),r.createElement("div",{className:"nuber-area"},r.createElement("input",(s(t={type:"number",className:"",name:"countryCode"},"type","tel"),s(t,"value",this.props.country),s(t,"onChange",this.props.handleChange),t)),r.createElement("hr",null),r.createElement("input",{type:"number",name:"telphone",pattern:"[0-9]{1}",max:"11",placeholder:"024 888 0000",maxLength:"11",value:this.props.telphone,onChange:this.props.handleChange,required:!0})),r.createElement("span",{className:"registerP--logo txt-sm"},"please confirm your country code and enter your phone number")))}}]),t}(),_=function(e){function t(e){var n;return c(this,t),(n=f(this,h(t).call(this,e))).state={countryCode:"",telphone:""},n}return g(t,l),p(t,[{key:"render",value:function(){if(2!==this.props.currentStep)return null;return r.createElement("div",{id:"verify-pane",className:"registerP--tab"},r.createElement("span",{className:"registerP--logo txt"},"Please enter the 4-digit verification code we sent via SMS:"),r.createElement("div",null,r.createElement("div",{className:"verify-boxes--cona"},[{id:"verifyBoxOne",number:6},{id:"verifyBoxTwo",number:7},{id:"verifyBoxThree",number:8},{id:"verifyBoxFour",number:9}].map(function(e){return r.createElement("input",{key:e.id,className:"verify-boxes--box",type:"text",maxLength:"1",size:"1",min:"0",max:"9",pattern:"[0-9]{1}",placeholder:"."})}))),r.createElement("div",{className:"empti-div"}),r.createElement("div",{className:"empti-div"},r.createElement("span",{className:"txt-sm"},"Didn't receive the code?"),r.createElement("span",null,"Resend")))}}]),t}(),w=function(e){function t(e){return c(this,t),f(this,h(t).call(this,e))}return g(t,l),p(t,[{key:"render",value:function(e){return 3!==this.props.currentStep?null:r.createElement("div",{id:"number-pane",className:"registerP--tab"},r.createElement("span",{className:"registerP--logo heading"},"Personal Details "),r.createElement("div",null,r.createElement("div",null,r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("label",{className:"field a-field a-field_a2 page__field"},r.createElement("input",{className:"field__input a-field__input",type:"text",placeholder:"mr.",value:this.props.firstName,name:"firstName",onChange:this.props.handleChange,required:""}),r.createElement("span",{className:"a-field__label-wrap"},r.createElement("span",{className:"a-field__label"},"First Name")))),r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("label",{className:"field a-field a-field_a2 page__field"},r.createElement("input",{className:"field__input a-field__input",type:"text",placeholder:"cove",value:this.props.lastName,name:"lastName",onChange:this.props.handleChange,required:""}),r.createElement("span",{className:"a-field__label-wrap"},r.createElement("span",{className:"a-field__label"},"Last name")))),r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("label",{className:"field a-field a-field_a2 page__field "},r.createElement("select",{value:this.props.gender,className:"personalD--field-select",name:"gender",onChange:this.props.handleChange},r.createElement("option",{value:"male"},"Male"),r.createElement("option",{value:"female"},"Female")),r.createElement("span",{className:"a-field__label-wrap wwew"},r.createElement("span",{className:"a-field__label"},"Gender")))),r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("label",{className:"field a-field a-field_a2 page__field "},r.createElement("input",{className:"personalD--field-InputDate",type:"date",name:"dateOfbirth",value:this.props.dateOfbirth,required:"",onChange:this.props.handleChange}),r.createElement("span",{className:"a-field__label-wrap wwew"},r.createElement("span",{className:"a-field__label"},"Birth date")))))),r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("div",{className:"login--btn ldc text--fon registerP--ikon",onClick:this.props.next},"next")))}}]),t}(),N=function(e){function t(e){return c(this,t),f(this,h(t).call(this,e))}return g(t,l),p(t,[{key:"render",value:function(e){return 4!==this.props.currentStep?null:r.createElement("div",{id:"number-pane",className:"registerP--tab"},r.createElement("span",{className:"registerP--logo heading"},"Login Details "),r.createElement("div",null,r.createElement("div",null,r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("label",{className:"field a-field a-field_a2 page__field"},r.createElement("input",{className:"field__input a-field__input",type:"email",placeholder:"rx@iamcove.com",name:"email",value:this.props.email,onChange:this.props.handleChange,required:""}),r.createElement("span",{className:"a-field__label-wrap"},r.createElement("span",{className:"a-field__label"},"Email")))),r.createElement("div",{className:"personalD--field-wrapper"},r.createElement("label",{className:"field a-field a-field_a2 page__field"},r.createElement("input",{className:"field__input a-field__input",type:"password",placeholder:"the magic word",name:"password",value:this.props.password,onChange:this.props.handleChange,required:""}),r.createElement("span",{className:"a-field__label-wrap"},r.createElement("span",{className:"a-field__label"},"Password")))))),r.createElement("div",{className:"personalD--field-wrapper finalize"},r.createElement("span",{className:"registerP--fabi",id:"nextBtn",onClick:this.props.previous},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M19 12H6M12 5l-7 7 7 7"}))),r.createElement("div",{class:"login--btn ldc text--fon registerP--ikon"},"done")))}}]),t}(),C=function(e){function t(e){return c(this,t),f(this,h(t).call(this,e))}return g(t,l),p(t,[{key:"render",value:function(e){if(this.props.currentStep>2)return null;var t={flexDirection:this.props.flexDir};return r.createElement("div",{className:"registerP--con"},r.createElement("div",{id:"piipii",style:t,className:"registerP--con-inner"},this.props.previous,this.props.next))}}]),t}();e("default",function(e){function t(e){var n;return c(this,t),n=f(this,h(t).call(this,e)),s(d(n),"handleChange",function(e){var t=e.target,r=t.name,a=t.value;n.setState(s({},r,a))}),s(d(n),"_next",function(){var e=n.state.currentStep;e=e>=2?3:e+1,n.setState({currentStep:e}),n.changeDivDir()}),s(d(n),"_PersonaltoLoginD",function(){var e=n.state.currentStep;e=e>=3?4:e+1,n.setState({currentStep:e}),n.changeDivDir()}),s(d(n),"_prev",function(){var e=n.state.currentStep;e=e<=1?1:e-1,n.setState({currentStep:e}),n.changeDivDir()}),s(d(n),"alert",function(){y({title:"Leaving...",message:"Are you sure you to cancel registration?",buttons:[{label:"Yes",onClick:function(){return i("/login")}},{label:"No",onClick:function(){return null}}]})}),n.state={currentStep:1,telphone:"",country:"+233",flexDir:"row-reverse",sentVCode:"",receivedVCode:"",firstName:"",lastName:"",gender:"male",dateOfbirth:"",email:"",password:""},n}return g(t,l),p(t,[{key:"changeDivDir",value:function(){var e=this.state.currentStep;1==e&&this.setState({flexDir:"row"}),2==e&&(this.setState({flexDir:"row-reverse"}),this.setState({hide:"none"})),3==e&&this.setState({flexDir:"row"})}},{key:"previousButton",value:function(){return 1!==this.state.currentStep?r.createElement("div",{className:"login--btn ldc text--fon registerP--ikon",id:"prevBtn",onClick:this._prev},"Change phone number"):null}},{key:"nextButton",value:function(){var e=this.state.currentStep;return this._changeDivDir,2==e?r.createElement("button",{className:"registerP--fabi",id:"nextBtn",onClick:this._next},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("polyline",{points:"20 6 9 17 4 12"}))):e<2?r.createElement("span",{className:"registerP--fabi",id:"nextBtn",onClick:this._next},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M5 12h13M12 5l7 7-7 7"}))):null}},{key:"render",value:function(){return r.createElement("main",null,r.createElement("div",{className:"main--iner"},r.createElement("div",{className:"registerP--sec--main registerP--Logo-area"},r.createElement("span",{className:"registerP--logo svvg ",onClick:this.alert},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#0c0a0a",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M19 12H6M12 5l-7 7 7 7"})))),r.createElement("div",{className:"registerP--sec--main registerP--Bottom-section"},r.createElement("form",{id:"regForm",action:""},r.createElement(E,{currentStep:this.state.currentStep,handleChange:this.handleChange,countryCode:this.state.countryCode,telphone:this.state.telphone,country:this.state.country}),r.createElement(_,{currentStep:this.state.currentStep,handleChange:this.handleChange}),r.createElement(w,{currentStep:this.state.currentStep,handleChange:this.handleChange,firstName:this.state.firstName,lastName:this.state.lastName,gender:this.state.gender,dateOfbirth:this.state.dateOfbirth,next:this._PersonaltoLoginD}),r.createElement(N,{currentStep:this.state.currentStep,handleChange:this.handleChange,email:this.state.email,password:this.state.password,previous:this._prev}),r.createElement(C,{currentStep:this.state.currentStep,flexDir:this.state.flexDir,previous:this.previousButton(),next:this.nextButton()})))))}},{key:"function",value:function(){var e=$("body");e.on("keyup","input.verify-boxes--box",function(t){var n=t.which,r=$(t.target).next("input");return 9!=n&&(n<48||n>57)?(t.preventDefault(),!1):9===n||(r&&r.length||(r=e.find("input").eq(0)),void r.select().focus())}),e.on("keydown","input.verify-boxes--box",function(e){var t=e.which;return 9===t||t>=48&&t<=57||(e.preventDefault(),!1)}),e.on("click","input.verify-boxes--box",function(e){$(e.target).select()})}}]),t}())}}});