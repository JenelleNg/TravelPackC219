export default function Item(props) {
  return (
    <li style={{ textDecoration: props.item.packed ? "line-through" : "none" }}>
      
      <input
        type="checkbox"
        checked={props.item.packed}
        onChange={function () {
          props.onUpdateItem(props.item.id);
        }}
      />

      {props.item.quantity} {props.item.description}

      <button onClick={function () {
        props.onDeleteItem(props.item.id);
      }}>
        ❌
      </button>
    </li>
  );
}