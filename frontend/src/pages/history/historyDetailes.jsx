import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamsById } from "../../services/teams.service";
import IconUbication from "../../icons/IconUbication";
import IconCalendar from "../../icons/IconCalendar";
import IconUbicationDark from "../../icons/IconUbicationDark";

const HistoryDetails = () => {
    const [team, setTeam] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getTeamsById(id).then((data) => setTeam(data));
    }, [id]);

    return team.name !== undefined ? (
        <>
            <div className="relative">
                <h1 className="font-bold text-4xl absolute top-4 left-4 text-white z-10">
                    {team.name}
                </h1>
                <p className="font-light mt-2 absolute top-14 left-4 text-white z-10 flex items-center">
                    <span className="mr-2">
                        <IconUbication />
                    </span>
                    {team.place}
                </p>
                <ul className="flex mt-4 absolute bottom-4 text-white z-10 right-1">
                    <li className="bg-main-color2 py-2 px-3 rounded-full mx-1">
                        {team.joined.length}/{team.max}
                    </li>
                    <li className="bg-main-color2 py-2 px-3 rounded-full mx-1">
                        {team.gender}
                    </li>
                    <li className="bg-main-color2 py-2 px-4 rounded-full mx-2">
                        {team.skills_level}
                    </li>
                </ul>
                <img
                    src={team.img}
                    alt="imagen ilustrativa del deporte"
                    loading="lazy"
                    className="w-full h-[308px] object-cover object-center "
                />

                <div className="w-full h-full bg-black/10 absolute top-0 left-0 backdrop-blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 my-5">
                <h2 className="font-bold flex items-center">
                    <span className="mr-2">
                        <IconCalendar />
                    </span>
                    {team.date}
                </h2>
                <p className="px-7 font-light">{team.hour}</p>

                <p className="my-5  flex items-center">
                    <span className="mr-2">
                        <IconUbicationDark />
                    </span>
                    {team.direction}
                </p>
                <div className="my-5">
                    <hr></hr>
                    <h2 className="font-bold mt-4">Sobre el equipo</h2>
                    <p className="mt-2">{team.description}</p>
                </div>
            </div>
        </>
    ) : (
        <div>
            <h1>Cargando...</h1>
        </div>
    );
};

export default HistoryDetails;