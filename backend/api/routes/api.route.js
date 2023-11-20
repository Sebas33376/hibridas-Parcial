import { Router } from "express";
import * as controller from "../controllers/controller.js";
import { validateTeam, validateTeamPatch } from "../../middleware/teams.validate.js"
import { validateToken } from "../../middleware/token.validate.js";

const apiRoute = Router();

apiRoute.get("/teams", [validateToken] ,controller.getTeams);
apiRoute.get("/teams/:id", [validateToken] ,controller.getTeamById);
apiRoute.post("/teams", [validateTeam, validateToken] , controller.addTeam);
apiRoute.put("/teams/:id", controller.replaceTeam);
apiRoute.patch("/teams/:id", [validateTeamPatch, validateToken] , controller.editTeam);
apiRoute.delete("/teams/:id", controller.deletTeam);


export default apiRoute