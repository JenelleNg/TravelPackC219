import { useState } from "react";

export default function Form(props) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description === "") {
      return;
    }

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false
    };

    // Use the function passed from App
    props.onAddItem(newItem);

    // Reset form fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center", gap: "1rem" }}
    >
      <h3 style={{ marginRight: "1rem" }}>What do you need to pack?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>

      <button type="button" onClick={props.onClearList}>
        Clear List
      </button>

      <select
        value={props.sortMethod}
        onChange={(e) => props.onChangeSort(e.target.value)}
      >
        <option value="input">Input Order</option>
        <option value="description">Alphabetical</option>
        <option value="quantity">Quantity</option>
      </select>
    </form>
  );
}