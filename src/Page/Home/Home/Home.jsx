import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Router/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { currentUser } = useContext(AuthContext);
  console.log(houses);
  useEffect(() => {
    fetchHouses(currentPage);
  }, [currentPage]);

  const fetchHouses = (page) => {
    fetch(
      `https://house-hunter-server-mdarefineahamedjoy.vercel.app/houses?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHouses(data.houses);
        setTotalPages(data.totalPages);
      });
  };

  const handelMessage = (users) => {
    if (currentUser) {
      return <Link to={`category/${data._id}`}></Link>;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Place Login Fast !",
      });
      return <Link to="/login"></Link>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {houses.map((house) => (
          <div key={house?._id} className="card  bg-base-100 shadow-xl">
            <figure className="w-full h-72">
              <img className="h-full" src={house?.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">City : {house?.city}</h2>
              <p>Address : {house?.address}</p>
              <div className="grid grid-cols-2 gap-x-4 ">
                <p>Size : {house?.roomSize} square feet</p>
                <p>Total Room : {house?.availability}</p>
                <p>Bathroom : {house?.bathroom}</p>
                <p>Bedroom : {house?.bedroom}</p>
              </div>
              <p>Rent : ${house?.rent} </p>
              <p>{house?.description.slice(0, 80)}</p>

              <Link onClick={handelMessage} to={`/booking/${house._id}`}>
                <div className="card-actions justify-end">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-1">
                    Book Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="my-4 flex items-center justify-end gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <div className="mr-2 font-bold">
          <span className=" uppercase"> Page</span> {currentPage}{" "}
          <span className=" uppercase"> of </span> {totalPages}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
