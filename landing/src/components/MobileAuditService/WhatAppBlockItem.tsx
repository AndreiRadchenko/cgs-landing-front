import React from "react";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/MobileAuditService/WhatAppBlock.styled";

interface IWhatAppItemProps {
  idx: number;
  isScrolled: boolean;
  textImg: { src: string } | null;
  titleImg: { src: string };
  content: { subtitle: string; text: string };
}

const WhatAppBlockItem = ({
  idx,
  isScrolled,
  textImg,
  titleImg,
  content,
}: IWhatAppItemProps) => {
  return (
    <Styled.WhatAppBlock
      ind={idx}
      className={isScrolled ? "scrolled" : undefined}
    >
      <Styled.WhatAppTitleContainer>
        {textImg && (
          <Styled.BlockImage src={textImg.src} alt="what app it block image" />
        )}
        <Styled.Icon
          src={titleImg.src}
          alt="what app title image"
          xOffset={handleRandomOffset()}
        />
        {content.subtitle}
      </Styled.WhatAppTitleContainer>
      <Styled.WhatAppText>
        <SplitBrackets text={content.text} />
      </Styled.WhatAppText>
    </Styled.WhatAppBlock>
  );
};

export default WhatAppBlockItem;
