import React, {useState} from 'react'
import { ProductConsumer } from '../ProductContext'



const Home = () => {

  
  
  return (
    <ProductConsumer>
      {context => {

        const handleSubmit = (e) => {
          e.preventDefault()
          console.log(e.taregt.value)
        }

          return (
            <div>
              <h1 className='home-name'>Build Your Store!</h1>
              <img src='https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Diamond_PNG_Clip_Art_Image.png?m=1507172105'/>
            
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  className='store-name-input'
                  name='description'
                  placeholder='Enter Store Name'
                />
                <button>Submit</button>
              </form>
            
            </div>
          )
        }
      }
      </ProductConsumer>
    )
  }

export default Home