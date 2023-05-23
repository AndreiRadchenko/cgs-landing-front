import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 50px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 20px;
  }
`;

export const HeroAboutContainer = styled.div`
  width: 100%;
  height: 26.2vw;
  position: relative;
  overflow: hidden;

  @media ${themes.primary.media.maxTabletLandScape} {
  }

  @media ${themes.primary.media.maxTabletPortrait} {
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
  }
  @media ${themes.primary.media.maxMobile} {
    height: 198px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
  }
`;

export const HeadlinesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
  gap: 66px;
  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 0;
  }
`;

export const HeadlineContainer = styled.div`
  width: 47%;
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: 90px;
  }
`;

export const NumbersContainer = styled.div`
  box-sizing: border-box;
  margin-top: 120px;
  padding: 0 90px 0 70px;
  height: 174px;
  width: 100vw;
  margin-left: -50px;
  background-color: rgba(143, 142, 147, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media ${themes.primary.media.maxMobile} {
    width: 105vw;
    margin-top: 90px;
    display: grid;
    height: 280px;
    margin-left: -20px;
    padding: 28px 30px 28px 0px;
    grid-template-columns: 1fr 1fr;
    & > :nth-child(1) {
      grid-row: 2;
      grid-column: 1;
    }
    & > :nth-child(2) {
      grid-row: 1;
      grid-column: 1;
    }
    & > :nth-child(3) {
      grid-row: 1;
      grid-column: 2;
    }
    & > :nth-child(4) {
      grid-row: 2;
      grid-column: 2;
    }
  }
`;

export const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const AchievementNumber = styled.p`
  font-weight: 900;
  font-size: 80px;
  line-height: 96px;
  margin: 0;
  letter-spacing: 0.05em;
  color: #f1efed;
  text-shadow: 7px 2.5px 0px #000000;
  -webkit-text-stroke: 1.2px black;
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 60px;
    line-height: 72px;
    text-shadow: 5.21223px 1.48921px 0px #000000;
    -webkit-text-stroke: 0.893525px solid #000000;
  }
`;

export const AchievementText = styled.p`
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  margin: 4px 0 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const OurTeamContainer = styled.div`
  margin: 120px 0;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 90px;
    margin-bottom: 78px;
  }
`;

export const TeamGallery = styled.ul`
  list-style: none;
  margin: 56px 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media ${themes.primary.media.maxTabletLandScape} {
    gap: 20px;
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 0;
  }
`;

export const Teammate = styled.li`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxServiceWeb} {
    width: 30%;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 335px;
  }
`;

export const TeammateImageContainer = styled.div`
  height: 380px;
  position: relative;
  @media ${themes.primary.media.maxServiceWeb} {
    width: 335px;
    height: 318px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
    height: 25vw;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 335px;
    height: 318px;
  }
`;

export const LinkedIn = styled.a`
  position: absolute;
  top: 18px;
  right: 18px;
`;

export const TeammateName = styled.p`
  margin: 18px 0 0;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  @media ${themes.primary.media.maxMobile} {
    font-size: 21px;
  }
`;

export const TeammatePosition = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: #8f8e93;
  @media ${themes.primary.media.maxMobile} {
    font-size: 21px;
  }
`;

export const TeammateAbout = styled.div`
  margin: 18px 0 0;
  line-height: 160%;
  font-size: 18px;
  p {
    margin: 0 0 10px;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    margin: 15px 0 0;
  }
`;

export const Subtitle = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-bottom: 22px;
  text-transform: uppercase;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.smallAboutSubtitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 56px;
    &:first-child {
      margin-top: 0px;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 2.8em;
  }
`;

export const Text = styled.div`
  margin-right: 0;
  font-size: 18px;
  line-height: 160%;
  width: 100%;
  p {
    margin: 10px 0;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 16px;
  }
`;
