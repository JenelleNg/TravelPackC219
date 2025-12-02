import { useState } from "react";
import Logo from './logo';
import Form from './forms';
import PackingList from './packinglist';
import Stats from "./stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortMethod, setSortMethod] = useState("input");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  function handleUpdateItem(id) {
    setItems(
      items.map(function (item) {
        if (item.id === id) {
          return {
            id: item.id,
            description: item.description,
            quantity: item.quantity,
            packed: !item.packed
          };
        }

        return item;
      })
    );
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    setItems([]);
  }

  let displayedItems = [...items];
  if (sortMethod === "description") {
    displayedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortMethod === "quantity") {
    displayedItems.sort((a, b) => b.quantity - a.quantity);
  }

  return (
    <div className="app">
      <Logo />
      <Form
        onAddItem={handleAddItem}
        onClearList={handleClearList}
        sortMethod={sortMethod}
        onChangeSort={setSortMethod}
      />
      <PackingList
        items={displayedItems}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />

      <Stats items={items} />
    </div>
  );
}

export default App;
