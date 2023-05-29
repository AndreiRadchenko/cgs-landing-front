import React from "react";
import BookModal from "../BookModal";
import CloseButton from "../../../public/CareerDecorations/close.svg";

import * as Styled from "../../styles/HomePage/General.styled";

interface ICalendlyInfoModal {
  setIsCalendlySuccessfull: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const CalendlyInfoModal = ({
  setIsCalendlySuccessfull,
  isOpen,
}: ICalendlyInfoModal) => {
  const onClose = () => {
    setIsCalendlySuccessfull(false);
  };

  return (
    <BookModal isCalendly={true} isOpen={isOpen}>
      <Styled.CalendlyInfoModalWrapper>
        <Styled.CalendlyInfoModalWrapperCloseWrapper>
          <Styled.CalendlyInfoModalWrapperCloseButton
            src={CloseButton.src}
            onClick={onClose}
          />
        </Styled.CalendlyInfoModalWrapperCloseWrapper>
        <Styled.CalendlyInfoModalContent>
          <Styled.CalendlyInfoModalTitle>
            Hooray! You successfully booked a call with us.
          </Styled.CalendlyInfoModalTitle>

          <Styled.CalendlyInfoModalNotice>
            <Styled.CalendlyInfoModalImage />
            <Styled.CalendlyInfoModalNoticeText>
              Notice: To see this event in your calendar, go to your mailbox and
              click the <span>I KNOW THE SENDER</span> button on the call
              confirmation email.
            </Styled.CalendlyInfoModalNoticeText>
          </Styled.CalendlyInfoModalNotice>

          <Styled.CalendlyInfoModalNoticeButtonWrapper>
            <Styled.CalendlyInfoModalNoticeButton onClick={onClose}>
              Thanks!
            </Styled.CalendlyInfoModalNoticeButton>
          </Styled.CalendlyInfoModalNoticeButtonWrapper>
        </Styled.CalendlyInfoModalContent>
      </Styled.CalendlyInfoModalWrapper>
    </BookModal>
  );
};

export default CalendlyInfoModal;
