"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.Link = exports.Btn = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _style = _interopRequireDefault(require("../style"));

var _reactRouterDom = require("react-router-dom");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var baseStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n  margin: 10px 0;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  border-radius: 12px;\n  padding: 15px;\n  \n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  \n  :hover{\n      color: ", ";\n      background: ", ";\n      border: 1px solid ", ";\n  }\n  :disabled{\n      color: ", ";\n      background: ", ";\n      border: 1px solid ", ";\n  }\n  \n  text-decoration: none;\n  display: ", ";\n  width: ", ";\n  cursor: ", ";\n"])), function (state) {
  return _style["default"].buttons[state.type].text;
}, function (state) {
  return _style["default"].buttons[state.type].background;
}, function (state) {
  return _style["default"].buttons[state.type].border;
}, function (state) {
  return _style["default"].buttons["".concat(state.type, "_inverse")].text;
}, function (state) {
  return _style["default"].buttons["".concat(state.type, "_inverse")].background;
}, function (state) {
  return _style["default"].buttons["".concat(state.type, "_inverse")].border;
}, function (state) {
  return _style["default"].buttons["".concat(state.type, "_disabled")].text;
}, function (state) {
  return _style["default"].buttons["".concat(state.type, "_disabled")].background;
}, function (state) {
  return _style["default"].buttons["".concat(state.type, "_disabled")].border;
}, function (state) {
  return state.display;
}, function (state) {
  return state.display === 'block' ? '100%' : 'initial';
}, function (state) {
  return state.disabled ? '' : 'pointer';
});

var Btn = _styledComponents["default"].button(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["", ""])), baseStyle);

exports.Btn = Btn;
var Link = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["", ""])), baseStyle);
exports.Link = Link;

var A = _styledComponents["default"].a(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["", ""])), baseStyle);

exports.A = A;