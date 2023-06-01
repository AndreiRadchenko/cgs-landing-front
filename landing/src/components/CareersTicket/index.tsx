import React, { FC, MouseEvent, useState } from "react";
import * as Styled from "./CareersTicket.styled";
import Arrow from "../../../public/CareerDecorations/ticketArrow.svg";
import TicketModal from "../Careers/TicketModal";
import { ITicket } from "../../types/Admin/Response.types";
import * as Styles from "../../styles/TicketModal.styled";
import CloseButton from "../../../public/CareerDecorations/close.svg";
import locationImage from "../../../public/CareerDecorations/location.svg";
import clockImage from "../../../public/CareerDecorations/clock.svg";
import { ArrowContainer } from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";

interface ITicketProps {
  ticket: ITicket;
  scrollTo?: () => void;
  className?: string;
  isAdminPanel?: boolean;
}
const CareersTicket: FC<ITicketProps> = ({
  ticket: { vacancy, description, location, time, info },
  scrollTo,
  isAdminPanel,
}: ITicketProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTicket, setHoverTicket] = useState<boolean>(!isAdminPanel && false);

  const onTicketView = () => {
    if(!isAdminPanel) {
      setIsOpen(true);
    };
  };

  const onClose = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const onTicketHover = () => setHoverTicket(true);
  const ticketHoverOut = () => setHoverTicket(false);

  const onSubmitClick = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();

    setIsOpen(false);
    if (scrollTo) scrollTo();
  };

  return (
    <Styled.Wrapper>
      <Styled.TicketContainer>
        <Styled.TicketInner
          isTicketHover={hoverTicket}
          onMouseMove={!isAdminPanel ? onTicketHover : undefined}
          onMouseOut={!isAdminPanel ? ticketHoverOut : undefined}>
          <Styled.TicketInfo>
            <Styled.TicketPositionTitle isTicketHover={hoverTicket}>
              {vacancy}
            </Styled.TicketPositionTitle>
            <Styled.TicketDescription>
              {description}
            </Styled.TicketDescription>
            <Styled.TicketAboutWork>
              <Styled.WorkLocation>
                <Styled.TicketIcon src={locationImage.src} />
                <p>{location}</p>
              </Styled.WorkLocation>
              <Styled.WorkType>
                <Styled.TicketIcon src={clockImage.src} />
                <p>{time}</p>
              </Styled.WorkType>
            </Styled.TicketAboutWork>
          </Styled.TicketInfo>
          <Styled.TicketApplyButton onClick={onTicketView}>
            <p>Apply</p>
            <Styled.TicketArrow src={Arrow.src} />
          </Styled.TicketApplyButton>
          <Styled.Shadow isTicketHover={hoverTicket}>
          </Styled.Shadow>
        </Styled.TicketInner>     
        <TicketModal isOpen={isOpen} onClose={onClose}>
          <Styles.ButtonWrapper>
            <Styles.CloseButton src={CloseButton.src} onClick={onClose} />
          </Styles.ButtonWrapper>
          <Styles.HiddenWrapper>
            <Styles.Content>
              {info.map((el) => (
                <Styles.List key={el.heading}>
                  <Styles.ListTitle>{el.heading}</Styles.ListTitle>
                  {el.values.map((text, idx) => (
                    <Styles.ListItem key={idx}>
                      <span>{text}</span>
                    </Styles.ListItem>
                  ))}
                </Styles.List>
              ))}
              <Styles.SubmitButtonContainer>
                <Styles.SubmitButton onClick={onSubmitClick}>
                  SUBMIT FORM
                </Styles.SubmitButton>
                <ArrowContainer>
                  <ButtonArrow />
                </ArrowContainer>
              </Styles.SubmitButtonContainer>
            </Styles.Content>
          </Styles.HiddenWrapper>
        </TicketModal>
      </Styled.TicketContainer>
    </Styled.Wrapper>
  );
};

export default CareersTicket;