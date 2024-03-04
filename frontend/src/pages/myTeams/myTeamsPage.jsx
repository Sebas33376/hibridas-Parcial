import { useEffect, useState } from "react";
import List from "../../components/myTeamsList";
import { getTeams } from "../../services/teams.service";
import "./MyTeamsPage.css";
import { Link } from "react-router-dom";
import IconBack from "../../icons/IconBack";

export default function MyTeamsPage() {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getTeams().then((data) => setTeams(data));
    }, []);

    const filteredTeams = teams.filter((team) =>
        team.sport.includes(searchTerm)
    );
    console.log(filteredTeams);
    return (
        <>
            <Link to="/" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md hover:bg-gray-600">
                <span>
                    <IconBack />
                </span>
            </Link>
            <div className="mb-20">
                <div className="flex justify-between items-center">
                    <h1 className="my-2 px-5 font-bold text-xl">MIS EQUIPOS</h1>
                </div>
                <List teamsList={filteredTeams} />
            </div>
        </>
    );
}