import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { logOut, getProfile } from "../services/auth.service.js";
import { useEffect, useState } from "react";

const SessionContext = createContext();

function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error(
      "useSession debe estar dentro del proveedor SessionContext"
    );
  }
  return context;
}

function useProfile() {
  const { profile } = useSession();
  return profile;
}

function useUser() {
  const { user } = useSession();
  return user;
}

function usePassword() {
  const { password } = useSession();
  return password;
}

function SessionProvider({ children }) {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const onLogOut = useCallback(async () => {
    try {
      await logOut(useUser, usePassword);
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  }, [navigate]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const fetchedProfile = await getProfile();
        setProfile(fetchedProfile);
      } catch (error) {
        console.error("Error al obtener el perfil:", error.message);
      }
    }

    fetchProfile();
  }, []);

  const value = useMemo(() => {
    return { profile, onLogOut }
  }, [profile, onLogOut])

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, useSession, useProfile, useUser, SessionProvider };