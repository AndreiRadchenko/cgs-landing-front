import styled from "styled-components";

export const Wrapper = styled("div")`
  @media screen and (max-width: 1023.5px) {
    & article:first-child h2 + div {
      display: none;
    }
    & article:first-child h2 {
      margin: 0;
      padding-left: 20px;
      padding-right: 20px;
    }
    @media screen and (max-width: 414px) {
      & article:first-child h2 {  
      width: 89%;
      font-size: 22px;
      line-height: 40px;
    }
     
    }
    & .articleButton a {
      margin: 0 auto;
    }

    & .articleButton a {
      margin-bottom: 0;
      display: inline-block;
      text-align: center;
    }
  }
`;

export const ArticleWrapper = styled("div")`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  margin: 0;
  & img {
    width: 100% !important; 
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.5px) {
    padding: 0 32px 30px;
  }

  @media screen and (max-width: 414px) {
    & img {
      width: 300px;
    }
  }
 
  & img {
    width: 100%;
    display: inline-block;
    margin: 25px 0 25px;
    object-fit: cover;
    @media screen and (max-width: 1023.5px) {
      margin: 25px 0 0 0px;
      margin-bottom: 25px;
    }
    @media screen and (max-width: 414px) {
      margin: 25px 0 0 0px;
      margin-bottom: 25px;
      width: 90% !important;
    }
    /* @media screen and (max-width: 360px) { 
      width: 100% !important;
    } */
    @media screen and (min-width: 320px) and (max-width: 360px) { 
      width: 90% !important;
    }
  }

  & .article__author,
  .article__date {
    font-size: 21px;
    font-weight: 300;
    line-height: 32px;
    margin: 0;
    color: #868799;
    @media screen and (max-width: 1023.5px) {
      display: none;
    }
  } 
`;
export const Content = styled("p")`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.66;
  text-align: justify; 
  color: ${(props) => props.theme.colors.greyText};
  & p {
    font-size: 18px;
    color: #333;
  }

  & a {
    color: #4fb2ed;
  }

  @media screen and (max-width: 1023.5px) {
    font-size: 18px;
  }
  @media screen and (max-width: 414px) {
    padding: 20px;
  }
  /* @media screen and (max-width: 360px) {
    padding-left: 5px;
    padding-right: 5px;
  } */
  @media screen and (min-width: 320px) and (max-width: 360px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TagList = styled("ul")`
  width: 100%;
  @media screen and (min-width: 1023.5px) {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 300;
  padding: 0 3em;

  & li {
    white-space: nowrap;
    margin-bottom: 10px;
    padding: 1px 15px;
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => props.theme.colors.buttonBgColor};
  }
  & li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ArticleButtonContainer = styled("div")`
  margin: 0 auto 120px;
  text-align: center;

  & a {
    margin: 0 auto;
    display: block;
    min-width: 200px;
  }
`;

export const ArticleTextContainer = styled("p")`
  font-size: 18px;
`