import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.png";
import { navigationRoutesNames, routers } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import LowResolutionNavigation from "../LowResolutionNavigation/LowResolutionNavigation";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { disableScrollBarHandler } from "../../utils/disableScrollBarHandler";

const HeaderNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  const toggleBurgerHandler = () => setIsOpen(!isOpen);

  useEffect(() => {
    isOpen && width && width >= 768 && setIsOpen(false);
  }, [width]);

  disableScrollBarHandler(isOpen);

  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.LogoLinkWrapper href={routers.home}>
        <ImagePreview
          src={logoIMG}
          alt={"logo cgs-team"}
          placeholder={"blur"}
        />
      </StyledThisComp.LogoLinkWrapper>
      <StyledThisComp.NavList>
        <StyledThisComp.ListItemNav>
          <Link href={"/"}>/home</Link>
        </StyledThisComp.ListItemNav>
        <StyledThisComp.ListItemNav>
          <Link href={"/careers"}>/careers</Link>
        </StyledThisComp.ListItemNav>
        <StyledThisComp.ListItemNav>
          <Link href={"/partners"}>/partners</Link>
        </StyledThisComp.ListItemNav>
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNav;
