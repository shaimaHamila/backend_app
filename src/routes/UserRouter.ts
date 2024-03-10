import express from "express";
import { createUser, getUsers } from "../controllers/userController";
import { adminAuthentification } from "../middlewares/authMiddleware";
import { adminAuthorization } from "../middlewares/checkAdminRole";

const userRouter = express.Router();
userRouter.post("/", adminAuthentification, adminAuthorization("fullAccessAdmin"), createUser);
userRouter.get("/", getUsers);

export default userRouter;
