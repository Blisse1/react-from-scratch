"use strict";

var _client = require("react-dom/client");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = (0, _client.createRoot)(document.getElementById('app'));
root.render( /*#__PURE__*/_react.default.createElement("h1", null, "Hello, world"));