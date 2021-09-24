"use strict";
(() => {
var exports = {};
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./pages/api/routes/flight_schedule.json
const flight_schedule_namespaceObject = JSON.parse('{"data":{"flightRouteResponse":{"routes":[{"operator":"EK","origin":"DXB","destination":"LHR","deptDate":"2021-09-23T00:00:00Z","deptTime":"0230","arrDate":"2021-09-23T00:00:00Z","arrTime":"0705","totalBlockTime":"7.35","stopCounts":0,"display":{"origin":"Dubai (DXB)","destination":"London Heathrow (LHR)","departureTerminal":"Terminal 3","arrivalTerminal":"Terminal 4","deptDate":"2021-09-23","deptTime":"02:30","arrDate":"2021-09-23","arrTime":"07:05"},"legs":{"flightDate":"2021-09-23T00:00:00Z","flightNo":"7","deptTime":"0230","deptSTN":"DXB","arrTime":"0705","arrSTN":"LHR","legseqno":"1","blockTime":"07:35","flightAircraftType":"388","confg":"FJY","originDate":"2021-09-23T00:00:00Z","flightSEQ":"1","totalHours":"7.35","connseq":"1888482","codeshare":"","localACFTType":"388Y","flightType":"EK"}},{"operator":"QF","origin":"DXB","destination":"LHR","deptDate":"2021-09-23T00:00:00Z","deptTime":"0745","arrDate":"2021-09-23T00:00:00Z","arrTime":"1225","totalBlockTime":"7.40","stopCounts":0,"display":{"origin":"Dubai (DXB)","destination":"London Heathrow (LHR)","departureTerminal":"Terminal 3","arrivalTerminal":"Terminal 4","deptDate":"2021-09-23","deptTime":"02:30","arrDate":"2021-09-23","arrTime":"07:05"},"legs":{"flightDate":"2021-09-23T00:00:00Z","flightNo":"1","deptTime":"0745","deptSTN":"DXB","arrTime":"1225","arrSTN":"LHR","legseqno":"1","blockTime":"07:40","flightAircraftType":"388","confg":"FJY","originDate":"2021-09-23T00:00:00Z","flightSEQ":"1","totalHours":"7.40","connseq":"1888413","codeshare":"","localACFTType":"388Q","flightType":"EK"}},{"operator":"EK","origin":"DXB","destination":"LHR","deptDate":"2021-09-23T00:00:00Z","deptTime":"1415","arrDate":"2021-09-23T00:00:00Z","arrTime":"1840","totalBlockTime":"7.25","stopCounts":0,"display":{"origin":"Dubai (DXB)","destination":"London Heathrow (LHR)","departureTerminal":"Terminal 3","arrivalTerminal":"Terminal 4","deptDate":"2021-09-23","deptTime":"02:30","arrDate":"2021-09-23","arrTime":"07:05"},"legs":{"flightDate":"2021-09-23T00:00:00Z","flightNo":"3","deptTime":"1415","deptSTN":"DXB","arrTime":"1840","arrSTN":"LHR","legseqno":"1","blockTime":"07:25","flightAircraftType":"388","confg":"FJY","originDate":"2021-09-23T00:00:00Z","flightSEQ":"1","totalHours":"7.25","connseq":"1888444","codeshare":"","localACFTType":"388Q","flightType":"EK"}},{"operator":"FZ","origin":"DXB","destination":"LHR","deptDate":"2021-09-23T00:00:00Z","deptTime":"1545","arrDate":"2021-09-23T00:00:00Z","arrTime":"2015","totalBlockTime":"7.30","stopCounts":0,"display":{"origin":"Dubai (DXB)","destination":"London Heathrow (LHR)","departureTerminal":"Terminal 3","arrivalTerminal":"Terminal 4","deptDate":"2021-09-23","deptTime":"02:30","arrDate":"2021-09-23","arrTime":"07:05"},"legs":{"flightDate":"2021-09-23T00:00:00Z","flightNo":"5","deptTime":"1545","deptSTN":"DXB","arrTime":"2015","arrSTN":"LHR","legseqno":"1","blockTime":"07:30","flightAircraftType":"77W","confg":"FJY","originDate":"2021-09-23T00:00:00Z","flightSEQ":"1","totalHours":"7.30","connseq":"1888466","codeshare":"","localACFTType":"77WP","flightType":"EK"}}]}},"metaLinks":[{"href":"http://wsv2.emirates.com/service/rest/v1/flight-schedules/route/DXB/LHR/2021-09-23","rel":"self","method":"GET"}]}');
;// CONCATENATED MODULE: ./pages/api/routes/flight-routes.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
  res.status(200).json(flight_schedule_namespaceObject);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(698));
module.exports = __webpack_exports__;

})();