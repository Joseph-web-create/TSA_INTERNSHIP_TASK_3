import axiosInstance from "../utils/axiosInstance";

export const registerUser = async (formData) => {
  return await axiosInstance.post("/api/auth/register", formData);
};

export const authenticateUser = async (token) => {
  return await axiosInstance.get("/auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
