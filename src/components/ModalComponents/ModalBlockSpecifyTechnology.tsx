import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import Image from "next/image";
import ButtonProjectLink from "../../utils/Buttons/ButtonProjectLink";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import { IModalProjectCardProps } from "../../types/ModalCategory.types";

const ModalBlockSpecifyTechnology: FC<IModalProjectCardProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <StyledCategory.ProjectSpecifyTechnologyContainer>
      <StyledCategory.SpecifyContentImgWrapper>
        <Image
          src={url}
          alt={"alt image card"}
          quality={100}
          objectFit={"cover"}
          layout={"fill"}
        />
      </StyledCategory.SpecifyContentImgWrapper>
      <StyledCategory.SpecifyContentWrapper>
        <StyledCategory.ContentWrapper>
          <StyledCategory.ProjectTitleName>
            {title}
          </StyledCategory.ProjectTitleName>
          <StyledCategory.ProjectDescription>
            {description}
          </StyledCategory.ProjectDescription>

          <ButtonProjectLink>
            <ButtonTextWrapper fontSize={"1.2em"}>
              project link
            </ButtonTextWrapper>
          </ButtonProjectLink>
        </StyledCategory.ContentWrapper>
      </StyledCategory.SpecifyContentWrapper>
    </StyledCategory.ProjectSpecifyTechnologyContainer>
  );
};

export default ModalBlockSpecifyTechnology;
