import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todo").then(async (res) => {
    const json = await res.json();
    setTodos(json.todo);
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo setTodos={setTodos} todos={todos}></Todo>
    </div>
  );
}

export default App;

// ! this will make the code much slower cause it will send the backend request every sec offen cause of useState Hook
// fetch("http://localhost:3000/todo").then(async (res) => {
//   const json = await res.json();
//   setTodos(json.todo);
// });
