import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      if (
        !(
          formData.name ||
          formData.email ||
          formData.password ||
          formData.phone ||
          formData.role
        )
      ) {
        alert("please fill all the field");
      }

      const response = await axios.post(
        "https://node-backend-lv3g.onrender.com/user/create",
        formData
      );
      const data = response.data;
      console.log(data, ".....");
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        alert("success");
        setFormData({
          email: "",
          password: "",
          phone: "",
          role: "",
          name: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Phone</label>
          <input
            type="text"
            placeholder="Enter Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Role</label>
          <input
            type="text"
            placeholder="Enter Your Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
