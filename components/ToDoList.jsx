import React, { useState } from "react";

function ToDoList(props) {
  const [state, setState] = useState(false);
  function itemClick() {
    setState(!state);
  }
  return (
    <div onClick={itemClick}>
      <li style={{ textDecoration: state ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
export default ToDoList;
