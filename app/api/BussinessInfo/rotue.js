import { createClient } from '@/utils/supabase/server';
export default async function BussinessInfo(){
    const supabase = createClient();
    let { data: businessProfiles, error } = await supabase
    .from('businessProfiles')
    .select('*')
    // console.log(data);
            return { data: businessProfiles, error };
}