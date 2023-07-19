// src/App.js
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const App = () => {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth",
        data
      );

      if (response.data.message === "Login successful") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setServerError("");
      }
    } catch (error) {
      setServerError(error?.response?.data?.message);
      console.error("Error during login:", error.response.data);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto my-4 p-4 bg-white shadow-md rounded-lg"
      >
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
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
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
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>

        {serverError && (
          <span className="text-red-500 block mt-4">{serverError}</span>
        )}
      </form>
    </div>
  );
};

export default App;
