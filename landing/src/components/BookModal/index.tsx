import React, { FC } from "react";
import * as Styles from "../../styles/BookModalForm/BookModal.styled";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";

interface ITicketModalProps {
  isOpen?: boolean;
  isCalendly?: boolean;
  children: React.ReactNode;
}

const BookModal: FC<ITicketModalProps> = ({ isOpen, isCalendly, children }) => {
  isOpen && DisableScrollBarHandler(isOpen);

  return (
    <Styles.BookModal
      isCalendly={isCalendly}
      className={isOpen ? "none" : "open"}
    >
      <Styles.BookModalContentContainer>
        <Styles.BookModalContent
          isCalendly={isCalendly}
          onClick={(e) => e.stopPropagation()}
        >
          <Styles.Container isCalendly={isCalendly}>
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
