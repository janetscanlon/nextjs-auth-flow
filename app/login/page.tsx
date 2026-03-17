import Header from "../components/Header";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Header />
      <LoginForm />
    </div>
  );
}
