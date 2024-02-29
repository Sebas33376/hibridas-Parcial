import { call } from "./http.service";


function login({ userName, password }) {
  return call({
    uri: "auth/login",
    method: "POST",
    body: { userName: userName, password: password },
  });
}

function register({ userName, password }) {
  return call({
    uri: "auth",
    method: "POST",
    body: { userName: userName, password: password },
  });
}

function logOut({ userName, password }) {
  return call({
    uri: "auth",
    method: "DELETE",
    body: { userName: userName, password: password }
  });
}

function getProfile() {
  return call({ uri: "profile", method: "GET" })
    .then(response => response)
    .catch(error => {
      if (error.message === "No autorizado: Token inválido o caducado") {
        console.error("Token no válido o caducado:", error.message);
      } else {
        console.error("Error al obtener el perfil:", error.message);
      }
      throw error;
    });
}

export { login, logOut, getProfile, register };