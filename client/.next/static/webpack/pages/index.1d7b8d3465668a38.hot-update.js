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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Footer/Footer */ \"./components/layout/Footer/Footer.jsx\");\n/* harmony import */ var _components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Header/Header */ \"./components/layout/Header/Header.jsx\");\n/* harmony import */ var _components_layout_Main_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Main/Form */ \"./components/layout/Main/Form.jsx\");\n/* harmony import */ var _components_layout_Main_Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Main/Info */ \"./components/layout/Main/Info.jsx\");\n/* harmony import */ var _components_layout_Main_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Main/Preview */ \"./components/layout/Main/Preview.jsx\");\n/* harmony import */ var _components_layout_Main_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/Main/Products */ \"./components/layout/Main/Products.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst HomePage = (param)=>{\n    let { dishes } = param;\n    _s();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__.useInView)({\n        threshold: 0.5,\n        triggerOnce: true\n    });\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true); // Начальное состояние — лоадинг\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const timer = setTimeout({\n                \"HomePage.useEffect.timer\": ()=>{\n                    setIsLoading(false); // Снимаем лоадинг через 2 секунды\n                }\n            }[\"HomePage.useEffect.timer\"], 2000);\n            return ({\n                \"HomePage.useEffect\": ()=>clearTimeout(timer)\n            })[\"HomePage.useEffect\"]; // Очищаем таймер при размонтировании\n        }\n    }[\"HomePage.useEffect\"], []);\n    const navigate = (param)=>{\n        let { link } = param;\n        router.push(\"\".concat(link));\n    };\n    if (isLoading) {\n        // Экран лоадинга\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loader__container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"loader\",\n                children: \"YellowKitchen\"\n            }, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Лучший ресторан в городе — Вкусные блюда на заказ yellowKitchen\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Добро пожаловать в yellowKitchen! Мы предлагаем вкусные блюда на заказ с доставкой по городу. Узнайте меню и закажите прямо сейчас!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ресторан, доставка еды, yellowKitchen, вкусные блюда, пицца, суши, ужин на заказ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Лучший ресторан в городе yellowKitchen — Вкусные блюда на заказ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Ищете вкусную еду на заказ? Мы предлагаем лучшие блюда с доставкой по городу. Заказывайте прямо на нашем сайте!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                navigate: navigate\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"marquee\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: \"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: \"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Products__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                ref: ref,\n                                inView: inView,\n                                dishes: dishes,\n                                navigate: navigate\n                            }, void 0, false, {\n                                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ref: ref,\n                        inView: inView\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Main_Info__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            ref: ref,\n                            inView: inView\n                        }, void 0, false, {\n                            fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danil/Documents/GitHub/yellow/client/pages/index.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"oNn+Hj1K7GpRzZuWZiiiWsF2/Ok=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__.useInView,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = HomePage;\nconst styles = {\n    loadingContainer: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\",\n        backgroundColor: \"#f8f8f8\"\n    },\n    spinner: {\n        width: \"50px\",\n        height: \"50px\",\n        border: \"5px solid #ccc\",\n        borderTop: \"5px solid #007bff\",\n        borderRadius: \"50%\",\n        animation: \"spin 1s linear infinite\"\n    }\n};\n// CSS для спиннера\nconst globalStyle = \"\\n@keyframes spin {\\n  0% { transform: rotate(0deg); }\\n  100% { transform: rotate(360deg); }\\n}\\n\";\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNBO0FBQ047QUFDQTtBQUNNO0FBQ0U7QUFDbEI7QUFDWDtBQUNlO0FBQ1k7QUFheEQsTUFBTVcsV0FBVztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDMUIsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRSxHQUFHSix1RUFBU0EsQ0FBQztRQUNoQ0ssV0FBVztRQUNYQyxhQUFhO0lBQ2Y7SUFDQSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsT0FBTyxnQ0FBZ0M7SUFDbEYsTUFBTVUsU0FBU2Isc0RBQVNBO0lBRXhCRSxnREFBU0E7OEJBQUM7WUFDUixNQUFNWSxRQUFRQzs0Q0FBVztvQkFDdkJILGFBQWEsUUFBUSxrQ0FBa0M7Z0JBQ3pEOzJDQUFHO1lBRUg7c0NBQU8sSUFBTUksYUFBYUY7c0NBQVEscUNBQXFDO1FBQ3pFOzZCQUFHLEVBQUU7SUFFTCxNQUFNRyxXQUFXO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQ3hCTCxPQUFPTSxJQUFJLENBQUMsR0FBUSxPQUFMRDtJQUNqQjtJQUVBLElBQUlQLFdBQVc7UUFDYixpQkFBaUI7UUFDakIscUJBQ0UsOERBQUNTO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFLRCxXQUFVOzBCQUFTOzs7Ozs7Ozs7OztJQUcvQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJQTs7a0NBQ0gsOERBQUNzQjtrQ0FBTTs7Ozs7O2tDQUdQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0csVUFBUzt3QkFDVEQsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0csVUFBUzt3QkFDVEQsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFBS0csVUFBUzt3QkFBVUQsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQy9CLHdFQUFNQTs7Ozs7MEJBQ1AsOERBQUNpQztnQkFBS1AsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3ZCLHVFQUFPQTtnQ0FBQ21CLFVBQVVBOzs7Ozs7MENBQ25CLDhEQUFDRztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUFPOzs7Ozs7a0RBSXRCLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7OzBDQU14Qiw4REFBQ3RCLHdFQUFRQTtnQ0FDUFEsS0FBS0E7Z0NBQ0xDLFFBQVFBO2dDQUNSRixRQUFRQTtnQ0FDUlcsVUFBVUE7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ3JCLG9FQUFJQTt3QkFBQ1csS0FBS0E7d0JBQUtDLFFBQVFBOzs7Ozs7a0NBQ3hCLDhEQUFDWTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3hCLG9FQUFJQTs0QkFBQ1UsS0FBS0E7NEJBQUtDLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUIsOERBQUNkLHdFQUFNQTs7Ozs7OztBQUdiO0dBcEZNVzs7UUFDb0JELG1FQUFTQTtRQUtsQkosa0RBQVNBOzs7S0FOcEJLO0FBc0ZOLE1BQU13QixTQUFTO0lBQ2JDLGtCQUFrQjtRQUNoQkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLGlCQUFpQjtJQUNuQjtJQUNBQyxTQUFTO1FBQ1BDLE9BQU87UUFDUEgsUUFBUTtRQUNSSSxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsY0FBYztRQUNkQyxXQUFXO0lBQ2I7QUFDRjtBQUVBLG1CQUFtQjtBQUNuQixNQUFNQyxjQUFlOztBQU9yQixpRUFBZXRDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbC9Eb2N1bWVudHMvR2l0SHViL3llbGxvdy9jbGllbnQvcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluL0Zvcm1cIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluL0luZm9cIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluL1ByZXZpZXdcIjtcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTWFpbi9Qcm9kdWN0c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2Rpc2hlc1wiKTtcbiAgY29uc3QgZGlzaGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkaXNoZXMsXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBkaXNoZXMgfSkgPT4ge1xuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIHRocmVzaG9sZDogMC41LFxuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyDQndCw0YfQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1IOKAlCDQu9C+0LDQtNC40L3Qs1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAvLyDQodC90LjQvNCw0LXQvCDQu9C+0LDQtNC40L3QsyDRh9C10YDQtdC3IDIg0YHQtdC60YPQvdC00YtcbiAgICB9LCAyMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpOyAvLyDQntGH0LjRidCw0LXQvCDRgtCw0LnQvNC10YAg0L/RgNC4INGA0LDQt9C80L7QvdGC0LjRgNC+0LLQsNC90LjQuFxuICB9LCBbXSk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSAoeyBsaW5rIH0pID0+IHtcbiAgICByb3V0ZXIucHVzaChgJHtsaW5rfWApO1xuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICAvLyDQrdC60YDQsNC9INC70L7QsNC00LjQvdCz0LBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj5ZZWxsb3dLaXRjaGVuPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAg0JvRg9GH0YjQuNC5INGA0LXRgdGC0L7RgNCw0L0g0LIg0LPQvtGA0L7QtNC1IOKAlCDQktC60YPRgdC90YvQtSDQsdC70Y7QtNCwINC90LAg0LfQsNC60LDQtyB5ZWxsb3dLaXRjaGVuXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwi0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCDQsiB5ZWxsb3dLaXRjaGVuISDQnNGLINC/0YDQtdC00LvQsNCz0LDQtdC8INCy0LrRg9GB0L3Ri9C1INCx0LvRjtC00LAg0L3QsCDQt9Cw0LrQsNC3INGBINC00L7RgdGC0LDQstC60L7QuSDQv9C+INCz0L7RgNC+0LTRgy4g0KPQt9C90LDQudGC0LUg0LzQtdC90Y4g0Lgg0LfQsNC60LDQttC40YLQtSDQv9GA0Y/QvNC+INGB0LXQudGH0LDRgSFcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgY29udGVudD1cItGA0LXRgdGC0L7RgNCw0L0sINC00L7RgdGC0LDQstC60LAg0LXQtNGLLCB5ZWxsb3dLaXRjaGVuLCDQstC60YPRgdC90YvQtSDQsdC70Y7QtNCwLCDQv9C40YbRhtCwLCDRgdGD0YjQuCwg0YPQttC40L0g0L3QsCDQt9Cw0LrQsNC3XCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcbiAgICAgICAgICBjb250ZW50PVwi0JvRg9GH0YjQuNC5INGA0LXRgdGC0L7RgNCw0L0g0LIg0LPQvtGA0L7QtNC1IHllbGxvd0tpdGNoZW4g4oCUINCS0LrRg9GB0L3Ri9C1INCx0LvRjtC00LAg0L3QsCDQt9Cw0LrQsNC3XCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwi0JjRidC10YLQtSDQstC60YPRgdC90YPRjiDQtdC00YMg0L3QsCDQt9Cw0LrQsNC3PyDQnNGLINC/0YDQtdC00LvQsNCz0LDQtdC8INC70YPRh9GI0LjQtSDQsdC70Y7QtNCwINGBINC00L7RgdGC0LDQstC60L7QuSDQv9C+INCz0L7RgNC+0LTRgy4g0JfQsNC60LDQt9GL0LLQsNC50YLQtSDQv9GA0Y/QvNC+INC90LAg0L3QsNGI0LXQvCDRgdCw0LnRgtC1IVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxQcmV2aWV3IG5hdmlnYXRlPXtuYXZpZ2F0ZX0gIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJxdWVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgQ3Jpc3Agcm9tYWluZSBsZXR0dWNlIHdpdGggQ2Flc2FyIGRyZXNzaW5nLCBjcm91dG9ucywgYW5kIFBhcm1lc2FuXG4gICAgICAgICAgICAgIGNoZWVzZS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgIENyaXNwIHJvbWFpbmUgbGV0dHVjZSB3aXRoIENhZXNhciBkcmVzc2luZywgY3JvdXRvbnMsIGFuZCBQYXJtZXNhblxuICAgICAgICAgICAgICBjaGVlc2UuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxQcm9kdWN0c1xuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBpblZpZXc9e2luVmlld31cbiAgICAgICAgICAgIGRpc2hlcz17ZGlzaGVzfVxuICAgICAgICAgICAgbmF2aWdhdGU9e25hdmlnYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybSByZWY9e3JlZn0gaW5WaWV3PXtpblZpZXd9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPEluZm8gcmVmPXtyZWZ9IGluVmlldz17aW5WaWV3fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbG9hZGluZ0NvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiLFxuICB9LFxuICBzcGlubmVyOiB7XG4gICAgd2lkdGg6IFwiNTBweFwiLFxuICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgYm9yZGVyOiBcIjVweCBzb2xpZCAjY2NjXCIsXG4gICAgYm9yZGVyVG9wOiBcIjVweCBzb2xpZCAjMDA3YmZmXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIGFuaW1hdGlvbjogXCJzcGluIDFzIGxpbmVhciBpbmZpbml0ZVwiLFxuICB9LFxufTtcblxuLy8gQ1NTINC00LvRjyDRgdC/0LjQvdC90LXRgNCwXG5jb25zdCBnbG9iYWxTdHlsZSA9IGBcbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIkZvb3RlciIsIkhlYWRlciIsIkZvcm0iLCJJbmZvIiwiUHJldmlldyIsIlByb2R1Y3RzIiwidXNlUm91dGVyIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlSW5WaWV3IiwiSG9tZVBhZ2UiLCJkaXNoZXMiLCJyZWYiLCJpblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm5hdmlnYXRlIiwibGluayIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsIm1haW4iLCJzdHlsZXMiLCJsb2FkaW5nQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcGlubmVyIiwid2lkdGgiLCJib3JkZXIiLCJib3JkZXJUb3AiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJnbG9iYWxTdHlsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});