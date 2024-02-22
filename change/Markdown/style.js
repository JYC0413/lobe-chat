import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { createStyles } from 'antd-style';
import { rgba } from 'polished';
export var useStyles = createStyles(function (_ref) {
  var stylish = _ref.stylish,
    token = _ref.token,
    css = _ref.css;
  return {
    image: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      overflow: hidden;\n      width: 100%;\n      height: 100%;\n\n      img {\n        width: 100% !important;\n        height: 100% !important;\n        object-fit: contain;\n      }\n    "]))),
    imageWrapper: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: relative;\n\n      overflow: hidden;\n\n      margin-block: 0 1em;\n\n      background: ", ";\n      border-radius: ", "px;\n      box-shadow: 0 0 0 1px ", ";\n    "])), rgba(token.colorBgLayout, 0.25), token.borderRadius, token.colorFillTertiary),
    markdown: stylish.markdown
  };
});