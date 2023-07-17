import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = (
    <>
      <li>
        <Link to="/login"> Login </Link>
      </li>
      <li>
      <Link to="/singUp"> Registration  </Link>
      </li>
      <li>
      <Link to="/dashboard"> Dashboard </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-sky-400">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content w-56 ms-[-8px] mt-2  py-2 left-0  bg-red-500"
            >
              {items}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
