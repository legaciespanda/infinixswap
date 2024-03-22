// module.exports = {
//     jsonRpcUrlMap: { 
//       1: ['https://mainnet.infura.io/v3/813442caefa546b0bcd20b3bc80f45ba'], 
//       3: ['https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>']
//     },
//     provider: undefined,
//     convenienceFee: 0,
//     convenienceFeeRecipient: "testdb",
//     defaultChainId: 1,
//     // Special address for native token
//     defaultInputTokenAddress: "NATIVE",
//     defaultInputAmount: 0,
//     // WBTC as the default output token
//     defaultOutputTokenAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", 
//     defaultOutputAmount: 0,
//     hideConnectionUI: false,
//     locale: "en-US",
//     routerUrl: "https://api.uniswap.org/v1/",
//     // Default token list from Uniswap
//     tokenList: "https://gateway.ipfs.io/ipns/tokens.uniswap.org",//"https://api.coinmarketcap.com/data-api/v3/uniswap/all.json",
//     width:360,
//     theme: "dark", //light
//     disableBranding: true,
//   };

const chaninID = parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID);
const convenienceFee = parseInt(process.env.NEXT_PUBLIC_CONVENIENCE_FEE);

module.exports = {
  jsonRpcUrlMap: { 
    1: [`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`], 
    5: [`https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`],
  },
  provider: process.env.NEXT_PUBLIC_PROVIDER,
  convenienceFee: convenienceFee,
  convenienceFeeRecipient: process.env.NEXT_PUBLIC_CONVENIENCE_FEE_RECIPENT,
  defaultChainId:chaninID,
  // Special address for native token
  defaultInputTokenAddress: process.env.NEXT_PUBLIC_DEFAULT_INPUT_TOKEN_ADDRESS,
  defaultInputAmount: process.env.NEXT_PUBLIC_DEFAULT_INPUT_TOKEN_AMOUNT,
  // WBTC as the default output token
  defaultOutputTokenAddress: process.env.NEXT_PUBLIC_DEFAULT_OUTPUT_TOKEN_ADDRESS, 
  defaultOutputAmount: process.env.NEXT_PUBLIC_DEFAULT_OUTPUT_TOKEN_AMOUNT,
  hideConnectionUI: process.env.NEXT_PUBLIC_HIDE_CONNECTION_UI,
  locale: process.env.NEXT_PUBLIC_LOCALE,
  routerUrl: process.env.NEXT_PUBLIC_ROUTER_URL,
  // Default token list from Uniswap
  tokenList: process.env.NEXT_PUBLIC_TOKEN_LIST,//"https://api.coinmarketcap.com/data-api/v3/uniswap/all.json",
  width:process.env.NEXT_PUBLIC_WIDTH,
  theme: process.env.NEXT_PUBLIC_THEME, //light
  disableBranding: process.env.NEXT_PUBLIC_DISABLE_BRANDING,
};