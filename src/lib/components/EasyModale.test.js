import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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

  it("renders with animated text when animated1 is true", () => {
    const { getByTestId } = render(<EasyModale text="Test" animated1 />);
    const textElement = getByTestId("modal-text").parentElement;
    expect(textElement).toHaveClass("modale-text-animated");
  });
  it("should apply the provided className to the modal", () => {
    const className = "my-custom-class";
    render(<EasyModale isOpen={true} className={className} />);
    expect(screen.getByTestId("modal")).toHaveClass(className);
  });

  it("should apply the provided styles to the modal", async () => {
    const styles = { color: "red", fontSize: "20px" };
    render(<EasyModale isOpen={true} styles={styles} />);
    const modal = screen.getByTestId("modal");
    await waitFor(() => {
      expect(modal).toHaveStyleRule(`color: ${styles.color}`);
      expect(modal).toHaveStyleRule(`font-size: ${styles.fontSize}`);
    });
  });
});
