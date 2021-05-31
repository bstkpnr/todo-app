import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;
  function doneLine(e) {
    if (e.target.style.textDecoration !== "line-through") {
      e.target.style.textDecoration = "line-through";
      e.target.style.opacity="0.2"
    } else {
      e.target.style.textDecoration = "";
      e.target.style.opacity="1"
    }
  }

  return (
    <div onClick={doneLine} className="buttonContainer">
      {" "}
      {content}{" "}
      <button
        onClick={props.removeToDo}
        value={id}
        className="btn btn-danger d-flex justify-content-end"
      >
        Sil
      </button>
    </div>
  );
}

export default Todo;
