import React, { FC } from "react";

import * as Styles from "../../../styles/TicketModal.styled";

import { ITicketModalProps } from "../../../types/Company.types";

const TicketModal: FC<ITicketModalProps> = ({
  isOpen,
  onClose,
  children,
  ref,
}) => {
  return (
    <Styles.TicketModal isOpen={isOpen} onClick={onClose} ref={ref}>
      <Styles.TicketModalContentContainer>
        <Styles.TicketModalContent onClick={(e) => e.stopPropagation()}>
          <Styles.Container>
            <Styles.WhiteBox />
            <Styles.BlackBox />
          </Styles.Container>
          {children}
        </Styles.TicketModalContent>
      </Styles.TicketModalContentContainer>
    </Styles.TicketModal>
  );
};

export default TicketModal;
