import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import createEmotionCache from "../utils/createEmotionCache";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { EmotionCache } from "@emotion/utils";
import { CacheProvider } from "@emotion/react";

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
          <meta
            name="description"
            content="Launching successful startups for over 6 years already"
          />
          <meta property="og:url" content="http://codegeneration.cc/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CGS-team" />
          <meta
            property="og:description"
            content="Launching successful startups for over 6 years already"
          />
          <meta property="og:image" content={"/previewLink.png"} />
          <meta property="og:image:width" content="20" />
          <meta property="og:image:height" content="20" />
          <link rel="icon" href={"/favicon.ico"} />
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
