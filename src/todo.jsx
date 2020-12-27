import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div>
        <li>
          <button onClick>X</button> {props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoLists;
