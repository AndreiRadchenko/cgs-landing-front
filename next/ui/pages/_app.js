import { useLayoutEffect } from "react";

import Router from "next/router";

import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "../styles/global-styles";

const domains = new Set([
  "codegeneration.cc",
]);

const MyApp = ({ Component, pageProps }) => {
  useLayoutEffect(() => {
    if (!domains.has(window.location.host)) {
      return;
    }

    if (window.location.protocol !== "http:") {
      return;
    }

    const newUrl = new URL(window.location);

    newUrl.protocol = "https:";

    Router.push(newUrl);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
