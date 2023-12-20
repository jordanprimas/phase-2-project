import App from "./App"
import Products from "./Pages/Products"
import Product from "./Pages/Product"
import ProductForm from "./Pages/ProductForm"
import { ProductProvider } from './ProductContext'


const routes = [
    {
      path: "/",
      element: (
        <ProductProvider>
           <App />
        </ProductProvider>
      ),
      children: [
        {
            path: "/",
            element: <Products />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/product/form",
          element: <ProductForm />

        },
      ]
    }, 
]

export default routes 