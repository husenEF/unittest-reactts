import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from ".";

afterEach(() => {
  cleanup();
});

test("render <Button>Title</Button>", () => {
  render(<Button title="Refactory" />);
  expect(screen.getByTestId("btn-loading")).toHaveTextContent("Refactory");
});

test("render <Button title='Refactory' loading/>", () => {
  render(<Button title="Refactory" loading />);
  expect(screen.getByTestId("btn-loading")).toHaveTextContent("loading...");
  expect(screen.getByTestId("btn-loading")).toHaveProperty("disabled");
});

test("render <Button title='Refactory' isError />", () => {
  render(<Button title="Refactory" isError />);
  // render()
  expect(screen.getByText("Error message")).toBeTruthy();

  const tree = renderer.create(<Button title="Refactory" loading isError />);
  expect(tree).toMatchSnapshot();

  // expect(screen.getByTestId("btn-loading")).toHaveTextContent("Refactory");
});
