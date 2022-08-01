import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import rightLine from "../../../public/AboutUsDecorations/rightLine.svg";
import leftLine from "../../../public/AboutUsDecorations/leftLine.svg";
import PhotoBlock from "./PhotoBlock";

import { IAbout } from "../../types/Admin/Response.types";
import Bonuses from "./Bonuses";

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
              <Styled.Subtitle>{data.believe.subtitle}</Styled.Subtitle>
              <Styled.Text>{parse(data.believe.text)}</Styled.Text>
            </>
          )}
        </Styled.ColContainer>
        <Styled.RowContainer>
          <Styled.RightLine src={rightLine.src} />
          <PhotoBlock
            data={data.believe}
            rotateBlock={"-10.53deg"}
            photoBg={{ right: "-6px", bottom: "-4px" }}
            blockBg={{ right: "-8px", bottom: "-9px" }}
            pinRightPosition={"0"}
            rotatePin={"9.88deg"}
            isMain
            padding={"14px 22px 34px 14px"}
          />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.LeftLine src={leftLine.src} />
          <PhotoBlock
            data={data.goal}
            rotateBlock={"4.8deg"}
            photoBg={{ right: "5px", bottom: "-4px" }}
            blockBg={{ right: "6px", bottom: "-6px" }}
            pinRightPosition={"89%"}
            rotatePin={"-1deg"}
            padding={"18px 12px 25px 18px"}
          />
        </Styled.RowContainer>
        <Styled.ColContainer>
          {data && (
            <>
              <Styled.Subtitle>{data.goal.subtitle}</Styled.Subtitle>
              <Styled.Text>{parse(data.goal.text)}</Styled.Text>
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
