"use server";

import { error } from "console";
import { z } from "zod";
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";
import { RedirectType } from "next/navigation";

// mock user
const testUser = {
  id: "1",
  email: "email@domain.com",
  password: "123456",
};

const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {
  // validate recieved data against the login schema
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: z.treeifyError(result.error),
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  // create a session for the user and direct to the dashboard
  await createSession(testUser.id);

  redirect("/dashboard", RedirectType.push);
}

export async function logout() {}
