"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dishes",{

/***/ "./components/layout/ProdItem/ProdItem.jsx":
/*!*************************************************!*\
  !*** ./components/layout/ProdItem/ProdItem.jsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ProdItem = (param)=>{\n    let { dish, navigate } = param;\n    _s();\n    const [sessionStorage, SetSessionStorage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"ProdItem.useEffect\": ()=>{\n            if (!sessionStorage.getItem(\"products\")) {\n                sessionStorage.setItem(\"products\", JSON.stringify(initialProducts));\n            }\n        }\n    }[\"ProdItem.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"product__item\",\n        onClick: ()=>{\n            navigate({\n                link: \"dishes/\".concat(dish.name)\n            });\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"product__item__img\",\n                src: dish.image,\n                alt: \"404\",\n                width: 296,\n                height: 184\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product__item__name\",\n                children: dish.name\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product__item__price\",\n                children: [\n                    dish.price,\n                    \" $\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product__item__description\",\n                children: dish.description\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"product__item__buy\",\n                children: \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProdItem, \"m+mdL8NOC76A4EfLfQFEiunTcBU=\");\n_c = ProdItem;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdItem);\nvar _c;\n$RefreshReg$(_c, \"ProdItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9Qcm9kSXRlbS9Qcm9kSXRlbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ2E7QUFDNUMsTUFBTUcsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFOztJQUNsQyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkRELGdEQUFTQTs4QkFBQztZQUNSLElBQUksQ0FBQ0ssZUFBZUUsT0FBTyxDQUFDLGFBQWE7Z0JBQ3ZDRixlQUFlRyxPQUFPLENBQUMsWUFBWUMsS0FBS0MsU0FBUyxDQUFDQztZQUNwRDtRQUNGOzZCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTO1lBQ1BWLFNBQVM7Z0JBQUVXLE1BQU0sVUFBb0IsT0FBVlosS0FBS2EsSUFBSTtZQUFHO1FBQ3pDOzswQkFFQSw4REFBQ2pCLG1EQUFLQTtnQkFDSmMsV0FBVTtnQkFDVkksS0FBS2QsS0FBS2UsS0FBSztnQkFDZkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDQztnQkFBRVQsV0FBVTswQkFBdUJWLEtBQUthLElBQUk7Ozs7OzswQkFDN0MsOERBQUNNO2dCQUFFVCxXQUFVOztvQkFBd0JWLEtBQUtvQixLQUFLO29CQUFDOzs7Ozs7OzBCQUNoRCw4REFBQ0Q7Z0JBQUVULFdBQVU7MEJBQThCVixLQUFLcUIsV0FBVzs7Ozs7OzBCQUMzRCw4REFBQ0M7Z0JBQU9aLFdBQVU7MEJBQXFCOzs7Ozs7Ozs7Ozs7QUFHN0M7R0E1Qk1YO0tBQUFBO0FBOEJOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGFuaWwvRG9jdW1lbnRzL0dpdEh1Yi95ZWxsb3cvY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L1Byb2RJdGVtL1Byb2RJdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByb2RJdGVtID0gKHsgZGlzaCwgbmF2aWdhdGUgfSkgPT4ge1xuICBjb25zdCBbc2Vzc2lvblN0b3JhZ2UsIFNldFNlc3Npb25TdG9yYWdlXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSkge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KGluaXRpYWxQcm9kdWN0cykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgbmF2aWdhdGUoeyBsaW5rOiBgZGlzaGVzLyR7ZGlzaC5uYW1lfWAgfSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX19pbWdcIlxuICAgICAgICBzcmM9e2Rpc2guaW1hZ2V9XG4gICAgICAgIGFsdD1cIjQwNFwiXG4gICAgICAgIHdpZHRoPXsyOTZ9XG4gICAgICAgIGhlaWdodD17MTg0fVxuICAgICAgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX25hbWVcIj57ZGlzaC5uYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX3ByaWNlXCI+e2Rpc2gucHJpY2V9ICQ8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX19kZXNjcmlwdGlvblwiPntkaXNoLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fYnV5XCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZEl0ZW07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2RJdGVtIiwiZGlzaCIsIm5hdmlnYXRlIiwic2Vzc2lvblN0b3JhZ2UiLCJTZXRTZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImluaXRpYWxQcm9kdWN0cyIsImxpIiwiY2xhc3NOYW1lIiwib25DbGljayIsImxpbmsiLCJuYW1lIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/ProdItem/ProdItem.jsx\n"));

/***/ })

});