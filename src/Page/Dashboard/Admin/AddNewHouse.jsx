import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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
      name: "picture",
      title: "Picture",
      id: 4,
    },
    {
      name: "bathroom",
      title: "Bathroom",
      id: 5,
    },
    {
      name: "bedroom",
      title: "Bedroom",
      id: 6,
    },
    {
      name: "rent",
      title: "Rent Per Month",
      id: 7,
    },
    {
      name: "availability",
      title: "Available Room",
      id: 8,
    },
    {
      name: "roomSize",
      title: "Room Size",
      id: 9,
    },
    {
      name: "description",
      title: "Description",
      id: 10,
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    fetch("http://localhost:5000/house", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data.acknowledged);
      if (data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Add House Info Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    })

  };

  return (
    <div className="w-full p-5 h-full ">
      <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-2 gap-4">
          {inputValue?.map(({ id, title, name }) => (
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
