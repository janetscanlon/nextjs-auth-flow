"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { RedirectType } from "next/navigation";

// mock user
const testUser = {
  id: "1",
  email: process.env.TEST_USER_EMAIL!,
  password: process.env.TEST_USER_PASSWORD,
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
      errors: result.error.issues.reduce(
        (acc, issue) => {
          const key = issue.path[0] as string;
          if (key) {
            acc[key] = acc[key] ?? [];
            acc[key].push(issue.message);
          }
          return acc;
        },
        {} as Record<string, string[]>,
      ),
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

export async function logout() {
  await deleteSession();
  redirect("/dashboard");
}
