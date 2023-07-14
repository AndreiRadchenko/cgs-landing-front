import React from "react";

import * as Styled from "../../styles/HomePage/TechModal.styled";

interface ITechModalProps {
  isOpen: boolean;
  data: string[];
  idx: number;
}
const TechModal = ({ isOpen, data, idx }: ITechModalProps) => {
  return (
    <Styled.TicketModal idx={idx === 3} className={isOpen ? "block" : undefined}>
      <Styled.TicketModalContentContainer>
        <Styled.TicketModalContent onClick={(e) => e.stopPropagation()}>
          <Styled.Container>
            <Styled.WhiteBox />
            <Styled.BlackBox />
          </Styled.Container>
          <Styled.List className={data?.length <= 3 ? "column" : "rows"}>
            {data &&
              data.map((el, idx) => (
                <Styled.ListItem key={idx}>{el}</Styled.ListItem>
              ))}
          </Styled.List>
        </Styled.TicketModalContent>
      </Styled.TicketModalContentContainer>
    </Styled.TicketModal>
  );
};

export default TechModal;
