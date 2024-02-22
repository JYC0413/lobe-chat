import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Alert from "@lobehub/ui/es/Alert";
import { useStyles } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
var ErrorContent = /*#__PURE__*/memo(function (_ref) {
  var message = _ref.message,
    error = _ref.error,
    placement = _ref.placement;
  var _useStyles = useStyles({
      placement: placement
    }),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx(Flexbox, {
    className: styles.errorContainer,
    children: /*#__PURE__*/_jsx(Alert, _objectSpread({
      closable: false,
      extra: message,
      showIcon: true,
      type: 'error'
    }, error))
  });
});
export default ErrorContent;
