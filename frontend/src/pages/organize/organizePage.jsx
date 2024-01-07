import "./OrganizePage.css";
import IconFilter from "../../icons/IconFilter";
import { useCallback, useState } from "react";
import { addTeam } from "../../services/teams.service";
import { useProfile } from "../../context/SessionContext";

const OrganizePage = () => {
  const profile = useProfile();

  const [formData, setFormData] = useState({
    name: "",
    img: "",
    sport: "",
    joined: [profile._id],
    place: "",
    max: "",
    date: "",
    hour: "",
    description: "",
    skills_level: "",
    gender: "",
    organizer_id: profile._id,
    direction: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
      addTeam({ formData });
    },
    [formData]
  );

  return (
    <div className="max-w-md mx-auto my-20 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="my-6 px-4 font-bold text-xl">Organizar</h1>
        <span className="mr-4">
          <IconFilter />
        </span>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 p-5">
        <div>
          <label className="block mb-2">Nombre del equipo:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-2">Portada:</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Deporte:</label>
          <select
            name="sport"
            onChange={onChange}
            value={formData.sport}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="Football">Football</option>
            <option value="Volley">Volley</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Ciudad:</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <br />
        <div>
          <label className="block mb-2">Fecha del encuentro:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <br />
        <div>
          <label className="block mb-2">Hora:</label>
          <input
            type="text"
            name="hour"
            value={formData.hour}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <br />
        <div>
          <label className="block mb-2">Descripción:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <br />
        <div>
          <label className="block mb-2">Maximo de jugadores:</label>
          <select
            name="max"
            onChange={onChange}
            value={formData.max}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </div>
        <br />
        <div>
          <label className="block mb-2">Nivel de habilidad:</label>
          <select
            name="skills_level"
            onChange={onChange}
            value={formData.skills_level}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Genero de jugadores:</label>
          <select
            name="gender"
            onChange={onChange}
            value={formData.gender}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="Hombres">Hombres</option>
            <option value="Mujeres">Mujeres</option>
            <option value="Mixto">Mixto</option>
          </select>
        </div>
        <br />
        <div>
          <label className="block mb-2">Dirección del punto de encuentro:</label>
          <input
            type="text"
            name="direction"
            value={formData.direction}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div >
          <button
            type="submit"
            className="w-full bg-main-color1 text-white font-bold py-2 px-4 rounded-md"
          >
            Organizar equipo
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrganizePage;
