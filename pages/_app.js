import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <> 
         <Head> 
            <link    
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"
            crossOrigin="anonymous"
            />
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="shortcut icon" href="/favico.ico" />
        </Head>


         <Component {...pageProps} />
    </> );
    }
    
export default MyApp
