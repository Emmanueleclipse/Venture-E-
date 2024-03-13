

import {getUserByEmail,BussinessInfo} from '../../api/data';
// import { stackApp } from "@/lib/stack";
import {stackApp} from '../../lib/stack';
import {isUserInSupabase} from '../../api/isUserInSupabase';



export default async function Profile() {

    await stackApp.getUser({ or: 'redirect' });
    const userLoggedin = await isUserInSupabase()
    // const buzzInfo = await BussinessInfo()  
    // console.log(buzzInfo)
    const user = await stackApp.getUser()
    const userEmail = user.primaryEmail;
    // console.log(user.primaryEmail);
    const result = await getUserByEmail(userEmail);
    // console.log(result);

    return (
        <div>hello world {result.data[0]?.first_name} {result.data[0]?.last_name} {result.data[0]?.email} {result.data[0]?.phone_number} {result.data[0]?.role}
        </div>
    );
} 