'use server';

import { deleteJWT } from "@/core/auth/jwt";

export const logout = () => {
  deleteJWT();
}
