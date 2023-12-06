import App from "./Pages/App"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Product from "./Pages/Product"
import ProductForm from "./Pages/ProductForm"


const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
          path: "/products/new",
          element: <ProductForm />

        },
        {
          path: "/products/:id",
          element: <Product />
        }
      ]
    }, 
]

export default routes 