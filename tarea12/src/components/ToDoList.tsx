import { useReducer, useRef } from "react";

interface todoType {
  id: number;
  text: string;
  completed: boolean;
}

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

function todoReducer(state: todoType[], action: TodoAction): todoType[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

const ToDoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value.trim()) return;

    dispatch({ type: "ADD_TODO", text: inputRef.current.value.trim() });
    inputRef.current.value = "";
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TODO", id });
  };
  return (
    <>
      <h1>To do list</h1>

      <form onSubmit={handleAdd}>
        <input ref={inputRef} type="text" placeholder="Add a new task" />
        <button type="submit">Agregar</button>
      </form>

      <div className="todo-container">
        {todos.map((todo) => (
          <div key={todo.id}>
            <p
              onClick={() => handleToggle(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </p>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              erase
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
