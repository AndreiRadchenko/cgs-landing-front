﻿import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
  overflow: clip;
  overflow-clip-margin: 100px;
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4rem;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.6rem;
  }
`;
