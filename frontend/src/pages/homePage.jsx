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
        <h2 className="text-2xl font-bold mx-10">¡Organizá tu partido!</h2>
        <p className="mx-10">
          ¡Creá partidos del deporte que más te guste! <br /> ¡Elige el lugar, la fecha
          y la hora! <br /> ¡Anímate a ser el director de tus propios eventos
          deportivos!
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 px-4 gap-3 my-20">
          <Link to="/organize" className="bg-main-color2 py-12 text-center rounded-xl md:col-span-1 hover:bg-blue-500">Organizar</Link>
          <Link to="/teams" className="bg-main-color1 py-12 text-center rounded-xl md:col-span-1 hover:bg-green-600">Buscar Equipos</Link>
          <Link to="/myTeams" className="bg-main-color1 py-12 text-center rounded-xl md:col-span-1 hover:bg-green-600">Mis Equipos</Link>
          <Link to="/history" className="bg-main-color2 py-12 text-center rounded-xl md:col-span-1 hover:bg-blue-500">Historial</Link>
      </div>
    </div>
  );
};

export default HomePage;
