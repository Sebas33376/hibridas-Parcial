import { Link } from "react-router-dom";
import IconCard from "../../icons/IconCard";

const AuthSelecction = () => {
  return (
    <div className="bg-main-dark h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold mb-8">App Name</h1>
      <Link
        to="/login"
        className="bg-main-color1 text-white text-center py-3 px-4 rounded-md mb-4 flex items-center"
      >
        <span className="mr-4">
          <IconCard />
        </span>
        Iniciar sesión con correo electrónico
      </Link>
      <Link to="/register" className="text-white py-2 px-4 mt-[90px]">
        ¿No tenés una cuenta?{" "}
        <span className="font-bold text-main-color1 ">Registrate</span>
      </Link>
    </div>
  );
};

export default AuthSelecction;
