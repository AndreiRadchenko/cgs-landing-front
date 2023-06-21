import React, { FC, MouseEvent } from "react";
import * as Styles from "../../../styles/TicketModal.styled";

interface ITicketModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  ref: React.RefObject<HTMLDivElement>;
}

const TicketModal: FC<ITicketModalProps> = ({ isOpen, onClose, children, ref }) => {
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
