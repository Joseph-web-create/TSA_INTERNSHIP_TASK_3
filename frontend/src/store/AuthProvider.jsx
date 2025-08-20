import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import handleError from "../utils/handleError";
import { authenticateUser } from "../api/auth";
import { AuthContext } from ".";

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useLocalStorage("BHToken", null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const getUser = async () => {
        if (!accessToken) return;

        const res = await authenticateUser(accessToken);

        if (res.status === 200) {
          setUser(res.data.user);
        }
      };

      getUser();
    } catch (error) {
      handleError(error);
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user }}>
      {children}
    </AuthContext.Provider>
  );
}
