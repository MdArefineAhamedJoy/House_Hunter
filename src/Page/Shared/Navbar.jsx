import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbWorldDollar } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { FaBed, FaCalendarAlt, FaCar } from "react-icons/fa";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { GrAssistListening } from "react-icons/gr";
import { PiTaxiThin } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  let location = useLocation();
  let userLocation =
    location.pathname === "/dashboard" ||
    location.pathname.includes("/dashboard");

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
  ];

  const items1item = (
    <>
      <li>
        <button className="bg-blue-800 rounded-none hover:bg-blue-700 duration-300 p-3 py-2  flex items-center justify-center me-3">
          <TbWorldDollar
            className="text-white flex-1 text-3xl w-full h-full "
            size="2rem"
          />
        </button>
      </li>
      <li>
        <button className="bg-blue-800 rounded-none hover:bg-blue-700 duration-300 p-3 py-2 text-white flex items-center justify-center me-3">
          <GrLanguage
            className="text-white flex-1 text-3xl w-full h-full "
            size="2rem"
          />
        </button>
      </li>
      <li>
        <button className="bg-blue-800 rounded-none hover:bg-blue-700 duration-300 p-3 py-2  flex items-center justify-center me-3">
          <AiOutlineQuestionCircle
            className="text-white flex-1 text-3xl w-full h-full "
            size="2rem"
          />
        </button>
      </li>
      <li>
        <Link
          to="/dashboard "
          className="border me-3 p-2 hover:bg-blue-600  duration-300 rounded-none text-white hover:text-white font-semibold"
        >
          List your propurty
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className="bg-white hover:bg-white rounded-none px-4 py-2 text-blue-600 hover:text-blue-800 me-3"
        >
          {" "}
          Registration{" "}
        </Link>
      </li>
      <li>
        <Link
          to="/singUp"
          className="bg-white hover:bg-white rounded-none px-4 py-2 text-blue-600 hover:text-blue-800"
        >
          Sing in{" "}
        </Link>
      </li>
    </>
  );
  const item2nav = (
    <>
      <li>
        <button className="  rounded-full hover:bg-blue-600  duration-300 p-4 py-2 border  flex items-center justify-center me-3 gap-2 text-white tracking-wider font-semibold   ">
          <FaBed size={"30"} />
          Stays
        </button>
      </li>
      <li>
        <button className=" rounded-full hover:bg-blue-600  duration-300 p-4 py-2  flex items-center justify-center me-3 gap-2 text-white  tracking-wider    ">
          <PiAirplaneInFlightBold size={"30"} />
          Flights
        </button>
      </li>
      <li>
        <button className=" rounded-full hover:bg-blue-600  duration-300 p-4 py-2  flex items-center justify-center me-3 gap-2 text-white  tracking-wider    ">
          <FaCar size={"30"} />
          Car rentals
        </button>
      </li>
      <li>
        <button className=" rounded-full hover:bg-blue-600  duration-300 p-4 py-2  flex items-center justify-center me-3 gap-2 text-white  tracking-wider    ">
          <GrAssistListening size={"30"} />
          Attraction
        </button>
      </li>
      <li>
        <button className="  rounded-full hover:bg-blue-600  duration-300 p-4 py-2  flex items-center justify-center me-3 gap-2 text-white  tracking-wider  ">
          <PiTaxiThin size={"30"} />
          Airport taxis
        </button>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-0  bg-blue-800 text-white w-full h-16 px-3">
        {/* top navbar  */}
        <div>
          <div>
            <h1 className="font-bold  text-2xl uppercase">Booking.com</h1>
          </div>
        </div>
        <div>
          <ul className="flex items-center h-16  ">{items1item}</ul>
        </div>
      </div>
      <div className="w-full px-3 bg-blue-800 h-20 ">
        {/* bottom navbar  */}
        <ul className="w-full h-20 flex  items-center uppercase">{item2nav}</ul>
      </div>
      <div className="h-48 bg-blue-800 px-3 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold">Find your next stay</h2>
        <p className="text-lg font-semibold pt-3 tracking-wide capitalize">
          Search low prices on hotels, homes and much more...
        </p>
      </div>
      <div className="mt-[-20px] flex justify-center items-center w-10/12 mx-auto ">
        <input
          className="border-2 w-2/4  px-3 py-2 inline-block border-yellow-400 focus:outline-none "
          placeholder="Where are you going ?"
          type="text"
        />
        <button className="border-2 w-2/4 border-yellow-400 px-3 py-2 flex items-center justify-center gap-3 bg-white   focus:outline-none ">
          <FaCalendarAlt></FaCalendarAlt>{" "}
          <span> Check-in date — Check-out date</span>
        </button>

        <div className="relative inline-block text-left w-2/4 border-yellow-400">
          <button
            onClick={toggleDropdown}
            type="button"
            className=" justify-center w-full flex items-center gap-2  border-yellow-400 shadow-sm px-3 py-2 border-2 bg-white  font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <BsFillPersonFill />{" "}
            <p>
              0 <span>Adult .</span>
            </p>
            <p>
              0 <span>Children .</span>
            </p>
            <p>
              0 <span>room </span>
            </p>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-full px-4   shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {dropdownItems.map((item) => (
                  <button
                    key={item.value}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    role="menuitem"
                    onClick={() => console.log(item.value)} // Replace this with your desired action
                  >
                    {item.label}
                  </button>
                ))}
                <button onClick={toggleDropdown}   className="w-full px-4 py-1 my-4 text-blue-800 hover:bg-blue-100 border border-blue-800">
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
