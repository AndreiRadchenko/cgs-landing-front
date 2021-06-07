import React from "react";
import * as Styled from "./notFound.styles";
import { Helmet } from "react-helmet-async";

export const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
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
