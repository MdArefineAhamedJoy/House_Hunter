import React, { useEffect, useState } from "react";

const Home = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchHouses(currentPage);
  }, [currentPage]);

  const fetchHouses = (page) => {
    fetch(`http://localhost:5000/houses?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setHouses(data.houses);
        setTotalPages(data.totalPages);
      });
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
              <div className="flex justify-between">
                <p>Size : {house?.roomSize} square feet</p>
                <p>Total Room : {house?.availability}</p>
              </div>
              <p>Rent : ${house?.rent} </p>
              <p>{house?.description.slice(0, 80)}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-4 flex justify-end">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <span className="mr-2">
          Page {currentPage} of {totalPages}
        </span>
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
