import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Alejandro");
    expect(h3?.innerHTML).toContain("Ramirez");
  });

  test("render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const tag = screen.getByTestId("first-name-title");
    expect(tag?.innerHTML).toContain("Alejandro");
  });

  //No es buena practica hacer pruebas tan generales a menos que estes seguro que no va a cambiar nunca
  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
