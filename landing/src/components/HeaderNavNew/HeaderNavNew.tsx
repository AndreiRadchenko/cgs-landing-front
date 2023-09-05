import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import Logo from "./Logo";
import HeaderDropdown from "./HeaderDropdown";
import HeaderBurgerDropdown from "./HeaderBurgerDropdown";
import BurgerButton from "../BurgerMenu/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ProgrammableSearchBar from "./ProgrammableSearchBar";

import { useWindowDimension } from "../../hooks/useWindowDimension";
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
  const headerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  const toggleBurgerHandler = () => {
    setIsOpen((old) => !old);
  };

  const onScroll = () => {
    const elBottom = headerRef?.current?.getBoundingClientRect().bottom || 0;
    const scrollY = window.scrollY;

    if (burgerRef.current?.classList[2] === "open") {
      setIsScrolled(burgerRef.current?.scrollTop > 0);

      return;
    }

    if (elBottom != scrollY) {
      setIsScrolled(true);

      return;
    }

    setIsScrolled(false);
  };

  const handlePortfolioClick = () => {
    if (window.location.pathname === "/portfolio")
      window.location.href = "/portfolio";
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, true);

    return window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    isOpen && width && width > 768 && setIsOpen(false);
    width && width < 768 && onScroll();
  }, [width, isOpen]);

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
        {width && width > 768 && <ProgrammableSearchBar />}
        <BurgerMenu isOpen={isOpen} burgerRef={burgerRef}>
          {navigationRoutesNamesNew.map(({ route, withDropdown, tags }, ind) =>
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
        <StyledThisComp.NavList>
          {navigationRoutesNamesNew.map(({ route, withDropdown, tags }, ind) =>
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
      </StyledThisComp.HeaderNavContainer>
    </StyledThisComp.HeaderWrapper>
  );
};

export default HeaderNavNew;
