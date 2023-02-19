import "./EasyModale.css";
import React, { useState, useEffect } from "react";

export default function EasyModale(props) {
  // Animation texte apparait = animated1
  const [animatedClass, setAnimatedClass] = useState("");
  // Animation texte taper au clavier = animated2
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  // Animation texte defile de gauche a droite = animated3

  useEffect(() => {
    if (props.animated1) {
      setAnimatedClass("modale-text-animated");
    } else if (props.animated3) {
      setAnimatedClass("modale-text-scroll");
    } else {
      setAnimatedClass("");
    }
  }, [props.animated1, props.animated3]);

  useEffect(() => {
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
      setCurrentText((prevText) => {
        const newText = prevText + (text[currentIndex] || "");
        return newText;
      });
      setCurrentIndex((prevIndex) => {
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
  const modaleStyle = {
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
    zIndex: 9999,
    ...props.modaleStyle,
  };

  const textStyle = {
    color: props.textColor,
    fontFamily: props.fontFamily || "sans-serif",
    fontSize: props.fontSize || "16px",
    fontWeight: props.fontWeight || "normal",
    lineHeight: props.lineHeight || "1.5",
    ...props.textStyle,
  };

  return (
    <>
      {props.isOpen && (
        <div className="modale-container">
          <div
            className={`modale-content ${
              props.animated3 ? "modale-text-scroll" : ""
            }`}
            style={modaleStyle}
          >
            <div className="modale-close" onClick={props.closeModal}>
              X
            </div>
            <div
              className={`modale-text ${animatedClass} ${
                isTyping ? "modale-text-typing" : ""
              } `}
              data-text={props.text}
              style={textStyle}
            >
              <span>{props.text}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
