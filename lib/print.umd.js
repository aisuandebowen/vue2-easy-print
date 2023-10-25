(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["print"] = factory(require("vue"));
	else
		root["print"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "010a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "bb2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_frame_vue_vue_type_style_index_0_id_68a92dcc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("010a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_frame_vue_vue_type_style_index_0_id_68a92dcc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_frame_vue_vue_type_style_index_0_id_68a92dcc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/print/utils.js
function copyStyle(sourceEl, targetEl, isDeep = true) {
  const sourceStyle = window.getComputedStyle(sourceEl); // 获取样式
  // 复制样式
  for (let i = 0; i < sourceStyle.length; i++) {
    const property = sourceStyle[i];
    const value = sourceStyle.getPropertyValue(property);
    targetEl.style.setProperty(property, value);
  }
  // 深度复制
  if (isDeep) {
    const sourceChild = sourceEl.children;
    const targetChild = targetEl.children;
    for (let i = 0; i < targetChild.length; i++) {
      copyStyle(sourceChild[i], targetChild[i], isDeep);
    }
  }
}
// CONCATENATED MODULE: ./src/print/Iframe.js

class Iframe_Iframe {
  constructor() {
    const iframe = document.createElement("iframe");
    iframe.style.width = "0px";
    iframe.style.display = "none";
    iframe.style.height = "0px";
    this.dom = iframe;
  }
  getDocument() {
    const dom = this.dom;
    return dom.contentDocument ? dom.contentDocument : dom.contentWindow ? dom.contentWindow.document : dom.document;
  }
  // 窗口
  getContentWindow() {
    return this.dom.contentWindow;
  }

  // 获取iframe标签
  getDom() {
    return this.dom;
  }

  // 复制HTML
  copyHTML(sourceBody) {
    // 复制body
    const node = sourceBody.cloneNode(true);
    // 初始化HTML
    const docType = "<!DOCTYPE html>";
    const head = `<head></head>`;
    const body = `<body>${node.outerHTML}</body>`;
    const HTML = `${docType}<html>${head}${body}</html>`;
    return HTML;
  }

  // 更新HTML
  updateHTML(html) {
    const doc = this.getDocument();
    doc.write(html);
  }

  // 打印
  print(id, content) {
    const iframeHTML = this.copyHTML(content);
    this.updateHTML(iframeHTML);
    const doc = this.getDocument();
    copyStyle(content, doc.getElementById(id)); // 复制样式
    const iframeWindow = this.getContentWindow();
    iframeWindow.focus();
    iframeWindow.print();
    this.dom.remove();
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/print/print-frame.vue?vue&type=script&lang=js
/* harmony default export */ var print_framevue_type_script_lang_js = ({
  props: {
    renderContent: Function,
    header: {
      type: String,
      default: "0px"
    },
    headerRender: {
      type: Function
    },
    footer: {
      type: String,
      default: "0px"
    },
    footerRender: {
      type: Function
    }
  },
  components: {
    Content: {
      render() {
        const h = arguments[0];
        const {
          header
        } = this.$parent.$props;
        return h("div", [h("table", [h("thead", [h("tr", [h("td", [h("div", {
          "class": "header-space",
          "style": "height:" + header
        }, ["\xA0"])])])]), h("tbody", [h("tr", [h("td", [h("div", {
          "class": "content",
          "ref": "content"
        })])])]), h("tfoot", [h("tr", [h("td", [h("div", {
          "class": "footer-space"
        }, ["\xA0"])])])])])]);
      }
      // mounted() {
      //   const dom = this.$parent.$props.renderContent();
      //   this.$refs.content.appendChild(dom.cloneNode(true));
      // },
    }
  },

  render() {
    const h = arguments[0];
    const {
      headerRender,
      footerRender
    } = this.$props;
    return h("div", {
      "class": "vue2-easy-print"
    }, [h("Content"), h("div", {
      "class": "header"
    }, [headerRender === null || headerRender === void 0 ? void 0 : headerRender.call(this.$parent)]), h("div", {
      "class": "footer"
    }, [footerRender === null || footerRender === void 0 ? void 0 : footerRender.call(this.$parent)])]);
  }
});
// CONCATENATED MODULE: ./src/print/print-frame.vue?vue&type=script&lang=js
 /* harmony default export */ var print_print_framevue_type_script_lang_js = (print_framevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/print/print-frame.vue?vue&type=style&index=0&id=68a92dcc&prod&lang=css
var print_framevue_type_style_index_0_id_68a92dcc_prod_lang_css = __webpack_require__("bb2b");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/print/print-frame.vue
var render, staticRenderFns





/* normalize component */

var component = normalizeComponent(
  print_print_framevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var print_frame = (component.exports);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/print/index.js
/*
 * @Author: cbw
 * @Date: 2023-10-22 10:46:52
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-25 19:09:45
 * @Description:
 */



function print(id) {
  try {
    const Frame = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(print_frame);
    const content = document.getElementById(id);
    const vm = new Frame({
      propsData: {
        renderContent() {
          return content;
        }
      }
    });
    vm.$mount();

    // 初始化iframe
    const iframe = new Iframe_Iframe();
    document.body.appendChild(iframe.dom);
    // iframe.print(id, vm.$el); // 打印
    iframe.print(id, content); // 打印
  } catch (error) {
    console.error(error);
  }
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (print);



/***/ })

/******/ });
});
//# sourceMappingURL=print.umd.js.map