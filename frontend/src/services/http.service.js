async function call({ uri, method = "GET", body = undefined }) {
  try {
    const authToken = localStorage.getItem("token");
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (authToken) {
      headers.append("auth-token", authToken);
    }

    const response = await fetch(`http://localhost:2023/api/${uri}`, {
      headers,
      method,
      body: body && JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status} - ${response.statusText}`);
    }

    if (response.status === 401) {
      localStorage.removeItem("token");
      throw new Error("No autorizado: Token inválido o caducado");
    } else if (response.status === 404) {
      throw new Error("Recurso no encontrado");
    }

    return response.json();
  } catch (error) {
    console.error(`Error en la solicitud a ${uri}: ${error.message}`, { requestUrl: `http://localhost:2023/api/${uri}`, requestBody: body });
    throw error;
  }
}

export { call };