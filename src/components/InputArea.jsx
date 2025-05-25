import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleOnChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  
  return(
    <div className="form">
      <input onChange={handleOnChange} type="text" value={inputText} />
      <button onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>+</span>
      </button>
    </div>
  );
}

export default InputArea;
