import React, { FC, MouseEvent } from "react";
import * as Styles from "../../styles/BookModalForm/BookModal.styled";

interface ITicketModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const BookModal: FC<ITicketModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Styles.BookModal className={isOpen ? "none" : "open"} onClick={onClose}>
      <Styles.BookModalContentContainer>
        <Styles.BookModalContent onClick={(e) => e.stopPropagation()}>
          <Styles.Container>
            <Styles.WhiteBox />
            <Styles.BlackBox />
          </Styles.Container>
          {children}
        </Styles.BookModalContent>
      </Styles.BookModalContentContainer>
    </Styles.BookModal>
  );
};

export default BookModal;
