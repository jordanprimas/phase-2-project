import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ product }) => {
  const productCard = product.map(product =>  (
    <div className="card" key={product.id}>
      <h3>{product.name}</h3>
      <img className="card img" src={product.image}/>
      <Link to={`/product/${product.id}`} >More</Link>
      <p>${product.price}</p>
    </div>
))

return (
  <div className='cards'>
    {productCard}
  </div>
)
}

export default ProductList