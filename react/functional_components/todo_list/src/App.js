import React, { useState, useEffect } from "react";
import List from "./components/List";
import "./App.css";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo-list-items")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo-list-items", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
