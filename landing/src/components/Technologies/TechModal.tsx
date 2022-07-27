import React from "react";

import * as Styled from "../../styles/HomePage/TechModal.styled";

interface ITechModalProps {
  isOpen: boolean;
  data: string[];
}
const TechModal = ({ isOpen, data }: ITechModalProps) => {
  return (
    <Styled.TicketModal className={isOpen ? "block" : undefined}>
      <Styled.TicketModalContentContainer>
        <Styled.TicketModalContent onClick={(e) => e.stopPropagation()}>
          <Styled.Container>
            <Styled.WhiteBox />
            <Styled.BlackBox />
          </Styled.Container>
          <Styled.List className={data.length <= 3 ? "column" : "rows"}>
            {data.map((el, idx) => (
              <Styled.ListItem key={idx}>{el}</Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.TicketModalContent>
      </Styled.TicketModalContentContainer>
    </Styled.TicketModal>
  );
};

export default TechModal;
