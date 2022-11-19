import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Register from "../../Pages/Register/Register";
import Servicedetails from "../../Pages/Servicedtls/Servicedetails";





const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      
        {
          path:'/checkout/:id',
          loader: () => fetch('/services.json'),
          element:<Checkout></Checkout>,
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'/Servicedetails',
          element:<Servicedetails></Servicedetails>
        },
      
        {
          path:'*',
          element:<div className="text-center text-red-500">Sorry, we couldn't find this page.</div>
        },
      ]
    },
  ]);

  export default router;
