import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState([])
  const params = useParams()
  const productId = params.id

  useEffect(() => {
    fetch(`http://localhost:3001/products/${productId}`)
    .then((res) => res.json())
    .then((data) => setProduct(data))
  }, [productId])

  return (
    <div className='cards'>
      <article className='card'>
        <h1>{product.name}</h1>
        <img src={product.image}/>
        <p>price: ${product.price}</p>
      </article>

    </div>
  )
}

export default Product 
