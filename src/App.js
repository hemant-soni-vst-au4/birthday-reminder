import React from "react";
import data from "./data";
import List from "./List";

const App = () => {
  return (
    <main>
      <section className="container">
        <h3>0 birthday today</h3>
        <List />
        <button onClick={() => console.log("you clicked")}>clear all</button>
      </section>
    </main>
  );
};

export default App;
