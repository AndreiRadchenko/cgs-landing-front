import styled from "styled-components";

export const TestimonialContainer = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  & .titleWrapper {
    margin: 4px 0 5px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;    
  }

  & .infoWrapper {
    display: flex;

    align-items: center;
  }
  & h2 {
    margin: 0;
    font-size: 22px;
    max-width: 100%;
    word-wrap: break-word;
    white-space: normal;

    @media screen and (max-width: 415px) {
      width: min-content;
      white-space: nowrap;
      font-size: 17px;
    }
  }

  & .testimonials__company {
    margin: 0;
    line-height: 48px;
  }

  & .testimonials__text {
    margin: 0;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.67;
    flex-grow: 1;
    @media (max-width: 420px) {
      font-size: 14px;
    }
  }

  & .testimonials__position {
    margin: 0;
    margin-bottom: 22px;
    padding: 2px 8px;
    border-radius: 5px;
    color: #fff;
  }

  & .testimonials__country {
    font-size: 14px;
  }

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    text-align: center;
    & .testimonials__text {
      color: #868799;
      font-size: 18px;
    }
  }
`;

export const TestimonialFlag = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  object-fit: cover;

  & img {
    object-fit: cover;
    border: 2px solid black;
    border-radius: 5px;
    margin-right: 5px;
  }
`;

export const TestimonialPosition = styled("p")`
  background-color: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 5px;
  margin: 0;
  margin-bottom: 22px;
  padding: 2px 8px;
  color: ${(props) => props.theme.colors.mainBgColor};
`;
