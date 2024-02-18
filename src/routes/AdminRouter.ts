import express from "express";
import { createAdmin, getAdmin } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.post("/", createAdmin);

export default adminRouter;
