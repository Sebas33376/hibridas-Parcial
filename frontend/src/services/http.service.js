async function call({ uri, method = "GET", body = undefined }) {
  try {
    const response = await fetch(`http://localhost:2023/api/${uri}`, {
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      method,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status} - ${response.statusText}`);
    }

    if (response.status === 401) {
      localStorage.removeItem("token");
      throw new Error("No autorizado: Token inválido o caducado");
    }

    return response.json();
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    throw error; // Propagar el error para que pueda ser manejado externamente
  }
}

export { call };
