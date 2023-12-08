import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import '../index.css'
import { ProductConsumer } from '../ProductContext'


const Products = () => {
 
  return (
    <ProductConsumer>
      {context => {
        const productsList = context.products.map(product => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <img className="card img" src={product.image}/>
            <Link to={`/product/${product.id}`} >More Information</Link>
            <p>{product.description}</p>
          </div>
        ))
        return (
          <div className='cards'>
            <h1></h1>
            <Header />
            {productsList}
          </div>
        )
      }}
    </ProductConsumer>
  )
}

export default Products