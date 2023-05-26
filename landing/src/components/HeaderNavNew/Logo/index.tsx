import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

import themes from "../../../utils/themes";
import * as Styled from "../../../styles/Logo.styled";
import logo from "../../../../public/HomePageDecoration/logo.svg";
import logoMobile from "../../../../public/HomePageDecoration/logo-mobile.svg";

const Logo = () => {
  const isMobile = useMediaQuery(`${themes.primary.media.maxMobile}`, {
    defaultMatches: true,
    noSsr: true,
  });
  return (
    <Styled.LogoWrapper>
      <Styled.ImageWrapper>
        <Image
          src={isMobile ? logoMobile : logo}
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
