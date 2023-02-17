import "./EasyModale.css";
import React, { useState, useEffect } from "react";

export default function EasyModale(props) {
  // Animation texte defile de gauche a droite
  // Animation texte apparait
  const [animatedClass, setAnimatedClass] = useState("");
  // Animation texte taper au clavier
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // useEffect(() => {
  //   if (props.animated1) {
  //     setAnimatedClass("modale-text-animated");
  //   }
  // }, [props.animated1]);

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

  return (
    <>
      {props.isOpen && (
        <div className="modale-container">
          <div
            className={`modale-content ${
              props.animated3 ? "modale-text-scroll" : ""
            }`}
          >
            <div className="modale-close" onClick={props.closeModal}>
              X
            </div>
            <div
              className={`modale-text ${animatedClass} ${
                isTyping ? "modale-text-typing" : ""
              } `}
              data-text={props.text}
            >
              <span>{currentText}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
