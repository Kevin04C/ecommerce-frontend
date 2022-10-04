import * as Yup from "yup";

export const initalValuesLogin = {
  email: "kevincespedes@gmail.com",
  password: "123456",
};

export const validationSchemeLogin = Yup.object({
  email: Yup.string()
    .email("Correo no válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener un máximo de 6 caracteres")
    .required("La contraseña es requerida"),
});

export const initalValuesRegister = {
  dni: "75958291",
  nombre: "Kevin",
  apellidoPaterno: "Cespedes",
  apellidoMaterno: "Alvarez",
  email: "kevincespedes@gmail.com",
  password: "123456",
};

export const validationSchemeRegister = Yup.object({
  dni: Yup.string()
    .min(8, "El DNI debe tener 8 caracteres")
    .max(8, "El DNI debe tener 8 caracteres")
    .required("El DNI es requerido"),
  nombre: Yup.string().required("El nombre es requerido"),
  apellidoPaterno: Yup.string().required("El apellido paterno es requerido"),
  apellidoMaterno: Yup.string().required("El apellido materno es requerido"),
  email: Yup.string()
    .email("Correo no válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener un máximo de 6 caracteres")
    .required("La contraseña es requerida"),
});
