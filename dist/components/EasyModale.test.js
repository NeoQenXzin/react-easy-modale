"use strict";

require("core-js/modules/es.promise.js");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _EasyModale = _interopRequireDefault(require("./EasyModale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("EasyModale", () => {
  it("should render with the provided text", () => {
    const text = "Hello, World!";
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EasyModale.default, {
      isOpen: true,
      text: text
    }));
    expect(_react2.screen.getByText(text)).toBeTruthy();
  });
  it("should render without content when isOpen is false", () => {
    const content = "Hello, World!";
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EasyModale.default, {
      isOpen: false,
      content: content
    }));
    expect(_react2.screen.queryByText(content)).toBeNull();
  });
  it("calls closeModal when close button is clicked", () => {
    const closeModal = jest.fn();
    const {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EasyModale.default, {
      isOpen: true,
      text: "Test",
      closeModal: closeModal
    }));
    _react2.fireEvent.click(getByText("X"));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
  it("renders with animated text when animated1 is true", async () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EasyModale.default, {
      text: "Test",
      animated1: true,
      isOpen: true
    }));
    await (0, _react2.waitFor)(() => {
      const textElement = getByTestId("modal-text").querySelector('div[data-text="Test"]');
      expect(textElement).toHaveClass("modale-text-animated");
    });
  });
  it("should apply the provided className to the modal", () => {
    const className = "my-custom-class";
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EasyModale.default, {
      isOpen: true,
      className: className
    }));
    expect(_react2.screen.getByTestId("modal")).toHaveClass(className);
  });
  it("should apply the provided styles to the modal", async () => {
    const styles = {
      color: "red",
      fontSize: "20px"
    };
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EasyModale.default, {
      isOpen: true,
      styles: styles
    }));
    const modal = _react2.screen.getByTestId("modal");
    await (0, _react2.waitFor)(() => {
      expect(modal).toHaveStyleRule("color: ".concat(styles.color));
      expect(modal).toHaveStyleRule("font-size: ".concat(styles.fontSize));
    });
  });
});