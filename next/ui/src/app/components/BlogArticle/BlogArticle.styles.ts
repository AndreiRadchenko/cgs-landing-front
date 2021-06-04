import styled from "styled-components";
export const Wrapper = styled("div")`
  width: 72.2%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 24px;
  }
`;
export const ArticleWrapper = styled("div")`
  padding: 0 0;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 60px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 77px;
      padding-top: 30px;
    }
  }
  & a {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0 0;
    margin: 0;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .article__image {
  }
  & img {
    display: block;
    width: 338px;
    height: 200px;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      margin: 0 auto;
      width: auto;
      height: 166px;
      margin-bottom: 13px;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
  & .article__content {
    width: calc(100% - 378px);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
  & h2 {
    text-align: left;
    @media screen and (max-width: 1024px) {
      text-align: center;
      margin-bottom: 13px;
    }
  }

  & p {
    text-align: left;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }

  & ul {
    justify-content: flex-start;
    padding: 0;
    @media screen and (max-width: 1024px) {
      justify-content: center;
    }
  }
`;
export const FeaturedArticle = styled("div")`
  align-self: center;
  margin-bottom: 60px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 55px;
    margin-bottom: 77px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 75px;
  }

  & a {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
    margin: 0;
    @media screen and (max-width: 1024px) {
      position: relative;
      padding: 0 0;
    }
  }
  & img {
    width: 65%;
    display: inline-block;
    margin-bottom: 60px;
    @media screen and (max-width: 1024px) {
      margin: 0 auto;
      width: auto;
      height: 166px;
      margin-bottom: 13px;
    }
  }

  & h2 {
    margin-bottom: 1.54em;
    @media screen and (max-width: 1024px) {
      text-align: center;
      margin-bottom: 13px;
    }
  }

  & p {
    margin-bottom: 1.72em;
  }
`;

export const InnerWrapper = styled("article")`
  display: flex;
`;

export const Title = styled("h2")`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.27;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const Content = styled("p")`
  text-align: center;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  padding: 0 3em;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    opacity: 0.5;
  }
`;

export const TagList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 300;
  padding: 0 3em;

  & li {
    padding: 1px 15px;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 10px;
    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
  & li:not(:last-child) {
    margin-right: 18px;
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 100%;
    padding: 0;
  }
`;

export const HorizantalSep = styled("div")`
  pointer-events: none;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  width: 55px;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin: 27px auto 0;

  div:last-child > a > & {
    display: none;
  }
`;

export const ArticleTag = styled("li")`
  background-color: ${(props) => props.theme.colors.buttonBgColor};
`;

export const ImageContainer = styled("div")`
  @media (max-width: 420px) {
    & > img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
