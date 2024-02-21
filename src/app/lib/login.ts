'use server';

import jwt from 'jsonwebtoken';
import { setJWT } from "@/core/auth/jwt";

export const login = async (payload: LoginPayload): Promise<number> => {
  try {

    /* Your auth endpoint */
    // const result = await fetch('', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // });

    const { username } = payload;
    const token = jwt.sign({ username }, 'shhhhh');
    setJWT(token);
    return 200;

  } catch (e: unknown) {
    return 404;
  }
};
