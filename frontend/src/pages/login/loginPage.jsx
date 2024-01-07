import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import "./LoginPage.css";

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
      <div className="bg-main-dark p-7">
        {/*aca iria el contenido de la img para el logito*/}
      </div>
      <div className="container mx-auto px-4 mt-20">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl my-5 font-bold">Bienvenido de vuelta!</h1>
          <p className="mb-3">Ingresá tu email y tu contraseña para empezar</p>
          <div className="space-y-3 mt-10">
            <input
              className="w-full border border-input-dark bg-input py-4 px-3 rounded-lg "
              type="text"
              name="userName"
              id="userName"
              placeholder="Nombre de usuario"
              onChange={onCahngeUserName}
              value={userName}
            />
            <input
              className="w-full border border-input-dark bg-input py-4 px-3 rounded-lg"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onCahngePassword}
              value={password}
            />
          </div>
          <p>{error}</p>
          <button
            type="submit"
            className="absolute top-0 right-0 mt-3 mr-3 text-blue-500 py-1 px-3 rounded-lg"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
