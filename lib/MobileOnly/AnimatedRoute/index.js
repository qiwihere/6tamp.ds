"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactTransitionGroup = require("react-transition-group");

require("./style.css");

var AnimatedRoute = function AnimatedRoute(_ref) {
  var children = _ref.children,
      path = _ref.path;
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: path
  }, function (_ref2) {
    var match = _ref2.match;
    return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
      "in": match !== null,
      timeout: 300,
      classNames: "page",
      unmountOnExit: true
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "page"
    }, children));
  });
};

var _default = AnimatedRoute;
exports["default"] = _default;