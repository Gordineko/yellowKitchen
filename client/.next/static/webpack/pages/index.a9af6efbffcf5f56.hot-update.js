"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/ProdItem/ProdItem.jsx":
/*!*************************************************!*\
  !*** ./components/layout/ProdItem/ProdItem.jsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ProdItem = (param)=>{\n    let { dish, navigate } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"ProdItem.useEffect\": ()=>{}\n    }[\"ProdItem.useEffect\"], []);\n    function creatStorage() {\n        if (!sessionStorage.getItem(\"products\")) {\n            const initialProducts = []; // Пустой массив\n            sessionStorage.setItem(\"products\", JSON.stringify(initialProducts));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"product__item\",\n        onClick: ()=>{\n            navigate({\n                link: \"dishes/\".concat(dish.name)\n            });\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"product__item__img\",\n                src: dish.image,\n                alt: \"404\",\n                width: 296,\n                height: 184\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product__item__name\",\n                children: dish.name\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product__item__price\",\n                children: [\n                    dish.price,\n                    \" $\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product__item__description\",\n                children: dish.description\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"product__item__buy\",\n                children: \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/ProdItem/ProdItem.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProdItem, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ProdItem;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdItem);\nvar _c;\n$RefreshReg$(_c, \"ProdItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9Qcm9kSXRlbS9Qcm9kSXRlbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0c7QUFDbEMsTUFBTUUsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFOztJQUNsQ0gsZ0RBQVNBOzhCQUFDLEtBQU87NkJBQUcsRUFBRTtJQUN0QixTQUFTSTtRQUNQLElBQUksQ0FBQ0MsZUFBZUMsT0FBTyxDQUFDLGFBQWE7WUFDdkMsTUFBTUMsa0JBQWtCLEVBQUUsRUFBRSxnQkFBZ0I7WUFDNUNGLGVBQWVHLE9BQU8sQ0FBQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNIO1FBQ3BEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTO1lBQ1BWLFNBQVM7Z0JBQUVXLE1BQU0sVUFBb0IsT0FBVlosS0FBS2EsSUFBSTtZQUFHO1FBQ3pDOzswQkFFQSw4REFBQ2hCLG1EQUFLQTtnQkFDSmEsV0FBVTtnQkFDVkksS0FBS2QsS0FBS2UsS0FBSztnQkFDZkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDQztnQkFBRVQsV0FBVTswQkFBdUJWLEtBQUthLElBQUk7Ozs7OzswQkFDN0MsOERBQUNNO2dCQUFFVCxXQUFVOztvQkFBd0JWLEtBQUtvQixLQUFLO29CQUFDOzs7Ozs7OzBCQUNoRCw4REFBQ0Q7Z0JBQUVULFdBQVU7MEJBQThCVixLQUFLcUIsV0FBVzs7Ozs7OzBCQUMzRCw4REFBQ0M7Z0JBQU9aLFdBQVU7MEJBQXFCOzs7Ozs7Ozs7Ozs7QUFHN0M7R0E3Qk1YO0tBQUFBO0FBK0JOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGFuaWwvRG9jdW1lbnRzL0dpdEh1Yi95ZWxsb3cvY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L1Byb2RJdGVtL1Byb2RJdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJvZEl0ZW0gPSAoeyBkaXNoLCBuYXZpZ2F0ZSB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuICBmdW5jdGlvbiBjcmVhdFN0b3JhZ2UoKSB7XG4gICAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIikpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxQcm9kdWN0cyA9IFtdOyAvLyDQn9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFByb2R1Y3RzKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1cIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZSh7IGxpbms6IGBkaXNoZXMvJHtkaXNoLm5hbWV9YCB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX2ltZ1wiXG4gICAgICAgIHNyYz17ZGlzaC5pbWFnZX1cbiAgICAgICAgYWx0PVwiNDA0XCJcbiAgICAgICAgd2lkdGg9ezI5Nn1cbiAgICAgICAgaGVpZ2h0PXsxODR9XG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fbmFtZVwiPntkaXNoLm5hbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fcHJpY2VcIj57ZGlzaC5wcmljZX0gJDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX2Rlc2NyaXB0aW9uXCI+e2Rpc2guZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX19idXlcIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kSXRlbTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsIlByb2RJdGVtIiwiZGlzaCIsIm5hdmlnYXRlIiwiY3JlYXRTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbFByb2R1Y3RzIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJsaW5rIiwibmFtZSIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/ProdItem/ProdItem.jsx\n"));

/***/ })

});