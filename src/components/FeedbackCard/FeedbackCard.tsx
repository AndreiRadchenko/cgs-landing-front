import React, { FC } from "react";
import * as StyledThisComp from "./FeedbackCard.styled";
import ReactStars from "react-stars";
import themes from "../../utils/themes";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import ButtonReadMore from "../../utils/Buttons/ButtonReadMore";

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
        <StyledThisComp.FeedbackCardName>
          {name}
        </StyledThisComp.FeedbackCardName>
        <ReactStars
          edit={false}
          value={rates}
          count={5}
          size={20}
          char={"★"}
          color2={themes.primary.colors.starActive}
          color1={themes.primary.colors.starDisable}
        />
      </StyledThisComp.FeedbackCardWrapper>

      <StyledThisComp.FeedbackCardCompany>
        {company}
      </StyledThisComp.FeedbackCardCompany>
      <StyledThisComp.FeedbackCardPosition>
        {position}
      </StyledThisComp.FeedbackCardPosition>
      <StyledThisComp.FeedbackCardDescription>
        {description}
      </StyledThisComp.FeedbackCardDescription>

      <ButtonReadMore>
        <ButtonTextWrapper fontSize={"1.35em"}>read more</ButtonTextWrapper>
      </ButtonReadMore>
    </StyledThisComp.FeedbackCardContainer>
  );
};

export default FeedbackCard;
