import React, {useState} from 'react'
import { ProductConsumer } from '../ProductContext'



const Home = () => {

  
  
  return (
    <ProductConsumer>
      {context => {
        return (
          <div>
            <h1 className='build-store'>Build Your Store!</h1>
            <form>
              <label>
                Name Your Store
              <input
                type='text'
                className='store-name-input'
                value={context.storeName}
                placeholder='Enter Store Name'
                onChange={(e) => context.addStoreName(e.target.value)}
              />
              </label>
            </form>
            
          </div>
          )
        }
      }
      </ProductConsumer>
    )
  }

export default Home