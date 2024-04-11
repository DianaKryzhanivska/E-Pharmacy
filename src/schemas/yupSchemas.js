import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Min length 6")
    .max(20, "Max length 20")
    .required("Required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Min length 6")
    .max(20, "Max length 20")
    .required("Required"),
});
