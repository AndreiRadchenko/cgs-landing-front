import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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

const HeaderNavNew = ({
  setOpenFailedModal,
  clickFromEstimationForm,
}: {
  setOpenFailedModal?: Dispatch<SetStateAction<boolean>>;
  clickFromEstimationForm?: boolean;
}): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

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
      <StyledThisComp.HeaderNavContainer>
        <StyledThisComp.NavBarWrapper
          className={isScrolled ? "scrolled" : undefined}
        >
          <StyledThisComp.LogoLinkWrapper
            onClick={(e) => {
              if (clickFromEstimationForm) {
                e.preventDefault();
                setOpenFailedModal!(true);
              }
            }}
            href={"/"}
          >
            <Logo />
          </StyledThisComp.LogoLinkWrapper>
          <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
        </StyledThisComp.NavBarWrapper>
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
    </StyledThisComp.HeaderWrapper>
  );
};

export default HeaderNavNew;
