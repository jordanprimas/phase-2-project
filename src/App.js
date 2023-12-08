import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar"

const App = () => {

  
  const handleCategoryChange = () => {

  }


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
