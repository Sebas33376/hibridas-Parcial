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

function SessionProvider({children}) {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const onLogOut = useCallback(() => {
    logOut();
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }, [navigate]);

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  const value = useMemo(() => {
    return {profile, onLogOut}
  },[profile, onLogOut])

  return (
    <SessionContext.Provider value={value}>
        {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, useSession, useProfile, SessionProvider };
