
import * as Yup from "yup";

const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
const colorNameRegex = /^[a-zA-Z\s]+$/;

export const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
  color: Yup.string()
    .required("El color es obligatorio")
    .test("is-color", "Debe ser un color válido (hex o nombre)", (value) => {
      if (!value) return false;
      const trimmed = String(value).trim();
      return hexRegex.test(trimmed) || colorNameRegex.test(trimmed);
    }),
  precioUnitario: Yup.number()
    .typeError("El precio debe ser numérico")
    .positive("El precio debe ser mayor a 0")
    .required("El precio es obligatorio"),
  imagen: Yup.string().url("Debe ser una URL válida").required("La URL de la imagen es obligatoria"),
  categoria: Yup.string().required("La categoría es obligatoria"),
  oferta: Yup.string().notRequired(),
  talla: Yup.string().notRequired(),
  material: Yup.string().notRequired(),
  genero: Yup.string().notRequired(),
  temporada: Yup.string().notRequired(),
  sku: Yup.string().notRequired(),
});
