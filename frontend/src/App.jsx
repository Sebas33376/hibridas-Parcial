import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import CircularProgress from '@mui/material/CircularProgress';

export default function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:2023/api/teams", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} - ${response.statusText}`);
        }
        const teamsData = await response.json();
        setTeams(teamsData);
      } catch (error) {
        console.error("Error al obtener equipos:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="flex items-center justify-center h-screen"><CircularProgress /></div>
      ) : (
        <Outlet />
      )}
    </Layout>
  );
}
