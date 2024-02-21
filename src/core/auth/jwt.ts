import { cookies } from 'next/headers';

export const JWT_KEY = 'jwt';

export const getJWT = () => cookies().get(JWT_KEY)?.value;

export const setJWT = (token: string) => {
  cookies().set(JWT_KEY, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30, // One month
    path: '/',
    domain: '',
  });
};

export const deleteJWT = () => cookies().delete(JWT_KEY);
