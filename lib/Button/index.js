"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var Button = function Button(_ref) {
  var display = _ref.display,
      type = _ref.type,
      tag = _ref.tag,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target,
      disabled = _ref.disabled,
      children = _ref.children;

  switch (tag) {
    case "button":
      return /*#__PURE__*/_react["default"].createElement(_style.Btn, {
        display: display,
        type: type,
        onClick: onClick,
        disabled: disabled
      }, children);

    case "link":
      return /*#__PURE__*/_react["default"].createElement(_style.Link, {
        display: display,
        type: type,
        disabled: disabled,
        to: href
      }, children);

    case "a":
      return /*#__PURE__*/_react["default"].createElement(_style.A, {
        display: display,
        type: type,
        disabled: disabled,
        href: href,
        target: target
      }, children);
  }
};

Button.defaultProps = {
  display: "inline",
  type: "primary",
  tag: "button",
  disabled: false
};
var _default = Button;
exports["default"] = _default;