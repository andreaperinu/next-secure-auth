import { Metadata } from "next";
import Dashboard from "./dashboard";
import jwt from 'jsonwebtoken';
import { getJWT } from "@/core/auth/jwt";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  const token = getJWT();

  var decodedJwt = token ? jwt.verify(token, 'shhhhh') : null;
  const name = decodedJwt ? (decodedJwt as jwt.JwtPayload).username : '?';

  return <Dashboard name={name} />;
}
