"use strict";
(() => {
var exports = {};
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageFlightRoutes)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(980);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms_flight_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(379);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(771);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(316);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








function PageFlightRoutes(props) {
  const {
    routes,
    pageName
  } = props;
  const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('content');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("title", {
        children: [t("common.title"), " | ", t(`${pageName}.title`)]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_organisms_flight_routes__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      routes: routes,
      pageName: pageName
    })]
  });
}
;

PageFlightRoutes.getInitialProps = async function getInitialProps(ctx) {
  var _ctx$pathname, _flightRoutes$data, _flightRoutes$data$fl;

  const {
    locale
  } = ctx;
  const pageName = (_ctx$pathname = ctx.pathname) === null || _ctx$pathname === void 0 ? void 0 : _ctx$pathname.replace('/', '');
  const apiRoutesEndpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .APP_ENV.API_ROUTES_ENDPOINT */ .W.API_ROUTES_ENDPOINT || '/api/routes/flight-routes';
  const apiRoutesEndpointUrl = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_3__/* .createURL */ .Ri)(apiRoutesEndpoint);
  console.log('getinitialprops', apiRoutesEndpointUrl);
  const flightRoutesRes = await fetch(apiRoutesEndpointUrl);
  const flightRoutes = await flightRoutesRes.json();
  ctx.appData = (_flightRoutes$data = flightRoutes.data) === null || _flightRoutes$data === void 0 ? void 0 : (_flightRoutes$data$fl = _flightRoutes$data.flightRouteResponse) === null || _flightRoutes$data$fl === void 0 ? void 0 : _flightRoutes$data$fl.routes;

  const messages = __webpack_require__(848)(`./${locale}.json`);

  ctx.messages = messages;
  return {
    routes: ctx.appData,
    messages,
    pageName
  };
};
/*
export async function getServerSideProps(ctx) {
  const apiRoutesEndpoint = APP_ENV.API_ROUTES_ENDPOINT || '/api/routes/flight-routes';
  const apiRoutesEndpointUrl = createURL(apiRoutesEndpoint);
  console.log('getinitialprops',apiRoutesEndpointUrl);
  const flightRoutesRes = await fetch(apiRoutesEndpointUrl);
  const flightRoutes = await flightRoutesRes.json();
  ctx.appData = flightRoutes.data?.flightRouteResponse?.routes;
  return( {
          routes: ctx.appData
      }
  )
}
*/

/***/ }),

/***/ 980:
/***/ ((module) => {

module.exports = require("next-intl");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [771,251], () => (__webpack_exec__(323)));
module.exports = __webpack_exports__;

})();