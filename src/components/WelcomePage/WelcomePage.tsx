import * as StyledThisComp from "../../styles/Body.styled";
import React from "react";
import Image from "next/image";
import mainLogoIMG from "../../../public/mainLogoView.svg";

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

        <StyledThisComp.WrapperBgImg>
          <Image src={mainLogoIMG} alt={"main logo big image"} />
        </StyledThisComp.WrapperBgImg>
      </StyledThisComp.BodyDescriptionWrapper>
    </>
  );
};

export default WelcomePage;
