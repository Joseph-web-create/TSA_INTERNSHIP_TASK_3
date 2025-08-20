import React from "react";
import { useAuth } from "../store";

export const RootLayout = () => {
  const { user } = useAuth();

  console.log(user);

  return <div>RootLayout</div>;
};
