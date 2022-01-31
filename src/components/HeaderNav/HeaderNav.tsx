import React from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.png";
import { navigationRoutesNames, routers } from "../../utils/variables";
import Link from "next/link";
import ImagePreview from "../Image/ImagePreview";

const HeaderNav = () => {
  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.LogoLinkWrapper href={routers.home} passHref>
        <a>
          <ImagePreview
            src={logoIMG}
            alt={"logo cgs-team"}
            placeholder={"blur"}
          />
        </a>
      </StyledThisComp.LogoLinkWrapper>

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
