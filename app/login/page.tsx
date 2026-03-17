import Header from "../components/Header";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Header />
      <LoginForm />
      <p className="text-xs text-gray-400 text-center">
        Demo: email@domain.com / pw: 12345678
      </p>
    </div>
  );
}
