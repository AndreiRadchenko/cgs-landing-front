import React from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import pin from "../../../public/AboutUsDecorations/pin.svg";

interface IPhotoBlock {
  data?: { image: { url: string }; imageText: string };
  pinRightPosition: string;
  photoBg: { right: string; bottom: string };
  blockBg: { right: string; bottom: string };
  rotateBlock: string;
  rotatePin: string;
  isMain?: boolean;
  padding: string;
}

const PhotoBlock = ({
  data,
  rotateBlock,
  blockBg,
  photoBg,
  pinRightPosition,
  rotatePin,
  isMain,
  padding,
}: IPhotoBlock) => {
  return (
    <Styled.RotateBlock rotate={rotateBlock} className={isMain ? "main" : ""}>
      <Styled.RelativeContainerPhotoBlock>
        <Styled.Pin
          src={pin.src}
          right={pinRightPosition}
          rotate={rotatePin}
          className={isMain ? "main" : ""}
        />
        <Styled.MainPhotoContainer padding={padding}>
          <Styled.RelativeContainerPhotoBlock>
            <Styled.MainImage src={data?.image.url} />
            <Styled.BackgroundContainer
              right={photoBg.right}
              bottom={photoBg.bottom}
            >
              <Styled.HalfBlackBlock />
            </Styled.BackgroundContainer>
          </Styled.RelativeContainerPhotoBlock>
          <Styled.MainPhotoDescription className={isMain ? "main" : ""}>
            {data && parse(data?.imageText)}
          </Styled.MainPhotoDescription>
        </Styled.MainPhotoContainer>
        <Styled.BackgroundContainer
          right={blockBg.right}
          bottom={blockBg.bottom}
        >
          <Styled.BlackBlock />
        </Styled.BackgroundContainer>
      </Styled.RelativeContainerPhotoBlock>
    </Styled.RotateBlock>
  );
};

export default PhotoBlock;
