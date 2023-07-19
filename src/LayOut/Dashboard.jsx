import React, { useContext } from "react";
import Navbar from "../Page/Shared/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Router/AuthProvider";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {currentUser === "owner" ? (
              <>
                <li>
                  <Link to="houseList">House List</Link>
                </li>
                <li>
                  <Link to="addNewHouse">Add New House</Link>
                </li>
              </>
            ) : currentUser === "renter" ? (
              <>
                <li>
                  <Link to="booking">My Booking </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
