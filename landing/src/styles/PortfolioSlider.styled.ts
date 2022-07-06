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
  font-family: ${themes.primary.font.family.gilroy};
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
  height: 55vh;
  position: relative;
  left: 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${themes.primary.media.maxLaptop} {
    left: 130px;
    height: 49vh;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: 130px;
    height: 40vh;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  border-left: 1px solid #8f8e93;
  border-right: 1px solid #8f8e93;
  height: 55vh;
  @media ${themes.primary.media.maxLaptop} {
    height: 49vh;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 40vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 38px;
  width: 100%;
  box-sizing: border-box;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 18px 25px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const PortfolioProjectHeader = styled.div`
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.secondary};
  }
`;

export const ProjectDescription = styled.p`
  font-family: ${themes.primary.font.family.mulish};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  letter-spacing: 1px;
  text-overflow: ellipsis;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.98em;
    margin-top: 8px;
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
`;

export const Feedback = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 10px;
  }
`;

export const AuthorName = styled.div`
  font-size: ${themes.primary.font.size.articleTagDescription};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.buttonText};
  }
`;

export const CompanyName = styled.div`
  color: #8f8e93;
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.normal};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.vistaco};
  }
`;
