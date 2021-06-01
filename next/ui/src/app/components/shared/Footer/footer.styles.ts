import styled from "styled-components";

export const FooterWrapper = styled("footer")`
  width: 100vw;
  position: relative;
  max-width: 1200px;
  align-items: center;
  background: #0c1033;
  display: flex;
  padding: 1em 4em;
  justify-content: center;
  color: white;
  & > .mail {
    position: absolute;
    left: 4em;
  }
  & > div:last-child {
    position: absolute;
    right: 4em;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    & > .mail {
      position: static;
    }
    & > * {
      padding: 1em 0;
    }
    & > div:last-child {
      border-top: 1px solid white;
      position: static;
    }
  }
`;
export const Wrapper = styled("div")`
  background: #0c1033;
  display: flex;
  justify-content: center;
`;
