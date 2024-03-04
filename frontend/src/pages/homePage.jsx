import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const navItems = [
    {
      to: "/organize",
      text: "ORGANIZAR EVENTO",
      color: "bg-main-color2 hover:bg-blue-500",
    },
    {
      to: "/teams",
      text: "BUSCAR DEPORTE",
      color: "bg-main-color1 hover:bg-green-600",
    },
    {
      to: "/myTeams",
      text: "MIS EQUIPOS",
      color: "bg-main-color1 hover:bg-green-600",
    },
    {
      to: "/history",
      text: "HISTORIAL",
      color: "bg-main-color2 hover:bg-blue-500",
    },
  ];

  return (
    <div>
      <div className="">
        <h1 className="text-3xl px-10 py-3">
          ¡Bienvenido/a a un nuevo espacio recreativo!
        </h1>
        <p className="px-10 py-5 text-2xl">¿Qué querés hacer hoy?</p>
        <img className="w-full h-[350px] object-cover object-center" src="../../public/banner.jpg" alt="banner de NEXOSPORT" />
      </div>

      <div className="bg-main-dark text-white p-5 space-y-3">
        <h2 className="text-2xl font-bold mx-20">Organizá tu evento</h2>
        <p className="mx-20">
          Creá eventos sobre la disciplina que más te guste y eligí el lugar,
          la fecha y la hora. <br /> ¡Animate a ser el gestor de tus encuentros deportivos!
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