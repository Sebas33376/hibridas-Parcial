import { Link } from "react-router-dom";
import "./History.css";
import { PropTypes } from "prop-types";
import IconUbicationDark from "../icons/IconUbicationDark";

const History = ({ history }) => {
    const { _id, name, joined, max, place, skills_level, gender, img } = history;

    return (
        <li className="flex items-center justify-between p-5 border-gray-300 rounded-md my-4 mx-2 shadow-md">
            <div className="flex items-center">
                <img
                    src={img}
                    alt=""
                    className="w-20 h-20 object-cover rounded-md mr-4"
                    loading="lazy"
                />
                <div>
                    <h2 className="font-bold">{name}</h2>
                    <p className="flex items-center">
                        <span className="mr-2">
                            <IconUbicationDark />
                        </span>
                        {place}</p>
                    <div className="flex items-center mt-3">
                        <div className="flex">
                            <p className="mr-2 bg-main-color2 text-sm text-white rounded-md p-1">
                                {joined.length}/{max}
                            </p>
                            <p className="mr-2 bg-main-color2 text-sm text-white rounded-md p-1">
                                {skills_level}
                            </p>
                            <p className="bg-main-color2 text-sm text-white rounded-md p-1">{gender}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/teams/${_id}`} className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </Link>
        </li>
    );
};

History.protoTypes = {
    history: PropTypes.object.isRequired,
};

export default History;