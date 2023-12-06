import App from "./App"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Product from "./Pages/Product"
import ProductForm from "./Pages/ProductForm"
import Admin from "./Pages/Admin"


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