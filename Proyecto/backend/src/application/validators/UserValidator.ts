import Joi from 'joi';
import { UserRegisterRequest } from 'application/DTO/request/authentication/UserRegisterRequest';

export const userRegisterSchema = Joi.object<UserRegisterRequest>({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'El correo debe ser una cadena de texto.',
      'string.email': 'El correo electrónico no tiene un formato válido.',
      'any.required': 'El correo electrónico es obligatorio.'
    }),

  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.base': 'La contraseña debe ser una cadena.',
      'string.min': 'La contraseña debe tener al menos 8 caracteres.',
      'any.required': 'La contraseña es obligatoria.'
    }),

  phone: Joi.string()
    .pattern(/^[0-9]{7,15}$/)
    .required()
    .messages({
      'string.base': 'El teléfono debe ser una cadena.',
      'string.pattern.base': 'El teléfono debe contener entre 7 y 15 dígitos numéricos.',
      'any.required': 'El teléfono es obligatorio.'
    })
});
