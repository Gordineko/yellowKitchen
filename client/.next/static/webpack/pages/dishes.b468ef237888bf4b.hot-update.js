/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dishes",{

/***/ "./components/layout/Header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/layout/Header/Header.jsx ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/dishes.jsx":
/*!**************************!*\
  !*** ./pages/dishes.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Dishes_DishesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Dishes/DishesList */ \"./components/layout/Dishes/DishesList.jsx\");\n/* harmony import */ var _components_layout_Dishes_Sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Dishes/Sort */ \"./components/layout/Dishes/Sort.jsx\");\n/* harmony import */ var _components_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Footer/Footer */ \"./components/layout/Footer/Footer.jsx\");\n/* harmony import */ var _components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Header/Header */ \"./components/layout/Header/Header.jsx\");\n/* harmony import */ var _components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst products = (dishes)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const navigate = (param)=>{\n        let { link } = param;\n        // Навигация на страницу /about\n        router.push(\"\".concat(link));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/NextJs-Test/client/pages/dishes.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dishes__container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Dishes_Sort__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/danil/Documents/GitHub/NextJs-Test/client/pages/dishes.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Dishes_DishesList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            navigate: navigate,\n                            dishes: dishes\n                        }, void 0, false, {\n                            fileName: \"/Users/danil/Documents/GitHub/NextJs-Test/client/pages/dishes.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danil/Documents/GitHub/NextJs-Test/client/pages/dishes.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/NextJs-Test/client/pages/dishes.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/NextJs-Test/client/pages/dishes.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(products, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaXNoZXMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDWjtBQUNJO0FBQ0E7QUFDaEI7QUFheEMsTUFBTUssV0FBVyxDQUFDQzs7SUFDaEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLFdBQVc7WUFBQyxFQUFFQyxJQUFJLEVBQUU7UUFDeEIsK0JBQStCO1FBQy9CRixPQUFPRyxJQUFJLENBQUMsR0FBUSxPQUFMRDtJQUNqQjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ04seUVBQU1BOzs7OzswQkFDUCw4REFBQ1E7Z0JBQUtDLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ1gsc0VBQUlBOzs7OztzQ0FDTCw4REFBQ0QsNEVBQVVBOzRCQUFDUSxVQUFVQTs0QkFBVUYsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qyw4REFBQ0osd0VBQU1BOzs7Ozs7O0FBR2I7R0FuQk1HOztRQUNXRCxrREFBU0E7Ozs7QUFvQjFCLGlFQUFlQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGFuaWwvRG9jdW1lbnRzL0dpdEh1Yi9OZXh0SnMtVGVzdC9jbGllbnQvcGFnZXMvZGlzaGVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzaGVzTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvRGlzaGVzL0Rpc2hlc0xpc3RcIjtcbmltcG9ydCBTb3J0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9EaXNoZXMvU29ydFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2Rpc2hlc1wiKTtcbiAgY29uc3QgZGlzaGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkaXNoZXMsXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgcHJvZHVjdHMgPSAoZGlzaGVzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gKHsgbGluayB9KSA9PiB7XG4gICAgLy8g0J3QsNCy0LjQs9Cw0YbQuNGPINC90LAg0YHRgtGA0LDQvdC40YbRgyAvYWJvdXRcbiAgICByb3V0ZXIucHVzaChgJHtsaW5rfWApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzaGVzX19jb250YWluZXJcIj5cbiAgICAgICAgICA8U29ydCAvPlxuICAgICAgICAgIDxEaXNoZXNMaXN0IG5hdmlnYXRlPXtuYXZpZ2F0ZX0gZGlzaGVzPXtkaXNoZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XG4iXSwibmFtZXMiOlsiRGlzaGVzTGlzdCIsIlNvcnQiLCJGb290ZXIiLCJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJwcm9kdWN0cyIsImRpc2hlcyIsInJvdXRlciIsIm5hdmlnYXRlIiwibGluayIsInB1c2giLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dishes.jsx\n"));

/***/ })

});