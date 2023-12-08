import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({product}) => {
  const productL = product.map(product =>  (
    <div className="card" key={product.id}>
      <h3>{product.name}</h3>
      <img className="card img" src={product.image}/>
      <Link to={`/product/${product.id}`} >More Information</Link>
      <p>{product.description}</p>
    </div>
))

return (
  <div className='cards'>
    {productL}
  </div>
)
}

export default ProductList