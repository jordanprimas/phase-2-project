import App from "./App"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Product from "./Pages/Product"
import Admin from "./Pages/Admin"
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
            element: <Home />
        },
        {
            path: "/store",
            element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/admin",
          element: <Admin />

        },
      ]
    }, 
]

export default routes 