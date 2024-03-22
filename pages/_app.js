import React, { useState } from 'react';
import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react';
//import { supabase } from '../config/initSupabase';

// import { useMemo } from 'react';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [session, setSession] = useState(null);



  return getLayout(
  <>

    <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
      <Component {...pageProps} />
    </SessionContextProvider>

  </>
  );
}

export default MyApp
