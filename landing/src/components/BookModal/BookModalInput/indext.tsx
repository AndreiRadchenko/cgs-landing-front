import React, { FC, MouseEvent } from "react";
import * as Styles from "../../../styles/BookModalForm/BookModalIntup.styled";
import CloseButton from "../../../../public/CareerDecorations/close.svg";
import BookForm from "../BookModalForm";

interface IModalProps {
  onClose: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const BookModalInputForms: FC<IModalProps> = ({ onClose }: IModalProps) => {
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
          <BookForm />
        </Styles.Content>
      </Styles.HiddenWrapper>
    </>
  );
};

export default BookModalInputForms;
