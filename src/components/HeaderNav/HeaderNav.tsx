import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.png";
import { navigationRoutesNames, routers } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import BurgerButton from "../BurgerMenu/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { disableScrollBarHandler } from "../../utils/disableScrollBarHandler";

const HeaderNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  const toggleBurgerHandler = () => {
    setIsOpen((old) => !old);
  };

  useEffect(() => {
    isOpen && width && width >= 768 && setIsOpen(false);
  }, [width, isOpen]);

  disableScrollBarHandler(isOpen);

  return (
    <StyledThisComp.HeaderNavContainer>
      <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
      <BurgerMenu isOpen={isOpen}>
        {navigationRoutesNames.map((name, ind) => (
          <Link key={name + ind} href={name === "/home" ? "/" : name} passHref>
            <StyledThisComp.BurgerLinkText>
              {name}
            </StyledThisComp.BurgerLinkText>
          </Link>
        ))}
      </BurgerMenu>
      <StyledThisComp.LogoLinkWrapper href={routers.home}>
        <ImagePreview
          src={logoIMG}
          alt={"logo cgs-team"}
          placeholder={"blur"}
        />
      </StyledThisComp.LogoLinkWrapper>
      <StyledThisComp.NavList>
        {navigationRoutesNames.map((name, ind) => (
          <StyledThisComp.ListItemNav key={name + ind}>
            <Link
              key={name + ind}
              href={name === "/home" ? "/" : name}
              passHref
            >
              <StyledThisComp.LinkText>{name}</StyledThisComp.LinkText>
            </Link>
          </StyledThisComp.ListItemNav>
        ))}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNav;
