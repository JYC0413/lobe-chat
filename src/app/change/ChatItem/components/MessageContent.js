import {useResponsive} from 'antd-style';
import {memo} from 'react';
import {Flexbox} from 'react-layout-kit';
import EditableMessage from "../../EditableMessage";
import {useStyles} from "../style";
import {jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";

var MessageContent = /*#__PURE__*/memo(function (_ref) {
  var editing = _ref.editing,
    onChange = _ref.onChange,
    onEditingChange = _ref.onEditingChange,
    text = _ref.text,
    message = _ref.message,
    placement = _ref.placement,
    messageExtra = _ref.messageExtra,
    renderMessage = _ref.renderMessage,
    type = _ref.type,
    primary = _ref.primary,
    onDoubleClick = _ref.onDoubleClick;
  var _useStyles = useStyles({
      editing: editing,
      placement: placement,
      primary: primary,
      type: type
    }),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var content = /*#__PURE__*/_jsx(EditableMessage, {
    style:{color: placement === 'left' ? 'rgb(140,140,140)' : 'white'},
    classNames: {
      input: styles.editingInput
    },
    editButtonSize: 'small',
    editing: editing,
    fullFeaturedCodeBlock: true,
    onChange: onChange,
    onEditingChange: onEditingChange,
    openModal: mobile ? editing : undefined,
    text: text,
    value: message ? String(message).trim() : ''
  });
  var messageContent = renderMessage ? renderMessage(content) : content;
  return /*#__PURE__*/_jsxs(Flexbox, {
    className: cx(styles.message, editing && styles.editingContainer),
    style:{backgroundColor:placement === 'left' ? 'white' : '#247678',border: placement === 'left' ? '1px solid rgb(180,180,180)' : 'flex-end'},
    onDoubleClick: onDoubleClick,
    children: [messageContent, messageExtra && !editing ? /*#__PURE__*/_jsx("div", {
      // className: styles.messageExtra,
      style:{color: placement === 'left' ? 'rgb(140,140,140)' : 'white'},
      children: messageExtra
    }) : null]
  });
});
export default MessageContent;
