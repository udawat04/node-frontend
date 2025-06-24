import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Fix validation: Check if either field is missing
    if (!formData.email || !formData.password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://node-backend-lv3g.onrender.com/user/login",
        formData,
        {
          withCredentials: true, // ✅ send cookies/auth headers if backend uses them
        }
      );

      const data = response.data;
      console.log(data, ".....");

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("Role", data.alreadyEmail.role);
        alert("Login successful ✅");
        setFormData({ email: "", password: "" });
      }
    } catch (error) {
      console.log("❌ Login Error:", error);
      alert("Login failed. Please check credentials or try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
