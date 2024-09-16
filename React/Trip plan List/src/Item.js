export default function Item({ item, deleteItem, addToggleStrike }) {
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
