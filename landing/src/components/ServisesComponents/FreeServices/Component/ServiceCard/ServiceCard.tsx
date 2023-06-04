import React from "react";

import * as Styles from "./ServiceCard.styled";

interface ICardProps {
  idx: number;
  subtitle: string;
  text: string;
}

export const ServiceCard = ({ idx, subtitle, text }: ICardProps) => {
  return (
    <Styles.Card>
      <Styles.CardContent className="card-content">
        <Styles.CardNumber>{`0${String(idx + 1)}`}</Styles.CardNumber>
        <Styles.CardTitle>{subtitle}</Styles.CardTitle>
        <Styles.CardText>{text}</Styles.CardText>
      </Styles.CardContent>
      <Styles.ItemBackground className="background" />
    </Styles.Card>
  );
};
