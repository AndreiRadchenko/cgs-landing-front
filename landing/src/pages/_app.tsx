import React from "react";
import "../styles/globals.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";

import createEmotionCache from "../utils/createEmotionCache";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { EmotionCache } from "@emotion/utils";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";

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
          <title>Custom Software Development | CGS-team</title>
          <meta
            name="description"
            content="CGS-team is a custom software development company with a modern approach and vast experience in web development and mobile software development"
          />
          <link key="icon" rel="icon" href="/favicon.ico" />
        </Head>
        <Hydrate state={pageProps.dehydratedState}>
          <CacheProvider value={emotionCache}>
            <Component {...pageProps} />
          </CacheProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
