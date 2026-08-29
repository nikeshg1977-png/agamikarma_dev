import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userId = sessionStorage.getItem("userId");
  const role = sessionStorage.getItem("role");
  const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       sessionStorage.clear();

//       alert("Session Expired. Please Login Again.");

//       navigate("/");
//     }, 60000); // 60 seconds = 1 minute

//     return () => clearTimeout(timer);
//   }, [navigate]);

  if (!userId || !role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;