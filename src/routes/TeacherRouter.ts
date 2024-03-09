import express from "express";
import { createTeacher, getTeachers } from "../controllers/teacherController";

const teacherRouter = express.Router();

teacherRouter.post("/", createTeacher);
teacherRouter.get("/", getTeachers);

export default teacherRouter;
