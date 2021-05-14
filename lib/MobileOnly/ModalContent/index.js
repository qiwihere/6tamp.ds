"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style"));

var MobileModalContent = function MobileModalContent(_ref) {
  var height = _ref.height,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_style["default"], {
    height: height
  }, /*#__PURE__*/_react["default"].createElement("div", null, children));
};

MobileModalContent.defaultProps = {
  height: "100px"
};
var _default = MobileModalContent;
exports["default"] = _default;