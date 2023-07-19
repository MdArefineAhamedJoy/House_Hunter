import React, { useEffect, useState } from "react";

const MyBooking = () => {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [myBooking, setMyBooking] = useState([]);

  useEffect(() => {
    fetch(`https://house-hunter-server-mdarefineahamedjoy.vercel.app/house/booking`)
      .then((res) => res.json())
      .then((data) => {
        setMyBooking(data)
      });
  }, [userEmail]);

  return (
    <div className="w-full h-full">
      <h1 className="my-8 text-center font-bold text-xl uppercase "> My Present Booking </h1>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr className="text-center text-lg bg-gray-200 ">
              <th>No </th>
              <th>Image </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {myBooking?.map(
              ({
                address,
                picturer,
                _id,
                roomSize,
                phoneNumber,
                fullName,
                email,
                description,
                city,
                bedroom,
                bathroom,
              } , index) => (
                <tr key={_id} className="text-center">
                    <td >
                        {index + 1}
                    </td>
                  <td className="w-44 h-24 bg-red-500">
                    <img className="w-full h-full" src={picturer} alt="" />
                  </td>
                  <td>
                    <p>Address :  {address}</p>
                    <p>City : {city}</p>
                  </td>
                  <td>
                    <p>Room Size : {roomSize}</p>
                    <p>Bed Room : {bedroom}</p>
                    <p>BathRoom : {bathroom}</p>
                   
                  </td>
                  <td>
                  <p>Full Name : {fullName}</p>
                  <p>Email : {email}</p>
                  <p>Phone Number : {phoneNumber}</p>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
