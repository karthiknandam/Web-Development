/* eslint-disable react/prop-types */

import { useState } from "react";

function App() {
  const [todoArry, setTodoArray] = useState(["Hello", "Hi"]);

  function removeTodo(index) {
    setTodoArray(todoArry.filter((_, i) => i != index));
  }
  return (
    <div>
      <InputBox todoArry={todoArry} setTodoArray={setTodoArray} />
      <RemoveTodo todoArry={todoArry} removeTodo={removeTodo} />
    </div>
  );
}
function RemoveTodo({ todoArry, removeTodo }) {
  return (
    <div>
      {todoArry.map((todo, index) => (
        <div key={index}>
          <span>{todo}</span>
          <button onClick={() => removeTodo(index)}> ❌</button>
        </div>
      ))}
    </div>
  );
}

function InputBox({ todoArry, setTodoArray }) {
  const [inputVal, setInputVal] = useState("");
  function handlerFn(event) {
    setInputVal(event.target.value);
  }
  function setArray() {
    setTodoArray([...todoArry, inputVal]);
    console.log(...todoArry, inputVal);
    setInputVal("");
  }
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={handlerFn}
        placeholder="Please enter your todo"
      />
      <button onClick={setArray}>Enter</button>
    </div>
  );
}
export default App;
