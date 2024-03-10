import Joi from "joi";

export const teacherValidator = Joi.object({
    code: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    birthday: Joi.date(),
    identifier: Joi.string(),
    kotebName: Joi.string(),
    prim: Joi.string(),
    teacherType: Joi.string(),
    statue: Joi.string(),
}).options({ stripUnknown: true });
