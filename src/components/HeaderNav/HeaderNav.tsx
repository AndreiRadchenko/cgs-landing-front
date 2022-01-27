import React from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.svg";
import { navigationRoutesNames, routers } from "../../utils/variables";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <StyledThisComp.HeaderNavContainer>
      <Link href={routers.home} passHref>
        <StyledThisComp.LogoLinkWrapper>
          <Image
            src={logoIMG}
            alt={"logo cgs-team"}
            quality={100}
            objectFit={"contain"}
            layout={"fixed"}
          />
        </StyledThisComp.LogoLinkWrapper>
      </Link>

      <StyledThisComp.HeaderNavLinkWrapper>
        {navigationRoutesNames.map((item) => (
          <StyledThisComp.ListItemNav key={item}>
            <Link href={item[0]} passHref>
              {item}
            </Link>
          </StyledThisComp.ListItemNav>
        ))}
      </StyledThisComp.HeaderNavLinkWrapper>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNav;
