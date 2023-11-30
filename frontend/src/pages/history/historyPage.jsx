import "./historyPage.css";
import IconFilter from "../../icons/IconFilter";
import { useEffect, useState } from "react";
import List from "../../components/historyList";
import { getTeams } from "../../services/teams.service";

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
        <div>
            <div className="flex justify-between items-center mt-6">
                <h1 className="my-6 px-4 font-bold text-xl">Historial</h1>
                <span className="mr-4">
                    <IconFilter />
                </span>
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

            <List historyList={filteredTeams} />
        </div>
    );
}