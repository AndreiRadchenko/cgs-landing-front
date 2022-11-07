import React from "react";
import * as Styled from "../../styles/WebAuditService/TypesOfAuditMobileCard.styled";
import { webAuditTypesOfAuditImages } from "../../utils/variables";
import Image from "next/image";
import { SplitBrackets } from "../../utils/splitBrackets";

type Props = {
  item: { _id: string; title: string; text: string };
  idx: number;
};

function TypesOfAuditMobileCard({ item, idx }: Props) {
  return (
    <Styled.TypeWrapper>
      <Styled.TypeHeader>
        <Styled.ImageWrapper>
          <Image
            src={webAuditTypesOfAuditImages[idx]}
            alt="types of grid image"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
        <Styled.TypeTitle>
          <SplitBrackets text={item.title} />
        </Styled.TypeTitle>
      </Styled.TypeHeader>
      <Styled.TypeText>{item.text}</Styled.TypeText>
    </Styled.TypeWrapper>
  );
}

export default TypesOfAuditMobileCard;
