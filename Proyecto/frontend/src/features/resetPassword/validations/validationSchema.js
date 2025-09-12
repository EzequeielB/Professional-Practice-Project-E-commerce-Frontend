import * as Yup from 'yup';
export const validationSchema = Yup.object({
  Email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio')
});
