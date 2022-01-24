import React, { FC } from "react";
import * as StyledThisComp from "./FeedbackCard.styled";
import ReactStars from "react-stars";

interface IFeedbackCardProps {
  name: string;
  company: string;
  position: string;
  rates: number;
  description: string;
}

const FeedbackCard: FC<IFeedbackCardProps> = ({
  name,
  company,
  position,
  rates,
  description,
}) => {
  return (
    <StyledThisComp.FeedbackCardContainer>
      <StyledThisComp.FeedbackCardWrapper>
        <StyledThisComp.FeedbackCardName></StyledThisComp.FeedbackCardName>
        {/*<ReactStars edit={false} value={rates} count={5} color2={} color1={} />*/}
      </StyledThisComp.FeedbackCardWrapper>
    </StyledThisComp.FeedbackCardContainer>
  );
};

export default FeedbackCard;
