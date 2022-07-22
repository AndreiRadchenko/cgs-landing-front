import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import mediumLine from "../../../public/AboutUsDecorations/mediumLine.svg";
import MainPhotoBlock from "./MainPhotoBlock";
import SmallPhotoCard from "./SmallPhotoCard";

import { IAbout } from "../../types/Admin/AdminAboutUs.types";

interface IAboutUs {
  data: IAbout;
}

const AboutUs = ({ data }: IAboutUs) => {
  const [firstBonuses, setFirstBonuses] = useState<string[]>([]);
  const [secondBonuses, setSecondBonuses] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setFirstBonuses(
        data.bonuses.text.splice(0, Math.ceil(data.bonuses.text.length / 2))
      );
      setSecondBonuses(
        data.bonuses.text.splice(
          Math.floor(data.bonuses.text.length / 2) - 1,
          data.bonuses.text.length
        )
      );
    }
  }, [data]);

  return (
    <Styled.AboutUsContainer>
      <Styled.MainTitle>
        Idea-inspired, <br />
        <span>tech-driven</span> professionals
      </Styled.MainTitle>
      <Styled.MainRowContainer>
        {data?.mainImage && <MainPhotoBlock data={data?.mainImage} />}
        <Styled.ColContainer>
          {data?.textBlock.text1 && (
            <>
              <Styled.Subtitle>{data?.textBlock.text1.title}</Styled.Subtitle>
              <Styled.Text>
                {parse(data.textBlock.text1.description)}
              </Styled.Text>
            </>
          )}
          {data?.textBlock.text2 && (
            <>
              <Styled.Subtitle>{data?.textBlock.text2.title}</Styled.Subtitle>
              <Styled.Text>
                {parse(data.textBlock.text2.description)}
              </Styled.Text>
            </>
          )}
        </Styled.ColContainer>
      </Styled.MainRowContainer>
      <Styled.ProvideBlock>
        <Styled.ProvideMainText>
          <Styled.Subtitle>{data?.textBlock.text3.title}</Styled.Subtitle>
          <Styled.Text>{data?.textBlock.text3.description}</Styled.Text>
        </Styled.ProvideMainText>
        <Styled.MediumLine src={mediumLine.src} />
        <Styled.PositionFirstImage>
          {data?.pinImages.image1.image && (
            <SmallPhotoCard
              degrees={"10deg"}
              pinPosition={"85%"}
              data={data?.pinImages.image1}
            />
          )}
        </Styled.PositionFirstImage>
        <Styled.PositionSecondImage>
          {data?.pinImages.image2.image && (
            <SmallPhotoCard
              degrees={"-8.65deg"}
              pinPosition={"40%"}
              data={data?.pinImages.image2}
            />
          )}
        </Styled.PositionSecondImage>
        <Styled.PositionThirdImage>
          {data?.pinImages.image3.image && (
            <SmallPhotoCard
              degrees={"-7.61deg"}
              pinPosition={"40%"}
              data={data.pinImages.image3}
            />
          )}
        </Styled.PositionThirdImage>
      </Styled.ProvideBlock>
      <Styled.OurBonuses>
        <Styled.Subtitle>{data?.bonuses.subtitle}</Styled.Subtitle>
        <Styled.BonusesContainer>
          <div>
            {firstBonuses.map((el, idx) => (
              <Styled.BonusContainer key={idx}>
                <Styled.BonusPoint />
                <Styled.BonusText>{el}</Styled.BonusText>
              </Styled.BonusContainer>
            ))}
          </div>
          <div>
            {secondBonuses.map((el, idx) => (
              <Styled.BonusContainer key={idx}>
                <Styled.BonusPoint />
                <Styled.BonusText>{el}</Styled.BonusText>
              </Styled.BonusContainer>
            ))}
          </div>
        </Styled.BonusesContainer>
      </Styled.OurBonuses>
      <Styled.BottomImage src={data?.image.url} />
    </Styled.AboutUsContainer>
  );
};

export default AboutUs;
