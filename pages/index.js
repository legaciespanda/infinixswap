import Head from 'next/head'
// import { useState } from 'react'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import swapConfig from '../config/swap.config';
import customtokenlistConfig from '../token/customtokenlist.config';
import darkthemeConfig from '../theme/darktheme.config';
import lighthemeConfig from '../theme/lighttheme.config';
import { providers, ethers } from 'ethers';
import generalConfig from '../config/general.config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showNotification from '../helper/notification';
// import { submitTransaction } from '../helper/superbaseHelper';
import { useSupabaseClient } from '@supabase/auth-helpers-react'



export default function Home() {

  const jsonRpcProvider = new providers.JsonRpcProvider(swapConfig.jsonRpcUrlMap[1]);
  const provider = new ethers.providers.Web3Provider(jsonRpcProvider);
  const supabase = useSupabaseClient();

  const date = new Date();
  // let day = date.getDate();
  // let month = date.getMonth() + 1;
  let year = date.getFullYear();

  async function submitTransaction (hash, status, notfType, notfMsg){
    //e.preventDefault();
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
    }else{
        showNotification(notfMsg, notfType)
    }
  
}


  return (
    <div className={styles.container}>
      <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
        <title>{generalConfig.seoTitle}</title>
        <meta name="description" content={generalConfig.seoKeywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta
        name="keywords"
        content={generalConfig.seoKeywords}/> 
      <meta charSet="utf-8" />
      {/* <base href={generalConfig.url} /> */}
      <meta name="robots" content={generalConfig.robots} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="revisit-after" content="5 days" />
      <meta name="language" content="english" />
      <meta name="document-type" content="public" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="expires" content="never" />
      <meta name="author" content={generalConfig.websiteName} />
      <meta name="copyright" content={generalConfig.copyright} />

      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>
          <a href="/">{generalConfig.websiteName}</a>
        </h4>

        <p className={styles.description}>
          {generalConfig.websiteDescription}
        </p>
		
		  <div className="Uniswap" className={styles.uniswap}>
			<SwapWidget 
			width={swapConfig.width} 
			theme={swapConfig.theme == 'dark' ? darkthemeConfig : lighthemeConfig}
      tokenList={swapConfig.tokenList != null || swapConfig.tokenList != '' ? swapConfig.tokenList : customtokenlistConfig}
      defaultInputTokenAddress={swapConfig.defaultInputTokenAddress}
      defaultInputAmount={swapConfig.defaultInputAmount}
      defaultOutputTokenAddress={swapConfig.defaultOutputTokenAddress}
      provider={provider} 
      jsonRpcUrlMap={swapConfig.jsonRpcUrlMap}
      onReviewSwapClick = {()=> {}}
      onTxFail = {(e)=> submitTransaction(e, "error", "error", "Swap Transaction Failed")}
      onTxSubmit = {(e)=> showNotification("Transaction submitted. Proccessing... " + e, "success")}
      onTxSuccess = {(e)=> submitTransaction(e, "success", "success", "Swap Transaction Successful")}//0xe075ac574cb2fef439780afaf72f2f996479b3cf35af1482ef88f4fa551e9704 transaction harsh
      onError = {(e)=> showNotification(e, "error")}
      disableBranding = {swapConfig.disableBranding}
      defaultChainId = {swapConfig.defaultChainId}
      routerUrl={swapConfig.routerUrl != null || swapConfig.routerUrl != '' ? swapConfig.routerUrl : ''}
			/>
		  </div>

      <ToastContainer />
		
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          rel="noopener noreferrer"
        >
           2022 - {year} All Rights Reserved | Powered by{' '}
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            {generalConfig.websiteName}

        </a>
      </footer>
    </div>
  )
}
