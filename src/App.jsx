import { useEffect, useState, lazy } from 'react'
import { Suspense } from 'react'
// import AddProducts from './AddProducts'
const AddProducts = lazy(() => import('./AddProducts'))
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Card from './Card'
import WeddingInvitation from './weddingcard/WeddingInvitation'
// import ProductList from './ProductList'
const ProductList = lazy(() => import('./ProductsAdmin/ProductList'))
// import ProtectedRoute from './ProtectedRoute'
const ProtectedRoute = lazy(() => import('./ProductsAdmin/ProtectedRoute'))
// import Login from './Login'
const Login = lazy(() => import('./Login'))
// import Nav from './header/Nav'
const Nav = lazy(() => import('./header/Nav'))
// import PageNotFound from './PageNotFound'
const PageNotFound = lazy(() => import('./PageNotFound'))


function App() {
// public/images/bride-placeholder.jpg
// public/images/groom-placeholder.jpg
// public/images/gallery/gallery-1.jpg
// public/images/gallery/gallery-2.jpg
// public/images/gallery/gallery-3.jpg
// public/images/gallery/gallery-4.jpg
// public/images/gallery/gallery-5.jpg
// public/images/gallery/gallery-6.jpg
// public/music/wedding-music.mp3
 const [started, setStarted] = useState(false);
  return (
    //<div className="bg-linear-to-br from-blue-100 via-white to-indigo-100">
    <div>
      {/* <div class='flex justify-between items-center pr-4 bg-gray-200'>
    <button onClick={handleLogin} class='text-2xl cursor-pointer text-red-500 p-4'>{name}</button>
     {pageName == 'dashboard' && (
      <button type='button'  onClick={handleClick} class='text-2xl cursor-pointer text-green-400'>All Product List</button>
     )}
    </div> */}
      {/* --------------------------------------- */}
      {/* <Nav /> */}
      {/* <Card/> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AddProducts/>
          </ProtectedRoute>
        } />
        <Route path="/products" element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        } />
        <Route path="*" element={<PageNotFound/>} />
      </Routes> */}
      <WeddingInvitation />
    </div>
  )
}

export default App
