import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="container mt-5 p-5 text-center">
      <Todo text="Yoyo's Todo" />
      <Todo text="Ore's Todo" />
      <Todo text="Gbemi's Todo" />
    </div>
  );
};

export default App;
