import React, { useState } from "react";

import Todo from "./components/Todo";

import "./App.css";

function App() {
  const todos = [
    { name: "", status: true, id: 1 },
    { name: "sarapan", status: true, id: 2 },
    { name: "olah raga", status: false, id: 3 },
  ];

  // const [data,setData] = useState<[ItO]

  return (
    <div className="App">
      <div className="App-header">
        {todos.map((todo, i) => (
          <Todo todo={todo} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
