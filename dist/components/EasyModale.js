"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EasyModale;
var _react = _interopRequireDefault(require("react"));
require("./EasyModale.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function EasyModale(props) {
  const closeModal = e => {
    console.log("modal");
    console.log(e);
    let modal = document.querySelector(".modale-container");
    modal.classList.add("hide");
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-close",
    onClick: closeModal
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-text"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.text))));
}