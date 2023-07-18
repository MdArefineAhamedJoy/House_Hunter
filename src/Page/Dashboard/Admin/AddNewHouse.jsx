import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const AddNewHouse = () => {
  const inputValue = [
    {
      name: "email",
      title: "Email",
      id: 1,
    },
    {
      name: "address",
      title: "Address",
      id: 2,
    },
    {
      name: "city",
      title: "City",
      id: 3,
    },
    {
      name: "bathroom",
      title: "Bathroom",
      id: 4,
    },
    {
      name: "bedroom",
      title: "Bedroom",
      id: 5,
    },
    {
      name: "rent",
      title: "Rent Per Month",
      id: 6,
    },
    {
      name: "availability",
      title: "Available Room",
      id: 7,
    },
    {
      name: "roomSize",
      title: "Room Size",
      id: 8,
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/house", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full p-5 h-full ">
      <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-2 gap-4">
          {inputValue?.map(({ id, title, name }) => (
            <>
              <div key={id} className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {title} :
                </label>
                <input
                  type="text"
                  placeholder={title}
                  {...register(`${name}`, { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none rounded"
                />
                {errors.name && <span>This field is required</span>}
              </div>
            </>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AddNewHouse;
