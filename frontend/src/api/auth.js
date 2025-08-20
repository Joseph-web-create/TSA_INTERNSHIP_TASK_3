import axiosInstance from "../utils/axiosInstance";

export const registerUser = async (formData) => {
  return await axiosInstance.post("/auth/register", formData);
};

export const loginUser = async (formData) => {
  return await axiosInstance.post("/auth/login", formData);
};

export const logOut = async () => {
  return await axiosInstance.post("/auth/logOut", {});
};

export const authenticateUser = async (token) => {
  return await axiosInstance.get("/auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
