import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])



  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={products} />
   
    </>
  );
}

export default App;
