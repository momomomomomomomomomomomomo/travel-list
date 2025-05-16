export default function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <span>
        <input
          onChange={() => {
            onPackItem(item.id);
          }}
          checked={item.packed}
          type="checkbox"
        ></input>
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
