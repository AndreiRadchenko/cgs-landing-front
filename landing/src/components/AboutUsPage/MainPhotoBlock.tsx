import React from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import pin from "../../../public/AboutUsDecorations/pin.svg";

interface IMainBlock {
  data: { image: { url: string }; text: string };
}

const MainPhotoBlock = ({ data }: IMainBlock) => {
  return (
    <Styled.CenterBlock>
      <Styled.RelativeContainerPhotoBlock isMain>
        <Styled.Pin src={pin.src} right={"10%"} />
        <Styled.MainPhotoContainer>
          <Styled.RelativeContainerPhotoBlock>
            <Styled.MainImage src={data.image.url} />
            <Styled.BackgroundContainer right={"-8px"} bottom={"-8px"}>
              <Styled.BackgroundBlackBlock />
            </Styled.BackgroundContainer>
          </Styled.RelativeContainerPhotoBlock>
          <Styled.MainPhotoDescription>
            {parse(data.text)}
          </Styled.MainPhotoDescription>
        </Styled.MainPhotoContainer>
        <Styled.BackgroundContainer right={"-10px"} bottom={"-12px"}>
          <Styled.BackgroundBlackBlock />
        </Styled.BackgroundContainer>
      </Styled.RelativeContainerPhotoBlock>
    </Styled.CenterBlock>
  );
};

export default MainPhotoBlock;
