import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientPage = () => {
  const [product, setProduct] = useState([]);
  const Token = localStorage.getItem("token");
  const Role = localStorage.getItem("Role");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://node-backend-lv3g.onrender.com/product/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Token}`,
            },
          }
        );

        const data = response.data;
        setProduct(data.result);
        console.log(data, "datat");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-10 capitalize">
        {Role} Page
      </h2>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h3 className="text-2xl font-semibold bg-pink-200 text-pink-800 px-6 py-4">
          Product Details
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border-t border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 border-b">Name</th>
                <th className="px-6 py-3 border-b">Price</th>
                <th className="px-6 py-3 border-b">Created By</th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((p, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-all duration-150"
                  >
                    <td className="px-6 py-3 border-b">{p.name}</td>
                    <td className="px-6 py-3 border-b">₹ {p.price}</td>
                    <td className="px-6 py-3 border-b">
                      {p.userId?.name || "N/A"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
