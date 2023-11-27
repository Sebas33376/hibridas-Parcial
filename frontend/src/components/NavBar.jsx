import { Link } from "react-router-dom";
import React from 'react';
import { useSession } from "../context/SessionContext";
import { useProfile } from "../context/SessionContext";
import IconHome from "../icons/IconHome/";
import IconProfile from "../icons/IconProfile";

const NavBar = () => {
  const { onLogOut } = useSession();
  const { profile } = useProfile()
  return (
    <>
      {!profile && (
        <nav className="fixed bottom-0 py-4 w-full justify-around bg-white">
          <ul className="flex px-4 justify-between">
            <li>
              <Link to="/"> <span className=""><IconHome /></span> <span className="sr-only">Inicio</span></Link>
            </li>
            <li>
              <Link onClick={onLogOut}>Cerrar sesión</Link>
            </li>
            <li>
              <Link to="/profile"> <span className=""><IconProfile /></span> <span className="sr-only">Perfil</span></Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="bg-main-dark p-7">
        {/*aca iria el contenido de la img para el logito*/}
      </div> 
    </>
  );
};

export default NavBar;
