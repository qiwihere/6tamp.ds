"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = require("./style");

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _react = _interopRequireDefault(require("react"));

var TextInput = function TextInput(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      name = _ref.name,
      mask = _ref.mask,
      type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement(_style.Container, {
    error: error
  }, mask ? /*#__PURE__*/_react["default"].createElement(_reactInputMask["default"], {
    name: name,
    error: error,
    placeholder: placeholder,
    mask: mask,
    onChange: onChange,
    type: type
  }, function (inputProps) {
    return /*#__PURE__*/_react["default"].createElement(_style.Input, inputProps);
  }) : /*#__PURE__*/_react["default"].createElement(_style.Input, {
    name: name,
    error: error,
    placeholder: placeholder,
    onChange: onChange,
    type: type
  }));
};

TextInput.defaultProps = {
  error: "",
  placeholder: "",
  mask: "",
  type: "text"
};
var _default = TextInput;
exports["default"] = _default;