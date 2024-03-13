// import { stackApp } from "@/lib/stack";
import { stackApp } from "../lib/stack";

import { getUserByEmail } from "./data";
// import { useStackApp } from "@stackframe/stack";

export async function isUserInSupabase() {
  const stackUser = await stackApp.getUser();
  const stackEmail = stackUser.primaryEmail;

  const supaBaseEmail = await getUserByEmail(stackEmail);
  // console.log(supaBaseEmail)
  const email = supaBaseEmail.data[0]?.email;
  // console.log(stackEmail)
  // console.log(supaBaseEmail.data[0].email)
  if (email === stackEmail) {
    return true;
  } else {
    return false;
  }
}


export async function OwnerorUser() {
    const stackUser = await stackApp.getUser();
    const stackEmail = stackUser.primaryEmail;
  
    const supaBaseEmail = await getUserByEmail(stackEmail);
    // console.log(supaBaseEmail)
    const email = supaBaseEmail.data[0]?.role;
    // console.log(stackEmail)
    // console.log(supaBaseEmail.data[0].email)
    if (email) {
      return true;
    } else {
      return false;
    }
  }

