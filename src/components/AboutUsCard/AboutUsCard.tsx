import React, { FC } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import ImagePreview from "../Image/ImagePreview";

interface IAboutUsCardProps {
  url: any;
  description: string;
  text: string;
}

const AboutUsCard: FC<IAboutUsCardProps> = ({ url, description, text }) => {
  return (
    <StyledThisComp.AboutUsCardContainer>
      <StyledThisComp.WrapperAboutUSIMG
        className={description !== "quantity" ? "columnDescription" : ""}
      >
        <ImagePreview src={url} alt={`about us icon ${description}`} />
      </StyledThisComp.WrapperAboutUSIMG>

      <StyledThisComp.CardDescriptionWrapper
        className={description !== "quantity" ? "columnDescription" : ""}
      >
        <StyledThisComp.CardDescriptionSubDescription
          className={description !== "quantity" ? "columnDescription" : ""}
        >
          {description}:{" "}
        </StyledThisComp.CardDescriptionSubDescription>

        <StyledThisComp.CardDescriptionValueWrapper
          className={description !== "quantity" ? "columnDescription" : ""}
        >
          <StyledThisComp.CardDescriptionValue
            className={description !== "quantity" ? "columnDescription" : ""}
          >
            {text}
            <StyledThisComp.DecorationText className={description} />
          </StyledThisComp.CardDescriptionValue>
        </StyledThisComp.CardDescriptionValueWrapper>
      </StyledThisComp.CardDescriptionWrapper>
    </StyledThisComp.AboutUsCardContainer>
  );
};

export default AboutUsCard;
