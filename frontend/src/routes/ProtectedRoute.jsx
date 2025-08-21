import { Navigate, useLocation } from "react-router";

export const PublicRoutes = ({ children, accessToken }) => {
  const location = useLocation();
  if (accessToken) {
    return <Navigate to={location.state?.from || "/"} />;
  }
  return children;
};
