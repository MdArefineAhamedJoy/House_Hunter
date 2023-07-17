import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const AddNewHouse = () => {
  const inputValue = [
    {
      name: "email",
      id: 1,
    },
    {
      name: "address",
      id: 2,
    },
    {
      name: "city",
      id: 3,
    },
    {
      name: "bathroom",
      id: 4,
    },
    {
      name: "bedroom",
      id: 5,
    },
    {
      name: "rent per month ",
      id: 6,
    },
    {
      name: "availability",
      id: 7,
    },
    {
      name: " room size,",
      id: 8,
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full p-5 h-full ">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        {inputValue.map(({ name, id }) => (
          <div key={id} className="form-control">
            <label className="label">
              <span className="label-text">{name}</span>
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
