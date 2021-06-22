import React, { FC } from "react";

import { TodoProps } from "./ITodo";

const Todo: FC<TodoProps> = (props) => {
  const { name, status, id } = props.todo;
  const text = status ? <del>{name}</del> : name;
  if (name === "") return <p data-testid={`todo-${id}`}>no text</p>;
  // return <p data-testid={`todo-${id}`}>{text}</p>;
  return (
    <div style={{ display: "flex", width: 300, flexDirection: "row" }}>
      <p data-testid={`todo-${id}`} style={{ marginRight: 10 }}>
        {text}
      </p>
      <button>update</button>
    </div>
  );
};

export default Todo;
