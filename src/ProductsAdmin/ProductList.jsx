import React, { useEffect, useState } from "react";
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';
// import EditProductModal from "./EditProductModal";
import api from "../api/axios";
import { toast } from "react-toastify";
import ProductFilter from "./ProductFilter";
import EditProductModal from "../EditProductModal ";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filter, setFilter] = useState({
        clothName: "",
        clothType: "",
        brandName: "",
        gender: "",
        minPrice: "",
        maxPrice: "",
        status: "",
    });

    const filteredProducts = products.filter((item) => {

        const clothName =
            item.clothName
                .toLowerCase()
                .includes(filter.clothName.toLowerCase());

        const clothType =
            filter.clothType === "" ||
            item.clothType === filter.clothType;

        const brand =
            item.brandName
                .toLowerCase()
                .includes(filter.brandName.toLowerCase());

        const gender =
            filter.gender === "" ||
            item.gender === filter.gender;

        const status =
            filter.status === "" ||
            item.status.toString() === filter.status;

        const minPrice =
            filter.minPrice === "" ||
            item.price >= Number(filter.minPrice);

        const maxPrice =
            filter.maxPrice === "" ||
            item.price <= Number(filter.maxPrice);

        return (
            clothName &&
            clothType &&
            brand &&
            gender &&
            status &&
            minPrice &&
            maxPrice
        );
    });
    const handleEdit = (product) => {
        setSelectedProduct(product);
        // alert(`Editing product: ${product.clothName}`);
        setOpen(true);
    };

    const getProducts = async () => {
        try {
            const response = await api.get("/Product/get-products");

            setProducts(response.data);
        } catch (error) {
            console.log(error);
            // alert("Failed to load products");
            toast.error("Failed to load products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return (
            <h2 className="text-center text-xl mt-10">
                Loading Products...
            </h2>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
                Product List
            </h1>

            <div className="overflow-x-auto overflow-hidden p-4 bg-white rounded-xl shadow-lg">
                {/* <ProductFilter
                    filter={filter}
                    setFilter={setFilter}
                /> */}
                <table className="min-w-full">

                    <thead className="bg-blue-600  text-white">

                        <tr>
                            <th className="p-4">Sr.No</th>
                            <th className="p-4">Image</th>
                            <th className="p-4">Cloth Name</th>
                            <th className="p-4">Type</th>
                            <th className="p-4">Brand</th>
                            <th className="p-4">Gender</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Edit</th>
                        </tr>

                    </thead>

                    <tbody className="text-center">

                        {products.length > 0 ? (
                            filteredProducts.map((item) => (
                                <tr
                                    key={item.productId}
                                    className="border-b hover:bg-gray-100"
                                >
                                    <td className="p-3 ">{item.productId}</td>
                                    <td className="p-3 flex items-center justify-center">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.clothName}
                                            className="w-20 h-20 object-cover rounded-lg border hover:scale-150 ml-2 overflow-hidden transition-transform duration-300"
                                        />
                                    </td>

                                    <td className="p-3 text-center">{item.clothName}</td>

                                    <td className="p-3">{item.clothType}</td>

                                    <td className="p-3">{item.brandName}</td>

                                    <td className="p-3">{item.gender}</td>

                                    <td className="p-3">₹{item.price}</td>

                                    <td className="p-3">{item.description}</td>

                                    <td className="p-3">
                                        {item.status ? (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                                                Inactive
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            <EditCalendarTwoToneIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="8"
                                    className="text-center p-8 text-gray-500"
                                >
                                    No Products Found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

            {open && selectedProduct && (
                <EditProductModal
                    product={selectedProduct}
                    open={open}
                    setOpen={setOpen}
                    getProducts={getProducts}
                />
            )}
        </div>

    );
};

export default ProductList;