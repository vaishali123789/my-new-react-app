import React, { useState } from "react";
import './ToDo.css';

const ToDo = () => {
  const [InputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const Listofitems = () => {
    if (InputList.trim() !== "") {
      setItems((oldItems) => [...oldItems, InputList]);
      setInputList(""); // Clear input after adding
    }
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={InputList}
            onChange={itemEvent}
          />
          <button onClick={Listofitems}>+</button>
          <ol>
            {items.map((itemVal, index) => {
              return <li key={index}>{itemVal}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDo;
