import styled from "styled-components";
import themes from "../utils/themes";

export const Wrapper = styled.div`
    padding-block: 50px;
`;

export const HeadBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 50px;
`;

export const TextHeadBlock = styled.div`
    margin-top: 80px;
    max-width: 60%;
`;

export const Name = styled.div`
    font-size: 66px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: 400;
`;

export const Role = styled.div`
    color: #5869DD;
    font-size: 32px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: 400;
    margin-top: 8px;
`;

export const Summary = styled.div`
    font-size: 18px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: 400;
    margin-top: 16px;
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 400px;
    height: 400px;

    img {
        position: absolute;
        z-index: 10;
        width: 400px;
        height: 400px;
    }
`;

export const ImageBackground = styled.div`
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 97.6%;
  height: 97.6%;
  border: 1.56px solid ${themes.primary.colors.black};
  background-image: linear-gradient(
      180deg,
      white,
      white 50%,
      black 50%,
      black 100%
      );
`;

export const InfoBlock = styled.div`
    position: relative;
    margin-top: 100px;
    display: flex;
`;

export const InfoTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-top: 25px;
  width: 350px;
  height: 160px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
      ),
      #f1efed;

   p {
    margin-top: 40px;
   }
`;

export const InfoItemFlex = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    margin-left: 24px;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 0;
    max-height: 250px;
`;

export const InfoCard = styled.div`
  width: 500px;
  margin: 16px 0 0 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
`;

export const InfoCardTitle = styled.div`
  position: relative;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const InfoArrowContainer = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  `;

export const InfoText = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 137.5%;
  margin: 8px 0 0 0;
  padding: 0;

  & p {
    margin: 0;
    padding: 0;
  }
  & p > span {
    font-size: 14px;
  }
`;

export const SkillsBlock = styled.div`
    position: relative;
    margin-top: 100px;
`;

export const SkillsTitle = styled.div`
    font-size: 40px;
    margin-left: 55px;
    text-transform: uppercase;
`;

export const SkillsCardWrapper = styled.div`
    margin-top: 24px;
    width: 100vw;
    display: flex;
    border-top: 1px solid ${themes.primary.colors.darkGrey};
    border-bottom: 1px solid ${themes.primary.colors.darkGrey};
`;

export const SkillsCard = styled.div`
  width: 100%;
  margin: 0;
  z-index: 2;
  margin-left: 55px;
  padding-left: 30px;
  border-right: 1px solid ${themes.primary.colors.darkGrey};

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100vw;
    top: 145px;
    background: ${themes.primary.colors.darkGrey};
    margin-left: -85px;
  }
`;

export const SkillsCardTitle = styled.div`
    font-size: 30px;
    letter-spacing: 1.5px;
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-style: normal;
    font-weight: 900;
    line-height: 160%;
    letter-spacing: 1.1px;
    margin: 0;
    padding-bottom: 40px;
    padding-top: 10px;
`;

export const SkillsCardStackWrapper = styled.ul`
    margin: 0;
    padding: 16px 20px 32px;
`;

export const SkillsCardStack = styled.li`
    display: flex;
    align-items: center;
`;

export const SkillsCardStackText = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  line-height: 1.6;
  font-weight: 900;
  margin-left: 15px;
  padding-bottom: 15px;

  &::after {
    content: "";
    height: 3px;
    width: 3px;
    border-radius: 1.5px;
    background: black;
    position: absolute;
    left: -15px;
    top: 16px;
  }
`;

export const ProjectsBlock = styled.div`
  position: relative;
  margin: 0;
  padding-top: 20px;
  margin-left: -20px;
  padding-inline: 20px;
  width: 100vw;
  background: red;
`;

export const ProjectsBlockTitle = styled.div``;

export const ProjectWrapper = styled.div``;

export const ProjectNumberTitle = styled.div``;

export const ProjectNumber = styled.div``;

export const ProjectTitleWrapper = styled.div``;

export const ProjectTitleContainer = styled.div``;

export const ProjectTitle = styled.div``;

export const ProjectDate = styled.div``;

export const ProjectRole = styled.div``;

export const ProjectAboutBlock = styled.div``;

export const ProjectAboutTitle = styled.div``;

export const ProjectAboutText = styled.div``;

export const ProjectAchievementTechnologyWrapper = styled.div``;

export const ProjectAchievementWrapper = styled.div``;

export const ProjectAchievementTitle = styled.div``;

export const ProjectAchievementListWrapper = styled.div``;

export const ProjectAchievementList = styled.div``;

export const ProjectAchievementItem = styled.div``;

export const ProjectAchievementListIcon = styled.img``;

export const ProjectAchievementListText = styled.div``;

export const ProjectAchievementListShadow = styled.div``;

export const ProjectTechnologiesWrapper = styled.div``;

export const ProjectTechnologiesTitle = styled.div``;

export const ProjectTechnologiesIconContainer = styled.div``;