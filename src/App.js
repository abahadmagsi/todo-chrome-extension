import React, { useState, createContext } from "react";
import "./App.css";
import TodoBox from "./components/TodoBox";

export const todoContext = createContext();

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handelChangeTodo = () => {
    todos.push(todo);
    setTodos([...todos]);
    setTodo("");
  };

  const deleteTodo = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  };
  return (
    <todoContext.Provider value={{ todo, todos, deleteTodo }}>
      <div className="App">
        <div className="input">
          <input
            placeholder="Enter your todo."
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={() => handelChangeTodo()}>Add</button>
        </div>

        <div className="todos">
          {todos.map((item, index) => (
            <TodoBox item={item} inde={index} key={index} />
          ))}
        </div>
      </div>
    </todoContext.Provider>
  );
};

export default App;
