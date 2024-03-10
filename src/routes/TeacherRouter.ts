import express from "express";
import { createTeacher, getTeachers } from "../controllers/teacherController";
import { adminAuthentification } from "../middlewares/authMiddleware";
import { adminAuthorization } from "../middlewares/checkAdminRole";

const teacherRouter = express.Router();

teacherRouter.post("/", adminAuthentification, adminAuthorization("fullAccessAdmin"), createTeacher);

teacherRouter.get("/", getTeachers);

export default teacherRouter;
