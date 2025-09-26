import React, { useState, useEffect } from "react";
import "../App.css";

type Todo = {
  id: number;
  text: string;
};
export const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Write tests" },
    { id: 3, text: "Build awesome apps" },
  ]);






  useEffect(() => {
    const dataTodos = localStorage.getItem("todo");
    
    if (dataTodos) {
    const todosFromLocalStorage = JSON.parse(dataTodos);
    console.log(todosFromLocalStorage)
    }
    
  }, []);


  useEffect(() => {
    const todosStringify = JSON.stringify(todos);
    localStorage.setItem("todo", todosStringify);
  }, [todos])


  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleAddElement = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
    };

    const newTodos: Todo[] = [...todos, newTodo];
    setTodos(newTodos);
    setInputValue("");
  };


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

