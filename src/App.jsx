import { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ProductList from './ProductList'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'


function App() {
  const [name, setName] = useState('')
 const navigate=useNavigate()
 const location = useLocation();
  const pageName = location.pathname.split("/")[1];
  console.log(pageName)
  const handleClick=()=>{
    navigate('/products')
  }
 
  const handleLogin=()=>{
    sessionStorage.clear()
    navigate('/')
  }
useEffect(() => {
setName("Tushar Diwan")
},[])
console.log(name)
  return (
    <>
    {/* <div class='flex justify-between items-center pr-4 bg-gray-200'>
    <button onClick={handleLogin} class='text-2xl cursor-pointer text-red-500 p-4'>{name}</button>
     {pageName == 'dashboard' && (
      <button type='button'  onClick={handleClick} class='text-2xl cursor-pointer text-green-400'>All Product List</button>
     )}
    </div> */}
   {/* --------------------------------------- */}
  <div className="sticky top-0 z-50 bg-linear-to-r from-blue-700 via-indigo-600 to-purple-600 shadow-lg">

  <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

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

      {pageName === "dashboard" && (
        <button
          type="button"
          onClick={handleClick}
          className="px-6 py-2.5 rounded-xl bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 hover:scale-105 transition-all duration-300"
        >
          📦 All Products
        </button>
      )}

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

      <button
        onClick={handleLogin}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Logout
      </button>

    </div>

  </div>

</div>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />
     <Route path="/products" element={<ProductList/>} />
    </Routes>
    </>
  )
}

export default App
