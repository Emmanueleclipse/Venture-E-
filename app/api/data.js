// import { createClient } from '@/utils/supabase/server';

// export default async function allUsers() {
//   const supabase = createClient();
//   let { data: userInfo, error } = await supabase
//   .from('userInfo')
//   .select('*')
//           console.log(userInfo);
//   return <pre>{JSON.stringify(userInfo, null, 2)}</pre>
// }

import { createClient } from "@/utils/supabase/server";

export async function allUsers() {
  const supabase = createClient();
  let { data: userInfo, error } = await supabase.from("userInfo").select("*");

  // console.log(userInfo);

  return { data: userInfo, error };
}

export async function addUser(userData) {
  const {
    first_name,
    last_name,
    email,
    userName,
    password_hash,
    phone_number,
    role,
  } = data;
  const { data, error } = await supabase
    .from("userInfo")
    .insert([
      {
        first_Name: first_name,
        last_name: last_name,
        email: email,
        userName: userName,
        password_hash: password_hash,
        phone_number: phone_number,
        role: role,
      },
    ])
    .select();
}

export async function getUserByEmail(email) {
  // console.log(email)
  const supabase = createClient();
  let { data: userInfo, error } = await supabase
    .from("userInfo")
    .select("*")
    .eq("email", email);

  return { data: userInfo, error };
}

export async function BussinessInfo() {
  const supabase = createClient();
  let { data: businessProfiles, error } = await supabase
    .from("businessProfiles")
    .select("*");
  return { data: businessProfiles, error };
}

export async function Events() {
  const supabase = createClient();
  let { data: events, error } = await supabase
    .from("events")
    .select("*");
  return { data: events, error };
}


export async function getEventAndTimes(EventID) {
  // console.log(email)
  // console.log(BusinessID);
  // console.log(EventID)
  const supabase = createClient();
  let { data: events, errors } = await supabase
    .from("events")
    .select("*")
    .eq("EventID", EventID);

  let { data: eventTimeSlots, eventTimeSlotsErrors } = await supabase
    .from("eventTimeSlots")
    .select("*")
    .eq("event_id", EventID);

  return { data: { events, errors }, eventTimeSlots: { data: eventTimeSlots, errors: eventTimeSlotsErrors } }
}
