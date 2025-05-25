import React, { useState } from "react";
import InputArea from "./components/InputArea";
import Heading from "./components/Heading";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prev) => [...prev, inputText]);
  }
  
  return (
    <div className="container">
      <Heading />
      <InputArea onAdd={addItem} />
      <List items={items} />
    </div>
  );
}

export default App;
