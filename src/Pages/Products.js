import React, { useState } from 'react'
import ProductList from '../Components/ProductList'
import Header from '../Components/Header'
import '../index.css'
import { ProductConsumer } from '../ProductContext'


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }
 
  return (
    <ProductConsumer>
      {context => {
        





        const productsList = context.products.filter(product => {
          if (selectedCategory === "All") {
            return true
          } else {
            return product.category === selectedCategory
          }
        })
        console.log(productsList)
          
        return (
          <div className='cards'>
            <h1></h1>
            <Header onCategoryChange={handleCategoryChange} />
            <ProductList product={productsList} />
          </div>
        )
      }}
    </ProductConsumer>
  )
}

export default Products