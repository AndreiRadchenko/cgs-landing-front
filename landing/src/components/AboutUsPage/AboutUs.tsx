import React from "react";
import * as Styled from "./AboutUs.styled";
import bottomImage from "../../../public/AboutUsDecorations/bottomImage.svg";
import mediumLine from "../../../public/AboutUsDecorations/mediumLine.svg";
import MainPhotoBlock from "./MainPhotoBlock";
import SmallPhotoCard from "./SmallPhotoCard";

const AboutUs = () => {
  return (
    <Styled.AboutUsContainer>
      <Styled.MainTitle>
        Idea-inspired, <br />
        <span>tech-driven</span> professionals
      </Styled.MainTitle>
      <Styled.MainRowContainer>
        <MainPhotoBlock />
        <Styled.ColContainer>
          <Styled.Subtitle>We believe in</Styled.Subtitle>
          <Styled.Text>
            significant changes because 50+ devs creating fast and coding
            high-level can do anything. Real work instead of promises, business
            results instead of purposeless money waste. We happy to have
            like-minded clients and qualitatively implementing their dreams into
            life for 6+ years.
          </Styled.Text>
          <Styled.Text>
            Each team member combines the decisive professional and dreamy
            innovator. Its impossible makes us run faster, and numerous thanks
            for the effective work make us proud.
          </Styled.Text>
          <Styled.Subtitle>We believe in</Styled.Subtitle>
          <Styled.Text>
            significant changes because 50+ devs creating fast and coding
            high-level can do anything. Real work instead of promises, business
            results instead of purposeless money waste. Were happy to have
            like-minded clients and qualitatively implementing their dreams into
            life for.
          </Styled.Text>
        </Styled.ColContainer>
      </Styled.MainRowContainer>
      <Styled.ProvideBlock>
        <Styled.ProvideMainText>
          <Styled.Subtitle>We provide</Styled.Subtitle>
          <Styled.Text>
            a new normal in devs-client relations with no bureaucracy,
            paperwork, paperwork, paperwork, paperwork, and empty promises.
          </Styled.Text>
        </Styled.ProvideMainText>
        <Styled.MediumLine src={mediumLine.src} />
        <Styled.PositionFirstImage>
          <SmallPhotoCard degrees={"10deg"} pinPosition={"85%"} />
        </Styled.PositionFirstImage>
        <Styled.PositionSecondImage>
          <SmallPhotoCard degrees={"-8.65deg"} pinPosition={"40%"} />
        </Styled.PositionSecondImage>
        <Styled.PositionThirdImage>
          <SmallPhotoCard degrees={"-7.61deg"} pinPosition={"40%"} />
        </Styled.PositionThirdImage>
      </Styled.ProvideBlock>
      <Styled.OurBonuses>
        <Styled.Subtitle>Our bonuses</Styled.Subtitle>
        <Styled.BonusesContainer>
          <div>
            <Styled.BonusContainer>
              <Styled.BonusPoint />
              <Styled.BonusText>
                Free PM services of our team with 50+ prof-developers
              </Styled.BonusText>
            </Styled.BonusContainer>
          </div>
          <div>
            <Styled.BonusContainer>
              <Styled.BonusPoint />
              <Styled.BonusText>
                Free and well-handled deployment
              </Styled.BonusText>
            </Styled.BonusContainer>
          </div>
        </Styled.BonusesContainer>
      </Styled.OurBonuses>
      <Styled.BottomImage src={bottomImage.src} />
    </Styled.AboutUsContainer>
  );
};

export default AboutUs;
