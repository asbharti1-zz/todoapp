import "./styles.css";
import React, { useState } from "react";

function Finaltodo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((oldinput) => {
      return [...oldinput, input];
    });
    setInput("");
  };
  const handeDelete = (ind) => {
    return setTodo(
      todo.filter((item, i) => {
        return i !== ind;
      })
    );
  };

  return (
    <div>
      <h1 style={{ borderBottom: "2px solid black" }}>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input vale here"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <ul>
        {todo.map((itemval, ind) => {
          return (
            <div style={{ display: "flex" }}>
              <button onClick={() => handeDelete(ind)}>DeleteTodo</button>&nbsp;
              <div id={ind}>{itemval}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Finaltodo;
