"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = require("./style");

var _react = _interopRequireDefault(require("react"));

var Loader = function Loader(_ref) {
  var visible = _ref.visible;
  return /*#__PURE__*/_react["default"].createElement(_style.Overlay, {
    visible: visible
  }, /*#__PURE__*/_react["default"].createElement(_style.Spinner, null));
};

Loader.defaultProps = {
  visible: false
};
var _default = Loader;
exports["default"] = _default;