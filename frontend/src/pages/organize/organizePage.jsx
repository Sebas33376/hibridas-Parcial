import "./OrganizePage.css";
import IconFilter from "../../icons/IconFilter";
import { useCallback, useState } from "react";
import { addTeam } from "../../services/teams.service";
import { useProfile } from "../../context/SessionContext";
import IconBack from "../../icons/IconBack";
import { Link } from "react-router-dom";

const OrganizePage = () => {
  const profile = useProfile();

  const INITIAL_FORM_DATA = {
    name: "",
    sport: "",
    joined: [profile._id],
    max: "",
    place: "",
    date: "",
    deadline: "",
    hour: "",
    description: "",
    skills_level: "",
    gender: "",
    organizer_id: profile._id,
    direction: "",
    state: true
  }

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
      addTeam({ formData });
      setFormData(INITIAL_FORM_DATA); 
    },
    [formData]
  );

  return (
    <>
      <Link to="/" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md hover:bg-gray-600">
        <span >
          <IconBack />
        </span>
      </Link>
      <div className="max-w-md mx-auto mb-20">
        <div className="flex justify-between items-center my-2">
          <h1 className="my-2 px-4 font-bold text-xl">Organizar</h1>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 p-5">
          <div>
            <label className="block mb-2" htmlFor="nombre">Nombre del equipo:</label>
            <input
              type="text"
              name="name"
              id="nombre"
              value={formData.name}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="name"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="imagen">Portada:</label>
            <input
              type="url"
              name="img"
              id="imagen"
              value={formData.img}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="deporte">Deporte:</label>
            <select
              name="sport"
              id="deporte"
              onChange={onChange}
              value={formData.sport}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="Beisbol">Beisbol</option>
              <option value="Basquet">Basquet</option>
              <option value="Futbol">Futbol</option>
              <option value="Jockey">Jockey</option>
              <option value="Rugby">Rugby</option>
              <option value="Tenis">Tenis</option>
              <option value="Volley">Volley</option>
            </select>
          </div>
          <div>
            <label className="block mb-2" htmlFor="localidad">Localidad:</label>
            <input
              type="text"
              name="place"
              id="localidad"
              value={formData.place}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="fecha">Fecha del encuentro:</label>
            <input
              type="date"
              name="date"
              id="fecha"
              value={formData.date}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="hora">Hora:</label>
            <input
              type="time"
              name="hour"
              id="hora"
              value={formData.hour}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="descripcion">Descripción:</label>
            <input
              type="text"
              name="description"
              id="descripcion"
              value={formData.description}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="jugadores">Maximo de jugadores:</label>
            <select
              name="max"
              id="jugadores"
              onChange={onChange}
              value={formData.max}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
          </div>
          <div>
            <label className="block mb-2" htmlFor="nivel">Nivel de habilidad:</label>
            <select
              name="skills_level"
              id="nivel"
              onChange={onChange}
              value={formData.skills_level}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              <option value="Profesional">Profesional</option>
            </select>
          </div>
          <div>
            <label className="block mb-2" htmlFor="genero">Genero de jugadores:</label>
            <select
              name="gender"
              id="genero"
              onChange={onChange}
              value={formData.gender}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="Hombres">Hombres</option>
              <option value="Mujeres">Mujeres</option>
              <option value="Mixto">Mixto</option>
            </select>
          </div>
          <div>
            <label className="block mb-2" htmlFor="direccion">Dirección del punto de encuentro:</label>
            <input
              type="text"
              name="direction"
              id="direccion"
              value={formData.direction}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="street-address"
              required
            />
          </div>
          <div >
            <button
              type="submit"
              className="w-full bg-main-color1 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600">
              Organizar equipo
            </button>
          </div>
        </form>
      </div>
    </>

  );
};

export default OrganizePage;