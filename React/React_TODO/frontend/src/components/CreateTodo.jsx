import { useState } from "react";

export function CreateTodo() {
  const [titleVal, setTitleVal] = useState("");
  const [descVal, setDescVal] = useState("");
  async function AddTodos() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: titleVal,
        description: descVal,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  return (
    <div>
      <input
        style={{
          fontSize: 18,
          padding: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitleVal(e.target.value);
        }}
      />{" "}
      <br />
      <input
        style={{
          fontSize: 18,
          padding: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
        type="text"
        placeholder="Desciption"
        onChange={(e) => {
          setDescVal(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={AddTodos}>Submit</button>
    </div>
  );
}
