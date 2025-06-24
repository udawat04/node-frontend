import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  const Token = localStorage.getItem("token");

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
      if (!(formData.name || formData.price)) {
        alert("please fill all the field");
      }

      const response = await axios.post(
        "https://node-backend-lv3g.onrender.com/product/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      const data = response.data;
      console.log(data, ".....");
      if (response.status === 200) {
        alert("Product Added Successfully");
        setFormData({ name: "", price: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Add Product
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            placeholder="Enter Your Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Price</label>
          <input
            type="text"
            placeholder="Enter Your Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
