import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import {createStyles} from 'antd-style';
import {memo} from 'react';
import useControlledState from 'use-merge-value';
import Markdown from "../Markdown";
import MessageInput from "@lobehub/ui/es/MessageInput";
import MessageModal from "@lobehub/ui/es/MessageModal";
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}

function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

var useStyles = createStyles(function (_ref) {
  var stylish = _ref.stylish;
  return {
    markdown: stylish.markdownInChat
  };
});
var EditableMessage = /*#__PURE__*/memo(function (_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    _ref2$classNames = _ref2.classNames,
    classNames = _ref2$classNames === void 0 ? {} : _ref2$classNames,
    onEditingChange = _ref2.onEditingChange,
    editing = _ref2.editing,
    openModal = _ref2.openModal,
    onOpenChange = _ref2.onOpenChange,
    placeholder = _ref2.placeholder,
    _ref2$showEditWhenEmp = _ref2.showEditWhenEmpty,
    showEditWhenEmpty = _ref2$showEditWhenEmp === void 0 ? false : _ref2$showEditWhenEmp,
    stylesProps = _ref2.styles,
    height = _ref2.height,
    inputType = _ref2.inputType,
    editButtonSize = _ref2.editButtonSize,
    text = _ref2.text,
    fullFeaturedCodeBlock = _ref2.fullFeaturedCodeBlock,
    model = _ref2.model;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var _useControlledState = useControlledState(false, {
      onChange: onEditingChange,
      value: editing
    }),
    _useControlledState2 = _slicedToArray(_useControlledState, 2),
    isEdit = _useControlledState2[0],
    setTyping = _useControlledState2[1];
  var _useControlledState3 = useControlledState(false, {
      onChange: onOpenChange,
      value: openModal
    }),
    _useControlledState4 = _slicedToArray(_useControlledState3, 2),
    expand = _useControlledState4[0],
    setExpand = _useControlledState4[1];
  var isAutoSize = height === 'auto';
  var input = /*#__PURE__*/_jsx(MessageInput, {
    className: classNames === null || classNames === void 0 ? void 0 : classNames.input,
    classNames: {
      textarea: classNames === null || classNames === void 0 ? void 0 : classNames.textarea
    },
    defaultValue: value,
    editButtonSize: editButtonSize,
    height: height,
    onCancel: function onCancel() {
      return setTyping(false);
    },
    onConfirm: function onConfirm(text) {
      onChange === null || onChange === void 0 || onChange(text);
      setTyping(false);
    },
    placeholder: placeholder,
    style: stylesProps === null || stylesProps === void 0 ? void 0 : stylesProps.input,
    text: text,
    textareaClassname: classNames === null || classNames === void 0 ? void 0 : classNames.input,
    type: inputType
  });
  if (!value && showEditWhenEmpty) return input;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [!expand && isEdit ? input : /*#__PURE__*/_jsx(Markdown, {
      className: cx(styles.markdown, classNames === null || classNames === void 0 ? void 0 : classNames.markdown),
      fullFeaturedCodeBlock: fullFeaturedCodeBlock,
      style: _objectSpread({
        height: isAutoSize ? 'unset' : height,
        overflowX: 'hidden',
        overflowY: 'auto'
      }, stylesProps === null || stylesProps === void 0 ? void 0 : stylesProps.markdown),
      children: value || placeholder || ''
    }), expand && /*#__PURE__*/_jsx(MessageModal, {
      editing: isEdit,
      extra: model === null || model === void 0 ? void 0 : model.extra,
      footer: model === null || model === void 0 ? void 0 : model.footer,
      height: height,
      onChange: onChange,
      onEditingChange: setTyping,
      onOpenChange: function onOpenChange(e) {
        setExpand(e);
        setTyping(false);
      },
      open: expand,
      placeholder: placeholder,
      text: text,
      value: value
    })]
  });
});
export default EditableMessage;
