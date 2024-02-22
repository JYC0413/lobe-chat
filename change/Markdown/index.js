import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import {Collapse, Divider, Typography} from 'antd';
import {memo} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import Image from "@lobehub/ui/es/Image";
import ImageGallery from "@lobehub/ui/es/Image/ImageGallery";
import {CodeFullFeatured, CodeLite} from "./CodeBlock";
import {useStyles} from "./style";
import {jsx as _jsx} from "react/jsx-runtime";

var _excluded = ["children", "className", "style", "fullFeaturedCodeBlock", "onDoubleClick", "enableImageGallery", "componentProps"];

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

var MemoAlink = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/_jsx(Typography.Link, _objectSpread({
    rel: "noopener noreferrer",
    target: "_blank"
  }, props));
});
var MemoDetails = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/_jsx(Collapse, _objectSpread({}, props));
});
var MemoHr = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/_jsx(Divider, _objectSpread(_objectSpread({}, props), {}, {
    style: _objectSpread({
      marginBottom: '1em',
      marginTop: 0
    }, props === null || props === void 0 ? void 0 : props.style)
  }));
});
var MemoImage = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/_jsx(Image, _objectSpread({}, props));
});
var Markdown = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    fullFeaturedCodeBlock = _ref.fullFeaturedCodeBlock,
    onDoubleClick = _ref.onDoubleClick,
    _ref$enableImageGalle = _ref.enableImageGallery,
    enableImageGallery = _ref$enableImageGalle === void 0 ? true : _ref$enableImageGalle,
    componentProps = _ref.componentProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var components = {
    a: function a(props) {
      return /*#__PURE__*/_jsx(MemoAlink, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.a));
    },
    details: function details(props) {
      return /*#__PURE__*/_jsx(MemoDetails, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.details));
    },
    hr: function hr(props) {
      return /*#__PURE__*/_jsx(MemoHr, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.hr));
    },
    img: enableImageGallery ? function (props) {
      return /*#__PURE__*/_jsx(MemoImage, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.img));
    } : undefined,
    pre: function pre(props) {
      return fullFeaturedCodeBlock ? /*#__PURE__*/_jsx(CodeFullFeatured, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.pre)) : /*#__PURE__*/_jsx(CodeLite, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.pre));
    }
  };
  return /*#__PURE__*/_jsx(Typography, {
    "data-code-type": "markdown",
    onDoubleClick: onDoubleClick,
    style: {...style,color: "blue"},
    children: /*#__PURE__*/_jsx(ImageGallery, {
      enable: enableImageGallery,
      style: {color: "black"},
      children: /*#__PURE__*/_jsx(ErrorBoundary, {
        fallback: /*#__PURE__*/_jsx(ReactMarkdown, _objectSpread(_objectSpread({
          className: styles.markdown,
          style: {color: "black"},
          components: components,
          remarkPlugins: [remarkGfm]
        }, rest), {}, {
          children: children
        })),
        children: /*#__PURE__*/_jsx(ReactMarkdown, _objectSpread(_objectSpread({
          style: {color: "black"},
          className: styles.markdown,
          components: components,
          rehypePlugins: [rehypeKatex],
          remarkPlugins: [remarkGfm, remarkMath]
        }, rest), {}, {
          children: children
        }))
      })
    })
  });
});
export default Markdown;
