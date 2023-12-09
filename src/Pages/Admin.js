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
            .then((newProduct) => console.log(newProduct))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type='text'
                    name='name'
                    value={name} 
                    onChange={(e) => setName(e.target.value)}               
                />
            </label>

            <label>
                Image:
                <input 
                    type='text'
                    name='image'
                    value={image}  
                    onChange={(e) => setImage(e.target.value)}               
            
                />
            </label>

            <label>
                Description:
                <input 
                    type='text'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}               
                
                />
            </label>

            <label>
                Price:
                <input 
                    type='text'
                    name='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}               
                
                />
            </label>

            <label>
                Category:
                <select 
                    name='category'
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}               
                >
                    <option value="necklace">Necklace</option>
                    <option value="ring">Ring</option>
                    <option value="braclet">Braclet</option>
                    <option value="earrings">Earrings</option>
                </select>
            </label>

            <button type="submit">Add a New Product!</button>
        </form>
        
        <div className="card">
            <h3>{newProductData.name}</h3>
            <img className="card img" src={newProductData.image}/>
            <p>{newProductData.description}</p>
        </div>

    </div>
    )
}

export default Admin