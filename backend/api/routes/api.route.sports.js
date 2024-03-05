import { Router } from "express";
import * as controller from "../controllers/api.controller.sports.js";
import { validateToken } from "../../middleware/token.validate.js";

const apiSportsRoute = Router();

apiSportsRoute.get("/sports", [validateToken], controller.getSports);

export default apiSportsRoute;