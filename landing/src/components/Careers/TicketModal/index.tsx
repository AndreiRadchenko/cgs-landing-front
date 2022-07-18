import React, { FC, MouseEvent } from "react";
import * as Styles from "./ticketmodal.styled";
import Arrow from "../../../../public/BlogDecorations/MainPage/Arrow.svg";
import CloseButton from "../../../../public/CareerDecorations/close.svg";

interface ITicketModalProps {
  isOpen?: boolean;
  setIsOpen: (arg: boolean) => void;
  fromYou: string[];
  fromUs: string[];
  scrollTo: () => void;
}

const TicketModal: FC<ITicketModalProps> = ({
  fromYou,
  fromUs,
  isOpen,
  setIsOpen,
  scrollTo,
}) => {
  const onSubmitClick = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();

    setIsOpen(false);
    scrollTo();
  };
  const onClose = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <Styles.TicketModal isOpen={isOpen} onClick={onClose}>
      <Styles.TicketModalContentContainer>
        <Styles.TicketModalContent onClick={(e) => e.stopPropagation()}>
          <Styles.Container>
            <Styles.WhiteBox />
            <Styles.BlackBox />
          </Styles.Container>
          <Styles.CloseButton src={CloseButton.src} onClick={onClose} />
          <Styles.List>
            <Styles.ListTitle>From You</Styles.ListTitle>
            {fromYou.map((text, idx) => (
              <Styles.ListItem key={idx}>{text}</Styles.ListItem>
            ))}
          </Styles.List>
          <Styles.List>
            <Styles.ListTitle>From Us</Styles.ListTitle>
            {fromUs.map((text, idx) => (
              <Styles.ListItem key={idx}>{text}</Styles.ListItem>
            ))}
          </Styles.List>
          <Styles.SubmitButtonContainer>
            <Styles.SubmitButton onClick={onSubmitClick}>
              SUBMIT FORM
            </Styles.SubmitButton>
            <Styles.SubmitArrow src={Arrow.src} />
          </Styles.SubmitButtonContainer>
        </Styles.TicketModalContent>
      </Styles.TicketModalContentContainer>
    </Styles.TicketModal>
  );
};

export default TicketModal;
