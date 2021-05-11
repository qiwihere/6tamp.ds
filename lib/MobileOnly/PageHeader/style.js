"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _style = _interopRequireDefault(require("../../style"));

var _templateObject;

var PageHeader = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 22px;\n  line-height: 33px;\n  font-weight: 600;\n  color: ", ";\n  margin-bottom: 20px;\n"])), _style["default"].mainText);

var _default = PageHeader;
exports["default"] = _default;