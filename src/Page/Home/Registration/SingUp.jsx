import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users", data);
      console.log("Registration successful. Token:", response.data);
    } catch (error) {
      setServerError(error.message);
      console.error("Error during registration:", error.response.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto my-4 p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          {...register("fullName", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        {errors.fullName && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          {...register("phoneNumber", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        {errors.phoneNumber && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Invalid password: it should contain one uppercase letter, one lowercase letter, one digit, and one special character.",
            },
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="selectedRole" className="block text-gray-700 font-bold mb-2">
          Selected Role:
        </label>
        <div className="relative">
          <select
            id="selectedRole"
            name="selectedRole"
            {...register("selectedRole", { required: true })}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="owner">Owner</option>
            <option value="renter">Renter</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-6-6h12z" />
            </svg>
          </div>
        </div>
        {errors.selectedRole && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>

      {serverError && <span className="text-red-500 block mt-4">{serverError}</span>}
    </form>
  );
};

export default RegistrationForm;
