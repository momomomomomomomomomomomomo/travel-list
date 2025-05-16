import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItem,
  onPackItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let orderedItems;
  if (sortBy === "input") orderedItems = items.slice();
  if (sortBy === "description")
    orderedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    orderedItems = items.slice().sort((a, b) => +a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {orderedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onPackItem={onPackItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            console.log(sortBy);
          }}
        >
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClear}>clear list</button>
      </div>
    </div>
  );
}
