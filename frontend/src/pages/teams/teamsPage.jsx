import { useEffect, useState } from "react";
import List from "../../components/teamsList";
import { getTeams } from "../../services/teams.service";
import IconFilter from "../../icons/IconFilter";
import "./teamsPage.css";
import IconBack from "../../icons/IconBack";
import { Link } from "react-router-dom";

const normalizeString = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  const filteredTeams = teams.filter((team) =>
    normalizeString(team.name).includes(normalizeString(searchTerm))
  );

  return (
    <>
      <button type="button" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md">
        <Link to="/">
          <span >
            <IconBack />
          </span>
        </Link>
      </button>
      <div className="max-w-mx mx-auto mb-20">
        <div className="flex justify-between items-center my-2">
          <h1 className="my-2 px-4 font-bold text-xl">Búsqueda</h1>
          {/* <span className="mr-4">
          <IconFilter />
        </span> */}
        </div>
        <div className="mx-4">
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-1 border rounded-lg my-1"
          />
        </div>

        <List teamsList={filteredTeams} />
      </div>
    </>
  );
}