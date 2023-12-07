import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";
import useMediaQuery from "@mui/material/useMediaQuery";

import BookModal from "../BookModal";

import * as Styled from "../../styles/HomePage/General.styled";
import CloseButton from "../../../public/CareerDecorations/close.svg";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import copyLink from "../../../public/copyLink.svg";
import arrow from "../../../public/longArrowRight.svg";
import shortArrow from "../../../public/shortArrowRight.svg";
import done from "../../../public/done.svg";

interface ICalendlyInfoModal {
  celendlyUri: string;
  dateTime?: string | null;
  setIsCalendlySuccessfull: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const CalendlyInfoModal = ({
  celendlyUri,
  setIsCalendlySuccessfull,
  isOpen,
  dateTime,
}: ICalendlyInfoModal) => {
  const isMobile = useMediaQuery("(max-width:570px)");
  const [isCopied, setCopied] = React.useState(false);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.CalendlyPopupBlock;

  const onClose = () => {
    setIsCalendlySuccessfull(false);
  };
  const copyDataHandler = () => {
    navigator.clipboard.writeText(celendlyUri).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {data && dateTime && (
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

              <Styled.CalendlyInfoModalLinkBlock>
                <Styled.CalendlyInfoModalLinkHeader>
                  <div>Here is your meeting info</div>
                  <Styled.CalendlyInfoModalLinkArrowImage
                    src={isMobile ? shortArrow.src : arrow.src}
                  />
                </Styled.CalendlyInfoModalLinkHeader>
                <Styled.CalendlyInfoModalDateTime>
                  <div>Date & Time:</div>
                  <div>{dateTime}</div>
                </Styled.CalendlyInfoModalDateTime>
                <Styled.CalendlyInfoModalLinkMain>
                  <div>
                    <p>{celendlyUri}</p>
                  </div>
                  {isCopied ? (
                    <div>
                      <Styled.CalendlyInfoModalLinkHint>
                        Link copied to clipboard
                      </Styled.CalendlyInfoModalLinkHint>
                      <Styled.CalendlyInfoModalLinkDoneImage src={done.src} />
                    </div>
                  ) : (
                    <div onClick={copyDataHandler}>
                      <Styled.CalendlyInfoModalLinkCopyImage
                        src={copyLink.src}
                      />
                      <div>Copy link</div>
                    </div>
                  )}
                </Styled.CalendlyInfoModalLinkMain>
                <Styled.CalendlyInfoModalLinkFooter>
                  We sent it to your email, but you can save it from here.
                </Styled.CalendlyInfoModalLinkFooter>
              </Styled.CalendlyInfoModalLinkBlock>

              <Styled.CalendlyInfoModalNotice>
                <Styled.CalendlyInfoModalImageWrapper>
                  <Styled.CalendlyInfoModalImage />
                </Styled.CalendlyInfoModalImageWrapper>
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
