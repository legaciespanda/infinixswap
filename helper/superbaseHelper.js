import showNotification from "./notification";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
// import { supabase } from '../../config/initSupabase';


export  async function submitTransaction (hash, status, notfType, notfMsg){
    //e.preventDefault();
    const supabase = useSupabaseClient();
    const database_name = process.env.NEXT_PUBLIC_SUPABASE_DATABASE_NAME;
    var created_at = new Date();

    const { error } = await supabase
    .from(database_name)
    .insert({ 
        transaction_hash: hash,
        status: status,
        message: notfMsg,
        created_at: created_at
    });

    if(error){
        console.log(error);
        showNotification(error.message,"error")
    }else if(data){
        console.log(data);
        showNotification(notfMsg, notfType)
    }
    

}



