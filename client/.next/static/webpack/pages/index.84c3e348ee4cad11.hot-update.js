/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Main/Products.jsx":
/*!*********************************************!*\
  !*** ./components/layout/Main/Products.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_image_Photo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/Photo.png */ \"./assets/image/Photo.png\");\n/* harmony import */ var _ProdItem_ProdItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProdItem/ProdItem */ \"./components/layout/ProdItem/ProdItem.jsx\");\n/* harmony import */ var _ProdItem_ProdItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProdItem_ProdItem__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = (param)=>{\n    let { dishes, navigate, ref, productsInView } = param;\n    _s();\n    const [renderCount, setRenderCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"products \".concat(productsInView ? \"visible\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products__content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Restaurant Menu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Main/Products.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            renderCount === 4 ? setRenderCount(8) : setRenderCount(4);\n                        },\n                        children: renderCount === 4 ? \"Show all\" : \"Hide\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Main/Products.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Main/Products.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: renderCount === 4 ? \"products__list\" : \"products__list open\",\n                children: dishes.map((dish, index)=>{\n                    if (dish.id <= renderCount) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ProdItem_ProdItem__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            dish: dish,\n                            navigate: navigate\n                        }, index, false, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Main/Products.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 20\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Main/Products.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Main/Products.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Products, \"Ml52K4sZBQFrj1ZACYAnGvjNJ20=\");\n_c = Products;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NYWluL1Byb2R1Y3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDb0I7QUFDUDtBQUVYO0FBQ2pDLE1BQU1JLFdBQVc7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsR0FBRyxFQUFFQyxjQUFjLEVBQUU7O0lBQ3pELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQyxxQkFDRSw4REFBQ1E7UUFBSUosS0FBS0E7UUFBS0ssV0FBVyxZQUE0QyxPQUFoQ0osaUJBQWlCLFlBQVk7OzBCQUNqRSw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFDQ0MsU0FBUzs0QkFDUE4sZ0JBQWdCLElBQUlDLGVBQWUsS0FBS0EsZUFBZTt3QkFDekQ7a0NBRUNELGdCQUFnQixJQUFJLGFBQWE7Ozs7Ozs7Ozs7OzswQkFHdEMsOERBQUNPO2dCQUNDSixXQUFXSCxnQkFBZ0IsSUFBSSxtQkFBbUI7MEJBRWpESixPQUFPWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBQ2pCLElBQUlELEtBQUtFLEVBQUUsSUFBSVgsYUFBYTt3QkFDMUIscUJBQU8sOERBQUNQLDJEQUFRQTs0QkFBYWdCLE1BQU1BOzRCQUFNWixVQUFVQTsyQkFBN0JhOzs7OztvQkFDeEI7Z0JBQ0Y7Ozs7Ozs7Ozs7OztBQUlSO0dBMUJNZjtLQUFBQTtBQTRCTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2RhbmlsL0RvY3VtZW50cy9HaXRIdWIveWVsbG93L2NsaWVudC9jb21wb25lbnRzL2xheW91dC9NYWluL1Byb2R1Y3RzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBkZWxpIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvUGhvdG8ucG5nXCI7XG5pbXBvcnQgUHJvZEl0ZW0gZnJvbSBcIi4uL1Byb2RJdGVtL1Byb2RJdGVtXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBQcm9kdWN0cyA9ICh7IGRpc2hlcywgbmF2aWdhdGUsIHJlZiwgcHJvZHVjdHNJblZpZXcgfSkgPT4ge1xuICBjb25zdCBbcmVuZGVyQ291bnQsIHNldFJlbmRlckNvdW50XSA9IHVzZVN0YXRlKDQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtgcHJvZHVjdHMgJHtwcm9kdWN0c0luVmlldyA/IFwidmlzaWJsZVwiIDogXCJcIn1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cbiAgICAgICAgPGgyPlJlc3RhdXJhbnQgTWVudTwvaDI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJDb3VudCA9PT0gNCA/IHNldFJlbmRlckNvdW50KDgpIDogc2V0UmVuZGVyQ291bnQoNCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDb3VudCA9PT0gNCA/IFwiU2hvdyBhbGxcIiA6IFwiSGlkZVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17cmVuZGVyQ291bnQgPT09IDQgPyBcInByb2R1Y3RzX19saXN0XCIgOiBcInByb2R1Y3RzX19saXN0IG9wZW5cIn1cbiAgICAgID5cbiAgICAgICAge2Rpc2hlcy5tYXAoKGRpc2gsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGRpc2guaWQgPD0gcmVuZGVyQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8UHJvZEl0ZW0ga2V5PXtpbmRleH0gZGlzaD17ZGlzaH0gbmF2aWdhdGU9e25hdmlnYXRlfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiZGVsaSIsIlByb2RJdGVtIiwidXNlU3RhdGUiLCJQcm9kdWN0cyIsImRpc2hlcyIsIm5hdmlnYXRlIiwicmVmIiwicHJvZHVjdHNJblZpZXciLCJyZW5kZXJDb3VudCIsInNldFJlbmRlckNvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJkaXNoIiwiaW5kZXgiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Main/Products.jsx\n"));

/***/ }),

/***/ "./components/layout/ProdItem/ProdItem.jsx":
/*!*************************************************!*\
  !*** ./components/layout/ProdItem/ProdItem.jsx ***!
  \*************************************************/
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


/***/ })

});