import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Service from "../../Pages/Service/Service";



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
          path:'/service',
          element:<Service></Service>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'*',
          element:<div className="text-center text-red-500">Sorry, we couldn't find this page.</div>
        },
      ]
    },
  ]);

  export default router;