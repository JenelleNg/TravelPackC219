import Item from './item';

export default function PackingList(props) {
  return (
    <div className="list">
      <ul>
        {props.items.map(function (item) {
          return (
            <Item
              key={item.id}
              item={item}
              onUpdateItem={props.onUpdateItem}
              onDeleteItem={props.onDeleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}