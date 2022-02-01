import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import ButtonProjectLink from "../../utils/Buttons/ButtonProjectLink";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import { IModalProjectCardProps } from "../../types/ModalCategory.types";
import ImagePreview from "../Image/ImagePreview";

const ModalBlockSpecifyTechnology: FC<IModalProjectCardProps> = ({
  url,
  title,
  link,
  description,
}) => {
  return (
    <StyledCategory.ProjectSpecifyTechnologyContainer>
      <StyledCategory.SpecifyContentImgWrapper>
        <ImagePreview
          src={url}
          alt={"alt image card"}
          placeholder="blur"
          quality={100}
          objectFit={"cover"}
          layout={"fill"}
        />
      </StyledCategory.SpecifyContentImgWrapper>
      <StyledCategory.SpecifyContentWrapper>
        <StyledCategory.ContentWrapper>
          <StyledCategory.MainContent>
            <StyledCategory.ProjectTitleName>
              {title}
            </StyledCategory.ProjectTitleName>
            <StyledCategory.ProjectDescription>
              {description}
            </StyledCategory.ProjectDescription>
          </StyledCategory.MainContent>
          <StyledCategory.ButtonContainer>
            <StyledCategory.ProjectLinkWrapper href={link} passHref>
              <a target={"_blank"}>
                <ButtonProjectLink>
                  <ButtonTextWrapper fontSize={"1.2em"}>
                    project link
                  </ButtonTextWrapper>
                </ButtonProjectLink>
              </a>
            </StyledCategory.ProjectLinkWrapper>
          </StyledCategory.ButtonContainer>
        </StyledCategory.ContentWrapper>
      </StyledCategory.SpecifyContentWrapper>
    </StyledCategory.ProjectSpecifyTechnologyContainer>
  );
};

export default ModalBlockSpecifyTechnology;
