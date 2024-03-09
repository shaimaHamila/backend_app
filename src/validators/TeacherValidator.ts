import Joi from "joi";

export const teacherCreationValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    code: Joi.string().required(),
    phoneNumber: Joi.string(),
    paasword: Joi.string(),
    koteb: Joi.string(),
    prim: Joi.string(),
    type: Joi.string(),
    statue: Joi.string(),
});
