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

/***/ "./components/layout/modals/Burger.jsx":
/*!*********************************************!*\
  !*** ./components/layout/modals/Burger.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nconst Burger = (param)=>{\n    let { isBurgerOpen, setIsBurgerOpen } = param;\n    _s();\n    useEffect({\n        \"Burger.useEffect\": ()=>{\n            // Отключаем скролл при открытии меню\n            if (isBurgerOpen) {\n                document.body.style.overflow = \"hidden\";\n            } else {\n                document.body.style.overflow = \"\";\n            }\n            // Убираем стиль при размонтировании компонента\n            return ({\n                \"Burger.useEffect\": ()=>{\n                    document.body.style.overflow = \"\";\n                }\n            })[\"Burger.useEffect\"];\n        }\n    }[\"Burger.useEffect\"], [\n        isBurgerOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isBurgerOpen ? \"modal-overlay-burger\" : \"modal-overlay-burger close\",\n                onClick: ()=>{\n                    setIsBurgerOpen(false);\n                },\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isBurgerOpen ? \"burger__menu open\" : \"burger__menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"burger__menu__info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"burger__menu__title\",\n                                children: \"0800 111 126\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"8:00 - 22:00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"burger__menu__list\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"burger__menu__list__item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Delivery info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"burger__menu__list__item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"About us\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"burger__menu__list__item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Restaurants\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"burger__menu__list__item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Specialities\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/modals/Burger.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Burger, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Burger;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);\nvar _c;\n$RefreshReg$(_c, \"Burger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tb2RhbHMvQnVyZ2VyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLFNBQVM7UUFBQyxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRTs7SUFDL0NDOzRCQUFVO1lBQ1IscUNBQXFDO1lBQ3JDLElBQUlGLGNBQWM7Z0JBQ2hCRyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1lBQ2pDLE9BQU87Z0JBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7WUFDakM7WUFFQSwrQ0FBK0M7WUFDL0M7b0NBQU87b0JBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7Z0JBQ2pDOztRQUNGOzJCQUFHO1FBQUNOO0tBQWE7SUFDakIscUJBQ0U7OzBCQUNFLDhEQUFDTztnQkFDQ0MsV0FDRVIsZUFBZSx5QkFBeUI7Z0JBRTFDUyxTQUFTO29CQUNQUixnQkFBZ0I7Z0JBQ2xCOzBCQUVDOzs7Ozs7MEJBRUgsOERBQUNNO2dCQUFJQyxXQUFXUixlQUFlLHNCQUFzQjs7a0NBQ25ELDhEQUFDTzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFzQjs7Ozs7OzBDQUNuQyw4REFBQ0U7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFTCw4REFBQ0M7d0JBQUdILFdBQVU7OzBDQUNaLDhEQUFDSTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ0s7OENBQUs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDRDtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ0s7OENBQUs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDRDtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ0s7OENBQUs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDRDtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ0s7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEI7R0FoRE1kO0tBQUFBO0FBa0ROLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGFuaWwvRG9jdW1lbnRzL3llbGxvd0tpdGNoZW4vY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L21vZGFscy9CdXJnZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1cmdlciA9ICh7IGlzQnVyZ2VyT3Blbiwgc2V0SXNCdXJnZXJPcGVuIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YHQutGA0L7Qu9C7INC/0YDQuCDQvtGC0LrRgNGL0YLQuNC4INC80LXQvdGOXG4gICAgaWYgKGlzQnVyZ2VyT3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIH1cblxuICAgIC8vINCj0LHQuNGA0LDQtdC8INGB0YLQuNC70Ywg0L/RgNC4INGA0LDQt9C80L7QvdGC0LjRgNC+0LLQsNC90LjQuCDQutC+0LzQv9C+0L3QtdC90YLQsFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICB9O1xuICB9LCBbaXNCdXJnZXJPcGVuXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBpc0J1cmdlck9wZW4gPyBcIm1vZGFsLW92ZXJsYXktYnVyZ2VyXCIgOiBcIm1vZGFsLW92ZXJsYXktYnVyZ2VyIGNsb3NlXCJcbiAgICAgICAgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNCdXJnZXJPcGVuKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge1wiIFwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNCdXJnZXJPcGVuID8gXCJidXJnZXJfX21lbnUgb3BlblwiIDogXCJidXJnZXJfX21lbnVcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVyZ2VyX19tZW51X19pbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnVyZ2VyX19tZW51X190aXRsZVwiPjA4MDAgMTExIDEyNjwvcD5cbiAgICAgICAgICA8cD44OjAwIC0gMjI6MDA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnVyZ2VyX19tZW51X19saXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ1cmdlcl9fbWVudV9fbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4+RGVsaXZlcnkgaW5mbzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidXJnZXJfX21lbnVfX2xpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuPkFib3V0IHVzPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ1cmdlcl9fbWVudV9fbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4+UmVzdGF1cmFudHM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnVyZ2VyX19tZW51X19saXN0X19pdGVtXCI+XG4gICAgICAgICAgICA8c3Bhbj5TcGVjaWFsaXRpZXM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyO1xuIl0sIm5hbWVzIjpbIkJ1cmdlciIsImlzQnVyZ2VyT3BlbiIsInNldElzQnVyZ2VyT3BlbiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsInVsIiwibGkiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/modals/Burger.jsx\n"));

/***/ })

});