"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
// EXTERNAL MODULE: ./utils/helper.js + 1 modules
var helper = __webpack_require__(771);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./utils/render-json.js


function RenderClientDataAsJSON(props) {
  const {
    data,
    type
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("script", {
      type: type,
      dangerouslySetInnerHTML: {
        __html: `${JSON.stringify(data)}`
      }
    })
  });
}
;// CONCATENATED MODULE: ./pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ldJSON = __webpack_require__(686);

class MyDocument extends next_document.default {
  static async getInitialProps(ctx) {
    const initialProps = await next_document.default.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    var _content$seo, _content$seo2, _content$common, _content$seo3, _content$seo4, _this$props, _content$pageName, _content$pageName2, _content$pageName3;

    const content = (0,helper/* getMessageContent */.qp)(this.props);
    const htmlClass = content === null || content === void 0 ? void 0 : (_content$seo = content.seo) === null || _content$seo === void 0 ? void 0 : _content$seo.htmlClass;
    const myLanguageType = content === null || content === void 0 ? void 0 : (_content$seo2 = content.seo) === null || _content$seo2 === void 0 ? void 0 : _content$seo2.myLanguageType;
    const title = content === null || content === void 0 ? void 0 : (_content$common = content.common) === null || _content$common === void 0 ? void 0 : _content$common.title;
    const copyright = content === null || content === void 0 ? void 0 : (_content$seo3 = content.seo) === null || _content$seo3 === void 0 ? void 0 : _content$seo3.copyright;
    const keywords = content === null || content === void 0 ? void 0 : (_content$seo4 = content.seo) === null || _content$seo4 === void 0 ? void 0 : _content$seo4.keywords;
    const languageDirection = (0,helper/* getLanguageDirection */.j9)((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.locale);
    const pageName = (0,helper/* getPageName */.j0)(this.props);
    const section = content === null || content === void 0 ? void 0 : (_content$pageName = content[pageName]) === null || _content$pageName === void 0 ? void 0 : _content$pageName.section;
    const pageTitle = content === null || content === void 0 ? void 0 : (_content$pageName2 = content[pageName]) === null || _content$pageName2 === void 0 ? void 0 : _content$pageName2.title;
    const description = content === null || content === void 0 ? void 0 : (_content$pageName3 = content[pageName]) === null || _content$pageName3 === void 0 ? void 0 : _content$pageName3.description;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      className: htmlClass,
      dir: languageDirection,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "Generated by create next app"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "myLanguageType",
          content: myLanguageType
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Copyright",
          content: copyright
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Keywords",
          content: keywords
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Description",
          content: description
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Section",
          content: section
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Title",
          content: title
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "PageTitle",
          content: pageTitle
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Robots",
          content: "INDEX, FOLLOW"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "Rating",
          content: "General"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "/favicon.ico",
          rel: "shortcut icon"
        }), /*#__PURE__*/jsx_runtime_.jsx(RenderClientDataAsJSON, {
          type: "application/ld+json",
          data: ldJSON
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const _document = (MyDocument);

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 44:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 98:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ 686:
/***/ ((module) => {

module.exports = JSON.parse('{"@context":"https://schema.org","@type":"Flight Routes","name":"Flights to Dubai (DXB)","description":"Choose flights to Dubai for abundant cultural offerings, a vibrant music scene and delightful gourmet options.","url":"https://www.xyz.com/en/fligts-routes","geo":{"@type":"GeoCoordinates","latitude":"5.3254216","longitude":"-4.0204114"},"includesAttraction":[]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,771], () => (__webpack_exec__(343)));
module.exports = __webpack_exports__;

})();