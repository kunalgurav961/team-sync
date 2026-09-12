import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  const { employee, isLoading } = useSelector((store) => store.auth);
  if (isLoading) return <h1>Loding...</h1>
  if (employee) return <Navigate to={"/home"} />;
  return <Outlet />;
};

export default PublicRoutes;
