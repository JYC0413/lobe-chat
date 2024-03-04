import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import {Input as AntInput} from 'antd';
import {forwardRef} from 'react';
import {useStyles} from "./style";
import {jsx as _jsx} from "react/jsx-runtime";

var _excluded = ["className", "type"],
  _excluded2 = ["className", "type", "resize", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

export var Input = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'ghost' : _ref$type,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles({
      type: type
    }),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  return /*#__PURE__*/_jsx(AntInput, _objectSpread({
    bordered: type !== 'pure',
    className: cx(styles.input, className),
    ref: ref
  }, rest));
});
export var TextArea = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? 'ghost' : _ref2$type,
    _ref2$resize = _ref2.resize,
    resize = _ref2$resize === void 0 ? true : _ref2$resize,
    style = _ref2.style,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var _useStyles2 = useStyles({
      type: type
    }),
    styles = _useStyles2.styles,
    cx = _useStyles2.cx;
  return /*#__PURE__*/_jsx(AntInput.TextArea, _objectSpread({
    bordered: type !== 'pure',
    className: cx(styles.textarea, className),
    ref: ref,
    style: resize ? style : _objectSpread({
      resize: 'none'
    }, style)
  }, rest));
});
