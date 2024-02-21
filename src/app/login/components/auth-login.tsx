'use client';

import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { login } from "@/app/lib/login";
import style from './auth-login.module.css';
import { FormEvent, FormEventHandler } from "react";

export const metadata: Metadata = {
  title: "Login",
};

export const AuthLogin = () => {
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, pwd } = e.target;

    const username = name.value;
    const password = pwd.value;

    const statusCode = await login({ username, password });

    if (statusCode === 200) {
      return router.push('/');
    }
  };

  return (
    <div className={style.root}>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>

        <div className={style.field}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={style.field}>
          <label htmlFor="pwd">Password</label>
          <input type="password" id="pwd" name="pwd" required />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
