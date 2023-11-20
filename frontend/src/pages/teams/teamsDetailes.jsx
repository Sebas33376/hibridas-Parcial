import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamsById } from "../../services/teams.service";

const TeamsDetails = () => {
  const [team, setTeam] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTeamsById(id)
      .then((data) => setTeam(data));
  }, [id]);

  return team.name !== undefined ? (
    <div>
      <img src={team.img} alt="imagen ilustrativa del deporte" loading="lazy" />
      <div>
        <h1>{team.name}</h1>
        <p>{team.description}</p>
        <ul>
          <li>cantidad</li>
          <li>{team.gender}</li>
          <li>{team.skills_level}</li>
        </ul>
      </div>
      <h2>{team.date}</h2>
      <p>{team.hour}</p>
      <h2>{team.place}</h2>
      <p>{team.direction}</p>
    </div>
  ) : (
    <div>
      <h1>Cargando</h1>
    </div>
  );
};

export default TeamsDetails;
