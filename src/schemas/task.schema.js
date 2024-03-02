import { z } from "zod";

export const createLinkSchema = z.object({
  title: z
    .string({
      message: "El título debe ser una cadena de texto",
    })
    .min(3, {
      message: "El título debe tener al menos 3 caracteres",
    })
    .max(100, {
      message: "El título no puede tener más de 100 caracteres",
    }),
  url: z
    .string({
      message: "La URL debe ser una cadena de texto",
    })
    .url({
      message: "La URL debe ser una URL válida",
    }),
  description: z
    .string({
      message: "La descripción debe ser una cadena de texto",
    })
    .max(1000, {
      message: "La descripción no puede tener más de 1000 caracteres",
    })
    .optional(),
});
