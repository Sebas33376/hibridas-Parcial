import { useEffect, useState } from "react";
import List from "../../components/teamsList";
import { getTeams } from "../../services/teams.service";

export default function TeamsPage() {

    const [teams, setTeams] = useState([])

useEffect(() => {
  getTeams()
    .then(data => setTeams(data))
},[])

useEffect(()=>{},[teams])

  return (
    <div>
      <List teamsList={teams}/>
    </div>
  );
}