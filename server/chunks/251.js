exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar-AE.json": 542,
	"./en.json": 748,
	"./ja.json": 328,
	"./ru-RU.json": 777
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 848;

/***/ }),

/***/ 379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FlightRoutes)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(980);
// EXTERNAL MODULE: ./molecules/flight-cards/flight-cards.module.scss
var flight_cards_module = __webpack_require__(97);
var flight_cards_module_default = /*#__PURE__*/__webpack_require__.n(flight_cards_module);
// EXTERNAL MODULE: ./utils/helper.js + 1 modules
var helper = __webpack_require__(771);
// EXTERNAL MODULE: ./molecules/flight-cards/flight-card/flight-card.module.scss
var flight_card_module = __webpack_require__(579);
var flight_card_module_default = /*#__PURE__*/__webpack_require__.n(flight_card_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./molecules/flight-cards/flight-card/index.js





function FlightCard(props) {
  var _flightCard$display, _flightCard$display2, _flightCard$display3, _flightCard$display4, _flightCard$display5, _flightCard$display6, _flightCard$display7, _flightCard$display8;

  const t = (0,external_next_intl_.useTranslations)('content');
  const {
    flightCard,
    index,
    onSelection,
    selectionState,
    pageName
  } = props;

  const clickHander = (id, e) => {
    onSelection(id);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${(flight_card_module_default()).flight_card} ${selectionState ? ' card-selected' : ""}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (flight_card_module_default()).flight_card_info,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (flight_card_module_default()).flight_timing_label,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: t(`${pageName}.card.departureTitle`)
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: t(`${pageName}.card.arrivalTitle`)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (flight_card_module_default()).flight_airport,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display = flightCard.display) === null || _flightCard$display === void 0 ? void 0 : _flightCard$display.origin
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display2 = flightCard.display) === null || _flightCard$display2 === void 0 ? void 0 : _flightCard$display2.destination
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (flight_card_module_default()).flight_terminal,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display3 = flightCard.display) === null || _flightCard$display3 === void 0 ? void 0 : _flightCard$display3.departureTerminal
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display4 = flightCard.display) === null || _flightCard$display4 === void 0 ? void 0 : _flightCard$display4.arrivalTerminal
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (flight_card_module_default()).flight_date,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,helper/* default */.ZP)(flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display5 = flightCard.display) === null || _flightCard$display5 === void 0 ? void 0 : _flightCard$display5.deptDate)
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,helper/* default */.ZP)(flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display6 = flightCard.display) === null || _flightCard$display6 === void 0 ? void 0 : _flightCard$display6.arrDate)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (flight_card_module_default()).flight_time,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display7 = flightCard.display) === null || _flightCard$display7 === void 0 ? void 0 : _flightCard$display7.deptTime
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : (_flightCard$display8 = flightCard.display) === null || _flightCard$display8 === void 0 ? void 0 : _flightCard$display8.arrTime
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (flight_card_module_default()).flight_card_action,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (flight_card_module_default()).flight_tail_img,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `/${flightCard === null || flightCard === void 0 ? void 0 : flightCard.operator}.svg`.toLowerCase(),
          alt: flightCard === null || flightCard === void 0 ? void 0 : flightCard.operator
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (flight_card_module_default()).action_airport_code,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : flightCard.origin
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "-"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCard === null || flightCard === void 0 ? void 0 : flightCard.destination
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(flight_card_module_default()).action_cta} ${selectionState ? '.action_cta-selected' : ""}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: e => clickHander(index, e),
          className: `${(flight_card_module_default()).action_cta_button} ${selectionState ? "action_cta_button selected" : ""}`,
          children: t(`${pageName}.card.ctaTitle`)
        })
      })]
    })]
  }, index);
}
;// CONCATENATED MODULE: ./molecules/flight-cards/index.js







function FlightCards(props) {
  const {
    flightCards,
    pageName
  } = props;
  const t = (0,external_next_intl_.useTranslations)('content');
  const {
    0: selection,
    1: setSelection
  } = (0,external_react_.useState)(-1);

  const selectionHandler = id => {
    setSelection(id);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (flight_cards_module_default()).page_title,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [t(`${pageName}.resultsTitle`), " (", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: flightCards === null || flightCards === void 0 ? void 0 : flightCards.length
        }), ")"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (flight_cards_module_default()).search_results,
      children: flightCards && flightCards.map((flightCard, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(FlightCard, {
          pageName: pageName,
          flightCard: flightCard,
          index: index,
          onSelection: selectionHandler,
          selectionState: selection === index
        }, index);
      })
    })]
  });
}
;
;// CONCATENATED MODULE: ./organisms/flight-routes/index.js



