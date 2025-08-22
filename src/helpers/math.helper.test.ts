import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("Add", () => {
  test("should return the sum of two positive numbers", () => {
    // ! 1. Arrange
    const a: number = 2;
    const b: number = 3;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("Subtract", () => {
  test("should return the difference of two positive numbers", () => {
    // ! 1. Arrange
    const a: number = 5;
    const b: number = 3;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("Multiply", () => {
  test("should return the product of two positive numbers", () => {
    // ! 1. Arrange
    const a: number = 5;
    const b: number = 5;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});
