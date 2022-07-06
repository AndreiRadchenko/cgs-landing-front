import styled from "styled-components";
import themes from "../utils/themes";

export const NavigateLeft = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 160px;
  border-left: 1px solid ${themes.primary.colors.comment};
  color: ${themes.primary.colors.black};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.bigTitle};
  &:after {
    content: none;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 130px;
    font-size: ${themes.primary.font.size.articleTitle};
  }
`;
export const ProjectDescription = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  letter-spacing: 1px;
  text-overflow: ellipsis;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
    margin-top: 8px;
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    margin-top: 0px;
  }
`;
export const NoRewiews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 311px;
  width: 100%;
  font-size: ${themes.primary.font.size.bigTitle};
`

export const ButtonInfo = styled.div`
  display: flex;
  height: 153px;
  width: 100%;
  background: ${themes.primary.colors.lightGray};
  padding: 0px 27px;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${themes.primary.colors.comment};
  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    &:nth-child(1) {
      color: ${themes.primary.colors.secondary};
    }
  }
`;

export const Category = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.articleTitle};
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
    & ${ProjectDescription} {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  & .swiper-slide-prev {
    color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  & .swiper-slide {
    transition: 0.5s linear;
  }
  border-top: 1px solid ${themes.primary.colors.comment};
  &:hover ${NavigateLeft} {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }
  @media ${themes.primary.media.maxMobile} {
    display: block;
    border-left: 1px solid ${themes.primary.colors.comment};
    border-right: 1px solid ${themes.primary.colors.comment};
    margin: 0 10px;
    &:hover ${ButtonInfo} {
      background-color: ${themes.primary.colors.darkBlue};
      &:nth-child(1) {
        color: ${themes.primary.colors.secondary};
      }
    }
  }
`;

export const NavigateRight = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 150px;
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
    color: ${themes.primary.colors.black};
  }
`;

export const ReviewContainer = styled.div`
  .swiper-slide-next {
    background-color: ${themes.primary.colors.cyanBlue};
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
  border-left: 1px solid ${themes.primary.colors.comment};
  border-right: 1px solid ${themes.primary.colors.comment};
  width: 100%;
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
    font-size: ${themes.primary.font.size.articleSubtitle};
  }
  @media ${themes.primary.media.onlyLaptop} {
    & + p {
      font-size: ${themes.primary.font.size.aboutUsCardText};
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    & + p {
      font-size: ${themes.primary.font.size.tertiary};
      margin-top: 8px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    border-top: 1px solid ${themes.primary.colors.comment};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    & + p {
      color: ${themes.primary.colors.black};
      font-size: ${themes.primary.font.size.articleSubtitle};
    }
  }
`;

export const PortfolioProjectHeader = styled.div`
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  width: 50%;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.secondary};
  }
  & + button {
    margin-top: 12px;
  }
`;



export const Separator = styled.div`
  background-color: ${(params) => (params.color ? params.color : themes.primary.colors.separator)};
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
    color: ${themes.primary.colors.gray};
    font-size: ${themes.primary.font.size.linkText};
  }
  @media ${themes.primary.media.onlyLaptop} {
    & + p {
      font-size: ${themes.primary.font.size.tertiary};
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 10px;
    & + p {
      font-size: ${themes.primary.font.size.primary};
      margin-top: 8px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
    display: flex;
    & + p {
      font-size: ${themes.primary.font.size.linkText};
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
  color: ${themes.primary.colors.comment};
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