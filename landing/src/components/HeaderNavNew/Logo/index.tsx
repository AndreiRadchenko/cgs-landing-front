import React from "react";
import Image from "next/image";
import * as Styled from "../../../styles/Logo.styled";
import headerLogo from "../../../../public/HomePageDecoration/headerLogo.svg";

const Logo = () => {
  return (
    <Styled.LogoWrapper>
      <Styled.ImageWrapper>
        <Image
          src={headerLogo}
          alt="logo without the text"
          objectFit="contain"
        />
      </Styled.ImageWrapper>
    </Styled.LogoWrapper>
  );
};

export default Logo;
