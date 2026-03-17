"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";
import Button from "../components/Button";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <form
      action={loginAction}
      className="flex w-80 flex-col gap-4 rounded-lg border border-gray-200 bg-white p-8"
    >
      <div className="flex flex-col gap-2 text-black">
        <input
          className="w-full rounded border border-gray-200 px-4 py-3 text-black outline-none focus:border-black transition-colors"
          id="email"
          name="email"
          placeholder="Email"
          defaultValue="email@domain.com"
        />
      </div>
      {state?.errors.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}

      <div className="flex flex-col gap-2 text-black">
        <input
          className="w-full rounded border border-gray-200 px-4 py-3 text-black outline-none focus:border-black transition-colors"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          defaultValue="12345678"
        />
      </div>
      {state?.errors.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} variant="blue">
      {pending ? "Logging in" : "Login"}
    </Button>
  );
}
