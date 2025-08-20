import { Navigate, useLocation } from "react-router";

export const PrivateRoutes = ({ children, accessToken }) => {
  const location = useLocation();
  if (!accessToken) {
    return (
      <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
    );
  }

  return children;
};

export const PublicRoutes = ({ children, accessToken }) => {
  const location = useLocation();
  if (accessToken) {
    return <Navigate to={location.state?.from || "/"} />;
  }
  return children;
};
