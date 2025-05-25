import React, { useState } from "react";

function Item(props) {
  const [clicked, setClicked] = useState(false);

  function handleOnClick() {
    setClicked(prev => !prev);
  }
  
  return (
    <div onClick={handleOnClick}>
      <li style={{textDecoration: clicked && "line-through"}}>
        {props.name}
      </li>
    </div>
  );
}

export default Item;
