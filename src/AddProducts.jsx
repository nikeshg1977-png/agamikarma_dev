import React, { useState } from "react";
import api from "./api/axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [preview, setPreview] = useState("");

  const [product, setProduct] = useState({
    clothName: "",
    clothType: "",
    brandName: "",
    gender: "",
    price: "",
    status: "Active",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    console.log(file);

    setProduct((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.image) {
      // alert("Please Select Image");
      toast.error("Please Select Image");
      return;
    }

    const formData = new FormData();

    formData.append("clothName", product.clothName);
    formData.append("clothType", product.clothType);
    formData.append("brandName", product.brandName);
    formData.append("gender", product.gender);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("status", product.status === "Active");
    formData.append("image", product.image);

    console.log("======= FormData ========");

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await api.post(
        "/Product/add-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // alert(response.data.message);
      toast.success(response.data.message);

      setProduct({
        clothName: "",
        clothType: "",
        brandName: "",
        gender: "",
        price: "",
        status: "Active",
        description: "",
        image: null,
      });

      setPreview("");
    } catch (error) {
      console.log(error.response);

      // alert(
      //   error.response?.data?.message ||
      //   error.response?.data?.Error ||
      //   "Upload Failed"
      // );
      toast.error(
        error.response?.data?.message ||
        error.response?.data?.Error ||
        "Upload Failed"
      );
    }
  };

 return (
  <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-4">

    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-6">

        <h1 className="text-3xl font-bold text-white">
          Product Upload
        </h1>

        <p className="text-blue-100 mt-1">
          Add a new product to your store
        </p>

      </div>

      <form onSubmit={handleSubmit} className="p-8">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <div className="grid md:grid-cols-2 gap-6">

              {/* Cloth Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cloth Name
                </label>

                <input
                  type="text"
                  name="clothName"
                  placeholder="Enter Cloth Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  value={product.clothName}
                  onChange={handleChange}
                />
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brand Name
                </label>

                <input
                  type="text"
                  name="brandName"
                  placeholder="Enter Brand Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  value={product.brandName}
                  onChange={handleChange}
                />
              </div>

              {/* Cloth Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cloth Type
                </label>

                <select
                  name="clothType"
                  value={product.clothType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select Type</option>
                  <option>Shirt</option>
                  <option>T-Shirt</option>
                  <option>Jeans</option>
                  <option>Dress</option>
                </select>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender
                </label>

                <select
                  name="gender"
                  value={product.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select Gender</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={product.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

            </div>

            {/* Description */}
            <div className="mt-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                rows="5"
                placeholder="Enter Product Description..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={product.description}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="border border-gray-200 rounded-2xl bg-gray-50 p-6 shadow-sm">

              <h2 className="text-xl font-bold text-center text-gray-800 mb-5">
                Product Image
              </h2>

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-72 object-cover rounded-xl border shadow-md"
                />
              ) : (
                <div className="h-72 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 16l5-5 4 4 8-8 1 1v10H3z"
                    />
                  </svg>

                  <p>No Image Selected</p>

                </div>
              )}

              <label className="block mt-6">

                <span className="text-sm font-semibold text-gray-700">
                  Upload Image
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="mt-3 w-full text-sm
                  file:mr-4
                  file:px-4
                  file:py-2
                  file:border-0
                  file:rounded-lg
                  file:bg-blue-600
                  file:text-white
                  file:font-semibold
                  file:cursor-pointer
                  hover:file:bg-blue-700"
                />

              </label>

            </div>

          </div>

        </div>

        {/* Button */}

        <div className="mt-10 flex justify-end">

          <button
            type="submit"
            className="px-10 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Upload Product
          </button>

        </div>

      </form>

    </div>

  </div>
);
};

export default Dashboard;