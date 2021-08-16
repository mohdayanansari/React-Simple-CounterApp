import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="flex-container">
      <h1>Simple React.js Counter App</h1>

      <h2>{count}</h2>
      <div className="btn-container">
        <button className="btn" onClick={decrease}>
          -
        </button>
        <button className="btn" onClick={increase}>
          +
        </button>
      </div>

      <p>Created by Ayan Ansari</p>
    </div>
  );
}

export default App;
