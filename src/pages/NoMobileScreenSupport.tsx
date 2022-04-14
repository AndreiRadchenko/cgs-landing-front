import React from "react";
import * as StyledCommon from "../styles/NoMobileScreen.styled";
import mainLogoIMG from "../../public/mainLogo.png";

import Image from "next/image";

const NoMobileScreenSupport = () => {
  return (
    <StyledCommon.Wrapper>
      <StyledCommon.ImgWrapper>
        <Image
          alt={""}
          src={mainLogoIMG}
          objectFit={"cover"}
          layout={"fill"}
          quality={100}
        />
      </StyledCommon.ImgWrapper>

      <StyledCommon.TextContent>meet Vlad</StyledCommon.TextContent>
      <StyledCommon.TextContent>
        he is a dev from CGS-team
      </StyledCommon.TextContent>
      <StyledCommon.TextContent>
        he is in a hurry cause he wants to develop our mobile version ASAP
      </StyledCommon.TextContent>
      <StyledCommon.TextContent>so it will be done</StyledCommon.TextContent>
    </StyledCommon.Wrapper>
  );
};

export default NoMobileScreenSupport;
