import * as Yup from "yup";

export const SignupSchemas = Yup.object({
  name: Yup.string().min(2).max(20).required("Plaese enter your Name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Plaese enter your Email")
    .matches(/@gmail\.com$/, "Email must end with @gmail.com"),
  password: Yup.string()
    .min(6)
    .matches(/rishiME@199$/, "Password must be start from r__M_9")
    .required("Plaese enter your Password"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
