webpackHotUpdate("cms",{

/***/ "./node_modules/bootstrap/dist/css/bootstrap-grid.css":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap-grid.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580514082271
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
      // 1580514083024
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: FooterTemplate, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTemplate", function() { return FooterTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.scss */ "./src/components/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/components/Footer/Footer.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var FooterTemplate = function FooterTemplate(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "footer__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u041F\u043E\u0434\u0432\u0430\u043B", data.title), data.contactItems.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer__contacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, data.contactItems.map(function (contactItem) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "footer__contacts_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: contactItem.contact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, contactItem.label));
  })), data.socialLinks.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer__social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, data.socialLinks.map(function (socialLink) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "footer__social-links_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: socialLink.linkURL,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, socialLink.label));
  })));
};

var Footer = function Footer(props) {
  if (!props.data) {
    return null;
  }

  var data = props.data.edges[0].node.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterTemplate, {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  });
};

 // export default () => (
//   <footer className = "footer footer__container container">
//     <h3 className="footer__title">Контакты</h3>
//     <a className="footer__tel" href="tel:+79111620482">+7 (921) 636 14 51</a>
//     <a className="footer__tel" href="tel:+79111620482">+7 (911) 162 04 82</a>
//     <a className="footer__mail" href="mailto:archgako@gmail.com">@: archgako@gmail.com</a>
//     <ul className="footer__social-media">
//       <li className="footer__item_social-media_item"><a href="https://www.instagram.com/ARCHGAKO/">instagram</a></li>
//       <li className="footer__item_social-media"><a href="https://www.facebook.com/ARCHGAKO/">facebook</a></li>
//     </ul>
//   </footer>
// )

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FooterTemplate, "FooterTemplate", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/components/Footer/Footer.js");
  reactHotLoader.register(Footer, "Footer", "/Users/TimurGaripov/Desktop/netlify_archgako/archgako_netlify/src/components/Footer/Footer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Footer/Footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/Footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1580514077020
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
      // 1580514081236
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "?10e5":
false,

/***/ "?79ba":
false,

/***/ "?ba62":
false,

/***/ "?d8a2":
false,

/***/ "?da4a":
false

})
//# sourceMappingURL=cms.0e733dfbdf8bb46c0bc8.hot-update.js.map