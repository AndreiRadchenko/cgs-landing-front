import styled from "styled-components";
import themes from "../utils/themes";

export const NavigateLeft = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 160px;
  border-left: 1px solid #8f8e93;
  color: black;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-family: ${themes.primary.font.family.namu};
  font-weight: 500;
  font-size: 52px;
  background-color: #f7f7f7;
  &:after {
    content: none;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 130px;
    font-size: 40px;
  }
`;

export const ButtonInfo = styled.div`
  display: flex;
  height: 153px;
  width: 100%;
  background: #e5e5e5;
  padding: 0px 27px;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #8f8e93;
  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    &:nth-child(1) {
      color: white;
    }
  }
`;

export const Category = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: 40px;
  margin: 0 auto 0 0;
`;

export const PortfolioRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
  }
  & .swiper-slide-next {
    color: rgba(0, 0, 0, 0.5);
  }
  & .swiper-slide-prev {
    color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  & .swiper-slide {
    transition: 0.5s linear;
  }
  border-top: 1px solid #8f8e93;

  &:hover ${NavigateLeft} {
    background-color: ${themes.primary.colors.darkBlue};
    color: white;
  }
  @media ${themes.primary.media.maxMobile} {
    display: block;
    border-left: 1px solid #8f8e93;
    border-right: 1px solid #8f8e93;
    margin: 0 10px;
    &:hover ${ButtonInfo} {
      background-color: ${themes.primary.colors.darkBlue};
      &:nth-child(1) {
        color: white;
      }
    }
  }
`;

export const NavigateRight = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 150px;
  background-color: #f7f7f7;
  right: 0;
  & div:after {
    content: none;
  }
  & div {
    left: 0;
    top: 0;
    margin-top: 0;
    height: 100%;
    width: 100%;
    color: black;
  }
`;

export const ReviewContainer = styled.div`
  .swiper-slide-next {
    background-color: #0070f3;
  }
  height: 100%;
  position: relative;
  left: 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${themes.primary.media.maxTabletLandScape} {
    left: 130px;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 0;
    height: auto;
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-left: 1px solid #8f8e93;
  border-right: 1px solid #8f8e93;
  height: 100%;
  position: relative;
  span {
    width: 100% !important;
    height: 100% !important;
  }
  img {
    width: 100%;
    height: auto;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    height: auto;
  }
  @media ${themes.primary.media.maxMobile} {
    img {
      object-fit: cover;
    }
    height: auto;
    grid-row-start: 1;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 38px;
  width: 100%;
  box-sizing: border-box;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 18px 7px;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 8px;
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 0;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & + p {
    color: black;
    font-size: 1.6em;
  }
  @media ${themes.primary.media.onlyLaptop} {
    & + p {
      font-size: 1.3em;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    & + p {
      color: black;
      font-size: 0.98em;
      margin-top: 8px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    border-top: 1px solid #8f8e93;
    padding: 10px;
    display: flex;
    height: 87px;
    flex-direction: column;
    align-items: baseline;
    & + p {
      color: black;
      font-size: 1.6em;
    }
  }
`;

export const PortfolioProjectHeader = styled.div`
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.secondary};
  }
`;

export const ProjectDescription = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  letter-spacing: 1px;
  text-overflow: ellipsis;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.98em;
    margin-top: 8px;
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
`;

export const Separator = styled.div`
  background-color: ${(params) => (params.color ? params.color : "#cdcdcd")};
  width: 100%;
  height: 0.5px;
  margin-bottom: 20px;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 10px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin: 0 10px;
    width: auto;
  }
`;

export const Feedback = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  & + p {
    color: #535353;
    font-size: 1.4em;
  }
  @media ${themes.primary.media.onlyLaptop} {
    & + p {
      color: #535353;
      font-size: 1.2em;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 10px;
    & + p {
      color: #535353;
      font-size: 0.89em;
      margin-top: 8px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    display: flex;
    & + p {
      color: #535353;
      font-size: 1.4em;
      margin-top: 8px;
    }
    align-items: end;
  }
`;

export const AuthorName = styled.div`
  font-size: ${themes.primary.font.size.articleTagDescription};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.buttonText};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.articleTagDescription};
  }
`;

export const CompanyName = styled.div`
  color: #8f8e93;
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.vistaco};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.articleSubtitle};
  }
`;
