import { Router } from "express";
import * as controller from "../controllers/api.controller.history.js";
import { validateToken } from "../../middleware/token.validate.js";

const apiHistoryRoute = Router();

apiHistoryRoute.get("/history/:id", [validateToken], controller.getHistory);