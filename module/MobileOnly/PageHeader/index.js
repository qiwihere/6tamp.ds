"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("./style"));

var _react = _interopRequireDefault(require("react"));

var MobilePageHeader = function MobilePageHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_style["default"], null, children);
};

var _default = MobilePageHeader;
exports["default"] = _default;