import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
