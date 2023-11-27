import { Link } from "react-router-dom";
import { useProfile } from "../context/SessionContext";

const HomePage = () => {
  const profile = useProfile();
  console.log(profile)
  return (
    <div>
      <div className="my-10 container mx-auto px-4"> 
        <h1 className="text-2xl">Hola <span className="font-bold">{profile?.userName}!</span></h1>
      <p className="py-5">¿Qué deporte quieres hacer hoy?</p>
      </div>
     
      <div className="bg-gray-900 px-4 text-white py-8 space-y-4">
        <h2 className="text-2xl font-bold">Organizá tu partido</h2>
        <p className="">
          Creá partidos del deporte que más te guste! Elige el lugar, la fecha y
          la hora. Anímate a ser el director de tus propios eventos deportivos!
        </p>
      </div>
      <ul className="container mx-auto grid grid-cols-2 px-4 gap-3 my-10">
        <li className="bg-blue-500 py-16 text-center rounded-xl">
          <Link to="">Organizar</Link>
        </li>
        <li className="bg-green-500 py-16 text-center rounded-xl">
          <Link to="/teams">Buscar Equipos</Link>
        </li>
        <li className="bg-green-500 py-16 text-center rounded-xl">
          <Link to="">Mis Equipos</Link>
        </li>
        <li className="bg-blue-500 py-16 text-center rounded-xl">
          <Link to="">Equipos Creados</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
