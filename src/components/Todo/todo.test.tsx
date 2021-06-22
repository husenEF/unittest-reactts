import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// import renderer from 'react-test-renderer';
import renderer from "react-test-renderer";

import Todo from "./index";

afterEach(cleanup);

test("render Todo completed", () => {
  const todo = { name: "makan", status: true, id: 1 };

  render(<Todo todo={todo} onClick={(id) => {}} />);
  const elementTodo = screen.getByTestId("todo-1");
  // console.log({ elementTodo });
  expect(elementTodo).toHaveTextContent("makan");
  expect(elementTodo).toContainHTML("del");
  // expect(true).toBe(true);
});

test("render Todo un-completed", () => {
  const todo = { name: "olah raga", status: false, id: 2 };

  render(<Todo todo={todo} onClick={(id) => {}} />);
  const elementTodo = screen.getByTestId("todo-2");
  // console.log({ elementTodo });
  expect(elementTodo).toHaveTextContent("olah raga");
  expect(elementTodo).not.toContainHTML("del");
  // expect(true).toBe(true);
});

test("snapshot Todo", () => {
  const todo = { name: "olah raga", status: true, id: 3 };

  const treeElement = renderer
    .create(<Todo todo={todo} onClick={(id) => {}} />)
    .toJSON();
  expect(treeElement).toMatchSnapshot();
});

test("call onclick btn todo", () => {
  const handleClick = jest.fn();
  const todo = { name: "makan", status: true, id: 1 };

  render(<Todo todo={todo} onClick={handleClick} />);
  fireEvent.click(screen.getByTestId("btn-1"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
