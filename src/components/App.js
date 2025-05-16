import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Sstats";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const pushAndReturn = (arr, value) => {
    arr.push(value);
    return arr;
  };
  const handlePackItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleDeleteItem = (id) => {
    setItems((items) =>
      items.reduce(
        (newItems, item) =>
          item.id !== id ? pushAndReturn(newItems, item) : newItems,
        []
      )
    );
  };
  const handleClear = () => {
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        onClear={handleClear}
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
      />
      <Stats items={items} />
    </div>
  );
}
