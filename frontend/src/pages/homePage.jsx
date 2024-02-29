import React from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../context/SessionContext";

const HomePage = () => {
  const profile = useProfile();

  const navItems = [
    {
      to: "/organize",
      text: "Organizar",
      color: "bg-main-color2 hover:bg-blue-500",
    },
    {
      to: "/teams",
      text: "Buscar Equipos",
      color: "bg-main-color1 hover:bg-green-600",
    },
    {
      to: "/myTeams",
      text: "Mis Equipos",
      color: "bg-main-color1 hover:bg-green-600",
    },
    {
      to: "/history",
      text: "Historial",
      color: "bg-main-color2 hover:bg-blue-500",
    },
  ];

  return (
    <div>
      <div className="my-10 container mx-auto px-4">
        <h1 className="text-2xl">
          ¡Hola <span className="font-bold">{profile?.userName}</span>!
        </h1>
        <p className="py-2">¿Qué deporte querés hacer hoy?</p>
      </div>

      <div className="bg-main-dark text-white p-6 space-y-3">
        <h2 className="text-2xl font-bold mx-20">Organizá tu partido</h2>
        <p className="mx-20">
          Creá partidos del deporte que más te guste y elige el lugar,
          la fecha y la hora. <br /> ¡Animate a ser el director de tus propios
          eventos deportivos!
        </p>
      </div>

      <ul className="container mx-auto flex justify-center flex-wrap gap-3 my-10 mb-20">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className={`py-6 px-4 text-center rounded-xl inline-block ${item.color} flex items-center justify-center`}
              style={{ width: "180px", height: "120px" }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;