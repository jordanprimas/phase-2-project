import React, { useState, useEffect } from 'react'

const ProductContext = React.createContext()

const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])


  return(
    <ProductContext.Provider value={{
        products: products
    }}>
      {props.children}
    </ProductContext.Provider> 
  )
}

const ProductConsumer = ProductContext.Consumer

export { ProductContext, ProductProvider, ProductConsumer }