import { Router } from "express";
import * as controller from "../controllers/api.controller.sports.js";
import { validateToken } from "../../middleware/token.validate.js";

const apiSportsRoute = Router();

// Ruta para obtener la lista de deportes
// Esta ruta requiere la validación del token
apiSportsRoute.get("/sports", [validateToken], controller.getSports);

export default apiSportsRoute;
