import React, { useEffect } from "react";
import axios from "axios";
const HouseList = () => {
  const email = "mdarefine05@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:5000/all/house/${email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr className="hover">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseList;
