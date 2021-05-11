"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.Container = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _style = _interopRequireDefault(require("../style"));

var _templateObject, _templateObject2;

var Input = _styledComponents["default"].input(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: 400;\n  color: ", ";\n  padding: 14px 10px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: ", ";\n  outline: none;\n  \n  ::placeholder{\n    color: ", ";\n  }\n"])), function (state) {
  return !!state.error ? _style["default"].input.error.text : _style["default"].input.normal.text;
}, function (state) {
  return !!state.error ? _style["default"].input.error.border : _style["default"].input.normal.border;
}, function (state) {
  return !!state.error ? '0px' : '30px';
}, function (state) {
  return !!state.error ? _style["default"].input.error.placeholder : _style["default"].input.normal.placeholder;
});

exports.Input = Input;

var Container = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ::after{\n    display: ", ";\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 17px;\n    content: \"", "\";\n    margin-top: 10px;\n    margin-bottom: 30px;\n    color: ", "\n  }\n"])), function (state) {
  return !!state.error ? 'block' : 'none';
}, function (state) {
  return state.error;
}, _style["default"].input.error.border);

exports.Container = Container;