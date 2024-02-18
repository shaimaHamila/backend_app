import { Router } from "express";
import auth from "../controllers/authController";
const authRouter = Router();

authRouter.post("/login", auth.login);
authRouter.post("/signup", auth.signup);

export default authRouter;
