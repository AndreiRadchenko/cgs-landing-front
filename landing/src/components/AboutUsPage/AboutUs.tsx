import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import rightLine from "../../../public/AboutUsDecorations/rightLine.svg";
import leftLine from "../../../public/AboutUsDecorations/leftLine.svg";
import PhotoBlock from "./PhotoBlock";
import { IAbout } from "../../types/Admin/AdminAboutUs.types";
import Bonuses from "./Bonuses";
import { PhotoContainer } from "./AboutUs.styled";

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
        <Styled.ColContainer className={"first"}>
          {data && (
            <>
              <Styled.Subtitle>We believe in</Styled.Subtitle>
              <Styled.Text>
                Each team member combines the decisive professional  and dreamy
                innovator. "It's impossible" makes us run faster,  and numerous
                "thanks for the effective work" make us proud. ambitious
                <br />
                <br />
                dreamers with pro tech skills who can change  the world.
                CGS-team is about creating qualitative and brave  things with
                tech. We have big goals about becoming the tool  to implementing
                the craziest and most ambitious ideas.
                {/*{parse(data.textBlock.text1.description)}*/}
              </Styled.Text>
            </>
          )}
        </Styled.ColContainer>
        <Styled.RowContainer>
          <Styled.RightLine src={rightLine.src} />
          <PhotoBlock
            data={data?.mainImage}
            rotateBlock={"-10.53deg"}
            photoBg={{ right: "-6px", bottom: "-4px" }}
            blockBg={{ right: "-8px", bottom: "-9px" }}
            pinRightPosition={"1%"}
            rotatePin={"4.38deg"}
            isMain
            padding={"20px 22px 34px 16px"}
          />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.LeftLine src={leftLine.src} />
          <PhotoBlock
            data={data?.mainImage}
            rotateBlock={"4.8deg"}
            photoBg={{ right: "5px", bottom: "-4px" }}
            blockBg={{ right: "6px", bottom: "-6px" }}
            pinRightPosition={"89%"}
            rotatePin={"2.41deg"}
            padding={"18px 12px 25px 18px"}
          />
        </Styled.RowContainer>
        <Styled.ColContainer>
          {data && (
            <>
              <Styled.Subtitle>We strive for</Styled.Subtitle>
              <Styled.Text>
                significant changes because 50+ devs creating fast and coding
                 high-level can do anything. Real work instead of promises,
                business results instead of purposeless money waste. We're happy
                to have  like-minded clients and qualitatively implementing
                their dreams  into life for 6+ years.
                {/*{parse(data.textBlock.text2.description)}*/}
              </Styled.Text>
            </>
          )}
        </Styled.ColContainer>
      </Styled.MainContainer>
      <Styled.Separator />
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
