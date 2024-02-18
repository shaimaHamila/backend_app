import { Request, Response } from "express";
import { appDataSource } from "../config/Database";
import { Post } from '../entities/Post';
export const getPost = async (req: Request, res: Response) => {
    try {
        const posts = await appDataSource.getRepository(Post).find();
        res.status(200).json({ succss: true, message: "get post successfully", data: posts });
    } catch (error) {
        res.status(404).json({ succss: false, message: error });
    }
};
