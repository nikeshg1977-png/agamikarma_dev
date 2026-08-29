import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { downloadPDF } from "../utils/pdfReport";

const Nav = () => {
    const [name, setName] = useState("Tushar Diwan");

    const navigate = useNavigate();
    const location = useLocation();

    const pageName = location.pathname.split("/")[1];

    const isDashboard = pageName === "dashboard";
    const isProducts = pageName === "products";

    const handleClick = () => {
        navigate("/products");
    };

    const handleLogin = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div className="sticky  top-0 z-50 bg-linear-to-r from-blue-700 via-indigo-600 to-purple-600 shadow-lg">

            <div className="max-w-7xl  px-4 py-4 flex items-center justify-between  min-w-full">

                {/* Logo */}
                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-white text-blue-700 font-bold text-xl flex items-center justify-center shadow-md">
                        AK
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold">
                            AgamiKarma Store Admin
                        </h2>

                        <p className="text-blue-100 text-sm">
                            Product Management System
                        </p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">


                    {isDashboard && (
                        <button
                            onClick={handleClick}
                            className="px-6 py-2.5 rounded-xl bg-white  text-blue-700 font-semibold shadow hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                        >
                            📦 All Products
                        </button>
                    )}

                    {isProducts && (
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="px-6 py-2.5 rounded-xl bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                        >
                            🏠 Dashboard
                        </button>
                    )}

                    {/* <div className="flex items-center gap-3 bg-white/15 px-4 py-2 rounded-xl backdrop-blur-sm">

                        <div className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-lg">
                            {name.charAt(0)}
                        </div>

                        <div>
                            <p className="text-white font-semibold">
                                {name}
                            </p>

                            <p className="text-xs text-blue-100">
                                Administrator
                            </p>
                        </div>

                    </div> */}

                    {isProducts && (
                        <button
                            onClick={downloadPDF}
                            className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg transition-all duration-300"
                        >
                            📄 Download PDF
                        </button>
                    )}

                    <button
                        onClick={handleLogin}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                        Logout
                    </button>
                    <div className="flex items-center gap-3 bg-white/15 px-4 py-2 rounded-xl backdrop-blur-sm">

                        <div className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-lg">
                            {name.charAt(0)}
                        </div>

                        <div>
                            <p className="text-white font-semibold">
                                {name}
                            </p>

                            <p className="text-xs text-blue-100">
                                Administrator
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Nav;