import styled from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";
import Link from "next/link";

export const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: 3em auto;
  font-family: ${themes.primary.font.family.roboto};
`;

export const NavPanel = styled.div`
  display: flex;
  width: 98%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: baseline;
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CategoryName = styled.h2`
  font-size: 30px;
  margin: 10px 0 15px 0;
  position: relative;
  z-index: 2;
`;

export const CategoryUnderline = styled.div`
  width: 4em;
  border: 1px solid #000;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryRouteName = styled.span`
  margin-right: 72px;
  font-size: 26px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

export const CategoryProjectsContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

export const DecorationTextAllTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -5%;
  width: 7.4em;
  fill: ${themes.primary.colors.septenary};
`;

export const DecorationTextWebTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: 0;
  width: 4.2em;
  fill: ${themes.primary.colors.septenary};
`;

export const DecorationTextMobileTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -5%;
  width: 6.5em;
  fill: ${themes.primary.colors.septenary};
`;

export const DecorationTextServerTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -7%;
  width: 6em;
  fill: ${themes.primary.colors.septenary};
`;

export const DecorationTextBlockChainTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -3.5%;
  width: 10em;
  fill: ${themes.primary.colors.septenary};
`;

export const ProjectContainer = styled.div`
  margin: 19px;
  width: 30%;
  height: 650px;

  display: flex;
  flex-direction: column;
`;

export const ProjectSpecifyTechnologyContainer = styled.div`
  margin: 19px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const SpecifyContentWrapper = styled.div`
  width: 40%;
  height: 100%;
`;

export const SpecifyContentImgWrapper = styled.div`
  width: 60%;
  height: 430px;
  position: relative;
`;

export const MainContent = styled.div``;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectTitleName = styled.h2`
  font-size: 25px;
`;

export const ProjectDescription = styled.span`
  display: block;
  width: 90%;
  font-size: 1em;
  line-height: 145%;
  white-space: break-spaces;
`;

export const ProjectLinkWrapper = styled(Link)``;
