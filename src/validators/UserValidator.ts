import Joi from "joi";

export const userCreationValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    fatherName: Joi.string(),
    grandFatherName: Joi.string(),
    motherFirstName: Joi.string(),
    motherLastName: Joi.string(),
    birthday: Joi.date(),
    birthPlace: Joi.string(),
    phoneNumber: Joi.string(),
    fatherPhoneNumber: Joi.string(),
    motherPhoneNumber: Joi.string(),
    gender: Joi.string(),
    cin: Joi.string(),
    doc: Joi.string(),
});
