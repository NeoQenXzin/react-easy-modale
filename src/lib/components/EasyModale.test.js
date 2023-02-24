import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import EasyModale from "./EasyModale";

describe("EasyModale", () => {
  it("should render with the provided text", () => {
    const text = "Hello, World!";
    render(<EasyModale isOpen={true} text={text} />);
    expect(screen.getByText(text)).toBeTruthy();
  });

  it("should render without content when isOpen is false", () => {
    const content = "Hello, World!";
    render(<EasyModale isOpen={false} content={content} />);
    expect(screen.queryByText(content)).toBeNull();
  });

  it("calls closeModal when close button is clicked", () => {
    const closeModal = jest.fn();
    const { getByText } = render(
      <EasyModale isOpen={true} text="Test" closeModal={closeModal} />
    );
    fireEvent.click(getByText("X"));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it("renders with animated text when animated1 is true", async () => {
    const { getByTestId } = render(
      <EasyModale text="Test" animated1 isOpen={true} />
    );
    await waitFor(() => {
      const textElement = getByTestId("modal-text");
      expect(textElement.classList.contains("modale-text-animated")).toBe(true);
    });
  });

  it("should apply the provided styles to the modal", async () => {
    const styles = {
      backgroundColor: "blue",
      border: "5px solid grey",
      borderRadius: "5px",
      padding: "20px",
      width: "200px",
      height: "auto",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
    };
    render(
      <EasyModale
        isOpen={true}
        modalBackgroundColor={styles.backgroundColor}
        modalBorder={styles.border}
        modalBorderRadius={styles.borderRadius}
        modalPadding={styles.padding}
        modalWidth={styles.width}
        modalHeight={styles.height}
        position={styles.position}
        top={styles.top}
        left={styles.left}
        transform={styles.transform}
        zIndex={styles.zIndex}
      />
    );
    const modal = screen.getByTestId("modal");
    await waitFor(() => {
      console.log(modal.style.border);
      expect(modal.style.backgroundColor).toBe(`blue`);
      expect(modal.style.border).toBe(`5px solid grey`);
      expect(modal.style.borderRadius).toBe(`5px`);
      expect(modal.style.padding).toBe(`20px`);
      expect(modal.style.width).toBe(`200px`);
      expect(modal.style.height).toBe(`auto`);
      expect(modal.style.position).toBe(`fixed`);
      expect(modal.style.top).toBe(`50%`);
      expect(modal.style.left).toBe(`50%`);
      expect(modal.style.transform).toBe(`translate(-50%, -50%)`);
      expect(modal.style.zIndex).toBe("9999");
    });
  });

  it("should apply the provided styles to the text modal", async () => {
    const styles = {
      color: "red",
      fontFamily: "sans-serif",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "1.7",
    };
    render(
      <EasyModale
        isOpen={true}
        textColor={styles.color}
        fontFamily={styles.fontFamily}
        fontSize={styles.fontSize}
        fontWeight={styles.fontWeight}
        lineHeight={styles.lineHeight}
      />
    );
    const modalText = screen.getByTestId("modal-text");
    await waitFor(() => {
      expect(modalText.style.color).toBe(`red`);
      expect(modalText.style.fontSize).toBe(`16px`);
      expect(modalText.style.fontWeight).toBe(`600`);
      expect(modalText.style.lineHeight).toBe(`1.7`);
      expect(modalText.style.fontFamily).toBe(`sans-serif`);
    });
  });
});
