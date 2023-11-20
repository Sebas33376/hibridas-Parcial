import { Link } from "react-router-dom";
import "./teams.css"
import { PropTypes } from "prop-types";

const Teams = ({teams}) => {
    
    const { _id, name, sport, joined, place, skills_level, gender, img } = teams;
   
  return (
    <li>
      <h2>{name}</h2>
      <span>{sport}</span>
      <p>{joined[0]}/{joined[1]}</p>
      <p>{place}</p>
      <p>{skills_level}</p>
      <p>{gender}</p>
      <img src={img} alt=""  loading="lazy"/>
      <Link to={`/teams/${_id}`}>Ver equipo</Link>
    </li>
  );
};

Teams.protoTypes = {
  teams: PropTypes.object.isRequired
}

export default Teams;
