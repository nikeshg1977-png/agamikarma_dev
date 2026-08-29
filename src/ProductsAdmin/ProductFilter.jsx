import React from "react";

const ProductFilter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFilter({
      clothName: "",
      clothType: "",
      brandName: "",
      gender: "",
      minPrice: "",
      maxPrice: "",
      status: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border">

      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4 mb-6">
        <div className="text-3xl">🔍</div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700">
            Product Filters
          </h2>

          <p className="text-gray-500 text-sm">
            Search products using the filters below
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">

        {/* Cloth Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Cloth Name
          </label>

          <input
            type="text"
            name="clothName"
            value={filter.clothName}
            onChange={handleChange}
            placeholder="Enter Cloth Name"
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Cloth Type */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Cloth Type
          </label>

          <select
            name="clothType"
            value={filter.clothType}
            onChange={handleChange}
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All Types</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Shirt">Shirt</option>
            <option value="Jeans">Jeans</option>
            <option value="Trouser">Trouser</option>
            <option value="Kurta">Kurta</option>
            <option value="Jacket">Jacket</option>
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Brand Name
          </label>

          <input
            type="text"
            name="brandName"
            value={filter.brandName}
            onChange={handleChange}
            placeholder="Enter Brand"
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Gender
          </label>

          <select
            name="gender"
            value={filter.gender}
            onChange={handleChange}
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Minimum Price
          </label>

          <input
            type="number"
            name="minPrice"
            value={filter.minPrice}
            onChange={handleChange}
            placeholder="₹ 0"
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Maximum Price
          </label>

          <input
            type="number"
            name="maxPrice"
            value={filter.maxPrice}
            onChange={handleChange}
            placeholder="₹ 5000"
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Status
          </label>

          <select
            name="status"
            value={filter.status}
            onChange={handleChange}
            className="w-full h-11 border rounded-lg px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex items-end gap-3">

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 rounded-lg font-semibold transition"
          >
            Search
          </button>

          <button
            onClick={handleReset}
            className="border border-red-500 text-red-600 hover:bg-red-500 hover:text-white h-11 px-6 rounded-lg font-semibold transition"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductFilter;