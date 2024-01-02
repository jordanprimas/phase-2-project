import React from "react";
import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar"

const App = () => {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}

export default App;
