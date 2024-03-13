import { stackApp } from "@/app/lib/stack";
import { isUserInSupabase,OwnerorUser } from "@/app/api/isUserInSupabase";
import Link from "next/link";
import { Suspense } from "react";
export default async function Events() {
    await stackApp.getUser({ or: 'redirect' });
    let isLoggedIn = false;
    let hiddenTabs = false;
  
    const stackUser = await stackApp.getUser();
    //this will only happen if the user is not in the supabase database
    if (stackUser !== null) {
      const userInSupabase = await isUserInSupabase();
      if (!userInSupabase) {
        return null;
        // Return null while the page is being redirected
      }
      isLoggedIn = true;
      hiddenTabs = await OwnerorUser(); // Await the promise to resolve
    }
  
    if (hiddenTabs) {
      return (
        <Suspense fallback={<p>Loading Events...</p>}>
        <div>
          <h1>Events</h1>
        </div>
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<p>Loading...</p>}>
        <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sign up to be a business owner</h1>
          <Link href={'/profile'} className="text-brand text-3xl font-bold" >Go to Profile</Link>
        </div>
        </Suspense>
      );
    }
  }