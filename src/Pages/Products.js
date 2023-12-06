import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'


const Products = () => {
  const products = useOutletContext()

  const productsList = products.map(product => (
  <div key={product.id}>
    <h2>{product.name}</h2>
    <img src={product.image}/>
      <Link to={`/product/${product.id}`} >More Information</Link>
    <p>{product.description}</p>
  </div>
  ))
 
  return (
    <div>
      {productsList}


    </div>
  )
}

export default Products
