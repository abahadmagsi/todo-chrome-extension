import React, { useContext } from "react";
import { todoContext } from "../App";

function TodoBox({ item, index }) {
  const todoData = useContext(todoContext);
  console.log(todoData);

  return (
    <div>
      <h2>{item}</h2>
      <button onClick={todoData.deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoBox;
