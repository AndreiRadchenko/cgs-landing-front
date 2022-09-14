import React, { FC } from "react";
import * as StyledThisComp from "./FeedbackCard.styled";
import { IFeedbackCardProps } from "../../types/Feedback.types";
import star from "../../../public/HomePageDecoration/feedbackStar.svg";
import Link from "next/link";

const FeedbackCard: FC<IFeedbackCardProps> = ({
  name,
  company,
  link,
  rates,
  description,
}) => {
  const starsLength = new Array(Math.ceil(rates)).fill(0);
  return (
    <StyledThisComp.FeedbackCardContainer>
      <StyledThisComp.FeedBackContentWrapper>
        <StyledThisComp.FeedbackCardWrapper>
          <StyledThisComp.FeedbackCardName>
            {name}
          </StyledThisComp.FeedbackCardName>
          <StyledThisComp.Stars>
            {starsLength.map((_, idx) => (
              <StyledThisComp.StarImage key={idx} src={star.src} />
            ))}
          </StyledThisComp.Stars>
        </StyledThisComp.FeedbackCardWrapper>
        <Link href={link} passHref>
          <StyledThisComp.FeedbackCardCompany
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </StyledThisComp.FeedbackCardCompany>
        </Link>

        <StyledThisComp.FeedbackCardDescription>
          {description}
        </StyledThisComp.FeedbackCardDescription>
      </StyledThisComp.FeedBackContentWrapper>
      <StyledThisComp.FeedbackButton href="https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/">
        View more
      </StyledThisComp.FeedbackButton>
    </StyledThisComp.FeedbackCardContainer>
  );
};

export default FeedbackCard;
