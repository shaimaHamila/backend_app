import { Request, Response, NextFunction } from "express";

export const adminAuthorization = (role: string) => async (req: Request, res: Response, next: NextFunction) => {
    // Get the admin role from previous middleware
    const adminRole = res.locals.adminRole;
    console.log("adminRole", adminRole);
    console.log(adminRole);
    if (role !== adminRole) {
        return res.status(403).json({ message: "Forbidden" });
    }

    next();
};
