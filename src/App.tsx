import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Att göra</h1>
      <div className="add-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Skriv en todo..."
        />
        <button onClick={addTodo}>Lägg till</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}