import { AuthLayout } from "../layout/AuthLayout";
import { createBrowserRouter, RouterProvider } from "react-router";

import { PrivateRoutes, PublicRoutes } from "./ProtectedRoute";
import { useAuth } from "../store";
import { RootLayout } from "../layout/RootLayout";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";

export const AppRoutes = () => {
  const { accessToken } = useAuth();
  const routes = [
    {
      path: "auth",
      element: (
        <PublicRoutes accessToken={accessToken}>
          <AuthLayout />
        </PublicRoutes>
      ),
      children: [
        {
          path: "register",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <PrivateRoutes accessToken={accessToken}>
          <RootLayout />
        </PrivateRoutes>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
