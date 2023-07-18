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
          <div key={house.id} className="border rounded p-4">
            {/* <img src={house.image} alt={`House ${house.id}`} className="w-full h-40 object-cover mb-2" /> */}
            <p className="font-semibold">Address: {house.address}</p>
            <p>City: {house.city}</p>
          </div>
        ))}
      </div>

      <div className="my-4">
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
