import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import ImageUpload from "../../components/image.upload";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onCahngeUserName = useCallback((e) => {
    setuserName(e.target.value);
  },[setuserName])

  const onCahngePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[setPassword])

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    login({ userName: userName, password: password })
      .then(({token}) => {
        localStorage.setItem("token", token);
        navigate("/", { replace: true });
      })
      .catch((err) => setError(err.error.message));
  },[userName, password, navigate, setError])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Iniciar sesión</h1>
        <label>Nombre de usuario</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={onCahngeUserName}
          value={userName}
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={onCahngePassword}
          value={password}
        />
        <p>{error}</p>
        <input type="submit" value="Iniciar sesión" />
      </form>
      <ImageUpload/>
    </div>
  );
};

export default LoginPage;
