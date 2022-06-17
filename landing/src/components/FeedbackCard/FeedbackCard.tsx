import React, { FC, memo, useState } from "react";
import * as StyledThisComp from "./FeedbackCard.styled";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import ButtonReadMore from "../../utils/Buttons/ButtonReadMore";
import { IFeedbackCardProps } from "../../types/Feedback.types";
import Link from "next/link";

const FeedbackCard: FC<IFeedbackCardProps> = ({
  name,
  company,
  position,
  link,
  rates,
  description,
}) => {
  const [isOpenFullFeedBack, setOpenFullFeedback] = useState<boolean>(false);
  const toggleFullFeedbackHandler = () =>
    setOpenFullFeedback(!isOpenFullFeedBack);

  return (
    <StyledThisComp.FeedbackCardContainer>
      <StyledThisComp.FeedBackContentWrapper>
        <StyledThisComp.FeedbackCardWrapper>
          <StyledThisComp.FeedbackCardName>
            {name}
          </StyledThisComp.FeedbackCardName>
          <StyledThisComp.Stars rate={rates} />
        </StyledThisComp.FeedbackCardWrapper>

        <Link href={link} passHref>
          <StyledThisComp.FeedbackCardCompany target="_blank">
            {company}
          </StyledThisComp.FeedbackCardCompany>
        </Link>

        <StyledThisComp.FeedbackCardPosition>
          {position}
        </StyledThisComp.FeedbackCardPosition>
        <StyledThisComp.FeedbackCardDescription>
          {isOpenFullFeedBack ? description : description.slice(0, 115) + "..."}
        </StyledThisComp.FeedbackCardDescription>
      </StyledThisComp.FeedBackContentWrapper>
      <StyledThisComp.FeedbackButtonContainer>
        <ButtonReadMore onClick={toggleFullFeedbackHandler}>
          <ButtonTextWrapper fontSize={"1.35em"}>
            read {isOpenFullFeedBack ? "less" : "more"}
          </ButtonTextWrapper>
        </ButtonReadMore>
      </StyledThisComp.FeedbackButtonContainer>
    </StyledThisComp.FeedbackCardContainer>
  );
};

export default memo(FeedbackCard);
