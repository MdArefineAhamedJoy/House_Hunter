import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Home/Registration/Login";
import SingUp from "../Page/Home/Registration/SingUp";
import Dashboard from "../LayOut/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element : <Home></Home>
        },
        {
            path: "login",
            element : <Login></Login>
        },
        {
            path : "singUp",
            element: <SingUp></SingUp>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
        {
            
        }
    ]
  }
]);

export default router