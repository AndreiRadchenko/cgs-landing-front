import React from "react";
import Image from "next/image";

import * as Styled from "../../../styles/Logo.styled";
import logoMobile from "../../../../public/HomePageDecoration/logo-mobile.svg";

const Logo = () => {
  return (
    <Styled.LogoWrapper>
      <Styled.ImageWrapper>
        <Image
          src={logoMobile}
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          priority
        />
      </Styled.ImageWrapper>
    </Styled.LogoWrapper>
  );
};
export default Logo;
