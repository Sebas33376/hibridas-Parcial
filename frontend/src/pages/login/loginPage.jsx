import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/auth.service";
import "./LoginPage.css";
import logo from "../../../public/logo.png"
import IconBack from "../../icons/IconBack";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onCahngeUserName = useCallback(
    (e) => {
      setuserName(e.target.value);
    },
    [setuserName]
  );

  const onCahngePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      login({ userName: userName, password: password })
        .then(({ token }) => {
          localStorage.setItem("token", token);
          navigate("/", { replace: true });
        })
        .catch((err) => setError(err.error));
    },
    [userName, password, navigate, setError]
  );

  return (
    <>
      <div className="bg-main-dark p-5 flex justify-between items-center">
        <Link to="/Selection">
          <span>
            <IconBack />
          </span>
        </Link>
        <img src={logo} alt="logo de NEXOSPORT" />
      </div>
      <div className="container mx-auto px-4 mt-20 flex flex-col items-center justify-center">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl my-5 font-bold">¡Bienvenido de vuelta!</h1>
          <p className="mb-3">Ingrese su mail y su contraseña para empezar</p>
          <div className="">
            <label>Nombre de usuario:</label>
            <input
              className="w-full border border-input-dark bg-input mb-5 py-4 px-3 rounded-lg "
              type="text"
              name="userName"
              id="userName"
              placeholder="Ingrese su nombre de usuario aqui..."
              onChange={onCahngeUserName}
              value={userName}
            />
            <label>Contraseña:</label>
            <input
              className="w-full border border-input-dark bg-input mb-5 py-4 px-3 rounded-lg"
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su contraseña aqui..."
              onChange={onCahngePassword}
              value={password}
            />
          </div>
          <p>{error}</p>
          <button type="submit" className="bg-main-color1 text-white text-center py-4 px-4 rounded-md flex items-center hover:bg-green-700">
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
