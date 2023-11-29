import { Router } from "express";
import * as controllers from "../controllers/api.controller.auth.js";
import { validateAccount } from "../../middleware/auth.validate.js";
import { validateToken } from "../../middleware/token.validate.js";
import { validateProfile } from "../../middleware/login.validate.js";

const route = Router();

route.post("/auth", [validateAccount], controllers.addAccount);

route.post("/auth/login", [validateAccount], controllers.login);

route.delete("/auth", [validateAccount], controllers.logOut);

route.get("/profile", [validateToken], controllers.getProfile);
route.post("/profile", [validateToken, validateProfile], controllers.addProfile);
route.patch("/profile", [validateToken], controllers.editProfile);


export default route;
