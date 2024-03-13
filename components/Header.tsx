// "use client";

import { Suspense } from "react";
// import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
// import { useUser } from "@stackframe/stack";
import { stackApp } from "@/app/lib/stack";
import { isUserInSupabase, OwnerorUser } from "../app/api/isUserInSupabase";

async function HeaderContent() {
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

  // console.log(stackUser)

  // useEffect(() => {
  //   setIsLoggedIn(user !== null);
  // }, [user]);

  return (
    <header className="sticky top-0 z-50 flex justify-between w-full mb-8 items-start bg-neutral-light p-4 rounded-lg">
      <Link href="/">
        <h1 className="text-brand text-3xl font-bold">Eventure</h1>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          {isLoggedIn ? (
            <>
              <li>
                <Link href="/services" className="text-brand text-lg">
                  Services
                </Link>
              </li>
              {hiddenTabs && (
                <li>
                  <Link href="/businesses" className="text-brand text-lg">
                    Businesses
                  </Link>
                </li>
              )}
              {hiddenTabs && (
                <li>
                  <Link href="/events" className="text-brand text-lg">
                    Events
                  </Link>
                </li>
              )}
              <li>
                <Link href="/profile" className="text-brand text-lg">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href={stackApp.urls.signOut}
                  className="text-brand text-lg"
                >
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup" className="text-brand text-lg">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/signin" className="text-brand text-lg">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense>
      <HeaderContent />
    </Suspense>
  );
}

//fallback={<div>Loading...</div>}
