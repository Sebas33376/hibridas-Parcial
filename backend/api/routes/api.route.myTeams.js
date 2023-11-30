import { Router } from "express";
import * as controller from "../controllers/api.controller.js";
import { validateToken } from "../../middleware/token.validate.js";

const apiHistoryRoute = Router();

apiHistoryRoute.get("/myTeams/:id", [validateToken], controller.getMyTeams);