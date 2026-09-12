import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { currentLoggedInEmployeeAction } from "../../features/auth/state/auth/authActions";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/ui/LoginPage";
import RegisterPage from "../../features/auth/ui/RegisterPage";
import DashboradLayout from "../layouts/DashboradLayout";
import { commonRoutes } from "./commonRoutes";
import RoleBasedRoute from "../protectedRoutes/RoleBasedRoute";
import { adminRoutes } from "./AdminRoutes";
import { employeeRoutes } from "./employeeRoutes";
import UnAuthorized from "../../shared/ui/UnAuthorized";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedInEmployeeAction());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <DashboradLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RoleBasedRoute allowedRoutes={"admin"} />,
              children: adminRoutes,
            },
            {
              element: <RoleBasedRoute allowedRoutes={"employee"} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
    {
      path: "/unauthorized",
      element: <DashboradLayout />,
      children: [
        {
          path: '',
          element: <UnAuthorized />
        }
      ]
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
