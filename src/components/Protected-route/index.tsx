import { Navigate, Outlet, useNavigate } from "react-router-dom";

const loginUser = localStorage.getItem("token");

const ProtectedRoute = () => {
  if (!loginUser) return <Navigate to='/login' />;
  return <Outlet />;
};

export default ProtectedRoute;
