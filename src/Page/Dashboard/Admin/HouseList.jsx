import React, { useEffect, useState } from "react";
import axios from "axios";
const HouseList = () => {
  const [houseList, setHouseList] = useState([]);
  const email = "mdarefine05@gmail.com";
  useEffect(() => {
    fetch(`http://localhost:5000/all/house/${email}`)
      .then((res) => res.json())
      .then((data) => setHouseList(data));
  }, []);
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
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
                  picture,
                  description,
                }, index
              ) => (
                <tr  key={_id} className="hover text-center">
                  <th>{index + 1}</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Blue</td>
                  <td>Blue</td>
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
