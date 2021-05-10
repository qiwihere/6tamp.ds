"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.Overlay = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loader = _interopRequireDefault(require("./loader.svg"));

var _templateObject, _templateObject2;

var Overlay = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  background: rgba(0,0,0,0.15);\n  \n  align-items: center;\n  justify-content: center;\n"])), function (state) {
  return !state.visible ? 'none' : 'flex';
});

exports.Overlay = Overlay;

var Spinner = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 80px;\n  height: 80px;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n"])), _loader["default"]);

exports.Spinner = Spinner;