"use client";

import Landing from "../components/Landing";
import { logout } from "../login/actions";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Landing />
    </div>
  );
}
