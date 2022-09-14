import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blockchain Software Development | CGS Team</title>
        <meta
          name="description"
          content="CGS Team is the partner to succeed in decentralized solutions thanks to broad blockchain development services and NFT development services"
        />
        <meta property="og:url" content="https://blockchain.cgsteam.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blockchain Software Development | CGS Team"
        />
        <meta
          property="og:description"
          content="CGS Team is the partner to succeed in decentralized solutions thanks to broad blockchain development services and NFT development services"
        />
        <meta property="og:image" content="/previewLink.png" />
        <meta property="og:image:width" content="20" />
        <meta property="og:image:height" content="20" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
