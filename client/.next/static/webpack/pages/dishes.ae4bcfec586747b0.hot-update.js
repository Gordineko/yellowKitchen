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

/***/ "./components/layout/modals/Curt.jsx":
/*!*******************************************!*\
  !*** ./components/layout/modals/Curt.jsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Curt = (param)=>{\n    let { isCurtOpen, setIsCurtOpen } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const closeClick = ()=>{\n        setIsCurtOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Curt.useEffect\": ()=>{\n            const storedProducts = sessionStorage.getItem(\"products\");\n            if (storedProducts) {\n                setProducts(JSON.parse(storedProducts));\n            }\n        }\n    }[\"Curt.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        onClick: ()=>{},\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isCurtOpen ? \"modal__curt open\" : \"modal__curt\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Товары\"\n                }, void 0, false, {\n                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal__curt__list\",\n                    children: products.length > 0 ? products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.image,\n                                    alt: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        product.price,\n                                        \" $.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Нет доступных товаров\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Curt, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Curt;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Curt);\nvar _c;\n$RefreshReg$(_c, \"Curt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tb2RhbHMvQ3VydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxPQUFPO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUU7O0lBQ3pDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1NLGFBQWE7UUFDakJILGNBQWM7SUFDaEI7SUFFQUosZ0RBQVNBOzBCQUFDO1lBQ1IsTUFBTVEsaUJBQWlCQyxlQUFlQyxPQUFPLENBQUM7WUFFOUMsSUFBSUYsZ0JBQWdCO2dCQUNsQkYsWUFBWUssS0FBS0MsS0FBSyxDQUFDSjtZQUN6QjtRQUNGO3lCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtRQUFnQkMsU0FBUyxLQUFLO2tCQUMzQyw0RUFBQ0Y7WUFBSUMsV0FBV1gsYUFBYSxxQkFBcUI7OzhCQUNoRCw4REFBQ2E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ1pULFNBQVNZLE1BQU0sR0FBRyxJQUNqQlosU0FBU2EsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUNyQiw4REFBQ1A7NEJBQWdCQyxXQUFVOzs4Q0FDekIsOERBQUNPO29DQUFJQyxLQUFLSCxRQUFRSSxLQUFLO29DQUFFQyxLQUFLTCxRQUFRTSxJQUFJOzs7Ozs7OENBQzFDLDhEQUFDQzs4Q0FBSVAsUUFBUU0sSUFBSTs7Ozs7OzhDQUNqQiw4REFBQ0U7O3dDQUFHUixRQUFRUyxLQUFLO3dDQUFDOzs7Ozs7OzsyQkFIVlI7Ozs7dURBT1osOERBQUNPO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0FuQ016QjtLQUFBQTtBQXFDTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2RhbmlsL0RvY3VtZW50cy9HaXRIdWIveWVsbG93L2NsaWVudC9jb21wb25lbnRzL2xheW91dC9tb2RhbHMvQ3VydC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDdXJ0ID0gKHsgaXNDdXJ0T3Blbiwgc2V0SXNDdXJ0T3BlbiB9KSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNDdXJ0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRQcm9kdWN0cyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKTtcblxuICAgIGlmIChzdG9yZWRQcm9kdWN0cykge1xuICAgICAgc2V0UHJvZHVjdHMoSlNPTi5wYXJzZShzdG9yZWRQcm9kdWN0cykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCIgb25DbGljaz17KCk9Pnt9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0N1cnRPcGVuID8gXCJtb2RhbF9fY3VydCBvcGVuXCIgOiBcIm1vZGFsX19jdXJ0XCJ9PlxuICAgICAgICA8aDI+0KLQvtCy0LDRgNGLPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fY3VydF9fbGlzdFwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX0gJC48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRgtC+0LLQsNGA0L7QsjwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VydDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkN1cnQiLCJpc0N1cnRPcGVuIiwic2V0SXNDdXJ0T3BlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjbG9zZUNsaWNrIiwic3RvcmVkUHJvZHVjdHMiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDIiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoMyIsInAiLCJwcmljZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/modals/Curt.jsx\n"));

/***/ })

});