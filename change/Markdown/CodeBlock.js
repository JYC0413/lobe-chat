import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["fullFeatured"];
var _templateObject, _templateObject2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createStyles } from 'antd-style';
import { memo } from 'react';
import Highlighter from "@lobehub/ui/es/Highlighter";
import Snippet from "@lobehub/ui/es/Snippet";
import { FALLBACK_LANG } from "@lobehub/ui/es/hooks/useHighlight";
import { jsx as _jsx } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    :not(:last-child) {\n      margin-block: 1em 1em;\n      margin-inline: 0 0;\n    }\n  "]))),
    highlight: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pre {\n      padding: 12px !important;\n    }\n  "])))
  };
});
var countLines = function countLines(str) {
  var regex = /\n/g;
  var matches = str.match(regex);
  return matches ? matches.length : 1;
};
var Code = /*#__PURE__*/memo(function (_ref2) {
  var fullFeatured = _ref2.fullFeatured,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  if (!rest.children[0]) return;
  var _rest$children$0$prop = rest.children[0].props,
    children = _rest$children$0$prop.children,
    className = _rest$children$0$prop.className;
  if (!children) return;
  var content = Array.isArray(children) ? children[0] : children;
  var lang = (className === null || className === void 0 ? void 0 : className.replace('language-', '')) || FALLBACK_LANG;
  if (countLines(content) === 1 && content.length <= 60) {
    return /*#__PURE__*/_jsx(Snippet, {
      className: styles.container,
      "data-code-type": "highlighter",
      language: lang,
      type: 'block',
      children: content
    });
  }
  return /*#__PURE__*/_jsx(Highlighter, {
    className: cx(styles.container, styles.highlight),
    copyButtonSize: {
      blockSize: 28,
      fontSize: 16
    },
    fullFeatured: fullFeatured,
    language: lang,
    type: "block",
    children: content
  });
});
export var CodeLite = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/_jsx(Code, _objectSpread({}, props));
});
export var CodeFullFeatured = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/_jsx(Code, _objectSpread({
    fullFeatured: true
  }, props));
});
