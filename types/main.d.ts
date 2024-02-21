/**
 * Default CSS definition for typescript
 */
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

type LoginPayload = {
  username: string;
  password: string;
}

interface EventTarget {
  name: { value: string };
  pwd: { value: string };
}