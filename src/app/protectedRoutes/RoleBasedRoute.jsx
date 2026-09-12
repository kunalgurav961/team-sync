import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBasedRoute = ({allowedRoutes}) => {
    let { employee } = useSelector((store) => store.auth);
    
    if (!allowedRoutes.includes(employee?.role)) return <Navigate to={'/unauthorized'} />
  return <Outlet />;
};

export default RoleBasedRoute;
