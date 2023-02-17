import React, { FC } from "react";
import * as Styles from "../../styles/BookModalForm/BookModal.styled";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";

interface ITicketModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const BookModal: FC<ITicketModalProps> = ({ isOpen, children }) => {
  isOpen && DisableScrollBarHandler(isOpen);

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
