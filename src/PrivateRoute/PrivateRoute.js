import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-sky-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-sky-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-sky-400"></div>
  </div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
