// Di sini kita harus menggunakan useState
import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoIncrement from "./components/ToDoIncrement";

function App() {
  // deklarasi state todos
  // todos awalnya adalah array
  const [todos, setTodos] = useState([
    "Belajar React Fundamental",
    "Ngoding Sampai Bisa",
  ]);

  // di sini kita akan membuat sebuah function
  // yang digunakan untuk submitHandler di ToDoForm
  const formSubmitHandler = (todo) => {
    console.log("todo dari parent", todo);
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <header>
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section>
        <ToDoIncrement />
      </section>

      <section style={{ margin: "1em 0em" }}>
        {/* Di sini sekarang harus menggunakan props */}
        {/* Pada form kita harus melempar setTodos dan todos */}
        <ToDoForm propsSubmitHandler={formSubmitHandler} />
        {/* Pada list kita hanya butuh todos saja */}
        <ToDoList propsTodos={todos} />
      </section>

      <footer>
        <h3>Dibuat oleh orang tidak jelas &copy; 2022</h3>
      </footer>
    </div>
  );
}

export default App;
