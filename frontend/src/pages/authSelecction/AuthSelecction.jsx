import { Link } from "react-router-dom";
import IconCard from "../../icons/IconCard";
import logo from "../../../public/logo-grande.png"

const AuthSelecction = () => {
  return (
    <div className="bg-main-dark h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="logo de NEXOSPORT" />
      <h1 className="text-white text-3xl font-bold mb-8">NEXOSPORT</h1>
      <Link to="/login" className="bg-main-color1 text-white text-center py-3 px-4 rounded-md mb-4 flex items-center hover:bg-green-700">
        <span className="mr-4">
          <IconCard />
        </span>
        Iniciar sesión
      </Link>
      <span className="text-white px-4 mt-[90px]">¿No tenés una cuenta?</span>
      <Link to="/register" className="font-bold text-main-color1">
        <span>¡Regístrate!</span>
      </Link>
    </div>
  );
};

export default AuthSelecction;
