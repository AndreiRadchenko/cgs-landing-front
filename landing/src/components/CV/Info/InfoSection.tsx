import React from "react";
import Image from "next/image";

import { InfoItem } from "./InfoItem/InfoItem";

import * as Styled from "./InfoSection.styled";
import { CvData } from "../../../types/Admin/AdminCv.types";
import LineBG from "../../../../public/CV/02.svg";

interface IProps {
  data: CvData;
}

export const InfoSection = ({
  data: {
    info: { title, content },
  },
}: IProps) => {
  return (
    <Styled.InfoSectionContainer>
      <Styled.Title>{title}</Styled.Title>
      <Styled.InfoItemGrid>
        {content.map((e, idx) => (
          <InfoItem subtitle={e.subtitle} text={e.text} key={idx} idx={idx} />
        ))}
      </Styled.InfoItemGrid>
      <Styled.BgImageContainer>
        <Image
          src={LineBG.src}
          alt="dashed line"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
        />
      </Styled.BgImageContainer>
    </Styled.InfoSectionContainer>
  );
};
