import { call } from "./http.service";

async function login({ userName, password }) {
  try {
    const response = await call({
      uri: "auth/login",
      method: "POST",
      body: { userName, password },
    });
    return response;
  } catch (error) {
    console.error("Error en el inicio de sesión:", error.message);
    throw error;
  }
}

async function register({ userName, password }) {
  try {
    const response = await call({
      uri: "auth",
      method: "POST",
      body: { userName, password },
    });
    return response;
  } catch (error) {
    console.error("Error en el registro:", error.message);
    throw error;
  }
}

async function logOut({ userName, password }) {
  try {
    const response = await call({
      uri: "auth",
      method: "DELETE",
      body: { userName, password },
    });
    return response;
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
    throw error;
  }
}

async function getProfile() {
  try {
    return await call({ uri: "profile", method: "GET" });
  } catch (error) {
    if (error.message === "No autorizado: Token inválido o caducado") {
      console.error("Token no válido o caducado:", error.message);
    } else {
      console.error("Error al obtener el perfil:", error.message);
    }
    throw error;
  }
}

export { login, logOut, getProfile, register };