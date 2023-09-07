import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./Personal.styled";

import { CvData } from "../../../types/Admin/AdminCv.types";

import { SplitBrackets } from "../../../utils/splitBrackets";

import bgImageHeaderCv from "../../../../public/CV/header-bg-image-cv.svg";
import bgImageHeaderMobileCv from "../../../../public/CV/header-bg-image-mobile-cv.svg";

interface IProps {
  data: CvData;
}

export const Personal = ({ data: { image, personal } }: IProps) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Styled.PersonalContainer>
      <Styled.PersonalContainerHeader>
        <div>
          <Styled.Name>{personal.name}</Styled.Name>
          <Styled.Role>
            {isMobile ? personal.role : `// ${personal.role}`}
          </Styled.Role>
        </div>
        {image && (
          <Styled.ImageWrapper>
            <Styled.ImageBackground />
            <Styled.ImageContainer>
              <Image
                src={image.url ? image.url : ""}
                alt="Developers photo"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
                priority
              />
            </Styled.ImageContainer>
          </Styled.ImageWrapper>
        )}
      </Styled.PersonalContainerHeader>
      <Styled.Summary className="cv-personal-summary">
        <SplitBrackets text={personal.summary} />
      </Styled.Summary>
      <Styled.BgImageContainer>
        {!isMobile ? (
          <Image layout={"fill"} src={bgImageHeaderCv.src} alt={"bg image"} />
        ) : (
          <Image
            layout={"fill"}
            src={bgImageHeaderMobileCv.src}
            alt={"bg image"}
          />
        )}
      </Styled.BgImageContainer>
    </Styled.PersonalContainer>
  );
};
