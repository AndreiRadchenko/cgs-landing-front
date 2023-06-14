import React, { useState } from "react";
import type { AppProps } from "next/app";
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/router';
import Head from "next/head";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "../styles/globals.css";
import "../styles/animations.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const handleSwipeLeft = () => {
    router.back();
  };

  const handleSwipeRight = () => {
    router.push('/next-page');
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

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
          <div {...handlers}>
            <Component {...pageProps} />
          </div>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}


export default MyApp;
