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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Footer/Footer */ \"./components/layout/Footer/Footer.jsx\");\n/* harmony import */ var _components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Header/Header */ \"./components/layout/Header/Header.jsx\");\n/* harmony import */ var _components_layout_Main_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Main/Form */ \"./components/layout/Main/Form.jsx\");\n/* harmony import */ var _components_layout_Main_Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Main/Info */ \"./components/layout/Main/Info.jsx\");\n/* harmony import */ var _components_layout_Main_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Main/Preview */ \"./components/layout/Main/Preview.jsx\");\n/* harmony import */ var _components_layout_Main_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/Main/Products */ \"./components/layout/Main/Products.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst HomePage = (param)=>{\n    let { dishes } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true); // Начальное состояние — лоадинг\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const timer = setTimeout({\n                \"HomePage.useEffect.timer\": ()=>{\n                    setIsLoading(false); // Снимаем лоадинг через 2 секунды\n                }\n            }[\"HomePage.useEffect.timer\"], 2000);\n            return ({\n                \"HomePage.useEffect\": ()=>clearTimeout(timer)\n            })[\"HomePage.useEffect\"]; // Очищаем таймер при размонтировании\n        }\n    }[\"HomePage.useEffect\"], []);\n    const navigate = (param)=>{\n        let { link } = param;\n        router.push(\"\".concat(link));\n    };\n    if (isLoading) {\n        // Экран лоадинга\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            class: \"loader\",\n            children: \"YellowKitchen\"\n        }, void 0, false, {\n            fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Лучший ресторан в городе — Вкусные блюда на заказ yellowKitchen\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Добро пожаловать в yellowKitchen! Мы предлагаем вкусные блюда на заказ с доставкой по городу. Узнайте меню и закажите прямо сейчас!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ресторан, доставка еды, yellowKitchen, вкусные блюда, пицца, суши, ужин на заказ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Лучший ресторан в городе yellowKitchen — Вкусные блюда на заказ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Ищете вкусную еду на заказ? Мы предлагаем лучшие блюда с доставкой по городу. Заказывайте прямо на нашем сайте!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                navigate: navigate\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"marquee\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: \"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: \"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Products__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                dishes: dishes,\n                                navigate: navigate\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Info__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danil/Documents/yellowKitchen/client/pages/index.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"ucBHP+hmRePxNWKJso+rgIARHIg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = HomePage;\nconst styles = {\n    loadingContainer: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\",\n        backgroundColor: \"#f8f8f8\"\n    },\n    spinner: {\n        width: \"50px\",\n        height: \"50px\",\n        border: \"5px solid #ccc\",\n        borderTop: \"5px solid #007bff\",\n        borderRadius: \"50%\",\n        animation: \"spin 1s linear infinite\"\n    }\n};\n// CSS для спиннера\nconst globalStyle = \"\\n@keyframes spin {\\n  0% { transform: rotate(0deg); }\\n  100% { transform: rotate(360deg); }\\n}\\n\";\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ0E7QUFDTjtBQUNBO0FBQ007QUFDRTtBQUNsQjtBQUNYO0FBQ2U7QUFhNUMsTUFBTVUsV0FBVztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDMUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLE9BQU8sZ0NBQWdDO0lBQ2xGLE1BQU1LLFNBQVNSLHNEQUFTQTtJQUV4QkUsZ0RBQVNBOzhCQUFDO1lBQ1IsTUFBTU8sUUFBUUM7NENBQVc7b0JBQ3ZCSCxhQUFhLFFBQVEsa0NBQWtDO2dCQUN6RDsyQ0FBRztZQUVIO3NDQUFPLElBQU1JLGFBQWFGO3NDQUFRLHFDQUFxQztRQUN6RTs2QkFBRyxFQUFFO0lBRUwsTUFBTUcsV0FBVztZQUFDLEVBQUVDLElBQUksRUFBRTtRQUN4QkwsT0FBT00sSUFBSSxDQUFDLEdBQVEsT0FBTEQ7SUFDakI7SUFFQSxJQUFJUCxXQUFXO1FBQ2IsaUJBQWlCO1FBQ2pCLHFCQUFPLDhEQUFDUztZQUFLQyxPQUFNO3NCQUFTOzs7Ozs7SUFDOUI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNmLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjtrQ0FBTTs7Ozs7O2tDQUdQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0csVUFBUzt3QkFDVEQsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0csVUFBUzt3QkFDVEQsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFBS0csVUFBUzt3QkFBVUQsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQ3pCLHdFQUFNQTs7Ozs7MEJBQ1AsOERBQUMyQjtnQkFBS0MsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ3pCLHVFQUFPQTtnQ0FBQ2MsVUFBVUE7Ozs7OzswQ0FDbkIsOERBQUNZO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0M7d0NBQUlELFdBQVU7a0RBQU87Ozs7OztrREFJdEIsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUFPOzs7Ozs7Ozs7Ozs7MENBTXhCLDhEQUFDeEIsd0VBQVFBO2dDQUFDTSxRQUFRQTtnQ0FBUU8sVUFBVUE7Ozs7Ozs7Ozs7OztrQ0FFdEMsOERBQUNoQixvRUFBSUE7Ozs7O2tDQUNMLDhEQUFDNEI7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUMxQixvRUFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNILHdFQUFNQTs7Ozs7OztBQUdiO0dBdkVNVTs7UUFFV0osa0RBQVNBOzs7S0FGcEJJO0FBeUVOLE1BQU1xQixTQUFTO0lBQ2JDLGtCQUFrQjtRQUNoQkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLGlCQUFpQjtJQUNuQjtJQUNBQyxTQUFTO1FBQ1BDLE9BQU87UUFDUEgsUUFBUTtRQUNSSSxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsY0FBYztRQUNkQyxXQUFXO0lBQ2I7QUFDRjtBQUVBLG1CQUFtQjtBQUNuQixNQUFNQyxjQUFlOztBQU9yQixpRUFBZW5DLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbC9Eb2N1bWVudHMveWVsbG93S2l0Y2hlbi9jbGllbnQvcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluL0Zvcm1cIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluL0luZm9cIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluL1ByZXZpZXdcIjtcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTWFpbi9Qcm9kdWN0c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2Rpc2hlc1wiKTtcbiAgY29uc3QgZGlzaGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkaXNoZXMsXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBkaXNoZXMgfSkgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vINCd0LDRh9Cw0LvRjNC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg4oCUINC70L7QsNC00LjQvdCzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7IC8vINCh0L3QuNC80LDQtdC8INC70L7QsNC00LjQvdCzINGH0LXRgNC10LcgMiDRgdC10LrRg9C90LTRi1xuICAgIH0sIDIwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7IC8vINCe0YfQuNGJ0LDQtdC8INGC0LDQudC80LXRgCDQv9GA0Lgg0YDQsNC30LzQvtC90YLQuNGA0L7QstCw0L3QuNC4XG4gIH0sIFtdKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9ICh7IGxpbmsgfSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAke2xpbmt9YCk7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIC8vINCt0LrRgNCw0L0g0LvQvtCw0LTQuNC90LPQsFxuICAgIHJldHVybiA8c3BhbiBjbGFzcz1cImxvYWRlclwiPlllbGxvd0tpdGNoZW48L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICDQm9GD0YfRiNC40Lkg0YDQtdGB0YLQvtGA0LDQvSDQsiDQs9C+0YDQvtC00LUg4oCUINCS0LrRg9GB0L3Ri9C1INCx0LvRjtC00LAg0L3QsCDQt9Cw0LrQsNC3IHllbGxvd0tpdGNoZW5cbiAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCLQlNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMINCyIHllbGxvd0tpdGNoZW4hINCc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10Lwg0LLQutGD0YHQvdGL0LUg0LHQu9GO0LTQsCDQvdCwINC30LDQutCw0Lcg0YEg0LTQvtGB0YLQsNCy0LrQvtC5INC/0L4g0LPQvtGA0L7QtNGDLiDQo9C30L3QsNC50YLQtSDQvNC10L3RjiDQuCDQt9Cw0LrQsNC20LjRgtC1INC/0YDRj9C80L4g0YHQtdC50YfQsNGBIVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICBjb250ZW50PVwi0YDQtdGB0YLQvtGA0LDQvSwg0LTQvtGB0YLQsNCy0LrQsCDQtdC00YssIHllbGxvd0tpdGNoZW4sINCy0LrRg9GB0L3Ri9C1INCx0LvRjtC00LAsINC/0LjRhtGG0LAsINGB0YPRiNC4LCDRg9C20LjQvSDQvdCwINC30LDQutCw0LdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgIGNvbnRlbnQ9XCLQm9GD0YfRiNC40Lkg0YDQtdGB0YLQvtGA0LDQvSDQsiDQs9C+0YDQvtC00LUgeWVsbG93S2l0Y2hlbiDigJQg0JLQutGD0YHQvdGL0LUg0LHQu9GO0LTQsCDQvdCwINC30LDQutCw0LdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCLQmNGJ0LXRgtC1INCy0LrRg9GB0L3Rg9GOINC10LTRgyDQvdCwINC30LDQutCw0Lc/INCc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10Lwg0LvRg9GH0YjQuNC1INCx0LvRjtC00LAg0YEg0LTQvtGB0YLQsNCy0LrQvtC5INC/0L4g0LPQvtGA0L7QtNGDLiDQl9Cw0LrQsNC30YvQstCw0LnRgtC1INC/0YDRj9C80L4g0L3QsCDQvdCw0YjQtdC8INGB0LDQudGC0LUhXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFByZXZpZXcgbmF2aWdhdGU9e25hdmlnYXRlfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgIENyaXNwIHJvbWFpbmUgbGV0dHVjZSB3aXRoIENhZXNhciBkcmVzc2luZywgY3JvdXRvbnMsIGFuZCBQYXJtZXNhblxuICAgICAgICAgICAgICBjaGVlc2UuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICBDcmlzcCByb21haW5lIGxldHR1Y2Ugd2l0aCBDYWVzYXIgZHJlc3NpbmcsIGNyb3V0b25zLCBhbmQgUGFybWVzYW5cbiAgICAgICAgICAgICAgY2hlZXNlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8UHJvZHVjdHMgZGlzaGVzPXtkaXNoZXN9IG5hdmlnYXRlPXtuYXZpZ2F0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPEluZm8gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxvYWRpbmdDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjhcIixcbiAgfSxcbiAgc3Bpbm5lcjoge1xuICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgIGJvcmRlcjogXCI1cHggc29saWQgI2NjY1wiLFxuICAgIGJvcmRlclRvcDogXCI1cHggc29saWQgIzAwN2JmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICBhbmltYXRpb246IFwic3BpbiAxcyBsaW5lYXIgaW5maW5pdGVcIixcbiAgfSxcbn07XG5cbi8vIENTUyDQtNC70Y8g0YHQv9C40L3QvdC10YDQsFxuY29uc3QgZ2xvYmFsU3R5bGUgPSBgXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJGb3JtIiwiSW5mbyIsIlByZXZpZXciLCJQcm9kdWN0cyIsInVzZVJvdXRlciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwiZGlzaGVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibmF2aWdhdGUiLCJsaW5rIiwicHVzaCIsInNwYW4iLCJjbGFzcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGVzIiwibG9hZGluZ0NvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwic3Bpbm5lciIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmFkaXVzIiwiYW5pbWF0aW9uIiwiZ2xvYmFsU3R5bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});