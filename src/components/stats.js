export default function Stats(props) {
  const total = props.items.length;

  const packed = props.items.filter(function (item) {
    return item.packed === true;
  }).length;

  const percentage = total === 0
    ? 0
    : Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything!`
          : `You have ${total} items. You packed ${packed} (${percentage}%).`}
      </em>
    </footer>
  );
}