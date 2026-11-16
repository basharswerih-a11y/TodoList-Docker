import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const InputRef = useRef();
  const handleAddTodo = () => {
    const text = InputRef.current.value;
    setTodos([...todos, text]);
    InputRef.current.value = "";
  };
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <input ref={InputRef} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
