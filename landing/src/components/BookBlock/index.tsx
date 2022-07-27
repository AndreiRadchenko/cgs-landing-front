import React from "react";
import buttonArrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import {
  ButtonArrow,
  Subtitle,
  FooterButtonWrapper,
  FooterLinkButton,
} from "../../styles/HomePage/General.styled";

const BookBlock = () => {
  return (
    <>
      <Subtitle className="footer">
        Do you want to turn your ideas into{" "}
        <span className="blue">tech solutions</span>{" "}
        <FooterButtonWrapper>
          with CGS-team?
          <FooterLinkButton>
            BOOK A CALL
            <ButtonArrow src={buttonArrow.src} />
          </FooterLinkButton>
        </FooterButtonWrapper>
      </Subtitle>
    </>
  );
};

export default BookBlock;
