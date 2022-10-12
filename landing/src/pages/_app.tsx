import React, { useState } from "react";
import "../styles/globals.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Head from "next/head";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
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
        return (
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
