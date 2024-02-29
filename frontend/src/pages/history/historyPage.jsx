import "./HistoryPage.css";
import IconFilter from "../../icons/IconFilter";
import { useEffect, useState } from "react";
import List from "../../components/historyList";
import { getTeams } from "../../services/teams.service";
import IconBack from "../../icons/IconBack";
import { Link } from "react-router-dom";

const normalizeString = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function HistoryPage() {
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
            <Link to="/" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md hover:bg-gray-600">
                <span >
                    <IconBack />
                </span>
            </Link>
            <div className="max-w-mx mx-auto mb-20">
                <div className="flex justify-between items-center my-2">
                    <h1 className="my-2 px-4 font-bold text-xl">Historial</h1>
                </div>
                <div className="mx-4">
                    <input
                        type="search"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-1 border rounded-lg my-1"
                        autoComplete="on"
                    />
                </div>

                <List historyList={filteredTeams} />
            </div>
        </>
    );
}