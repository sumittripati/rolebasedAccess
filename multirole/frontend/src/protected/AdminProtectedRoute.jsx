import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contextApi/Contextapi";

const AdminProtectedRoute = () => {
  const { islogin, user } = useAuthContext();

  if (!islogin) {
    return <Navigate to="/adminlogin" replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
