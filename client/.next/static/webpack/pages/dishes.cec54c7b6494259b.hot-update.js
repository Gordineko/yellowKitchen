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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Curt = (param)=>{\n    let { isCurtOpen, setIsCurtOpen } = param;\n    _s();\n    const [storageData, setStorageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Curt.useEffect\": ()=>{\n            if (!window.sessionStorage.getItem(\"products\")) {\n                window.sessionStorage.setItem(\"products\", JSON.stringify([]));\n            }\n        }\n    }[\"Curt.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Curt.useEffect\": ()=>{\n            var storedProducts1 = JSON.parse(window.sessionStorage.getItem(\"products\"));\n        }\n    }[\"Curt.useEffect\"], [\n        storedProducts\n    ]);\n    const closeClick = ()=>{\n        setIsCurtOpen(false);\n    };\n    if (!isCurtOpen) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        onClick: ()=>{\n            closeClick();\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal__curt\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Товары\"\n                }, void 0, false, {\n                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal__curt__list\",\n                    children: storedProducts > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Нет доступных товаров\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined) : storedProducts.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.image,\n                                    alt: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        product.price,\n                                        \" $.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/modals/Curt.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Curt, \"zVHvjuyX6c/kGYHhlmYk6Z7GuYI=\");\n_c = Curt;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Curt);\nvar _c;\n$RefreshReg$(_c, \"Curt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tb2RhbHMvQ3VydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxPQUFPO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUU7O0lBQ3pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpERCxnREFBU0E7MEJBQUM7WUFDUixJQUFJLENBQUNPLE9BQU9DLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGFBQWE7Z0JBQzlDRixPQUFPQyxjQUFjLENBQUNFLE9BQU8sQ0FBQyxZQUFZQyxLQUFLQyxTQUFTLENBQUMsRUFBRTtZQUM3RDtRQUNGO3lCQUFHLEVBQUU7SUFFTFosZ0RBQVNBOzBCQUFDO1lBQ1IsSUFBSWEsa0JBQWlCRixLQUFLRyxLQUFLLENBQUNQLE9BQU9DLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDO1FBQ2hFO3lCQUFHO1FBQUNJO0tBQWU7SUFFbkIsTUFBTUUsYUFBYTtRQUNqQlgsY0FBYztJQUNoQjtJQUVBLElBQUksQ0FBQ0QsWUFBWTtRQUNmLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDYTtRQUNDQyxXQUFVO1FBQ1ZDLFNBQVM7WUFDUEg7UUFDRjtrQkFFQSw0RUFBQ0M7WUFBSUMsV0FBVzs7OEJBQ2QsOERBQUNFOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNIO29CQUFJQyxXQUFVOzhCQUNaSixpQkFBaUIsa0JBQ2hCLDhEQUFDTztrQ0FBRTs7Ozs7b0NBRUhQLGVBQWVRLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDM0IsOERBQUNQOzRCQUFnQkMsV0FBVTs7OENBQ3pCLDhEQUFDTztvQ0FBSUMsS0FBS0gsUUFBUUksS0FBSztvQ0FBRUMsS0FBS0wsUUFBUU0sSUFBSTs7Ozs7OzhDQUMxQyw4REFBQ0M7OENBQUlQLFFBQVFNLElBQUk7Ozs7Ozs4Q0FDakIsOERBQUNSOzt3Q0FBR0UsUUFBUVEsS0FBSzt3Q0FBQzs7Ozs7Ozs7MkJBSFZQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXeEI7R0E5Q01yQjtLQUFBQTtBQWdETixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2RhbmlsL0RvY3VtZW50cy9HaXRIdWIveWVsbG93L2NsaWVudC9jb21wb25lbnRzL2xheW91dC9tb2RhbHMvQ3VydC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDdXJ0ID0gKHsgaXNDdXJ0T3Blbiwgc2V0SXNDdXJ0T3BlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdG9yYWdlRGF0YSwgc2V0U3RvcmFnZURhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgc3RvcmVkUHJvZHVjdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIikpO1xuICB9LCBbc3RvcmVkUHJvZHVjdHNdKTtcblxuICBjb25zdCBjbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzQ3VydE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGlmICghaXNDdXJ0T3Blbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY2xvc2VDbGljaygpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtb2RhbF9fY3VydFwifT5cbiAgICAgICAgPGgyPtCi0L7QstCw0YDRizwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2N1cnRfX2xpc3RcIj5cbiAgICAgICAgICB7c3RvcmVkUHJvZHVjdHMgPiAwID8gKFxuICAgICAgICAgICAgPHA+0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSDRgtC+0LLQsNGA0L7QsjwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgc3RvcmVkUHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX0gJC48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VydDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkN1cnQiLCJpc0N1cnRPcGVuIiwic2V0SXNDdXJ0T3BlbiIsInN0b3JhZ2VEYXRhIiwic2V0U3RvcmFnZURhdGEiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFByb2R1Y3RzIiwicGFyc2UiLCJjbG9zZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgyIiwicCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImgzIiwicHJpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/modals/Curt.jsx\n"));

/***/ })

});