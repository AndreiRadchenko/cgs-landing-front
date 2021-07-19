import styled from "styled-components";

export const Wrapper = styled("div")`
  max-width: 1067px;
  padding: 0 10px;
  width: 100%;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 55px;
  }
  @media screen and (max-width: 1023.5px) {
    width: 100%;
    padding: 0 24px;
    & div:nth-of-type(4) a div:nth-of-type(3) {
      
    }    
  }
`;
export const ArticleWrapper = styled("div")`
  padding: 0 0;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 60px;
    @media screen and (max-width: 1023.5px) {
      margin-bottom: 77px;
      padding-top: 30px;
    }
  }
  & > a {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 3px 8px;
    margin: 0;
    @media screen and (max-width: 1023.5px) {
      flex-direction: column;
    }
  }

  & img {
    display: block;
    width: 338px;
    height: 200px;
    object-fit: cover;
    border-radius: 16px;
    @media screen and (max-width: 1023.5px) {
      margin: 0 auto;
      width: 90%;
      height: auto;
      margin-bottom: 13px;
      max-width: 720px;
      border-radius: 16px;
    }

    @media screen and (max-width: 768px) {
      width: 90%;
      max-width: 720px;
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
    & .LinesEllipsis  {
      font-size: 18px;
      line-height: 30px;      
    }

    @media screen and (max-width: 1023.5px) {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      & .LinesEllipsis  {
      font-size: 18px;
      line-height: 30px;     
    }
  }
    @media screen and (max-width: 765px and max-width: 765px) {
      margin: 0 auto;
    }
    @media screen and (min-device-width: 765px) and (max-device-width: 1023.5px) { 
      & .article__content,.LinesEllipsis {
        width: 79%;
      }
    }
}
  }
  & h2 {
    text-align: left;
    @media screen and (max-width: 1023.5px) {
      text-align: center;
      margin-bottom: 13px;
      font-size: 22px;
    }
  }

  & p {
    text-align: left;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1023.5px) {
      text-align: center;
    }
  }

  & ul {
    justify-content: flex-start;
    padding: 0;
    @media screen and (max-width: 1023.5px) {
      justify-content: center;
    }
  }
`;
export const FeaturedArticle = styled("div")`
  margin: 0 auto;
  max-width: 800px;
  align-self: center;
  margin-bottom: 60px;
  text-align: center;
  @media screen and (max-width: 1023.5px) {
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
    @media screen and (max-width: 1023.5px) {
      position: relative;
      padding: 0 0;
    }
  }
  & img {
    width: 100%;
    display: inline-block;
    margin-bottom: 15px;
    border-radius: 16px;
    @media screen and (max-width: 1023.5px) {
      margin: 0 auto;
      width: 90%;
      height: auto;
      margin-bottom: 13px;
      border-radius: 16px;
    }
  }

  & h2 {
    margin-bottom: 15px;
      font-size: 24px;
      line-height: 54px;
    @media screen and (max-width: 1023.5px) {
      text-align: center;
      margin-bottom: 13px;
      padding: 0 8vw;
      font-size: 22px;
      line-height: 28px;
    }
  }

  & p {
    margin-bottom: 1.72em;
    font-size: 18px;
    line-height: 32px;    
    @media screen and (max-width: 1023.5px) {
      padding: 0 8vw;
      font-size: 18px;
      line-height: 32px;
    }
  }
`;

export const InnerWrapper = styled("article")`
  display: flex;
`;

export const Title = styled("h2")`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;


  @media screen and (max-width: 1023.5px) {
    font-size: 18px;
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
  @media screen and (max-width: 1023.5px) {
    font-size: 18px;
    opacity: 0.5;
  }
`;

export const TagList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;  
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 300;
  padding: 0 3em; 
  @media screen and (max-width: 470px) {
      margin-top: 15px;    
    }

  & li {
    padding: 3px 15px;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 15px;
    @media screen and (max-width: 1023.5px) {
      margin-top: 0px;
    }

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
  & li:not(:last-child) {
    margin-right: 18px;
  }
  @media screen and (max-width: 1023.5px) {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 100%;
    padding: 0;
  }
`;

export const HorizontalSep = styled("div")`
  pointer-events: none;
  @media screen and (min-width: 1023.5px) {
    display: none;
  }
  width: 55px;
  height: 3px;
  background: #0c1033;
  border-radius: 5px;
  margin: 27px auto 0;
    
  @media screen and (max-width: 470px) {
    margin-bottom: 15px;
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
      border-radius: 16px;
    }
  }
`;

export const ContentContainer = styled("div")`
 & .LinesEllipsis  {
    font-size: 18px;
    line-height: 30px;
      
  @media screen and (max-width: 1023.5px) {
    width: 90%;
    margin: 0 auto;
    
  }
}

  @media screen and (max-width: 470px) {
      & .LinesEllipsis, .LinesEllipsis--clamped {
      text-align: center;
    }
  }  
 `

