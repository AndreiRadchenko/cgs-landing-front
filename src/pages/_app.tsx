import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import createEmotionCache from "../utils/createEmotionCache";
import { QueryClient, QueryClientProvider } from "react-query";
import { EmotionCache } from "@emotion/utils";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>CGS - team</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
