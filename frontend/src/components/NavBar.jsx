import { Link } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const NavBar = () => {
  const { onLogOut } = useSession();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <Link onClick={onLogOut}>Cerrar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
