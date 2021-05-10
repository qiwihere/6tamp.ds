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
    case 'button':
      return /*#__PURE__*/_react["default"].createElement(_style.Btn, {
        display: display,
        type: type,
        onClick: onClick,
        disabled: disabled
      }, children);

    case 'link':
      return /*#__PURE__*/_react["default"].createElement(_style.Link, {
        display: display,
        type: type,
        disabled: disabled,
        to: href
      }, children);

    case 'a':
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
  href: "string",
  disabled: false
};
var _default = Button;
exports["default"] = _default;
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
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject;

var Global = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  *{\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  body {\n      margin: 0;\n      padding: 0;\n  }    \n"])));
var _default = Global;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = require("./style");

var _react = _interopRequireDefault(require("react"));

var Loader = function Loader(_ref) {
  var visible = _ref.visible;
  return /*#__PURE__*/_react["default"].createElement(_style.Overlay, {
    visible: visible
  }, /*#__PURE__*/_react["default"].createElement(_style.Spinner, null));
};

Loader.defaultProps = {
  visible: false
};
var _default = Loader;
exports["default"] = _default;
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
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("./style"));

var _react = _interopRequireDefault(require("react"));

var MobilePageDescription = function MobilePageDescription(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_style["default"], null, children);
};

var _default = MobilePageDescription;
exports["default"] = _default;
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

var PageDescription = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color: ", ";\n  margin-bottom: 40px;\n"])), _style["default"].secondaryText);

var _default = PageDescription;
exports["default"] = _default;
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

var PageHeader = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 22px;\n  line-height: 33px;\n  font-weight: 500;\n  color: ", ";\n  margin-bottom: 20px;\n"])), _style["default"].mainText);

var _default = PageHeader;
exports["default"] = _default;
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
  return !!state.error ? '10px' : '30px';
}, function (state) {
  return !!state.error ? _style["default"].input.error.placeholder : _style["default"].input.normal.placeholder;
});

exports.Input = Input;

var Container = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ::after{\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 17px;\n    content: \"", "\";\n    margin-bottom: 30px;\n    color: ", "\n  }\n"])), function (state) {
  return state.error;
}, _style["default"].input.error.border);

exports.Container = Container;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Loader", {
  enumerable: true,
  get: function get() {
    return _Loader["default"];
  }
});
Object.defineProperty(exports, "Global", {
  enumerable: true,
  get: function get() {
    return _Global["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return _TextInput["default"];
  }
});
Object.defineProperty(exports, "MobilePageDescription", {
  enumerable: true,
  get: function get() {
    return _PageDescription["default"];
  }
});
Object.defineProperty(exports, "MobilePageHeader", {
  enumerable: true,
  get: function get() {
    return _PageHeader["default"];
  }
});
Object.defineProperty(exports, "AnimatedRoute", {
  enumerable: true,
  get: function get() {
    return _AnimatedRoute["default"];
  }
});

var _Loader = _interopRequireDefault(require("./Loader"));

var _Global = _interopRequireDefault(require("./Global"));

var _Button = _interopRequireDefault(require("./Button"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _PageDescription = _interopRequireDefault(require("./MobileOnly/PageDescription"));

var _PageHeader = _interopRequireDefault(require("./MobileOnly/PageHeader"));

var _AnimatedRoute = _interopRequireDefault(require("./MobileOnly/AnimatedRoute"));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var style = {
  buttons: {
    secondary: {
      text: "#535353",
      background: "#FFFFFF",
      border: "#535353"
    },
    secondary_inverse: {
      text: "#FFFFFF",
      background: "#535353",
      border: "#FFFFFF"
    },
    secondary_disabled: {
      text: "#FFFFFF",
      background: "#D2D2D2",
      border: "#D2D2D2"
    },
    primary: {
      text: "#FFFFFF",
      background: "#A342EF",
      border: "#A342EF"
    },
    primary_inverse: {
      text: "#A342EF",
      background: "#FFFFFF",
      border: "#A342EF"
    },
    primary_disabled: {
      text: "#FFFFFF",
      background: "#D2D2D2",
      border: "#D2D2D2"
    },
    flat: {
      text: "#535353",
      background: "#ffffff",
      border: "#ffffff"
    },
    flat_inverse: {
      text: "#535353",
      background: "#ffffff",
      border: "#ffffff"
    },
    flat_disabled: {
      text: "#898989",
      background: "#ffffff",
      border: "#ffffff"
    }
  },
  input: {
    normal: {
      text: "#535353",
      border: "#B4B4B4",
      placeholder: "#979797"
    },
    error: {
      text: "#535353",
      border: "#D80202",
      placeholder: "#979797"
    }
  },
  mainText: "#535353",
  secondaryText: "#636363"
};
var _default = style;
exports["default"] = _default;
