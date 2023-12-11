import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState([])
  const [isInCart, setIsInCart] = useState(false)
  const params = useParams()
  const productId = params.id

  useEffect(() => {
    fetch(`http://localhost:3001/products/${productId}`)
    .then((res) => res.json())
    .then((data) => setProduct(data))
  }, [productId])

  const handleAddToCart = () => {
    setIsInCart(!isInCart)
  }

  return (
    <div className='product-card'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button className={isInCart ? 'add-to-cart-btn' : 'in-cart-btn'} 
        onClick={handleAddToCart}
        >
          {isInCart ? "In Your Cart" : "Add To Cart"}
        </button>
        <img className='product-img' src={product.image}/>
    </div>
  )
}

export default Product 
