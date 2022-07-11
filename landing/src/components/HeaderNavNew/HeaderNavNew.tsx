import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import { navigationRoutesNamesNew, routersNew } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import BurgerButton from "../BurgerMenu/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { disableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import logo from "../../../public/logo.png";

const HeaderNavNew = (): JSX.Element => {
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
        {navigationRoutesNamesNew.map((name, ind) => (
          <Link key={name + ind} href={routersNew[ind]} passHref>
            <StyledThisComp.BurgerLinkText>
              /{name}
            </StyledThisComp.BurgerLinkText>
          </Link>
        ))}
      </BurgerMenu>
      <StyledThisComp.LogoLinkWrapper href={routersNew[0]}>
        <ImagePreview src={logo} alt={"logo cgs-team"} />
        <StyledThisComp.CompanyNameText>
          CODE
          <br />
          GENERATION
        </StyledThisComp.CompanyNameText>
      </StyledThisComp.LogoLinkWrapper>
      <StyledThisComp.NavList>
        {navigationRoutesNamesNew.map((name, ind) => (
          <Link key={name + ind} href={routersNew[ind]} passHref>
            <StyledThisComp.ListItemNav key={name + ind}>
              <StyledThisComp.LinkText>{name}</StyledThisComp.LinkText>
            </StyledThisComp.ListItemNav>
          </Link>
        ))}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNavNew;
