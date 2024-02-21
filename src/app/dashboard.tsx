'use client';

import { useRouter } from "next/navigation";
import { logout } from "./lib/logout";

type DashboardProps = {
  name: string;
}

export default function Dashboard({ name }: DashboardProps) {
  const router = useRouter();

  const onLogout = () => {
    logout();
    router.push('/login');
  }

  return (
    <div>
      <h2>Hi {name}</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
