import { Request, Response } from "express";
import { appDataSource } from "../config/Database";
import { Teacher } from "../entities/Teacher";
import { teacherUpdateValidator, teacherValidator } from "../validators/TeacherValidator";
import { User } from "../entities/User";

const teacherRepository = appDataSource.getRepository(Teacher);
const userRepository = appDataSource.getRepository(User);

export const createTeacher = async (req: Request, res: Response) => {
    const { error } = teacherValidator.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });

    const { firstName, lastName, birthday, identifier } = req.body;

    try {
        let user: User | null;
        if (identifier) {
            // Check if user with the provided identifier already exists
            user = await userRepository.findOne({ where: { identifier: identifier } });
            if (!user) {
                throw new Error("User with the provided identifier does not exist");
            }
        } else {
            user = new User();
            user.firstName = firstName;
            user.lastName = lastName;
            user.birthday = birthday;
            user.identifier = identifier; //TODO: auto generate
            await userRepository.save(user);
        }

        // Create Teacher entity
        const teacher = new Teacher();
        teacher.code = req.body.code; //TODO: auto generate
        teacher.password = req.body.password; //TODO: hash password or auto generate
        teacher.kotebName = req.body.kotebName;
        teacher.prim = req.body.prim;
        teacher.teacherType = req.body.type;
        teacher.statue = req.body.statue;
        teacher.user = user;

        // Save teacher entity
        await teacherRepository.save(teacher);

        res.status(201).json({ success: true, message: "Teacher created successfully", data: teacher });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error: error });
    }
};

export const getTeachers = async (req: Request, res: Response) => {
    try {
        const teachers = await teacherRepository.find({ where: { isDeleted: false } });
        res.status(200).json({ success: true, message: "get teachers successfully", data: teachers });
    } catch (error) {
        res.status(404).json({ success: false, message: error });
    }
};

export const getTeacherById = async (req: Request, res: Response) => {
    try {
        const teacherId = req.params.id;
        const teacher = await teacherRepository.findOne({
            where: { id: teacherId, isDeleted: false },
            relations: ["user"],
        });

        if (!teacher) {
            return res.status(404).json({ success: false, message: "Teacher not found" });
        }

        res.status(200).json({ success: true, message: "get teacher successfully", data: teacher });
    } catch (error) {
        res.status(404).json({ success: false, message: error });
    }
};

export const updateTeacher = async (req: Request, res: Response) => {
    const { error } = teacherUpdateValidator.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }

    try {
        const teacherId = req.params.id;
        const updatedFields = req.body; // Get updated fields from request body

        const teacher = await teacherRepository.findOne({
            where: { id: teacherId, isDeleted: false },
            relations: ["user"],
        });

        if (!teacher) {
            return res.status(404).json({ success: false, message: "Teacher not found" });
        }

        // Update teacher fields
        await teacherRepository.update(teacherId, updatedFields);

        // Update associated user fields if exists
        if (teacher.user) {
            const userId = teacher.user.id;
            await userRepository.update(userId, updatedFields);
        }

        res.status(200).json({ success: true, message: "Teacher and associated user updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const deleteTeacher = async (req: Request, res: Response) => {
    try {
        const teacherId = req.params.id;
        const teacher = await teacherRepository.findOne({ where: { id: teacherId } });

        if (!teacher) {
            return res.status(404).json({ success: false, message: "Teacher not found" });
        }

        if (teacher.isDeleted) {
            return res.status(400).json({ success: false, message: "Teacher is already marked for deletion!" });
        }
        await teacherRepository.update(teacherId, { isDeleted: true });

        res.status(200).json({ success: true, message: "Teacher is marked for deletion!is marked for deletion!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};

export const getTeacherByCode = async (req: Request, res: Response) => {
    try {
        const teacherCode = req.params.code;
        const teacher = await teacherRepository.findOne({ where: { code: teacherCode, isDeleted: false } });

        if (!teacher) {
            return res.status(404).json({ success: false, message: "Teacher not found" });
        }

        res.status(200).json({ success: true, message: "get teacher successfully", data: teacher });
    } catch (error) {
        res.status(404).json({ success: false, message: error });
    }
};
