import React from "react";
import Image from "next/image";
import * as Styled from "../../../styles/Logo.styled";
import logoWithoutText from "../../../../public/logoWithoutText.svg";

const Logo = () => {
  return (
    <Styled.LogoWrapper>
      <Image
        src={logoWithoutText}
        alt="logo without the text"
        width={34}
        height={32}
        objectFit="contain"
      />
      <Styled.LogoText>СGS-team</Styled.LogoText>
    </Styled.LogoWrapper>
  );
};

export default Logo;
