import React, { FC } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import ImagePreview from "../Image/ImagePreview";

interface IAboutUsCardProps {
  url: any;
  description: string;
  text: string;
}

const AboutUsCard: FC<IAboutUsCardProps> = ({ url, description, text }) => {
  const delay = Math.random() * 3;

  return (
    <StyledThisComp.AboutUsCardContainer>
      <StyledThisComp.WrapperAboutUSIMG
        className={description !== "quantity" ? "columnDescription" : ""}
        delay={delay}
      >
        <ImagePreview
          src={url}
          alt={`about us icon ${description}`}
          width={description !== "quantity" ? "290px" : "232px"}
          height={description !== "quantity" ? "240px" : "240px"}
        />
      </StyledThisComp.WrapperAboutUSIMG>

      <StyledThisComp.CardDescriptionWrapper
        className={description !== "quantity" ? "columnDescription" : ""}
      >
        <StyledThisComp.CardDescriptionSubDescription
          className={description !== "quantity" ? "columnDescription" : ""}
        >
          {`${description}: `}
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