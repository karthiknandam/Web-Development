export default function Stats({ items }) {
  const item = items.length;
  if (!item)
    return (
      <footer className="stats">
        <em>Please add items</em>
      </footer>
    );
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / item) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You have packed all items`
          : `You have ${item} items on your list , and you hav already packed ${packed}
        which is ${percentage}  %`}
      </em>
    </footer>
  );
}
