import React, { FC } from "react";

import BookForm from "../BookModalForm";

import * as Styles from "../../../styles/BookModalForm/BookModalInput.styled";

import { IModalProps } from "../../../types/ModalCategory.types";

import CloseButton from "../../../../public/CareerDecorations/close.svg";

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
