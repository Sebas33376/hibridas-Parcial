import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./RegisterPage.css";
import { register } from "../../services/auth.service";
import logo from "../../../public/logo.png"
import IconBack from "../../icons/IconBack";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("")

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

      register({ username: userName, password: password })
        .then(({ token }) => {
          localStorage.setItem("token", token);
          navigate("/", { replace: true });
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    },
    [userName, password, navigate]
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
      <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-md shadow-md register-container">
        <h1 className="my-6 px-4 font-bold text-xl text-center">Registrar</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={userName}
              onChange={onCahngeUserName}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onCahngePassword}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;