!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue-template-compiler")):"function"==typeof define&&define.amd?define(["exports","vue-template-compiler"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).StringToVue={},e.VueTemplateCompiler)}(this,(function(e,n){"use strict";function t(e,n,t,o,i,r,s,d,a,u){"boolean"!=typeof s&&(a=d,d=s,s=!1);var l,c="function"==typeof t?t.options:t;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=s?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),l)if(c.functional){var p=c.render;c.render=function(e,n){return l.call(n),p(e,n)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return t}var o={name:"StringToVue",props:{value:{type:String,default:""},options:{type:Object,default:function(){return{outputSourceRange:!1,whitespace:"preserve"}}},components:{type:Object,default:function(){return{}}}},data:function(){return{component:null}},watch:{value:{immediate:!0,handler:function(){var e=n.compileToFunctions("<div>"+this.value+"</div>",this.options);this.component=Object.assign(e,{components:this.components})}}}},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.component?t(e.component,{tag:"component"}):e._e()};i._withStripped=!0;var r=t({render:i,staticRenderFns:[]},undefined,o,undefined,false,undefined,!1,void 0,void 0,void 0);function s(e){s.installed||(s.installed=!0,e.component("StringToVue",r))}var d={install:s},a=null;"undefined"!=typeof window?a=window.Vue:"undefined"!=typeof global&&(a=global.Vue),a&&a.use(d),e.default=r,e.install=s,Object.defineProperty(e,"__esModule",{value:!0})}));
