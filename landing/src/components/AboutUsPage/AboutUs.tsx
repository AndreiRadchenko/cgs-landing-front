import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import rightLine from "../../../public/AboutUsDecorations/rightLine.svg";
import PhotoBlock from "./PhotoBlock";
import SmallPhotoCard from "./SmallPhotoCard";

import { IAbout } from "../../types/Admin/Response.types";
import Bonuses from "./Bonuses";
import themes from "../../utils/themes";

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
      <Styled.MainContainer>
        <Styled.RightLine src={rightLine.src} />
        <div></div>
        <Styled.RowContainer>
          <PhotoBlock
            data={data?.believe}
            rotateBlock={"-10.53deg"}
            photoBg={{ right: "-6px", bottom: "-4px" }}
            blockBg={{ right: "-8px", bottom: "-9px" }}
            pinRightPosition={"1%"}
            rotatePin={"4.38deg"}
            isMain
            padding={"20px 22px 34px 16px"}
          />
          <PhotoBlock
            rotateBlock={"-18.9deg"}
            photoBg={{ right: "3px", bottom: "-3px" }}
            blockBg={{ right: "5px", bottom: "-5px" }}
            pinRightPosition={"37%"}
            rotatePin={"11.41deg"}
            padding={"14px 10px 30px 15px"}
            empty={{
              width: "173px",
              height: "130px",
              background:
                "linear-gradient(118.28deg, #D6FFBB -7.84%, #5869DD 94.18%)",
            }}
          />
          <PhotoBlock
            rotateBlock={"15.9deg"}
            photoBg={{ right: "-1.5px", bottom: "-2px" }}
            blockBg={{ right: "-2px", bottom: "-4px" }}
            pinRightPosition={"37%"}
            rotatePin={"11.41deg"}
            padding={"11px 10px 18px 10px"}
            empty={{
              background: themes.primary.colors.darkBlue,
              width: "129px",
              height: "96px",
            }}
          />
        </Styled.RowContainer>

        {/*{data?.mainImage && (*/}
        {/*  <PhotoBlock*/}
        {/*    data={data?.mainImage}*/}
        {/*    rotateBlock={"4.8deg"}*/}
        {/*    photoBg={{ right: "5px", bottom: "-4px" }}*/}
        {/*    blockBg={{ right: "6px", bottom: "-6px" }}*/}
        {/*    pinRightPosition={"89%"}*/}
        {/*    rotatePin={"2.41deg"}*/}
        {/*    padding={"18px 12px 25px 18px"}*/}
        {/*  />*/}
        {/*)}*/}

        {/*<PhotoBlock*/}
        {/*  rotateBlock={"-14.9deg"}*/}
        {/*  photoBg={{ right: "3px", bottom: "-4.5px" }}*/}
        {/*  blockBg={{ right: "3px", bottom: "-4px" }}*/}
        {/*  pinRightPosition={"37%"}*/}
        {/*  rotatePin={"11.41deg"}*/}
        {/*  padding={"11px 8px 18px 12px"}*/}
        {/*  empty={{*/}
        {/*    background: themes.primary.colors.darkBlue,*/}
        {/*    width: "129px",*/}
        {/*    height: "96px",*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Styled.ColContainer>*/}
        {/*  {data?.textBlock.text1 && (*/}
        {/*    <>*/}
        {/*      <Styled.Subtitle>{data?.textBlock.text1.title}</Styled.Subtitle>*/}
        {/*      <Styled.Text>*/}
        {/*        {parse(data.textBlock.text1.description)}*/}
        {/*      </Styled.Text>*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*  {data?.textBlock.text2 && (*/}
        {/*    <>*/}
        {/*      <Styled.Subtitle>{data?.textBlock.text2.title}</Styled.Subtitle>*/}
        {/*      <Styled.Text>*/}
        {/*        {parse(data.textBlock.text2.description)}*/}
        {/*      </Styled.Text>*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</Styled.ColContainer>*/}
      </Styled.MainContainer>
      {/*<Styled.ProvideBlock>*/}
      {/*  <Styled.ProvideMainText>*/}
      {/*    <Styled.Subtitle>{data?.textBlock.text3.title}</Styled.Subtitle>*/}
      {/*    <Styled.Text>{data?.textBlock.text3.description}</Styled.Text>*/}
      {/*  </Styled.ProvideMainText>*/}
      {/*  <Styled.MediumLine src={mediumLine.src} />*/}
      {/*  <Styled.PositionFirstImage>*/}
      {/*    {data?.pinImages.image1.image && (*/}
      {/*      <SmallPhotoCard*/}
      {/*        degrees={"10deg"}*/}
      {/*        pinPosition={"85%"}*/}
      {/*        data={data?.pinImages.image1}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </Styled.PositionFirstImage>*/}
      {/*  <Styled.PositionSecondImage>*/}
      {/*    {data?.pinImages.image2.image && (*/}
      {/*      <SmallPhotoCard*/}
      {/*        degrees={"-8.65deg"}*/}
      {/*        pinPosition={"40%"}*/}
      {/*        data={data?.pinImages.image2}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </Styled.PositionSecondImage>*/}
      {/*  <Styled.PositionThirdImage>*/}
      {/*    {data?.pinImages.image3.image && (*/}
      {/*      <SmallPhotoCard*/}
      {/*        degrees={"-7.61deg"}*/}
      {/*        pinPosition={"40%"}*/}
      {/*        data={data.pinImages.image3}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </Styled.PositionThirdImage>*/}
      {/*</Styled.ProvideBlock>*/}
      <Bonuses
        subtitle={data?.bonuses.subtitle}
        firstBonuses={firstBonuses}
        secondBonuses={secondBonuses}
      />
      <Styled.BottomImage src={data?.image.url} />
    </Styled.AboutUsContainer>
  );
};

export default AboutUs;
