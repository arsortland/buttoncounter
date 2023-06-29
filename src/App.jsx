import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return <div className="App">
    <button onClick={() => setCount(count + 1)}>Klikk meg</button>
    <h1>Amount of clicks: {count}</h1>
  </div>;
}

export default App;
