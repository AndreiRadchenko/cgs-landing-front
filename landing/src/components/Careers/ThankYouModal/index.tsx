import React, { FC } from "react";
import * as Styles from "./ThankYouModal.styled";
import CloseButton from "../../../../public/CareerDecorations/close.svg";
import Thing from "../../../../public/CareerDecorations/thankyouthing.svg";
import Cube from "../../../../public/CareerDecorations/cube.svg";

interface ThankYouModalProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const ThankYouModal: FC<ThankYouModalProps> = ({ isOpen, setIsOpen }) => {
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Styles.ThankYouModal isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Styles.ThankYouModalContainer>
          <Styles.ThankYouModalContent>
            <Styles.Container>
              <Styles.WhiteBox />
              <Styles.BlackBox />
            </Styles.Container>
            <Styles.ThankContainer>
              <Styles.ThankMessage>Thank you!</Styles.ThankMessage>
              <Styles.ThankMessage>
                We make every effort to contact you faster than you expect.
              </Styles.ThankMessage>
            </Styles.ThankContainer>
            <Styles.CloseButton src={CloseButton.src} onClick={onClose} />
            <Styles.Thing src={Thing.src} />
            <Styles.Cube src={Cube.src} />
          </Styles.ThankYouModalContent>
        </Styles.ThankYouModalContainer>
      </Styles.ThankYouModal>
    </>
  );
};

export default ThankYouModal;
