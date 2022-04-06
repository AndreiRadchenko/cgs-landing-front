import React, { FC } from "react";
import * as Styled from "./TicketButton.styled";

interface IButtonContent {
  content: string;
}
const TicketButton: FC<IButtonContent> = ({ content }: IButtonContent) => {
  return <Styled.TicketButton></Styled.TicketButton>;
};

export default TicketButton;
