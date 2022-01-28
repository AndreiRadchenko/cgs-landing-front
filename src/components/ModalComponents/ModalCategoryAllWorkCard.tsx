import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import ButtonProjectLink from "../../utils/Buttons/ButtonProjectLink";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import { IModalProjectCardProps } from "../../types/ModalCategory.types";
import ImagePreview from "../Image/ImagePreview";

const ModalCategoryAllWorkCard: FC<IModalProjectCardProps> = ({
  url,
  title,
  link,
  description,
}) => {
  return (
    <StyledCategory.ProjectContainer>
      <ImagePreview
        src={url}
        placeholder="blur"
        alt={"alt image card"}
        quality={100}
      />
      <StyledCategory.ContentWrapper>
        <StyledCategory.ContentWrapper>
          <StyledCategory.MainContent>
            <StyledCategory.ProjectTitleName>
              {title}
            </StyledCategory.ProjectTitleName>
            <StyledCategory.ProjectDescription>
              {description}
            </StyledCategory.ProjectDescription>
          </StyledCategory.MainContent>

          <StyledCategory.ProjectLinkWrapper href={link} passHref>
            <a target={"_blank"}>
              <ButtonProjectLink>
                <ButtonTextWrapper fontSize={"1.2em"}>
                  project link
                </ButtonTextWrapper>
              </ButtonProjectLink>
            </a>
          </StyledCategory.ProjectLinkWrapper>
        </StyledCategory.ContentWrapper>
      </StyledCategory.ContentWrapper>
    </StyledCategory.ProjectContainer>
  );
};

export default ModalCategoryAllWorkCard;
