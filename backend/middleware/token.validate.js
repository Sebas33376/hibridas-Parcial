import * as tokenService from "../services/token.services.js";

async function validateToken(req, res, next) {
  const token = req.headers["auth-token"];
  console.log("Token:", token);

  try {
    if (!token) {
      throw new Error("Token no enviado");
    }

    const account = await tokenService.validateToken(token);

    if (!account) {
      throw new Error("Token no autorizado");
    }

    req.account = account;
    next();
  } catch (error) {
    console.error("Error en la validación del token:", error.message);
    return res.status(401).json({ error: { message: error.message } });
  }
}

export { validateToken };