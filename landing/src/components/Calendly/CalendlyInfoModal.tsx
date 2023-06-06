import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";

import BookModal from "../BookModal";

import * as Styled from "../../styles/HomePage/General.styled";
import CloseButton from "../../../public/CareerDecorations/close.svg";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

interface ICalendlyInfoModal {
  setIsCalendlySuccessfull: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const CalendlyInfoModal = ({
  setIsCalendlySuccessfull,
  isOpen,
}: ICalendlyInfoModal) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.CalendlyPopupBlock;

  const onClose = () => {
    setIsCalendlySuccessfull(false);
  };

  return (
    <>
      {data && (
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
                {data.title}
              </Styled.CalendlyInfoModalTitle>

              <Styled.CalendlyInfoModalNotice>
                <Styled.CalendlyInfoModalImage />
                <Styled.CalendlyInfoModalNoticeText>
                  {parse(data.description)}
                </Styled.CalendlyInfoModalNoticeText>
              </Styled.CalendlyInfoModalNotice>

              <Styled.CalendlyInfoModalNoticeButtonWrapper>
                <Styled.CalendlyInfoModalNoticeButton onClick={onClose}>
                  {data.buttonText}
                </Styled.CalendlyInfoModalNoticeButton>
              </Styled.CalendlyInfoModalNoticeButtonWrapper>
            </Styled.CalendlyInfoModalContent>
          </Styled.CalendlyInfoModalWrapper>
        </BookModal>
      )}
    </>
  );
};

export default CalendlyInfoModal;
