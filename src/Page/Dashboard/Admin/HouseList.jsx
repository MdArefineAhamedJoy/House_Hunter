import React, { useEffect, useState } from "react";
import axios from "axios";
const HouseList = () => {
  const [houseList, setHouseList] = useState([]);
  const email = "mdarefine05@gmail.com";
  useEffect(() => {
    fetch(`https://house-hunter-server-mdarefineahamedjoy.vercel.app/all/house/${email}`)
      .then((res) => res.json())
      .then((data) => setHouseList(data));
  }, []);
  return (
    <div className="w-full">
      <h1 className="uppercase text-xl font-semibold text-center my-10">List of rooms you are going to rent</h1>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr className="text-center bg-gray-500 font-bold text-lg text-sky-100">
              <th>No</th>
              <th>Email</th>
              <th>Room Size</th>
              <th>Room Info</th>
              <th>Rent Per Month </th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {houseList?.map(
              (
                {
                  _id,
                  email,
                  address,
                  city,
                  roomSize,
                  rent,
                  bathroom,
                  bedroom,
                  availability,
                },
                index
              ) => (
                <tr key={_id} className="hover text-center">
                  <th>{index + 1}</th>
                  <td>{email}</td>
                  <td>{roomSize} square feet</td>
                  <td>
                    <div>
                      <p>Bathroom {bathroom}</p>
                      <p>Bedroom  {bedroom}</p>
                      <p>availability  {availability}</p>
                    </div>
                  </td>
                  <td>
                  $ { rent}
                  </td>
                  <td>
                    <div>
                      <p> {address}</p>
                      <p>{city}</p>
                    </div>
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

export default HouseList;
