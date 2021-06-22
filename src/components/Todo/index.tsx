import React, { FC } from "react";

import { TodoProps } from "./ITodo";

import "./style.css";

const Todo: FC<TodoProps> = (props) => {
  const {
    todo: { name, status, id },
    onClick,
  } = props;
  const text = status ? <del>{name}</del> : name;
  if (name === "") return <p>no text</p>;
  // return <p data-testid={`todo-${id}`}>{text}</p>;

  return (
    <div className="item-container" data-testid={`todo-${id}`}>
      <span data-testid={`text-${id}`}>{text}</span>
      <button data-testid={`btn-${id}`} onClick={() => onClick(id)}>
        Selesai
      </button>
    </div>
  );
};

export default Todo;
