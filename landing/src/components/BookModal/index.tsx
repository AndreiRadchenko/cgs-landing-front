import React, { FC } from "react";
import * as Styles from "../../styles/BookModalForm/BookModal.styled";

interface ITicketModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const BookModal: FC<ITicketModalProps> = ({ isOpen, children }) => {
  return (
    <Styles.BookModal className={isOpen ? "none" : "open"}>
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
