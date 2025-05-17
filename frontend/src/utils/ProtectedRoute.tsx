import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/context/authStore";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;