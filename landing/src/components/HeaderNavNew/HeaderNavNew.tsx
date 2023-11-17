import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";

import Logo from "./Logo";
import HeaderDropdown from "./HeaderDropdown";
import HeaderBurgerDropdown from "./HeaderBurgerDropdown";
import BurgerButton from "../BurgerMenu/BurgerButton";
const BurgerMenu = dynamic(() => import("../BurgerMenu/BurgerMenu"));

import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";

import * as StyledThisComp from "./HeaderNav.styled";
import { navigationRoutesNamesNew, routersNew } from "../../utils/variables";

const HeaderNavNew = ({
  setLink,
  setOpenFailedModal,
  clickFromEstimationForm,
}: {
  setLink?: Dispatch<SetStateAction<string>>;
  setOpenFailedModal?: Dispatch<SetStateAction<boolean>>;
  clickFromEstimationForm?: boolean;
}): JSX.Element => {
  const burgerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleBurgerHandler = () => {
    if (isMobile && window.scrollY) {
      setIsScrolled(isOpen);
    }
    setIsOpen((old) => !old);
  };

  const handlePortfolioClick = () => {
    if (window.location.pathname === "/portfolio")
      window.location.href = "/portfolio";
  };

  DisableScrollBarHandler(isOpen);

  return (
    <StyledThisComp.HeaderWrapper className="navbar">
      <StyledThisComp.HeaderNavContainer>
        <StyledThisComp.NavBarWrapper
          className={isScrolled ? "scrolled" : undefined}
        >
          <StyledThisComp.LogoLinkWrapper
            onClick={(e) => {
              if (clickFromEstimationForm) {
                e.preventDefault();
                setOpenFailedModal!(true);
                setLink!("/");
              }
            }}
            href={"/"}
          >
            <Logo />
          </StyledThisComp.LogoLinkWrapper>
          <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
        </StyledThisComp.NavBarWrapper>
        {isMobile ? (
          <BurgerMenu
            isOpen={isOpen}
            burgerRef={burgerRef}
            setIsScrolled={setIsScrolled}
          >
            {navigationRoutesNamesNew.map(
              ({ route, withDropdown, tags }, ind) =>
                withDropdown ? (
                  <HeaderBurgerDropdown
                    tags={tags ? tags : []}
                    dropdownName={route}
                    key={route + ind}
                  />
                ) : (
                  <Link key={route + ind} href={routersNew[ind]} passHref>
                    <StyledThisComp.BurgerLinkText
                      onClick={
                        routersNew[ind] === "/portfolio"
                          ? handlePortfolioClick
                          : undefined
                      }
                    >
                      {route}
                    </StyledThisComp.BurgerLinkText>
                  </Link>
                )
            )}
          </BurgerMenu>
        ) : (
          <StyledThisComp.NavList>
            {navigationRoutesNamesNew.map(
              ({ route, withDropdown, tags }, ind) =>
                !withDropdown ? (
                  <Link key={route + ind} href={routersNew[ind]} passHref>
                    <StyledThisComp.ListItemNav
                      key={route + ind}
                      onClick={
                        routersNew[ind] === "/portfolio"
                          ? handlePortfolioClick
                          : undefined
                      }
                    >
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
        )}
      </StyledThisComp.HeaderNavContainer>
    </StyledThisComp.HeaderWrapper>
  );
};

export default HeaderNavNew;
