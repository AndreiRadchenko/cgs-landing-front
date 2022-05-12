import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import ButtonProjectLink from "../../utils/Buttons/ButtonProjectLink";
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
      <StyledCategory.ProjectImg>
        <ImagePreview
          src={url}
          alt={"alt image card"}
          width="400px"
          height="275px"
        />
      </StyledCategory.ProjectImg>

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

          <StyledCategory.ButtonContainer>
            <StyledCategory.ProjectLinkWrapper href={link} passHref>
              <a target={"_blank"}>
                <ButtonProjectLink>
                  <StyledCategory.ProjectLinkText>
                    project link
                  </StyledCategory.ProjectLinkText>
                </ButtonProjectLink>
              </a>
            </StyledCategory.ProjectLinkWrapper>
          </StyledCategory.ButtonContainer>
        </StyledCategory.ContentWrapper>
      </StyledCategory.ContentWrapper>
    </StyledCategory.ProjectContainer>
  );
};

export default ModalCategoryAllWorkCard;
