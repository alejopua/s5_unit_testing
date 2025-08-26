import { render, screen } from "@testing-library/react";
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
});
