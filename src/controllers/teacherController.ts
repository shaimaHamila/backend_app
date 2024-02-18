import { Request, Response } from "express";
import { appDataSource } from "../config/Database";
import { Teacher } from "../entities/Teacher";
import { teacherCreationValidator } from "../validators/TeacherValidator";

const teacherRepository = appDataSource.getRepository(Teacher);

export const createTeacher = async (req: Request, res: Response) => {
    const { error } = teacherCreationValidator.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    try {
        const teacher = await teacherRepository.create(req.body);
        await teacherRepository.save(teacher);
        res.status(201).json({ success: true, message: "Teacher created successfully", data: teacher });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};

export const getTeachers = async (req: Request, res: Response) => {
    try {
        const teachers = await teacherRepository.find();
        res.status(200).json({ success: true, message: "get teachers successfully", data: teachers });
    } catch (error) {
        res.status(404).json({ success: false, message: error });
    }
};
