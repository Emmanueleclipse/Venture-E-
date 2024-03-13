'use client';
import { useStackApp, SignIn } from "@stackframe/stack";

export default function DefaultSignIn() {
  const app = useStackApp();

  return <SignIn fullPage redirectUrl={app.urls.userHome} />;
}


// id	created_at	first_name	last_name	email	username	
// password_hash	phone_number	role	google_id	facebook_id	stack_email_id