import express from "express";
import { getPost } from "../controllers/PostController";

const postRouter = express.Router();

postRouter.get("/", getPost);

export default postRouter;
