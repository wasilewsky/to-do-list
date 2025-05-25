import React from "react";
import Item from "./Item";

function List(props) {
  const items = props.items;

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
