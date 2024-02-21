This is a POC about how to securely store a JWT token using Next.JS.
This is important because by using an HttpOnly cookie your authentication token cannot be read client side using Javascript but only from you server side.
It's way more secure than use local storage or a normal cookie.

## Getting Started

```bash
npm run dev
# or
yarn dev
# org
pnpm dev
# or
bun dev
```
