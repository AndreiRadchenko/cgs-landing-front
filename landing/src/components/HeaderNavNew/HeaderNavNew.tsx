import React, { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  const handleClick = () => {
    audioRef.current?.play();
  };

  const toggleBurgerHandler = () => {
    setIsOpen((old) => !old);
  };

  const onScroll = () => {
    const elBottom = headerRef?.current?.getBoundingClientRect().bottom || 0;
    const scrollY = window.scrollY;
    if (elBottom != scrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    isOpen && width && width > 768 && setIsOpen(false);
  }, [width, isOpen]);

  DisableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderWrapper>
      <StyledThisComp.ClickAudio ref={audioRef}>
        <StyledThisComp.Source
          src="/music/headerMouseClick.mp3"
          type="audio/mpeg"
        />
      </StyledThisComp.ClickAudio>
      <StyledThisComp.HeaderNavContainer
        className={isScrolled ? "scrolled" : undefined}
      >
        <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
        <BurgerMenu isOpen={isOpen}>
          {navigationRoutesNamesNew.map(
            ({ route, withDropdown, tags }, ind) => {
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
            }
          )}
        </BurgerMenu>
        <StyledThisComp.LogoLinkWrapper onClick={handleClick} href={"/"}>
          <Logo />
        </StyledThisComp.LogoLinkWrapper>
        <StyledThisComp.NavList onClick={handleClick}>
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
    </StyledThisComp.HeaderWrapper>
  );
};

export default HeaderNavNew;
