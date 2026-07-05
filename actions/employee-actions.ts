"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

const createEmployeeSchema = z.object({
  firstName: z.string().min(2, "Imię jest wymagane"),
  lastName: z.string().min(2, "Nazwisko jest wymagane"),
  hourlyRate: z.coerce.number().positive("Stawka musi być większa od 0"),
});

export async function createEmployee(formData: FormData) {
  const result = createEmployeeSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    hourlyRate: formData.get("hourlyRate"),
  });

  if (!result.success) {
    throw new Error("Nieprawidłowe dane formularza");
  }

  await prisma.user.create({
    data: {
      role: "EMPLOYEE",
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      hourlyRate: result.data.hourlyRate,
    },
  });

  revalidatePath("/marel-admin");
}