import React, { FC } from "react";

import { TodoProps } from "./ITodo";

import "./style.css";

const Todo: FC<TodoProps> = (props) => {
  const {
    todo: { name, status, id },
    onClick,
  } = props;
  const text = status ? <del>{name}</del> : name;
  if (name === "") return <p data-testid={`todo-${id}`}>no text</p>;
  // return <p data-testid={`todo-${id}`}>{text}</p>;

  return (
    <div className="item-container" data-testid={`todo-${id}`}>
      <span data-testid={`text-${id}`}>{text}</span>
      <button data-testid={`btn-${id}`} onClick={() => onClick(id)}>
        Selesai
      </button>
    </div>
  );
  // return (
  //   <div style={{ display: "flex", width: 300, flexDirection: "row" }}>
  //     <p data-testid={`todo-${id}`} style={{ marginRight: 10 }}>
  //       {text}
  //     </p>
  //     <button>update</button>
  //   </div>
  // );
};

export default Todo;
