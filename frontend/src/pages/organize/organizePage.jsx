import "./organizePage.css";
import IconFilter from "../../icons/IconFilter";
import { useCallback, useState } from "react";
import { addTeam } from "../../services/teams.service";
import { useProfile } from "../../context/SessionContext";

const OrganizePage = () => {
  // Estado para almacenar los datos del formulario

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

  // Manejar cambios en los campos del formulario
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar envío del formulario
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
      addTeam({ formData })
    },
    [formData]
  );

  return (
    <div>
      <div className="flex justify-between items-center mt-6">
        <h1 className="my-6 px-4 font-bold text-xl">Organizar</h1>
        <span className="mr-4">
          <IconFilter />
        </span>
      </div>

      <form onSubmit={onSubmit}>
        <label>
          Nombre del equpo:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Portada:
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Deporte:
          <select name="sport" onChange={onChange} value={formData.sport}>
            <option value="Football">Football</option>
            <option value="Volley">Volley</option>
            <option value="Handball">Handball</option>
            <option value="Tennis">Tennis</option>
            <option value="Basketball">Basketball</option>
            <option value="Padel">Padel</option>
          </select>
        </label>
        <br />
        <label>
          Ciudad:
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Fecha del encuentro:
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Hora:
          <input
            type="text"
            name="hour"
            value={formData.hour}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Maximo de jugadores:
          <select name="max" onChange={onChange} value={formData.max}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </label>
        <br />
        <label>
          Nivel de habilidad:
          <select name="skills_level" onChange={onChange} value={formData.skills_level}>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </label>
        <br />
        <label>
          Genero de jugadores:
          <select name="gender" onChange={onChange} value={formData.gender}>
            <option value="Hombres">Hombres</option>
            <option value="Mujeres">Mujeres</option>
            <option value="Mixto">Mixto</option>
          </select>
        </label>
        <br />
        <label>
          Dirección del punto de encuentro:
          <input
            type="text"
            name="direction"
            value={formData.direction}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="submit">Organizar equipo</button>
      </form>
    </div>
  );
};

export default OrganizePage;
