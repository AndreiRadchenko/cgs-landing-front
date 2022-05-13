import styled from "styled-components";

export const Wrapper = styled("div")`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  margin: 0;
  @media screen and (max-width: 1023.5px) {
    width: 100%;
    padding: 0 32px;
  }

  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1023.5px) {
      margin-top: 39px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SimilarArticle = styled("li")`
  width: calc((100% - 120px) / 2);
  cursor: pointer;
  & .LinesEllipsis {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }

  & img {
    width: 100%;
    display: block;
    object-fit: contain;
    display: inline-block;
    margin-bottom: 35px;
    border-radius: 16px;
    @media (max-width: 1023.5px) {
      height: auto;
    }
    @media (max-width: 414px) {
      width: 90%;
    }
    @media (max-width: 360px) {
      width: 100%;
    }
    @media (min-width: 320px) and (max-width: 360px) {
      width: 90%;
    }
  }
  & h2 {
    margin: 0 0 30px;
    font-size: 22px;
    text-align: center;
    display: block;
    height: 50px;
    @media (min-width: 320px) and (max-width: 400px) {
      width: 89%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    @media (min-width: 401px) and (max-width: 414px) {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }
  & p {
    margin: 0;
    line-height: 1.67;
    text-align: center;
  }

  @media screen and (max-width: 1023.5px) {
    width: 100%;
    text-align: center;

    & p {
      display: none;
    }

    & .LinesEllipsis {
      display: none;
    }
  }
`;

export const HorizontalSep = styled("li")`
  pointer-events: none;

  @media screen and (min-width: 1023.5px) {
    display: none;
  }
  width: 55px;
  height: 3px;
  background: #0c1033;
  border-radius: 5px;
  margin-bottom: 50px;

  @media screen and (max-width: 470px) {
    margin-bottom: 15px;
  }
`;
