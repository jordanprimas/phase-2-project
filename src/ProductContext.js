import React, { useState, useEffect } from 'react'

const ProductContext = React.createContext()

const ProductProvider = (props) => {
  const [products, setProducts] = useState([])
  const [storeName, setStoreName] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const addStoreName = (name) => {

  }

  return(
    <ProductContext.Provider value={{
        products: products,
        addProduct: addProduct,
        storeName: storeName,
        setStoreName, setStoreName
    }}>
      {props.children}
    </ProductContext.Provider> 
  )
}

const ProductConsumer = ProductContext.Consumer

export { ProductContext, ProductProvider, ProductConsumer }