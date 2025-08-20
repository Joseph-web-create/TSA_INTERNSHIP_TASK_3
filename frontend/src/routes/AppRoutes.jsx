import { AuthLayout } from "../layout/AuthLayout";
import { createBrowserRouter, RouterProvider } from "react-router";

import { SignUp } from "../pages/Login";
import { Login } from "../pages/SignUp";

export const AppRoutes = () => {
  const routes = [
    {
      path: "auth",
      element: <AuthLayout />,
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
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
