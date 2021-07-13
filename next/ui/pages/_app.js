import { ThemeProvider } from "styled-components";

import "../styles/globals.css";

import theme from "../styles/theme";
import { GlobalStyle } from "../styles/global-styles";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
