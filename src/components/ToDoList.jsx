import React from "react";

// Di sini tidak menggunakan todos lagi

// Di sini declare ada props yang ingin digunakan
function ToDoList(props) {
  return (
    <>
      <h3>Listing ToDo List</h3>
      <ul>
        {/* Di sini kita menggunakan props dengan nama propsTodos */}
        {/* Hasil lemparan dari App.js */}
        {props.propsTodos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </>
  );
}

export default ToDoList;
