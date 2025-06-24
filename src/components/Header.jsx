import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 to-pink-500 shadow-md mb-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold">🌟 Product App</h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-yellow-200 transition duration-200 font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white hover:text-yellow-200 transition duration-200 font-medium"
          >
            Signup
          </Link>
          <Link
            to="/show"
            className="text-white hover:text-yellow-200 transition duration-200 font-medium"
          >
            Client
          </Link>
          <Link
            to="/addproduct"
            className="text-white hover:text-yellow-200 transition duration-200 font-medium"
          >
            Add Product
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
