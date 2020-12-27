import React, { useState } from "react";
import ToDoLists from "./todo";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do list</h1>
          <br />
          <input type="text" placeholder="Add a text" onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {Items.map((itemval, index) => {
              return <ToDoLists key={index} id={index} text={itemval} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
