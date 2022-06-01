import React from "react";
import "../styles/globals.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import createEmotionCache from "../utils/createEmotionCache";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { EmotionCache } from "@emotion/utils";
import { CacheProvider } from "@emotion/react";
import faviconIco from "../../public/favicon.ico";

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
