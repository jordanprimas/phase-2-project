import React, { useState } from 'react'
import { ProductConsumer } from '../ProductContext'

const Admin = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("necklace")

    const newProductData = {
        name: name,
        image: image, 
        description: description,
        category: category,
        price: price
    }

    return (
        <ProductConsumer>
            {context => {

                const handleSubmit = (e) => {
                    e.preventDefault()
                    fetch("http://localhost:3001/products", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newProductData),
                    })
                        .then((res) => res.json())
                        .then((newProduct) => context.addProduct(newProduct))
                        setName("")
                        setImage("")
                        setDescription("")
                        setPrice("")
                }


            return (
                    <div className='admin'>
                        <h3>Add a new product</h3>
                        <form className="add-product-form" onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input 
                                    type='text'
                                    className='name-input'
                                    name='name'
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}               
                                />
                            </label>

                            <label>
                                Image:
                                <input 
                                    type='text'
                                    className='image-input'
                                    name='image'
                                    value={image}  
                                    onChange={(e) => setImage(e.target.value)}               
                            
                                />
                            </label>

                            <label>
                                Description:
                                <input 
                                    type='text'
                                    className='description-input'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}               
                                
                                />
                            </label>

                            <label>
                                Price:
                                <input 
                                    type='text'
                                    className='price-input'
                                    name='price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}               
                                
                                />
                            </label>

                            <label>
                                Category:
                                <select 
                                    name='category'
                                    className='category-select'
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)}               
                                >
                                    <option value="necklace">Necklace</option>
                                    <option value="ring">Ring</option>
                                    <option value="braclet">Braclet</option>
                                    <option value="earrings">Earrings</option>
                                </select>
                            </label>

                            <button type="submit" className='submit-new-button'>Add a New Product!</button>
                        </form>

                        <div className="new-product-card">
                            <h3>Product name: {newProductData.name}</h3>
                            <img className="new-product-image" src={newProductData.image} alt={"photo"}/>
                            <p>Product Description: {newProductData.description}</p>
                        </div>
                    </div>
                    )
                }
            }
        </ProductConsumer>)
}

export default Admin
