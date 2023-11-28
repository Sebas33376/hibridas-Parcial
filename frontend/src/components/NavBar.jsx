import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useSession } from "../context/SessionContext";
import { useProfile } from "../context/SessionContext";
import IconHome from "../icons/IconHome/";
import IconProfile from "../icons/IconProfile";
import IconBack from "../icons/IconBack";

const NavBar = () => {
  const { onLogOut } = useSession();
  const { profile } = useProfile();
  console.log(profile);
  return (
    <>
      {!profile && (
        <nav className="fixed bottom-0 py-4 w-full justify-around bg-white mt-16">
          <ul className="flex px-4 justify-between">
            <li>
              <Link to="/">
                {" "}
                <span className="">
                  <IconHome />
                </span>{" "}
                <span className="sr-only">Inicio</span>
              </Link>
            </li>
            <li>
              <Link onClick={onLogOut}></Link>
            </li>
            <li>
              <Link to="/profile">
                {" "}
                <span className="">
                  <IconProfile />
                </span>{" "}
                <span className="sr-only">Perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="bg-main-dark p-5">
        <div className="bg-main-dark ">
          <NavLink to="/" className="text-white flex items-center">
            <span className="mr-4">
              <IconBack />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
