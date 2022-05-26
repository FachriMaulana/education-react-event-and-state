// di sini jadinya harus import useState
import React, { useState } from "react";

function ToDoIncrement() {
  // sekarang kita menggunakan useState untuk deklarasi increment
  // pada saat deklarasi, kita menggunakan array
  // indeks 0 adalah nama variabel yang ingin dideklarasikan
  // indeks 1 adalah nama fungsi yang digunakan untuk
  //   memutasi (mengganti) variabel
  const [increment, setIncrement] = useState(0);

  function buttonNambahClickHandler() {
    console.log(increment);
    // di sini karena kita ketahui bahwa setIncrement adalah fungsi
    // kita bisa "invoke" dan memasukkan nilai baru yang diinginkan
    // anggap seperti "setter"
    setIncrement(increment + 1);
  }

  return (
    <>
      <span style={{ marginRight: "0.25em" }}>{increment}</span>
      <span>
        <button onClick={buttonNambahClickHandler}>Nambah</button>
      </span>
    </>
  );
}

export default ToDoIncrement;
