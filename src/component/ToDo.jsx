import React, { useState } from "react";
import './ToDo.css';

const ToDo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const Listofitems = () => {
    if (inputList.trim() === "") return;

    if (isEditMode) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? inputList : item
      );
      setItems(updatedItems);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      setItems([...items, inputList]);
    }

    setInputList(""); // Clear input after action
  };

  const deleteItems = (id) => {
    setItems((oldItems) => oldItems.filter((item, index) => index !== id));
  };

  const editItem = (index) => {
    setInputList(items[index]);
    setIsEditMode(true);
    setEditIndex(index);
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
            placeholder="Add or Edit an Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button className="btn_todo" onClick={Listofitems}>
            {isEditMode ? "Update" : "Add"}
          </button>
          <ol>
            {items.map((itemVal, index) => (
              <li key={index}>
                {itemVal}
                <button className="btn_edit" onClick={() => editItem(index)}>✏️</button>
                <button className="btn_delete" onClick={() => deleteItems(index)}>X</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDo;
