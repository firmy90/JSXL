webpackHotUpdate(4,{

/***/ "./pages/index2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/home/javascript/Documents/JavaScriptXL/JSXL/next-js-app/pages/index2.js";

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




var _default = function _default() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        "Hello from React World! ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: "/second", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "button",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                "Druga"
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);

// const Index2 =  () => <div>Hello from React World!</div>
// export default  Index2;

;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, "default", "/home/javascript/Documents/JavaScriptXL/JSXL/next-js-app/pages/index2.js");
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index2")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.72dc3b6d75320b7db491.hot-update.js.map