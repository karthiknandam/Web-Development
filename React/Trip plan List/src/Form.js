import { useState } from "react";

export default function Form({ addItems }) {
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
