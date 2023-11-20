import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";


export default function App() {

    const [teams, setTeams] = useState([])

useEffect(() => {
    fetch("http://localhost:2023/api/teams", {
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    })
    .then(async data => {
      const teams = await data.json()
      setTeams(teams)
    })
},[])

useEffect(()=>{},[teams])

  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}
