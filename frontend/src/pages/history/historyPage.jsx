import "./HistoryPage.css";
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
        normalizeString(team.sport).includes(normalizeString(searchTerm))
    );

    return (
        <>
            <Link to="/" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md hover:bg-gray-600">
                <span >
                    <IconBack />
                </span>
            </Link>
            <div className="mb-20">
                <div className="flex justify-between items-center">
                    <h1 className="my-2 px-5 font-bold text-xl">HISTORIAL</h1>
                </div>
                <List historyList={filteredTeams} />
            </div>
        </>
    );
}