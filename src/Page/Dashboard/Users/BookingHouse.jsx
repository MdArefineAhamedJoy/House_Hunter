import React, {  useEffect, useState } from "react";
import { Link,  useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BookingHouse = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [userInfo, setUserInfo] = useState(null);
  const booking = useLoaderData();
  const {
    _id,
    email,
    address,
    city,
    roomSize,
    rent,
    bathroom,
    bedroom,
    availability,
    picture,
    description,
  } = booking;

  useEffect(() => {
    fetch(`http://localhost:5000/users/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [userEmail]);

  const handleConfirmOder = async (data , info) => {
    console.log("click")
    // console.log(data , info)
    const bookingData = {...data , ...info}
    delete bookingData._id
    console.log(bookingData)

    try {
     const response = await axios.post("http://localhost:5000/house/booking", bookingData);
     if(response.status){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:`Booking Successfully` ,
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/');
     }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <h1 className="text-center font-bold text-xl my-6 uppercase">
        Confirm Your Room Booking{" "}
      </h1>
      <dir className="grid md:grid-cols-2 gap-5 shadow-md md:w-11/12 mx-auto p-3">
        <div>
          <div className="card w-full bg-base-100 rounded-none">
            <figure>
              <img src={picture} alt="Shoes" />
            </figure>
            <div className="py-4">
              <p className="">{description}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2 ">
            <h2 className="border text-center p-2 rounded-md border-gray-400">
              City : {city}
            </h2>
            <p className="border text-center p-2 rounded-md border-gray-400">
              Address : {address}
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400">
              Size : {roomSize} square feet
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400">
              Total Room : {availability}
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400">
              Bathroom : {bathroom}
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400">
              Bedroom : {bedroom}
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400">
              Rent : ${rent}{" "}
            </p>
          </div>
          <div>
            <p className="border text-center p-2 rounded-md border-gray-400 mt-2">
              {" "}
              Your Name : {userInfo?.fullName}
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400 my-2">
              Your Email : {userInfo?.email}
            </p>
            <p className="border text-center p-2 rounded-md border-gray-400 mb-2">
              Your Phone Number : {userInfo?.phoneNumber}
            </p>
          </div>
          <button
            onClick={()=>handleConfirmOder(userInfo,booking )}
            className="bg-green-500 uppercase my-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            confirmed Oder
          </button>
          <Link to="/">
            <button className="bg-red-500 uppercase hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full">
              Back to home
            </button>
          </Link>
        </div>
      </dir>
    </div>
  );
};

export default BookingHouse;
