import Form from "./Form";
import Logo from "./Logo";
import List from "./List";
import Stats from "./Stats";
import "./index.css";
import { useEffect, useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  // ^ Making the useState to Lift up to the close parent cell so we can reuse throgh the props

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("item");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  function handlerAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Store the data to the localeStorage;

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  function handlerDeleteItems(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }
  // !Optional for the checked box but there we used the checked > true or false with the state but here;

  function handlerToggleStrike(id) {
    // ?returns a brand new array which may be a bit time taking process but this is the best practice;
    setItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearAll() {
    const checkToClear = window.confirm("Are you sure you want to clear !");

    if (checkToClear) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handlerAddItems} />
      <List
        items={items}
        deleteItem={handlerDeleteItems}
        addToggleStrike={handlerToggleStrike}
        clearAll={clearAll}
      />
      <Stats items={items} />
    </div>
  );
}
