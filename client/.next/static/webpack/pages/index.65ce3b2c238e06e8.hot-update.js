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

/***/ "./components/layout/Header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/layout/Header/Header.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/logo.png */ \"./assets/image/logo.png\");\n/* harmony import */ var _assets_image_person_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/person.png */ \"./assets/image/person.png\");\n/* harmony import */ var _assets_image_cart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/image/cart.png */ \"./assets/image/cart.png\");\n/* harmony import */ var _assets_image_burger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/image/burger.png */ \"./assets/image/burger.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modals_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/Auth */ \"./components/layout/modals/Auth.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _modals_Burger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/Burger */ \"./components/layout/modals/Burger.jsx\");\n/* harmony import */ var _modals_Curt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/Curt */ \"./components/layout/modals/Curt.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/store */ \"./redux/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { style } = param;\n    _s();\n    const [isCurtOpen, setIsCurtOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isBurgerOpen, setIsBurgerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();\n    const storageData = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)({\n        \"Header.useSelector[storageData]\": (state)=>state.dishes\n    }[\"Header.useSelector[storageData]\"]);\n    useEffect({\n        \"Header.useEffect\": ()=>{\n            dispatch((0,_redux_store__WEBPACK_IMPORTED_MODULE_11__.initializeDishesFromSessionStorage)());\n        }\n    }[\"Header.useEffect\"], [\n        dispatch\n    ]);\n    const openModal = ()=>setModalOpen(true);\n    const closeModal = ()=>setModalOpen(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const navigate = (param)=>{\n        let { link } = param;\n        router.push(\"\".concat(link));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                style: style,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header__container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header__logo\",\n                            onClick: ()=>navigate({\n                                    link: \"/\"\n                                }),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                                alt: \"404\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header__content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__content__login\",\n                                    onClick: ()=>openModal(),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _assets_image_person_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                            alt: \"404\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"header__content__txt\",\n                                            children: \"Log in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__content__cart\",\n                                    onClick: ()=>{\n                                        setIsCurtOpen(true);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _assets_image_cart_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"404\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"header__content__txt\",\n                                            children: storageData.langth\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__content__burger\",\n                                    onClick: ()=>{\n                                        setIsBurgerOpen(!isBurgerOpen);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: isBurgerOpen ? \"burger burger--open\" : \"burger\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Auth__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: closeModal\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Burger__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                isBurgerOpen: isBurgerOpen,\n                setIsBurgerOpen: setIsBurgerOpen\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Curt__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                isCurtOpen: isCurtOpen,\n                setIsCurtOpen: setIsCurtOpen\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/components/layout/Header/Header.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"FCp4eTsk++EzdOeuUkPfCZaY5UM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNFO0FBQ0Y7QUFDSTtBQUN2QjtBQUNTO0FBQ047QUFDRDtBQUNLO0FBQ0o7QUFDcUI7QUFJekI7QUFFOUIsTUFBTWMsU0FBUztRQUFDLEVBQUVDLEtBQUssRUFBRTs7SUFDdkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1csYUFBYUMsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNZSxXQUFXWix5REFBV0E7SUFDNUIsTUFBTWEsY0FBY1oseURBQVdBOzJDQUFDLENBQUNhLFFBQVVBLE1BQU1DLE1BQU07O0lBRXZEQzs0QkFBVTtZQUNSSixTQUFTVixpRkFBa0NBO1FBQzdDOzJCQUFHO1FBQUNVO0tBQVM7SUFFYixNQUFNSyxZQUFZLElBQU1SLGFBQWE7SUFDckMsTUFBTVMsYUFBYSxJQUFNVCxhQUFhO0lBQ3RDLE1BQU1VLFNBQVN4QixzREFBU0E7SUFFeEIsTUFBTXlCLFdBQVc7WUFBQyxFQUFFQyxJQUFJLEVBQUU7UUFDeEJGLE9BQU9HLElBQUksQ0FBQyxHQUFRLE9BQUxEO0lBQ2pCO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDRTtnQkFBT0MsV0FBVTtnQkFBU25CLE9BQU9BOzBCQUNoQyw0RUFBQ29CO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7NEJBQWVFLFNBQVMsSUFBTU4sU0FBUztvQ0FBRUMsTUFBTTtnQ0FBSTtzQ0FDaEUsNEVBQUMzQixtREFBS0E7Z0NBQUNpQyxLQUFLckMsOERBQUlBO2dDQUFFc0MsS0FBSTs7Ozs7Ozs7Ozs7c0NBRXhCLDhEQUFDSDs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFJRCxXQUFVO29DQUF5QkUsU0FBUyxJQUFNVDs7c0RBQ3JELDhEQUFDdkIsbURBQUtBOzRDQUFDaUMsS0FBS3BDLGdFQUFJQTs0Q0FBRXFDLEtBQUk7Ozs7OztzREFDdEIsOERBQUNDOzRDQUFLTCxXQUFVO3NEQUF1Qjs7Ozs7Ozs7Ozs7OzhDQUV6Qyw4REFBQ0M7b0NBQ0NELFdBQVU7b0NBQ1ZFLFNBQVM7d0NBQ1BuQixjQUFjO29DQUNoQjs7c0RBRUEsOERBQUNiLG1EQUFLQTs0Q0FBQ2lDLEtBQUtuQyw4REFBSUE7NENBQUVvQyxLQUFJOzs7Ozs7c0RBQ3RCLDhEQUFDQzs0Q0FBS0wsV0FBVTtzREFBd0JYLFlBQVlpQixNQUFNOzs7Ozs7Ozs7Ozs7OENBRTVELDhEQUFDTDtvQ0FDQ0QsV0FBVTtvQ0FDVkUsU0FBUzt3Q0FDUGYsZ0JBQWdCLENBQUNEO29DQUNuQjs4Q0FFQSw0RUFBQ2U7d0NBQUlELFdBQVdkLGVBQWUsd0JBQXdCOzswREFDckQsOERBQUNtQjs7Ozs7MERBQ0QsOERBQUNBOzs7OzswREFDRCw4REFBQ0E7Ozs7OzBEQUNELDhEQUFDQTs7Ozs7MERBQ0QsOERBQUNBOzs7OzswREFDRCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPWCw4REFBQ2pDLG9EQUFJQTtnQkFBQ21DLFFBQVF2QjtnQkFBYXdCLFNBQVNkOzs7Ozs7MEJBQ3BDLDhEQUFDcEIsc0RBQU1BO2dCQUFDWSxjQUFjQTtnQkFBY0MsaUJBQWlCQTs7Ozs7OzBCQUNyRCw4REFBQ1oscURBQUlBO2dCQUFDTyxZQUFZQTtnQkFBWUMsZUFBZUE7Ozs7Ozs7O0FBR25EO0dBaEVNSDs7UUFLYUoscURBQVdBO1FBQ1JDLHFEQUFXQTtRQVFoQk4sa0RBQVNBOzs7S0FkcEJTO0FBa0VOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGFuaWwvRG9jdW1lbnRzL0dpdEh1Yi95ZWxsb3cvY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9nby5wbmdcIjtcbmltcG9ydCBwcm9mIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvcGVyc29uLnBuZ1wiO1xuaW1wb3J0IGNhcnQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9jYXJ0LnBuZ1wiO1xuaW1wb3J0IGJ1cmdlciBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2J1cmdlci5wbmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vbW9kYWxzL0F1dGhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVyZ2VyIGZyb20gXCIuLi9tb2RhbHMvQnVyZ2VyXCI7XG5pbXBvcnQgQ3VydCBmcm9tIFwiLi4vbW9kYWxzL0N1cnRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgaW5pdGlhbGl6ZURpc2hlc0Zyb21TZXNzaW9uU3RvcmFnZSxcbiAgYWRkRGlzaCxcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L3N0b3JlXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHN0eWxlIH0pID0+IHtcbiAgY29uc3QgW2lzQ3VydE9wZW4sIHNldElzQ3VydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0J1cmdlck9wZW4sIHNldElzQnVyZ2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdG9yYWdlRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGlzaGVzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGluaXRpYWxpemVEaXNoZXNGcm9tU2Vzc2lvblN0b3JhZ2UoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHNldE1vZGFsT3Blbih0cnVlKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbihmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gKHsgbGluayB9KSA9PiB7XG4gICAgcm91dGVyLnB1c2goYCR7bGlua31gKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSh7IGxpbms6IFwiL1wiIH0pfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cIjQwNFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50X19sb2dpblwiIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCgpfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZn0gYWx0PVwiNDA0XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50X190eHRcIj5Mb2cgaW48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50X19jYXJ0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzQ3VydE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NhcnR9IGFsdD1cIjQwNFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudF9fdHh0XCI+e3N0b3JhZ2VEYXRhLmxhbmd0aH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50X19idXJnZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNCdXJnZXJPcGVuKCFpc0J1cmdlck9wZW4pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNCdXJnZXJPcGVuID8gXCJidXJnZXIgYnVyZ2VyLS1vcGVuXCIgOiBcImJ1cmdlclwifT5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPEF1dGggaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17Y2xvc2VNb2RhbH0gLz5cbiAgICAgIDxCdXJnZXIgaXNCdXJnZXJPcGVuPXtpc0J1cmdlck9wZW59IHNldElzQnVyZ2VyT3Blbj17c2V0SXNCdXJnZXJPcGVufSAvPlxuICAgICAgPEN1cnQgaXNDdXJ0T3Blbj17aXNDdXJ0T3Blbn0gc2V0SXNDdXJ0T3Blbj17c2V0SXNDdXJ0T3Blbn0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJsb2dvIiwicHJvZiIsImNhcnQiLCJidXJnZXIiLCJJbWFnZSIsInVzZVJvdXRlciIsIkF1dGgiLCJ1c2VTdGF0ZSIsIkJ1cmdlciIsIkN1cnQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiaW5pdGlhbGl6ZURpc2hlc0Zyb21TZXNzaW9uU3RvcmFnZSIsImFkZERpc2giLCJIZWFkZXIiLCJzdHlsZSIsImlzQ3VydE9wZW4iLCJzZXRJc0N1cnRPcGVuIiwiaXNNb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJpc0J1cmdlck9wZW4iLCJzZXRJc0J1cmdlck9wZW4iLCJkaXNwYXRjaCIsInN0b3JhZ2VEYXRhIiwic3RhdGUiLCJkaXNoZXMiLCJ1c2VFZmZlY3QiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicm91dGVyIiwibmF2aWdhdGUiLCJsaW5rIiwicHVzaCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJzcGFuIiwibGFuZ3RoIiwiaXNPcGVuIiwib25DbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Header/Header.jsx\n"));

/***/ })

});