import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbWorldDollar } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { FaBed , FaCar} from "react-icons/fa";
import { PiAirplaneInFlightBold  } from "react-icons/pi";
import { GrAssistListening } from "react-icons/gr";
import { PiTaxiThin } from "react-icons/pi";

const Navbar = () => {
  let location = useLocation();
  let userLocation =
    location.pathname === "/dashboard" ||
    location.pathname.includes("/dashboard");

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
    <div className="">
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
    </div>
  );
};

export default Navbar;
