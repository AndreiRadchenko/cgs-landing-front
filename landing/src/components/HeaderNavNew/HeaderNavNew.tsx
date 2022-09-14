import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import { navigationRoutesNamesNew, routersNew } from "../../utils/variables";
import Link from "next/link";
import BurgerButton from "../BurgerMenu/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import HeaderDropdown from "./HeaderDropdown";
import Logo from "./Logo";
import HeaderBurgerDropdown from "./HeaderBurgerDropdown";

const HeaderNavNew = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  const toggleBurgerHandler = () => {
    setIsOpen((old) => !old);
  };

  useEffect(() => {
    isOpen && width && width > 768 && setIsOpen(false);
  }, [width, isOpen]);

  DisableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderNavContainer>
      <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
      <BurgerMenu isOpen={isOpen}>
        {navigationRoutesNamesNew.map(({ route, withDropdown, tags }, ind) => {
          return withDropdown ? (
            <HeaderBurgerDropdown
              tags={tags ? tags : []}
              dropdownName={route}
              key={route + ind}
            />
          ) : (
            <Link key={route + ind} href={routersNew[ind]} passHref>
              <StyledThisComp.BurgerLinkText>
                {route}
              </StyledThisComp.BurgerLinkText>
            </Link>
          );
        })}
      </BurgerMenu>
      <StyledThisComp.LogoLinkWrapper href={"/"}>
        <Logo />
      </StyledThisComp.LogoLinkWrapper>
      <StyledThisComp.NavList>
        {navigationRoutesNamesNew.map(({ route, withDropdown, tags }, ind) =>
          !withDropdown ? (
            <Link key={route + ind} href={routersNew[ind]} passHref>
              <StyledThisComp.ListItemNav key={route + ind}>
                <StyledThisComp.LinkText>{route}</StyledThisComp.LinkText>
              </StyledThisComp.ListItemNav>
            </Link>
          ) : (
            <HeaderDropdown
              tags={tags ? tags : []}
              dropdownName={route}
              key={route + ind}
            />
          )
        )}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNavNew;
