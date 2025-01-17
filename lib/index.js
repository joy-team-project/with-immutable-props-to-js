"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _react = _interopRequireDefault(require("react"));

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};

var withImmutablePropsToJS = function withImmutablePropsToJS(WrappedComponent) {
  var Wrapper = function Wrapper(props) {
    var forwardedRef = props.forwardedRef,
        rest = _objectWithoutProperties(props, ["forwardedRef"]);

    var propsJS = Object.entries(rest).reduce(function (newProps, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          propKey = _ref2[0],
          propValue = _ref2[1];

      var canConvertToJS = _immutable.Iterable.isIterable(propValue) && typeof propValue.toJS === 'function';
      newProps[propKey] = canConvertToJS ? propValue.toJS() : propValue;
      return newProps;
    }, {});
    return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, propsJS, {
      ref: forwardedRef
    }));
  };

  Wrapper.defaultProps = {
    forwardedRef: null
  };

  var WrapperWithForwardedRef = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  WrapperWithForwardedRef.displayName = "withImmutablePropsToJS(".concat(getDisplayName(WrappedComponent), ")");
  WrapperWithForwardedRef.WrappedComponent = WrappedComponent;
  (0, _hoistNonReactStatics["default"])(WrapperWithForwardedRef, WrappedComponent);
  return WrapperWithForwardedRef;
};

var _default = withImmutablePropsToJS;
exports["default"] = _default;