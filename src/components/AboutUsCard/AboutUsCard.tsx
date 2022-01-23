import React, { FC } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import Image from "next/image";

interface IAboutUsCardProps {
  url: string;
  description: string;
  text: string;
}

const AboutUsCard: FC<IAboutUsCardProps> = ({ url, description, text }) => {
  return (
    <StyledThisComp.AboutUsCardContainer>
      <Image src={url} alt={`about us icon ${description}`} />

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
          </StyledThisComp.CardDescriptionValue>
          <StyledThisComp.DecorationText className={description} />
        </StyledThisComp.CardDescriptionValueWrapper>
      </StyledThisComp.CardDescriptionWrapper>
    </StyledThisComp.AboutUsCardContainer>
  );
};

export default AboutUsCard;
