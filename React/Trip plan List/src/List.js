import { useState } from "react";
import Item from "./Item";

export default function List({ items, deleteItem, addToggleStrike, clearAll }) {
  const [sortVal, setSortVal] = useState("input");
  let itemSort;

  if (sortVal === "input") itemSort = items;
  if (sortVal === "description")
    itemSort = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortVal === "packed")
    itemSort = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {itemSort.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            addToggleStrike={addToggleStrike}
          />
        ))}
      </ul>
      <div className="sort">
        <select value={sortVal} onChange={(e) => setSortVal(e.target.value)}>
          <option value="input">Sort by input Value</option>
          <option value="description">Sort by description Value</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clearAll}>Clear</button>
      </div>
    </div>
  );
}
