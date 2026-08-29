import React, { useEffect, useState } from "react";
import api from "./api/axios";
import { toast } from "react-toastify";


const EditProductModal = ({
  open,
  setOpen,
  product,
  getProducts,
}) => {
  const [editProduct, setEditProduct] = useState({
    productId: "",
    clothName: "",
    clothType: "",
    brandName: "",
    gender: "",
    price: "",
    description: "",
    status: true,
    image: null,
    imageUrl: "",
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (product) {
      setEditProduct({
        productId: product.productId,
        clothName: product.clothName,
        clothType: product.clothType,
        brandName: product.brandName,
        gender: product.gender,
        price: product.price,
        description: product.description,
        status: product.status,
        image: null,
        imageUrl: product.imageUrl,
      });

      setPreview(product.imageUrl);
    }
  }, [product]);

console.log(preview)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setEditProduct((prev) => ({
        ...prev,
        image: file,
      }));

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("clothName", editProduct.clothName);
      formData.append("clothType", editProduct.clothType);
      formData.append("brandName", editProduct.brandName);
      formData.append("gender", editProduct.gender);
      formData.append("price", editProduct.price);
      formData.append("description", editProduct.description);
      formData.append("status", editProduct.status);

      if (editProduct.image) {
        formData.append("image", editProduct.image);
      }

      await api.put(
        `/Product/update-product/${editProduct.productId}`,
        formData
      );

    //   alert("Product Updated Successfully");
      toast.success("Product Updated Successfully");

      getProducts();

      setOpen(false);
    } catch (err) {
      console.log(err);
    //   alert("Update Failed");
      toast.error("Update Failed");
    }
  };

  if (!open) return null;

  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">

      {/* Header */}
      <div className="bg-linear-to-r from-blue-300 to-indigo-500 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Edit Product
          </h2>
          <p className="text-blue-100 text-sm">
            Update your product information
          </p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="text-white text-3xl hover:rotate-90 duration-300"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleUpdate}>

        {/* Scrollable Body */}
        <div className="overflow-y-auto max-h-[65vh] p-6">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left Side */}
            <div className="lg:col-span-2">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="font-semibold text-gray-700">
                    Cloth Name
                  </label>

                  <input
                    type="text"
                    name="clothName"
                    value={editProduct.clothName}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Brand Name
                  </label>

                  <input
                    type="text"
                    name="brandName"
                    value={editProduct.brandName}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Cloth Type
                  </label>

                  <select
                    name="clothType"
                    value={editProduct.clothType}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Shirt</option>
                    <option>T-Shirt</option>
                    <option>Jeans</option>
                    <option>Trouser</option>
                    <option>Kurta</option>
                    <option>Jacket</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={editProduct.gender}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                    <option>Unisex</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={editProduct.price}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Status
                  </label>

                  <select
                    value={editProduct.status}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        status: e.target.value === "true",
                      })
                    }
                    className="w-full mt-2 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>

              </div>

              <div className="mt-5">
                <label className="font-semibold text-gray-700">
                  Description
                </label>

                <textarea
                  rows="4"
                  name="description"
                  value={editProduct.description}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* Right Side */}
            <div>

              <div className="bg-gray-50 border rounded-2xl p-5">

                <h3 className="font-semibold text-lg text-center mb-4">
                  Product Image
                </h3>

                {preview ? (
                  <img
                    src={
                      preview.startsWith("blob:")
                        ? preview
                        : `${preview}`
                    }
                    alt="preview"
                    className="w-full h-64 object-cover rounded-xl border shadow"
                  />
                ) : (
                  <div className="h-64 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="mt-5 w-full text-sm file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg file:cursor-pointer"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-6 py-4 flex justify-end gap-3">

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-8 py-2 rounded-xl bg-linear-to-r from-blue-300 to-indigo-500 text-white font-semibold hover:scale-105 transition"
          >
            Update Product
          </button>

        </div>

      </form>

    </div>

  </div>
  );
};

export default EditProductModal;