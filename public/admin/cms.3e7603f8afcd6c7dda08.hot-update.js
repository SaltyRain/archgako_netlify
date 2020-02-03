webpackHotUpdate("cms",{

/***/ "./node_modules/bootstrap/dist/css/bootstrap-grid.css":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap-grid.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645213608
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645214328
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/Footer/Footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/Footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645208965
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: HomePageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageTemplate", function() { return HomePageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_news_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/news-block */ "./src/templates/news-block.js");

var _jsxFileName = "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/pages/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

 // import PropTypes from "prop-types";


 // import ReactMarkdown from "react-markdown";

 // import HTMLContent from "../components/Content";



var HomePageTemplate = function HomePageTemplate(_ref) {
  var home = _ref.home,
      _ref$news = _ref.news,
      news = _ref$news === void 0 ? null : _ref$news;
  var cities = home.cities;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, home.archgakoLogo, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "banner__sign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, home.archgakoSign)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "banner__button-scrolldown button-reset",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "about",
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12 col-md-6 order-md-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "about__title section__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, home.about.aboutHeading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "about__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "about__p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, home.about.paragraph1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "about__p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, home.about.paragraph2), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "about__p about__p_uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, home.about.paragraph3), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "about__sign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, home.about.sign))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12 order-first col-md-6 align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "about__photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: home.about.ourPhoto,
    alt: home.about.ourPhotoAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "news__title section__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, home.newsHeading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, news && news.map(function (newsBlock, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_news_block__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      className: "news__newsBlock",
      newsBlock: newsBlock.node.frontmatter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "cities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "visually-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u0413\u043E\u0440\u043E\u0434\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C"), cities.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "row justify-content-center align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, cities.map(function (city) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: city.cityName,
      className: "col align-self-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "cities__cityMapImage",
      src: city.cityMapImage,
      alt: city.cityMapAlt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "cities__cityName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, city.cityName));
  }))));
};

var HomePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HomePage, _React$Component);

  function HomePage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HomePage.prototype;

  _proto.render = function render() {
    var data = this.props.data;
    var _this$props$data = this.props.data,
        headerData = _this$props$data.headerData,
        footerData = _this$props$data.footerData;
    var home = data.homePageData.edges[0].node.frontmatter;
    var _home$seo = home.seo,
        seoTitle = _home$seo.title,
        seoDescription = _home$seo.description,
        browserTitle = _home$seo.browserTitle;
    var news = data.allMarkdownRemark.edges; // news = news.node.frontmatter;

    news = news.filter(function (newsBlock) {
      return newsBlock;
    }); // maps = maps.filter(map => {
    //     return map;
    // })

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      headerData: headerData,
      footerData: footerData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "title",
      content: seoTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: seoDescription,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, browserTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomePageTemplate, {
      home: home,
      news: news,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

;
var _default = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "621253292";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePageTemplate, "HomePageTemplate", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/pages/index.js");
  reactHotLoader.register(HomePage, "HomePage", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/pages/index.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/pages/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/generic.scss":
/*!*********************************!*\
  !*** ./src/styles/generic.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645212078
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/styles/home.scss":
/*!******************************!*\
  !*** ./src/styles/home.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645212065
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/styles/newsBlock.scss":
/*!***********************************!*\
  !*** ./src/styles/newsBlock.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645212070
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/styles/project.scss":
/*!*********************************!*\
  !*** ./src/styles/project.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645212060
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580645211818
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/templates/news-block.js":
/*!*************************************!*\
  !*** ./src/templates/news-block.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_newsBlock_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/newsBlock.scss */ "./src/styles/newsBlock.scss");
/* harmony import */ var _styles_newsBlock_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_newsBlock_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/templates/news-block.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var NewsBlockTemplate =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsBlockTemplate, _Component);

  function NewsBlockTemplate() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NewsBlockTemplate.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-12 col-md-6 news-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "news-block__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: this.props.newsBlock.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "news-block__hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "news-block__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.newsBlock.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: "news-block__photo",
      src: this.props.newsBlock.image,
      alt: this.props.newsBlock.imageAlt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return NewsBlockTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

NewsBlockTemplate.propTypes = {
  newsBlock: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    imageAlt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })
};
var _default = NewsBlockTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewsBlockTemplate, "NewsBlockTemplate", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/templates/news-block.js");
  reactHotLoader.register(_default, "default", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/templates/news-block.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/templates/newsBlock.js":
false,

/***/ "?0446":
false,

/***/ "?10e5":
false,

/***/ "?1ca6":
false,

/***/ "?644f":
false,

/***/ "?79ba":
false,

/***/ "?90cb":
false,

/***/ "?a4ce":
false,

/***/ "?ace3":
false,

/***/ "?ba62":
false,

/***/ "?d8a2":
false,

/***/ "?da4a":
false,

/***/ "?ee9e":
false

})
//# sourceMappingURL=cms.3e7603f8afcd6c7dda08.hot-update.js.map