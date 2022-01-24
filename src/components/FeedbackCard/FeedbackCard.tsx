import React, { FC } from "react";

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
  return <></>;
};

export default FeedbackCard;
