import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Home/Registration/Login";
import SingUp from "../Page/Home/Registration/SingUp";
import Dashboard from "../LayOut/Dashboard";
import HouseList from "../Page/Dashboard/Admin/HouseList";
import AddNewHouse from "../Page/Dashboard/Admin/AddNewHouse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "houseList",
        element: <HouseList></HouseList>,
      },
      {
        path: "addNewHouse",
        element: <AddNewHouse></AddNewHouse>,
      },
      {
        path: 'booking',
        element: <></>
      }
    ],
  },
]);

export default router;
