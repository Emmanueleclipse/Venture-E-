import Link from "next/link";
import { redirect } from 'next/navigation';
import {isUserInSupabase} from '../app/api/isUserInSupabase';
import { stackApp } from '@/app/lib/stack';
import { Suspense } from "react";


export default async function Home() { 
  const stackUser = await stackApp.getUser();

//this if statement is if the user is logging in the first time they must go to profile to fill out there info for the first time
//this will only happen if the user is not in the supabase database
  if (stackUser !== null) { 
    const userInSupabase = await isUserInSupabase(); 
    if (!userInSupabase) { 
      redirect('/profile'); 
      return null; 
    // Return null while the page is being redirected 
  } }
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
        <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
      Welcome to <span className="text-brand">Eventure</span>
    </h1>
          <p className="text-xl mb-8">
          At Eventure, we're revolutionizing the way you plan events. Gone are the days of 
          endless searching for the perfect vendors for your event. Our platform brings the celebration to you, connecting you with a curated 
          selection of local businesses ready to make your special occasion unforgettable.  Support local. Celebrate big. 
          Plan easily. Welcome to the future of event planning.
          </p>
          <Link href="/services" className="bg-brand text-white py-2 px-8 rounded-lg font-bold text-lg">
            Get Started
          </Link>
        </div>
        </Suspense>
      );
}