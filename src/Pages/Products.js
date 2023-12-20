import React, { useState } from 'react'
import ProductList from '../Components/ProductList'
import Header from '../Components/Header'
import '../index.css'
import { ProductConsumer } from '../ProductContext'


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchBar, setSearchBar] = useState("")

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchBar(e.target.value)
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
        const sortedProductsList = productsList.filter(product => product.name.toLowerCase().includes(searchBar.toLowerCase()))

        return (
          <div>
            <Header onCategoryChange={handleCategoryChange} searchBar={searchBar} handleSearch={handleSearch} />
            <br/>
            <ProductList product={sortedProductsList} />
          </div>
        )
      }}
    </ProductConsumer>
  )
}

export default Products