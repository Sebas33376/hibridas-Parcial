import { useCallback, useState } from "react";
import { addTeam } from "../../services/teams.service";
import { useProfile } from "../../context/SessionContext";
import IconBack from "../../icons/IconBack";
import { Link } from "react-router-dom";

const OrganizePage = () => {
  const profile = useProfile();

  const INITIAL_FORM_DATA = {
    sport: "",
    joined: [], 
    max: "",
    place: "",
    date: "",
    deadline: "",
    hour: "",
    skills_level: "",
    gender: "",
    organizer_id: profile && profile._id, 
    direction: "",
    state: true,
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log(formData);
  
      try {
        if (formData) {
          await addTeam(formData);
          setFormData(INITIAL_FORM_DATA);
        } else {
          console.error("Error al enviar el formulario: formData es undefined");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
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
            <label className="block mb-2" htmlFor="deporte">Nombre del deporte:</label>
            <input
              type="text"
              name="sport"
              id="deporte"
              value={formData.sport}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="name"
              placeholder="Ej: Fútbol"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="localidad">Localidad del evento:</label>
            <input
              type="text"
              name="place"
              id="localidad"
              value={formData.place}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="street-address"
              placeholder="Ej: Boedo"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="direccion">Dirección del evento:</label>
            <input
              type="text"
              name="direction"
              id="direccion"
              value={formData.direction}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="street-address"
              placeholder="Ej: AV. Boedo 47"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="fecha">Fecha del evento:</label>
            <input
              type="date"
              name="date"
              id="fecha"
              value={formData.date}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="on"
              placeholder="Ej: 15/05/2024"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="limite">Fecha límite de inscripción del evento:</label>
            <input
              type="date"
              name="deadline"
              id="limite"
              value={formData.deadline}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="on"
              placeholder="Ej: 12/05/2024"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="hora">Hora del evento:</label>
            <input
              type="time"
              name="hour"
              id="hora"
              value={formData.hour}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="on"
              placeholder="Ej: 22:00"
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
              autoComplete="on"
              placeholder="Ej: 10"
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
              autoComplete="on"
              placeholder="Ej: Intermedio"
              required
            >
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
          <div>
            <label className="block mb-2" htmlFor="genero">Género de los jugadores:</label>
            <select
              name="gender"
              id="genero"
              onChange={onChange}
              value={formData.gender}
              className="w-full px-4 py-2 border rounded-md"
              autoComplete="on"
              placeholder="Ej: Mixto"
              required
            >
              <option value="Mixto">Mixto</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
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