import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  padding: 0 3.6%;
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  overflow: hidden;
  @media ${themes.primary.media.minPC} {
    padding: 0 5%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 7%;
  }
`;
