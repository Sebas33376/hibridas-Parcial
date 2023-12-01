import { Link } from "react-router-dom";
import { useProfile } from "../context/SessionContext";

const HomePage = () => {
  const profile = useProfile();

  return (
    <div>
      <div className="my-10 container mx-auto px-4">
        <h1 className="text-2xl">
          ¡Hola <span className="font-bold">{profile?.userName}</span>!
        </h1>
        <p className="py-2">¿Qué deporte querés hacer hoy?</p>
      </div>

      <div className="bg-main-dark px-3 text-white py-3 space-y-3">
        <h2 className="text-2xl font-bold">¡Organizá tu partido!</h2>
        <p className="">
          ¡Creá partidos del deporte que más te guste! ¡Elige el lugar, la fecha
          y la hora! ¡Anímate a ser el director de tus propios eventos
          deportivos!
        </p>
      </div>
      <ul className="container mx-auto grid grid-cols-2 md:grid-cols-4 px-4 gap-3 my-10">
        <li className="bg-main-color2 py-12 text-center rounded-xl md:col-span-1">
          <Link to="/organize">Organizar</Link>
        </li>
        <li className="bg-main-color1 py-12 text-center rounded-xl md:col-span-1">
          <Link to="/teams">Buscar Equipos</Link>
        </li>
        <li className="bg-main-color1 py-12 text-center rounded-xl md:col-span-1">
          <Link to="/myTeams">Mis Equipos</Link>
        </li>
        <li className="bg-main-color2 py-12 text-center rounded-xl md:col-span-1">
          <Link to="/history">Historial</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
