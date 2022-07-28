import React from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import pin from "../../../public/AboutUsDecorations/pin.svg";

interface IPhotoBlock {
  data?: { image: { url: string }; text: string };
  pinRightPosition: string;
  photoBg: { right: string; bottom: string };
  blockBg: { right: string; bottom: string };
  rotateBlock: string;
  rotatePin: string;
  isMain?: boolean;
  padding: string;
  empty?: { background: string; width: string; height: string };
}

const PhotoBlock = ({
  data,
  rotateBlock,
  blockBg,
  photoBg,
  pinRightPosition,
  rotatePin,
  isMain,
  empty,
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
            {empty ? (
              <Styled.EmptyBg
                background={empty.background}
                width={empty.width}
                height={empty.height}
              />
            ) : (
              <Styled.MainImage
                src={
                  "https://landing-cgs.s3.amazonaws.com/c2076697-5f21-4f66-92df-1321cf468348.png"
                }
              />
            )}
            <Styled.BackgroundContainer
              right={photoBg.right}
              bottom={photoBg.bottom}
            >
              {empty ? <Styled.BlackBlock /> : <Styled.HalfBlackBlock />}
            </Styled.BackgroundContainer>
          </Styled.RelativeContainerPhotoBlock>
          <Styled.MainPhotoDescription className={isMain ? "main" : ""}>
            {data ? parse(data.text) : ""}
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
