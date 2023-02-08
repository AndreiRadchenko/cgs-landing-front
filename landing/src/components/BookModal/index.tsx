import React, { FC, useEffect } from "react";
import disableScroll from "disable-scroll";
import * as Styles from "../../styles/BookModalForm/BookModal.styled";

interface ITicketModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const BookModal: FC<ITicketModalProps> = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      disableScroll.on();
      return;
    }
    disableScroll.off();
  }, [isOpen]);

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
