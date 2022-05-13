import Head from "next/head";

import * as Styled from "./notFound.styles";

export const NotFoundPage = () => (
  <>
    <Head>
      <title>404 Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Head>
    <Styled.Wrapper>
      <Styled.Title>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </Styled.Title>
      <Styled.Text>Page not found.</Styled.Text>
    </Styled.Wrapper>
  </>
);
