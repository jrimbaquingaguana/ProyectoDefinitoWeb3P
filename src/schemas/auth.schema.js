import { z } from "zod";

export const signupSchema = z
  .object({
    fullname: z
      .string({
        required_error: "El nombre completo es obligatorio",
      })
      .min(3, {
        message: "El nombre completo debe tener al menos 3 caracteres",
      }),
    email: z
      .string({
        required_error: "El correo electrónico es obligatorio",
      })
      .email({
        message: "El correo electrónico no es válido",
      }),
    password1: z
      .string({
        required_error: "La contraseña es obligatoria",
      })
      .min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
      }),
    password2: z.string({
      required_error: "La confirmación de contraseña es obligatoria",
    }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Las contraseñas no coinciden",
    path: ["password2"],
  });

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});
