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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/logo.png */ \"./assets/image/logo.png\");\n/* harmony import */ var _assets_image_person_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/person.png */ \"./assets/image/person.png\");\n/* harmony import */ var _assets_image_cart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/image/cart.png */ \"./assets/image/cart.png\");\n/* harmony import */ var _assets_image_burger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/image/burger.png */ \"./assets/image/burger.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modals_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/Auth */ \"./components/layout/modals/Auth.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _modals_Burger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/Burger */ \"./components/layout/modals/Burger.jsx\");\n/* harmony import */ var _modals_Curt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/Curt */ \"./components/layout/modals/Curt.jsx\");\n/* harmony import */ var _modals_Curt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modals_Curt__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { style } = param;\n    _s();\n    const [isCurtOpen, setIsCurtOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isBurgerOpen, setIsBurgerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const openModal = ()=>setModalOpen(true);\n    const closeModal = ()=>setModalOpen(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const navigate = (param)=>{\n        let { link } = param;\n        router.push(\"\".concat(link));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                style: style,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header__container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header__logo\",\n                            onClick: ()=>navigate({\n                                    link: \"/\"\n                                }),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                                alt: \"404\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header__content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__content__login\",\n                                    onClick: ()=>openModal(),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _assets_image_person_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                            alt: \"404\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"header__content__txt\",\n                                            children: \"Log in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__content__cart\",\n                                    onClick: ()=>{\n                                        setIsCurtOpen(true);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _assets_image_cart_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"404\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"header__content__txt\",\n                                            children: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__content__burger\",\n                                    onClick: ()=>{\n                                        setIsBurgerOpen(!isBurgerOpen);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: isBurgerOpen ? \"burger burger--open\" : \"burger\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Auth__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: closeModal\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Burger__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                isBurgerOpen: isBurgerOpen,\n                setIsBurgerOpen: setIsBurgerOpen\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_modals_Curt__WEBPACK_IMPORTED_MODULE_10___default()), {\n                isCurtOpen: isCurtOpen,\n                setIsCurtOpen: setIsCurtOpen\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"AllsmNTKyPTJjniL3QTuNfuraCs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDRjtBQUNJO0FBQ3ZCO0FBQ1M7QUFDTjtBQUNEO0FBQ0s7QUFDSjtBQUVsQyxNQUFNVSxTQUFTO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUN2QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTyxhQUFhQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1XLFlBQVksSUFBTUgsYUFBYTtJQUNyQyxNQUFNSSxhQUFhLElBQU1KLGFBQWE7SUFDdEMsTUFBTUssU0FBU2Ysc0RBQVNBO0lBRXhCLE1BQU1nQixXQUFXO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQ3hCRixPQUFPRyxJQUFJLENBQUMsR0FBUSxPQUFMRDtJQUNqQjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ0U7Z0JBQU9DLFdBQVU7Z0JBQVNkLE9BQU9BOzBCQUNoQyw0RUFBQ2U7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs0QkFBZUUsU0FBUyxJQUFNTixTQUFTO29DQUFFQyxNQUFNO2dDQUFJO3NDQUNoRSw0RUFBQ2xCLG1EQUFLQTtnQ0FBQ3dCLEtBQUs1Qiw4REFBSUE7Z0NBQUU2QixLQUFJOzs7Ozs7Ozs7OztzQ0FFeEIsOERBQUNIOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUlELFdBQVU7b0NBQXlCRSxTQUFTLElBQU1UOztzREFDckQsOERBQUNkLG1EQUFLQTs0Q0FBQ3dCLEtBQUszQixnRUFBSUE7NENBQUU0QixLQUFJOzs7Ozs7c0RBQ3RCLDhEQUFDQzs0Q0FBS0wsV0FBVTtzREFBdUI7Ozs7Ozs7Ozs7Ozs4Q0FFekMsOERBQUNDO29DQUNDRCxXQUFVO29DQUNWRSxTQUFTO3dDQUNQZCxjQUFjO29DQUNoQjs7c0RBRUEsOERBQUNULG1EQUFLQTs0Q0FBQ3dCLEtBQUsxQiw4REFBSUE7NENBQUUyQixLQUFJOzs7Ozs7c0RBQ3RCLDhEQUFDQzs0Q0FBS0wsV0FBVTtzREFBdUI7Ozs7Ozs7Ozs7Ozs4Q0FFekMsOERBQUNDO29DQUNDRCxXQUFVO29DQUNWRSxTQUFTO3dDQUNQVixnQkFBZ0IsQ0FBQ0Q7b0NBQ25COzhDQUVBLDRFQUFDVTt3Q0FBSUQsV0FBV1QsZUFBZSx3QkFBd0I7OzBEQUNyRCw4REFBQ2M7Ozs7OzBEQUNELDhEQUFDQTs7Ozs7MERBQ0QsOERBQUNBOzs7OzswREFDRCw4REFBQ0E7Ozs7OzBEQUNELDhEQUFDQTs7Ozs7MERBQ0QsOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1gsOERBQUN4QixvREFBSUE7Z0JBQUN5QixRQUFRakI7Z0JBQWFrQixTQUFTYjs7Ozs7OzBCQUNwQyw4REFBQ1gsc0RBQU1BO2dCQUFDUSxjQUFjQTtnQkFBY0MsaUJBQWlCQTs7Ozs7OzBCQUNyRCw4REFBQ1Isc0RBQUlBO2dCQUFDRyxZQUFZQTtnQkFBWUMsZUFBZUE7Ozs7Ozs7O0FBR25EO0dBekRNSDs7UUFPV0wsa0RBQVNBOzs7S0FQcEJLO0FBMkROLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGFuaWwvRG9jdW1lbnRzL0dpdEh1Yi95ZWxsb3cvY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9nby5wbmdcIjtcbmltcG9ydCBwcm9mIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvcGVyc29uLnBuZ1wiO1xuaW1wb3J0IGNhcnQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9jYXJ0LnBuZ1wiO1xuaW1wb3J0IGJ1cmdlciBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2J1cmdlci5wbmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vbW9kYWxzL0F1dGhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVyZ2VyIGZyb20gXCIuLi9tb2RhbHMvQnVyZ2VyXCI7XG5pbXBvcnQgQ3VydCBmcm9tIFwiLi4vbW9kYWxzL0N1cnRcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBbaXNDdXJ0T3Blbiwgc2V0SXNDdXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQnVyZ2VyT3Blbiwgc2V0SXNCdXJnZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4odHJ1ZSk7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9ICh7IGxpbmsgfSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAke2xpbmt9YCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoeyBsaW5rOiBcIi9cIiB9KX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCI0MDRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudF9fbG9naW5cIiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoKX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2Z9IGFsdD1cIjQwNFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudF9fdHh0XCI+TG9nIGluPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudF9fY2FydFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0N1cnRPcGVuKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjYXJ0fSBhbHQ9XCI0MDRcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRfX3R4dFwiPjA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50X19idXJnZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNCdXJnZXJPcGVuKCFpc0J1cmdlck9wZW4pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNCdXJnZXJPcGVuID8gXCJidXJnZXIgYnVyZ2VyLS1vcGVuXCIgOiBcImJ1cmdlclwifT5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPEF1dGggaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17Y2xvc2VNb2RhbH0gLz5cbiAgICAgIDxCdXJnZXIgaXNCdXJnZXJPcGVuPXtpc0J1cmdlck9wZW59IHNldElzQnVyZ2VyT3Blbj17c2V0SXNCdXJnZXJPcGVufSAvPlxuICAgICAgPEN1cnQgaXNDdXJ0T3Blbj17aXNDdXJ0T3Blbn0gc2V0SXNDdXJ0T3Blbj17c2V0SXNDdXJ0T3Blbn0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJsb2dvIiwicHJvZiIsImNhcnQiLCJidXJnZXIiLCJJbWFnZSIsInVzZVJvdXRlciIsIkF1dGgiLCJ1c2VTdGF0ZSIsIkJ1cmdlciIsIkN1cnQiLCJIZWFkZXIiLCJzdHlsZSIsImlzQ3VydE9wZW4iLCJzZXRJc0N1cnRPcGVuIiwiaXNNb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJpc0J1cmdlck9wZW4iLCJzZXRJc0J1cmdlck9wZW4iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicm91dGVyIiwibmF2aWdhdGUiLCJsaW5rIiwicHVzaCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJzcGFuIiwiaXNPcGVuIiwib25DbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Header/Header.jsx\n"));

/***/ }),

/***/ "./components/layout/modals/Curt.jsx":
/*!*******************************************!*\
  !*** ./components/layout/modals/Curt.jsx ***!
  \*******************************************/
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