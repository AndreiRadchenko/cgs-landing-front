import styled from "styled-components";

export const HorizontalSep = styled("div")`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin-bottom: 33px;
`;

export const Wrapper = styled("article")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 1em 0 3em;
  & > p {
    text-align: center;
    opacity: 0.5;
    margin-bottom: 3em;
    font-size: 18px;
    font-weight: 300;
    padding: 0 3em;
    line-height: 32px;
  }
`;

export const Title = styled("h2")`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
  padding: 0 15vw;
  @media screen and (max-width: 1024px) {
    padding: 0 110px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 0 95px;
  }
`;

export const SubTitle = styled("p")`
  max-width: 800px;
`;
