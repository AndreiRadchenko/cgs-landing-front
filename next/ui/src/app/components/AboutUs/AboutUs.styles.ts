import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AboutUsContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
    padding: 0 10px;
  }

  & > q {
    font-weight: 300;
    line-height: 1.68;
    opacity: 0.5;
  }

  @media screen and (min-width: 769px) {
    &:not(:last-child) {
      margin-right: 162px;
    }

    & q {
      opacity: 1;
      font-size: 19px;
      line-height: 1.57;
    }
  }
`;

export const Avatar = styled('div')`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
`;

export const SlideWrapper = styled('div')`
  & .slick-track {
    display: flex;
  }
  @media screen and (min-width: 769px) {
    & .slick-slide:not(:last-child) {
      margin-right: 162px;
    }
  }
`;
