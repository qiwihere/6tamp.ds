"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = require("./style");

var _react = _interopRequireDefault(require("react"));

var TextInput = function TextInput(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement(_style.Container, {
    error: error
  }, /*#__PURE__*/_react["default"].createElement(_style.Input, {
    error: error,
    placeholder: placeholder,
    onChange: onChange
  }));
};

TextInput.defaultProps = {
  error: "",
  placeholder: ""
};
var _default = TextInput;
exports["default"] = _default;