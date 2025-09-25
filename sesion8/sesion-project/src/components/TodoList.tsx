import React, { useState } from "react";
import "../App.css";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Write tests" },
    { id: 3, text: "Build awesome apps" },
  ];
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  const handleAddElement = () => {};
  const handleDeleteElement = (idToDelete: number) => {};
  return (
    <div className="todo-container">
      <h2 className="todo-title">My Todo List</h2>
      <div className="todo-input-row">
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="Enter a new task"
          className="todo-input"
        />
        <button onClick={handleAddElement} className="todo-add-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <span
              onClick={() => handleDeleteElement(todo.id)}
              className="todo-trash-icon"
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
