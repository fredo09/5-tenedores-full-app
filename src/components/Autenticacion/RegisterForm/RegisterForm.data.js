import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
};

export const validateSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Email no permitido.")
      .required("Email no valido."),
    password: Yup.string()
      .required("Contraseña requerida")
      .max(8, "Maximo 8 caracteres"),
    repeatPassword: Yup.string()
      .required("Contraseña requerida")
      .max(8, "Maximo 8 caracteres")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden."),
  });
};
