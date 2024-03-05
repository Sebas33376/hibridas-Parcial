import { Router } from "express";
import * as controller from "../controllers/api.controller.js";
import { validateTeam, validateTeamPatch } from "../../middleware/teams.validate.js";
import { validateToken } from "../../middleware/token.validate.js";

const apiRoute = Router();

apiRoute.get("/teams/:id", [validateToken], controller.getTeamById);
apiRoute.post("/teams", [validateTeam, validateToken], controller.addTeam);
apiRoute.patch("/teams/:id", [validateTeamPatch, validateToken], controller.editTeam);
apiRoute.delete("/teams/:id", controller.deletTeam);
apiRoute.put("/teams/:id", controller.replaceTeam); // Esta ruta debe ir después de las rutas más específicas

// Ruta general
apiRoute.get("/teams", [validateToken], controller.getTeams);

// Manejador de errores
apiRoute.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

export default apiRoute;
