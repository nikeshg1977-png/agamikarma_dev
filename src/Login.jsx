import { useEffect, useState } from "react";
import api from "./api/axios";
import Dashboard from "./AddProducts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  console.log(login)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await api.post("/Login/login", login);

      console.log(response.data);

      // alert("Login Successful");
      toast.success("Login Successful");

      // Save data if needed
      sessionStorage.setItem("userId", response.data.userId);
      sessionStorage.setItem("role", response.data.role);
      sessionStorage.setItem("token", response.data.token);
      console.log(sessionStorage.getItem("token"));
      if (response.data.token && response.data.role === "Admin") {
        navigate("/dashboard");
      }

    } catch (error) {
      console.log(error);

      // alert(error.response?.data?.message || "Invalid Username or Password");
      toast.error(error.response?.data?.message || "Invalid Username or Password");
    } finally {
      setLoading(false);
    }
    setLogin((prev)=>({
      ...prev,
      username: "",
      password: "",
    }))
  };

  return (
    <div className="h-auto  overflow-hidden  flex mt-8 justify-center px-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}
        <div className="hidden md:flex bg-linear-to-br from-blue-700 via-indigo-600 to-purple-700 p-10 text-white flex-col justify-center">

          <h1 className="text-5xl font-bold mb-5">
            Welcome Back 👋
          </h1>

          <p className="text-lg text-blue-100 leading-8">
            Sign in to manage your clothing store products, inventory,
            and orders from one place.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                📦
              </div>

              <span>Manage Products</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                🚀
              </div>

              <span>Fast Dashboard</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                🔒
              </div>

              <span>Secure Authentication</span>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="p-10">

          <div className="text-center mb-8">

            <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">
              👤
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-5">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Enter your credentials to continue
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-5">

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Username
              </label>

              <input
                type="text"
                // autoComplete="off"
                name="username"
                value={login.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <div className="mb-6">

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">

                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-20"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>

                    <path
                      className="opacity-90"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>

                  </svg>

                  Logging in...

                </div>
              ) : (
                "Login"
              )}
            </button>

          </form>

          <div className="mt-8 text-center text-sm text-gray-400">
            © 2026 Clothing Store Admin Panel
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;