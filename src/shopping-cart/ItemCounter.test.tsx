import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const quantity = 3;
    const name = "Test Item";
    render(<ItemCounter name={name} quantity={quantity} />);

    screen.debug();

    const quantityElement = screen.getByTestId("item-quantity");

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
    expect(quantityElement?.innerHTML).toContain(3);
  });

  test("should increase count when +1 button is pressed ", () => {
    render(<ItemCounter name={"Test Item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");
    const quantityElement = screen.getByTestId("item-quantity");

    fireEvent.click(buttonAdd);
    expect(quantityElement?.innerHTML).toContain(2);
  });

  test("should not decrease count when -1 button is pressed and counter is equal 1", () => {
    render(<ItemCounter name={"Test Item"} quantity={1} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    const quantityElement = screen.getByTestId("item-quantity");

    fireEvent.click(buttonSubtract);
    expect(quantityElement?.innerHTML).toContain(1);
  });

  test("should style color of name parameter to be red whe count is equal 1", () => {
    const name = "Test Item";
    render(<ItemCounter name={name} quantity={1} />);

    const nameElement = screen.getByTestId("item-name");

    expect(nameElement?.style.color).toBe("red");
  });
});
