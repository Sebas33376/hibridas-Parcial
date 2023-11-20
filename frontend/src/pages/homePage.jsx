import { Link } from "react-router-dom";
import { useProfile } from "../context/SessionContext";

const HomePage = () => {
  const profile = useProfile();
  return (
    <>
      <h1>Hola {profile?.userName}!</h1>
      <p>¿Qué deporte quieres hacer hoy?</p>
      <div>
        <h2>Organizá tu partido</h2>
        <p>
          Creá partidos del deporte que más te guste! Elige el lugar, la fecha y
          la hora. Anímate a ser el director de tus propios eventos deportivos!
        </p>
      </div>
      <ul>
        <li>
          <Link to="">Organizar</Link>
        </li>
        <li>
          <Link to="/teams">Buscar Equipos</Link>
        </li>
        <li>
          <Link to="">Mis Equipos</Link>
        </li>
        <li>
          <Link to="">Equipos Creados</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
