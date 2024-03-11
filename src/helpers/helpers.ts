import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();

export class encrypt {
    static async encryptpass(password: string) {
        return bcrypt.hashSync(password, 12);
    }
    static comparepassword(hashPassword: string, password: string) {
        return bcrypt.compareSync(password, hashPassword);
    }

    static generateToken(id: any) {
        if (!process.env.JWT_TOKEN_SECRET) throw new Error("TOKEN_SECRET is undefined");
        return jwt.sign(id, process.env.JWT_TOKEN_SECRET, { expiresIn: process.env.JWT_EXP_IN });
    }

    static generateRefreshToken(id: any) {
        if (!process.env.JWT_REFRESH_TOKEN_SECRET) throw new Error("REFRESH_TOKEN_SECRET is undefined");
        return jwt.sign(id, process.env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: process.env.JWT_REFRESH_EXP_IN });
    }
}
