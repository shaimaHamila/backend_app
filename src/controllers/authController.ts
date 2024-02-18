import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { appDataSource } from "../config/Database";
import { User } from "../entities/User";
import { encrypt } from "../helpers/helpers";

const userRepository = appDataSource.getRepository(User);

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(500).json({ message: " email and password required" });
        }
        const user = await userRepository.findOne({ where: { email } });

        const isPasswordValid = encrypt.comparepassword(user!.password, password);
        if (!user || !isPasswordValid) {
            return res.status(404).json({ message: "User not found" });
        }
        const token = encrypt.generateToken({ id: user.id });

        return res.status(200).json({ success: true, message: "Login successful", user, token });
    } catch (errors) {
        console.error(errors);
        return res.status(500).json({ success: false, message: "Internal server error", errors });
    }
};

const signup = async (req: Request, res: Response) => {
    try {
        const { firstName, email, password, roles } = req.body;
        const encryptedPassword = await encrypt.encryptpass(password);
        const user = new User();
        user.firstName = firstName;
        user.email = email;
        user.password = encryptedPassword;
        user.roles = roles;

        await userRepository.save(user);

        const token = encrypt.generateToken({ id: user.id });
        return res.status(201).json({ success: true, message: "User created successfully", token, user: user });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export default { login, signup };
