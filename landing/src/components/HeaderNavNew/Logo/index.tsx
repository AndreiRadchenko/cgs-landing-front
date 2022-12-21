import React, { CSSProperties } from "react";
import Image from "next/image";
import * as Styled from "../../../styles/Logo.styled";
import logoWithoutText from "../../../../public/logoWithoutText.svg";

interface LogoProps {
  textStyle?: CSSProperties;
}

const Logo = ({ textStyle }: LogoProps) => {
  return (
    <Styled.LogoWrapper>
      <Styled.ImageWrapper>
        <Image
          src={logoWithoutText}
          alt="logo without the text"
          objectFit="contain"
        />
      </Styled.ImageWrapper>
      <Styled.LogoText style={textStyle}>СGS-team</Styled.LogoText>
    </Styled.LogoWrapper>
  );
};

export default Logo;
