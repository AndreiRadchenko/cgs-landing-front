import React from "react";

import { InfoItem } from "./InfoItem/InfoItem";

import * as Styled from "./InfoSection.styled";
import { CvData } from "../../../types/Admin/AdminCv.types";

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
      <Styled.Title>{title}:</Styled.Title>
      <Styled.InfoItemGrid>
        {content.map((e, idx) => (
          <InfoItem subtitle={e.subtitle} text={e.text} key={idx} idx={idx} />
        ))}
      </Styled.InfoItemGrid>
    </Styled.InfoSectionContainer>
  );
};
