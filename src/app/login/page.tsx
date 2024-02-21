import { Metadata } from "next";
import { AuthLogin } from "./components/auth-login";

export const metadata: Metadata = {
  title: "Login",
};


export default function Login() {
  return <AuthLogin />
}
