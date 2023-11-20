import { Router } from "express";
import * as controllers from "../controllers/controller.api.auth.js";
import { validateAccount } from "../../middleware/auth.validate.js";
import { validateToken } from "../../middleware/token.validate.js";
import { validateProfile } from "../../middleware/login.validate.js";

const route = Router();

route.post("/auth", [validateAccount], controllers.addAccount);

route.post("/auth/login", [validateAccount], controllers.login);

route.delete("/auth", [validateAccount], controllers.logOut);

route.post("/profile", [validateToken, validateProfile], controllers.addProfile);

route.get("/profile", [validateToken], controllers.getProfile);

export default route;
