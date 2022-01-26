import * as StyledThisComp from "../../styles/Body.styled";
import React from "react";
import Image from "next/image";
import mainLogoIMG from "../../../public/mainLogoView.svg";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import BaseButton from "../BaseButton/BaseButton";

const WelcomePage = () => {
  return (
    <>
      <StyledThisComp.BodyDescriptionWrapper>
        <StyledThisComp.BodyTitle>EUREKA!</StyledThisComp.BodyTitle>
        <StyledThisComp.BodySubtitle>
          The team of sharp-witted devs is on the brink of you.
        </StyledThisComp.BodySubtitle>

        <StyledThisComp.CodeDescription>
          {"//"}ready to cope with tasks of any complexity meeting the tightest
          deadlines
        </StyledThisComp.CodeDescription>

        <BaseButton>
          <ButtonTextWrapper fontSize={"1.4em"}>
            get estimation
          </ButtonTextWrapper>
        </BaseButton>

        <StyledThisComp.WrapperBgImg>
          <Image
            src={mainLogoIMG}
            alt={"main logo big image"}
            priority={true}
          />
        </StyledThisComp.WrapperBgImg>
      </StyledThisComp.BodyDescriptionWrapper>
    </>
  );
};

export default WelcomePage;
