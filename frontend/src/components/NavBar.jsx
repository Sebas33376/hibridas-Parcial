import { Link } from "react-router-dom";
import { useSession } from "../context/SessionContext";
import { useProfile } from "../context/SessionContext";
import IconSilbato from "../icons/IconSilbato";

const NavBar = () => {
  const { onLogOut } = useSession();
  const { profile } = useProfile()
  return (
    <>
      {!profile && (
        <nav className="fixed bottom-0 py-4 w-full justify-around bg-white">
          <ul className="flex px-4 justify-between">
            <li>
              <Link to="/"> <span className=""><IconSilbato /></span> <span className="sr-only">Inicio</span></Link>
            </li>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            <li>
              <Link onClick={onLogOut}>Cerrar sesión</Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="bg-gray-900 p-7">
        {/*aca iria el contenido de la img para*/}
      </div> 
    </>
  );
};

export default NavBar;
