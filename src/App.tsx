import React, { useState } from "react";

import TodoComponent from "./components/Todo";

import "./App.css";
import { Todo } from "./components/Todo/ITodo";

function App() {
  const [data, setData] = useState([
    { name: "makan", status: true, id: 1 },
    { name: "sarapan", status: true, id: 2 },
    { name: "olah raga", status: false, id: 3 },
  ]);

  const _updateTodo = (id: number): void => {
    const newTodo = data.map((e) => {
      if (e.id === id) {
        e.status = !e.status;
      }
      return e;
    });

    setData(newTodo);
    // console.log({ newTodo });
  };
  // console.log({ data });
  return (
    <div className="App">
      <div className="App-header">
        {data.map((todo: Todo, i: number) => (
          <TodoComponent
            todo={todo}
            key={i}
            onClick={(id) => _updateTodo(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
