import { useCallback, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import handleError from "../utils/handleError";
import { authenticateUser, logOut } from "../api/auth";
import { AuthContext } from ".";
import { toast } from "sonner";

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useLocalStorage("BHToken", null);

  const [user, setUser] = useState(null);

  const handleLogOut = useCallback(async () => {
    try {
      const res = await logOut();
      if (res.status === 200) {
        toast.success(res.data.message, { id: "logout" });
        setAccessToken(null);
        setUser(null);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("There was an error trying to log you out");
    }
  }, [setAccessToken]);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (!accessToken) return;

        const res = await authenticateUser(accessToken);

        if (res.status === 200) {
          setUser(res.data.user);
        }
      } catch (error) {
        handleLogOut();
        handleError(error);
      }
    };
    getUser();
  }, [accessToken, handleLogOut]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user }}>
      {children}
    </AuthContext.Provider>
  );
}
