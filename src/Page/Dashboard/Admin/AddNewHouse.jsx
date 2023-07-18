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
  const onSubmit = async ({
    email,
    address,
    city,
    bathroom,
    bedroom,
    rent,
    availability,
    roomSize,
  }) => {
    const data = {
      email,
      address,
      city,
      bathroom,
      bedroom,
      rent,
      availability,
      roomSize,
    };

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
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        {inputValue.map(({ name, id, title }) => (
          <div key={id} className="form-control">
            <label className="label">
              <span className="label-text">{title}</span>
            </label>
            <input
              type="text"
              placeholder={name}
              className="input input-bordered"
              {...register(`${name}`, { required: true })}
            />
          </div>
        ))}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewHouse;
