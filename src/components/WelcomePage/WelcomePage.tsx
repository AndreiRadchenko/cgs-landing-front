import * as StyledThisComp from "../../styles/Body.styled";
import React from "react";
import mainLogoIMG from "../../../public/mainLogo.png";
import BaseButton from "../BaseButton/BaseButton";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import backImg from "../../../public/back-button.png";
import ImagePreview from "../Image/ImagePreview";

const WelcomePage = () => {
  return (
    <>
      <StyledThisComp.BodyDescriptionWrapper>
        <StyledThisComp.BodyTitle>EUREKA!</StyledThisComp.BodyTitle>
        <StyledThisComp.BodySubtitle>
          The team of sharp-witted <br /> devs is on the brink of you.
        </StyledThisComp.BodySubtitle>

        <StyledThisComp.CodeDescription>
          {"//"}ready to cope with tasks of any <br /> complexity meeting the
          tightest deadlines
        </StyledThisComp.CodeDescription>

        <BaseButton onClick={() => {}} src={backImg}>
          <ButtonTextWrapper fontSize={"1.4em"}>
            get estimation
          </ButtonTextWrapper>
        </BaseButton>

        <StyledThisComp.WrapperBgImg>
          <ImagePreview
            src={mainLogoIMG}
            placeholder={"blur"}
            alt={"main logo alt image"}
          />
        </StyledThisComp.WrapperBgImg>
      </StyledThisComp.BodyDescriptionWrapper>
    </>
  );
};

export default WelcomePage;
