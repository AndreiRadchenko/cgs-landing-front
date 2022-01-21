import React from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.svg";
import { navigationRoutesNames, routers } from "../../utils/variables";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.LogoLinkWrapper href={routers.home} passHref>
        <a>
          <Image src={logoIMG} alt={"logo cgs-team"} />
        </a>
      </StyledThisComp.LogoLinkWrapper>

      <StyledThisComp.HeaderNavLinkWrapper>
        {navigationRoutesNames.map((item) => (
          <StyledThisComp.ListItemNav key={item}>
            <Link href={item} passHref>
              {item}
            </Link>
          </StyledThisComp.ListItemNav>
        ))}
      </StyledThisComp.HeaderNavLinkWrapper>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNav;
