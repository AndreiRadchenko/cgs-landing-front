import React, { FC, MouseEvent } from "react";
import * as Styles from "../../../styles/BookModalForm/BookModalInput.styled";
import CloseButton from "../../../../public/CareerDecorations/close.svg";
import BookForm from "../BookModalForm";

interface IModalProps {
  onClose: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  isOpen: boolean;
}

const BookModalInputForms: FC<IModalProps> = ({
  onClose,
  isOpen,
}: IModalProps) => {
  return (
    <>
      <Styles.ButtonWrapper>
        <Styles.CloseButton src={CloseButton.src} onClick={onClose} />
      </Styles.ButtonWrapper>
      <Styles.HiddenWrapper>
        <Styles.Content>
          <Styles.List>
            <Styles.ListTitle>Launch our cooperation</Styles.ListTitle>
          </Styles.List>
          {isOpen && <BookForm onClose={onClose} isOpen={isOpen} />}
        </Styles.Content>
      </Styles.HiddenWrapper>
    </>
  );
};

export default BookModalInputForms;
