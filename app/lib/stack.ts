import "server-only";
import { StackServerApp } from "@stackframe/stack";

export const stackApp = new StackServerApp({
  tokenStore: "nextjs-cookie", // storing auth tokens in cookies
  urls: {
    signIn: '/signin',
    signUp: '/signup',
  }
});

//app/handler/[...stack]/page.tsx