import "./index.css";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  // ^ Making the useState to Lift up to the close parent cell so we can reuse throgh the props

  const [items, setItems] = useState([]);
  function handlerAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handlerDeleteItems(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }
  // !Optional for the checked box but there we used the checked > true or false with the state but here;

  function handlerToggleStrike(id) {
    // ?returns a brand new array which may be a bit time taking process but this is the best practice;
    setItems((items) =>
      items.map((item) => (id === item.id ? { ...item, packed: true } : item))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handlerAddItems} />
      <List
        items={items}
        deleteItem={handlerDeleteItems}
        addToggleStrike={handlerToggleStrike}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form({ addItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);
  function handleEv(e) {
    e.preventDefault();
    if (!description) return;
    const item = {
      description,
      quantity,
      id: new Date().toISOString(),
      packed: false,
    };

    addItems(item);
    setdescription("");
    setquantity(1);
  }
  return (
    <form onSubmit={handleEv} className="add-form">
      <h3>What do you need for your 😜 trip</h3>
      <select onChange={(e) => setquantity(e.target.value)} quantity={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}

function List({ items, deleteItem, addToggleStrike }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            addToggleStrike={addToggleStrike}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, deleteItem, addToggleStrike }) {
  // !Optional in the checkd case
  // const [isPacked, setIsPacked] = useState(item.packed);
  // function handleEv() {
  //   setIsPacked(!isPacked); onChange={handleEv}
  // }

  return (
    <li>
      <input type="checkbox" onChange={() => addToggleStrike(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>Hey every body</em>
    </footer>
  );
}
