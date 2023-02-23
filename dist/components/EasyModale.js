"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EasyModale;
require("core-js/modules/web.dom-collections.iterator.js");
require("./EasyModale.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function EasyModale(props) {
  // Animation texte apparait = animated1
  const [animatedClass, setAnimatedClass] = (0, _react.useState)("");
  // Animation texte taper au clavier = animated2
  const [currentText, setCurrentText] = (0, _react.useState)("");
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);
  const [isTyping, setIsTyping] = (0, _react.useState)(false);
  // Animation texte defile de gauche a droite = animated3

  (0, _react.useEffect)(() => {
    if (props.animated1) {
      setAnimatedClass("modale-text-animated");
    } else if (props.animated3) {
      setAnimatedClass("modale-text-scroll");
    } else {
      setAnimatedClass("");
    }
  }, [props.animated1, props.animated3]);
  (0, _react.useEffect)(() => {
    if (props.isOpen && props.animated2) {
      setCurrentText("");
      setCurrentIndex(-1);
      setIsTyping(false);
      startTyping();
    } else {
      setCurrentText(props.text);
      setIsTyping(false);
    }
  }, [props.isOpen, props.animated2, props.text]);

  // For animated2
  const startTyping = () => {
    setIsTyping(true);
    const text = props.text || "";
    const typingSpeed = props.typingSpeed || 50; // in milliseconds

    let currentIndex = -1;
    const typingInterval = setInterval(() => {
      setCurrentText(prevText => {
        const newText = prevText + (text[currentIndex] || "");
        return newText;
      });
      setCurrentIndex(prevIndex => {
        currentIndex = prevIndex + 1;
        return currentIndex;
      });
      if (currentIndex >= text.length) {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  };

  // CustomStyle
  const modaleStyle = _objectSpread({
    backgroundColor: props.modalBackgroundColor,
    border: props.modalBorder || "none",
    borderRadius: props.modalBorderRadius || "5px",
    padding: props.modalPadding || "20px",
    width: props.modalWidth,
    height: props.modalHeight || "auto",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999
  }, props.modaleStyle);
  const textStyle = _objectSpread({
    color: props.textColor,
    fontFamily: props.fontFamily || "sans-serif",
    fontSize: props.fontSize || "16px",
    fontWeight: props.fontWeight || "normal",
    lineHeight: props.lineHeight || "1.5"
  }, props.textStyle);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-content ".concat(props.animated3 ? "modale-text-scroll" : ""),
    style: modaleStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-close",
    onClick: props.closeModal
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-text ".concat(animatedClass, " ").concat(isTyping ? "modale-text-typing" : "", " "),
    "data-text": props.text,
    style: textStyle
  }, /*#__PURE__*/_react.default.createElement("span", null, props.text)))));
}