import styled from "styled-components";

export const AboutUsContainer = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Mulish;
  & > h2 {
    margin: 16px 0 8px;
  }
  & .about-us__position {
    border-radius: 5px;
    color: #fff;
  }
  & > p {
    margin: 0 0 22px;
    padding: 2px 8px;
    font-family: Mulish;
    font-weight: 300;
    text-align: center;
    @media screen and (max-width: 1025px) {
      font-size: 18px;
    }
  }

  & > p:nth-of-type(2) {
    @media screen and (max-width: 1025px) {
      color: #868799;
    }
  }
  & > .about-us__text {
    color: #0c1033;
  }
  & > q {
    font-weight: 300;
    line-height: 1.68;
    color: #868799;
  }
  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
    & q {
      opacity: 1;
      font-size: 19px;
      line-height: 1.57;
    }
  }
`;

export const Avatar = styled("div")`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  & > img {
    object-fit: cover;
  }
`;

export const AboutText = styled("p")`
  max-width: 344px;
  font-family: Mulish;
  font-size: 19px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

export const SlideWrapper = styled("div")`
  & .slick-track {
    display: flex;
  }
`;

export const Position = styled("p")`
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.buttonBgColor};
`;
