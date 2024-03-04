import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTeamsById } from "../../services/teams.service";
import IconUbication from "../../icons/IconUbication";
import IconCalendar from "../../icons/IconCalendar";
import IconUbicationDark from "../../icons/IconUbicationDark";
import IconBack from "../../icons/IconBack";
import CircularProgress from '@mui/material/CircularProgress';

const TeamsDetails = () => {
  const [team, setTeam] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTeamsById(id).then((data) => setTeam(data));
  }, [id]);

  return team.sport !== undefined ? (
    <>
      <Link to="/" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md hover:bg-gray-600">
        <span >
          <IconBack />
        </span>
      </Link>
      <div className="mb-20">
        <div className="relative mt-1">
          <h1 className="font-bold text-4xl absolute top-5 left-5 text-white z-10 bg-main-color2 py-2 px-3 rounded-full">
            {team.sport}
          </h1>
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
            src="../../../public/equipo.jpeg"
            alt="imagen ilustrativa del deporte"
            loading="lazy"
            className="w-full h-[308px] object-cover object-center "
          />
          <div className="w-full h-full bg-black/10 absolute top-0 left-0 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 my-5 ">
          <h2 className="font-bold flex items-center mb-2">
            <span className="mr-2 my-2">
              <IconCalendar />
            </span>
            {team.date}
          </h2>
          <p className="px-7 mb-5 font-light">{team.hour} hs</p>
          <p className="font-light mt-2 left-6 text-white z-10 flex items-center bg-main-color2 py-2 px-3 rounded-full">
            <span className="mr-2">
              <IconUbicationDark />
            </span>
            {team.place}
          </p>
          <p className="my-5 ml-2 flex items-center">
            {team.direction}
          </p>
        </div>
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress />
    </div>
  );
};

export default TeamsDetails;