function FlightRoutes(props) {
  const {
    routes,
    pageName
  } = props;
  if (!routes) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: !!routes && routes.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(FlightCards, {
      flightCards: routes,
      pageName: pageName
    })
  });
}

/***/ }),

/***/ 579:
/***/ ((module) => {

// Exports
module.exports = {
	"flight_card": "flight-card_flight_card__c3rOG",
	"flight_card_info": "flight-card_flight_card_info__3l10U",
	"flight_airport": "flight-card_flight_airport__2VG75",
	"flight_terminal": "flight-card_flight_terminal__2fu8T",
	"flight_timing_label": "flight-card_flight_timing_label__2RuvG",
	"flight_date": "flight-card_flight_date__2ybTI",
	"flight_time": "flight-card_flight_time__2EDaE",
	"flight_card_action": "flight-card_flight_card_action__FKL8R",
	"flight_tail_img": "flight-card_flight_tail_img__1ImbT",
	"action_airport_code": "flight-card_action_airport_code__1RQBE",
	"action_cta": "flight-card_action_cta__3TscC",
	"selected": "flight-card_selected__2x2h1"
};


/***/ }),

/***/ 97:
/***/ ((module) => {

// Exports
module.exports = {
	"search_results": "flight-cards_search_results__3-XIZ",
	"page_title": "flight-cards_page_title__15zTx"
};


/***/ }),

/***/ 542:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"content":{"common":{"title":"Летайте лучше","nav":{"home":"Дом","manageBooking":"Управление бронированием","myAccount":"Мой аккаунт"},"navFooter":{}},"seo":{"htmlClass":"ek","htmlDir":"rtl","myLanguageType":"englishUTF8","copyright":"© 2021 Airlines. All Rights Reserved.","keywords":"Flight routes","description":"Flight routes shows possible flights scheduled"},"flight-routes-v1":{"section":"Flight Routes","title":"Маршруты полетов","resultsTitle":"результаты поиска","card":{"departureTitle":"Вылет из","arrivalTitle":"Пребытие","ctaTitle":"Выбирать"}}}}');

/***/ }),

/***/ 748:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"content":{"common":{"title":"Fly Better","nav":{"home":"Home","manageBooking":"Manage Booking","myAccount":"My Account"},"navFooter":{}},"seo":{"htmlClass":"ek","htmlDir":"rtl","myLanguageType":"englishUTF8","copyright":"© 2021 Airlines. All Rights Reserved.","keywords":"Flight routes","description":"Flight routes shows possible flights scheduled"},"flight-routes-v1":{"section":"Flight Routes","title":"Flight Routes","resultsTitle":"Search Results","card":{"departureTitle":"Departure","arrivalTitle":"Arrival","ctaTitle":"Select"}}}}');

/***/ }),

/***/ 328:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"content":{"common":{"title":"Fly Better","nav":{"home":"Home","manageBooking":"Manage Booking","myAccount":"My Account"},"navFooter":{}},"seo":{"htmlClass":"ek","htmlDir":"rtl","myLanguageType":"englishUTF8","copyright":"© 2021 Airlines. All Rights Reserved.","keywords":"Flight routes","description":"Flight routes shows possible flights scheduled"},"flight-routes-v1":{"section":"Flight Routes","title":"Flight Routes","resultsTitle":"Search Results","card":{"departureTitle":"Departure","arrivalTitle":"Arrival","ctaTitle":"Select"}}}}');

/***/ }),

/***/ 777:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"content":{"common":{"title":"Летайте лучше","nav":{"home":"Дом","manageBooking":"Управление бронированием","myAccount":"Мой аккаунт"},"navFooter":{}},"seo":{"htmlClass":"ek","htmlDir":"rtl","myLanguageType":"englishUTF8","copyright":"© 2021 Airlines. All Rights Reserved.","keywords":"Flight routes","description":"Flight routes shows possible flights scheduled"},"flight-routes-v1":{"section":"Flight Routes","title":"Маршруты полетов","resultsTitle":"результаты поиска","card":{"departureTitle":"Вылет из","arrivalTitle":"Пребытие","ctaTitle":"Выбирать"}}}}');

/***/ })

};
;