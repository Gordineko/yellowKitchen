"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dishes/[name]",{

/***/ "./components/layout/Header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/layout/Header/Header.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/logo.png */ \"./assets/image/logo.png\");\n/* harmony import */ var _assets_image_person_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/person.png */ \"./assets/image/person.png\");\n/* harmony import */ var _assets_image_cart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/image/cart.png */ \"./assets/image/cart.png\");\n/* harmony import */ var _assets_image_burger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/image/burger.png */ \"./assets/image/burger.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modals_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/Auth */ \"./components/layout/modals/Auth.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { style } = param;\n    _s();\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isBurgerOpen, setIsBurgerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const openModal = ()=>setModalOpen(true);\n    const closeModal = ()=>setModalOpen(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const navigate = (param)=>{\n        let { link } = param;\n        router.push(\"\".concat(link));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header__container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__logo\",\n                        onClick: ()=>navigate({\n                                link: \"/\"\n                            }),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            src: _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"404\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__content__login\",\n                                onClick: ()=>openModal(),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: _assets_image_person_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                        alt: \"404\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__content__txt\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__content__cart\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: _assets_image_cart_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        alt: \"404\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__content__txt\",\n                                        children: \"0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__content__burger\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"nav-icon2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Auth__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: closeModal\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danil/Documents/yellowKitchen/client/components/layout/Header/Header.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"e61bOI17GN9nL1BWtqutIvm6pVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDRjtBQUNJO0FBQ3ZCO0FBQ1M7QUFDTjtBQUNEO0FBRWpDLE1BQU1RLFNBQVM7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQ3ZCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTyxZQUFZLElBQU1ILGFBQWE7SUFDckMsTUFBTUksYUFBYSxJQUFNSixhQUFhO0lBQ3RDLE1BQU1LLFNBQVNYLHNEQUFTQTtJQUV4QixNQUFNWSxXQUFXO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQ3hCRixPQUFPRyxJQUFJLENBQUMsR0FBUSxPQUFMRDtJQUNqQjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFPQyxXQUFVO1FBQVNaLE9BQU9BOzswQkFDaEMsOERBQUNhO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQWVFLFNBQVMsSUFBTU4sU0FBUztnQ0FBRUMsTUFBTTs0QkFBSTtrQ0FDaEUsNEVBQUNkLG1EQUFLQTs0QkFBQ29CLEtBQUt4Qiw4REFBSUE7NEJBQUV5QixLQUFJOzs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNIO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUlELFdBQVU7Z0NBQXlCRSxTQUFTLElBQU1UOztrREFDckQsOERBQUNWLG1EQUFLQTt3Q0FBQ29CLEtBQUt2QixnRUFBSUE7d0NBQUV3QixLQUFJOzs7Ozs7a0RBQ3RCLDhEQUFDQzt3Q0FBS0wsV0FBVTtrREFBdUI7Ozs7Ozs7Ozs7OzswQ0FFekMsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ2pCLG1EQUFLQTt3Q0FBQ29CLEtBQUt0Qiw4REFBSUE7d0NBQUV1QixLQUFJOzs7Ozs7a0RBQ3RCLDhEQUFDQzt3Q0FBS0wsV0FBVTtrREFBdUI7Ozs7Ozs7Ozs7OzswQ0FFekMsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDQztvQ0FBSUssSUFBRzs7c0RBQ04sOERBQUNEOzs7OztzREFDRCw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7c0RBQ0QsOERBQUNBOzs7OztzREFDRCw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQ3BCLG9EQUFJQTtnQkFBQ3NCLFFBQVFsQjtnQkFBYW1CLFNBQVNkOzs7Ozs7Ozs7Ozs7QUFHMUM7R0F6Q01QOztRQU1XSCxrREFBU0E7OztLQU5wQkc7QUEyQ04saUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbC9Eb2N1bWVudHMveWVsbG93S2l0Y2hlbi9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dvLnBuZ1wiO1xuaW1wb3J0IHByb2YgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9wZXJzb24ucG5nXCI7XG5pbXBvcnQgY2FydCBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2NhcnQucG5nXCI7XG5pbXBvcnQgYnVyZ2VyIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYnVyZ2VyLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBBdXRoIGZyb20gXCIuLi9tb2RhbHMvQXV0aFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0J1cmdlck9wZW4sIHNldElzQnVyZ2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKHRydWUpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSAoeyBsaW5rIH0pID0+IHtcbiAgICByb3V0ZXIucHVzaChgJHtsaW5rfWApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSh7IGxpbms6IFwiL1wiIH0pfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCI0MDRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudF9fbG9naW5cIiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9mfSBhbHQ9XCI0MDRcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50X190eHRcIj5Mb2cgaW48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRfX2NhcnRcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NhcnR9IGFsdD1cIjQwNFwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRfX3R4dFwiPjA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRfX2J1cmdlclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdi1pY29uMlwiPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QXV0aCBpc09wZW49e2lzTW9kYWxPcGVufSBvbkNsb3NlPXtjbG9zZU1vZGFsfSAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbImxvZ28iLCJwcm9mIiwiY2FydCIsImJ1cmdlciIsIkltYWdlIiwidXNlUm91dGVyIiwiQXV0aCIsInVzZVN0YXRlIiwiSGVhZGVyIiwic3R5bGUiLCJpc01vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImlzQnVyZ2VyT3BlbiIsInNldElzQnVyZ2VyT3BlbiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJyb3V0ZXIiLCJuYXZpZ2F0ZSIsImxpbmsiLCJwdXNoIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInNyYyIsImFsdCIsInNwYW4iLCJpZCIsImlzT3BlbiIsIm9uQ2xvc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header/Header.jsx\n"));

/***/ })

});