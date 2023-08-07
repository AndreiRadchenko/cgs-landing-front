import React from "react";

import * as Styled from "./Personal.styled";
import { CvData } from "../../../types/Admin/AdminCv.types";
import Image from "next/image";

interface IProps {
  data: CvData;
}

export const Personal = ({ data: { image, personal } }: IProps) => {
  return (
    <Styled.PersonalContainer>
      <Styled.Name>{personal.name}</Styled.Name>
      <Styled.Role>{personal.role}</Styled.Role>
      <Styled.ImageWrapper>
        <Styled.ImageBackground />
        <Styled.ImageContainer>
          <Image
            src={image.url ? image.url : ""}
            alt="Developers photo"
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
          />
        </Styled.ImageContainer>
      </Styled.ImageWrapper>
      <Styled.Summary>{personal.summary}</Styled.Summary>
    </Styled.PersonalContainer>
  );
};
