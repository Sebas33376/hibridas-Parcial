import { useEffect, useState } from "react";
import List from "../../components/myTeamsList";
import { getTeams } from "../../services/teams.service";
import IconFilter from "../../icons/IconFilter";
import "./myTeamsPage.css";


export default function MyTeamsPage() {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getTeams().then((data) => setTeams(data));
    }, []);

    const filteredTeams = teams.filter((team) =>
        team.name.includes(searchTerm)
    );
    console.log(filteredTeams);
    return (
        <div>
            <div className="flex justify-between items-center mt-6">
                <h1 className="my-6 px-4 font-bold text-xl">Mis equipos</h1>
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

            <List teamsList={filteredTeams} />
        </div>
    );
}