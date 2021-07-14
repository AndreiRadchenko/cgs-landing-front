import styled from "styled-components";

export const HeaderLinks = styled("div")`
  display: flex;
  justify-content: space-between;
  & a:not(:last-child) {
    @media screen and (min-width: 1150px) {
      margin-right: 15px;
    }
  }
`;
export const SocialWrap = styled("div")`
  margin: 0.5em 0.5em;
  width: fit-content;
`;
export const SocialLogo = styled("img")`
  width: 100%;
  height: 100%;
`;
