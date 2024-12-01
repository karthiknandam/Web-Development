function TodoCreate({ setTodos, todo }) {
  const { title, description, completed, _id } = todo;
  async function updateBtn(_ider) {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: _ider,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch("http://localhost:3000/todo").then(async (res) => {
      const json = await res.json();
      setTodos(json.todo);
    });
  }
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <button id={_id} onClick={() => updateBtn(`${_id}`)}>
        {completed ? "Completed" : "Mark as Done"}
      </button>
    </div>
  );
}

export function Todo({ setTodos, todos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoCreate setTodos={setTodos} key={index} todo={todo} />
      ))}
    </div>
  );
}
