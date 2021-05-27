import styled from "styled-components";

export const HorizantalSep = styled("div")`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
`;

export const Wrapper = styled("article")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  margin: 3em 0;
  & > p {
    text-align: center;
    opacity: 0.5;
    margin-bottom: 3em;
    font-size: 18px;
    font-weight: 300;
    padding: 0 3em;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled("h2")`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 0.6em;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
