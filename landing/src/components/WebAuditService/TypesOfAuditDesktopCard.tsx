import * as React from "react";
import * as Styled from "../../styles/WebAuditService/TypesOfAuditDesktopCard.styled";
import Image from "next/image";
import { webAuditTypesOfAuditImages } from "../../utils/variables";
import { SplitBrackets } from "../../utils/splitBrackets";
import TypesOfAuditHoverModal from "./TypesOfAuditHoverModal";

type ITypesOfAuditDesktopCardProps = {
  item: { _id: string; title: string; text: string };
  idx: number;
};

export function TypesOfAuditDesktopCard({
  item,
  idx,
}: ITypesOfAuditDesktopCardProps) {
  return (
    <Styled.TypeWrapper key={item.title}>
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
      <TypesOfAuditHoverModal typeItem={item} />
    </Styled.TypeWrapper>
  );
}
