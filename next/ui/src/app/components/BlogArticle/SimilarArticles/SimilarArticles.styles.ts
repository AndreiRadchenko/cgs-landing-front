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
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 32px;
  }

  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      margin-top: 39px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SimilarArticle = styled("li")`
  width: calc((100% - 120px) / 2);
  & .LinesEllipsis {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;

    & p {
      display: none;
    }
  }

  & img {
    width: 100%;
    height: 166px;
    object-fit: cover;
    display: inline-block;
    margin-bottom: 2em;
    @media (max-width: 1025px) {
      height: auto;
    }
  }
  & h2 {
    margin: 0 0 29px;
    font-size: 22px;
  }
  & p {
    margin: 0;
    line-height: 1.67;
  }
`;
