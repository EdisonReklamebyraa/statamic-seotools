(()=>{"use strict";var t=function(t,e,n,s,o,r,i,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(t,e){return l.call(e),p(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}({mixins:[Fieldtype],data:function(){return{}},methods:{facebookDebugger:function(){window.open("https://developers.facebook.com/tools/debug/?q="+this.meta.permalink)},pagespeedInsight:function(){window.open("https://pagespeed.web.dev/report?url="+this.meta.permalink)}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap gap-2"},[this.meta.permalink?n("a",{staticClass:"flex items-center justify-center btn-flat w-full px-1",on:{click:function(e){return t.facebookDebugger()}}},[n("svg",{staticClass:"w-4 h-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M23.251 7.498V.748h-6.75m6.75 0-15 15m3-10.5h-9a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9"}})]),n("span",[t._v("Facebook Debugger")])]):t._e(),t._v(" "),this.meta.permalink?n("a",{staticClass:"flex items-center justify-center btn-flat w-full px-1",on:{click:function(e){return t.pagespeedInsight()}}},[n("svg",{staticClass:"w-4 h-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M23.251 7.498V.748h-6.75m6.75 0-15 15m3-10.5h-9a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9"}})]),n("span",[t._v("Pagespeed Insight")])]):n("span",{staticClass:"help-block"},[t._v("Not yet available.")])])}),[],!1,null,null,null);const e=t.exports;Statamic.booting((function(){Statamic.$components.register("seo_tools-fieldtype",e)}))})();