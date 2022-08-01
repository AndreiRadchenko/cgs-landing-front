import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import {
  navigationRoutesLinks,
  navigationRoutesNamesNew,
  routersNew,
} from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import BurgerButton from "../BurgerMenu/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { disableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import logo from "../../../public/newHeaderLogo.svg";
import { useRouter } from "next/router";
import HeaderDropdown from "./HeaderDropdown";

const HeaderNavNew = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string | null>(null);
  const router = useRouter();
  const { width } = useWindowDimension();

  const toggleBurgerHandler = () => {
    setIsOpen((old) => !old);
  };

  useEffect(() => {
    isOpen && width && width >= 768 && setIsOpen(false);
  }, [width, isOpen]);

  useEffect(() => {
    if (!filter) return;

    const href =
      navigationRoutesLinks[filter as keyof typeof navigationRoutesLinks];

    if (!href) return;

    router.push(href);
  }, [filter, router]);

  disableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderNavContainer>
      <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
      <BurgerMenu isOpen={isOpen}>
        {navigationRoutesNamesNew.map(({ route }, ind) => (
          <Link key={route + ind} href={routersNew[ind]} passHref>
            <StyledThisComp.BurgerLinkText>
              /{route}
            </StyledThisComp.BurgerLinkText>
          </Link>
        ))}
      </BurgerMenu>
      <StyledThisComp.LogoLinkWrapper href={"/"}>
        <ImagePreview
          src={logo.src}
          alt={"logo cgs-team"}
          width={106}
          height={32}
        />
      </StyledThisComp.LogoLinkWrapper>
      <StyledThisComp.NavList>
        {navigationRoutesNamesNew.map(({ route, withDropdown, tags }, ind) =>
          !withDropdown ? (
            <Link
              key={route + ind}
              href={routersNew[ind] !== "/blog" ? routersNew[ind] : "/"}
              passHref
            >
              <StyledThisComp.ListItemNav
                key={route + ind}
                className={routersNew[ind] !== "/blog" ? undefined : "disabled"}
              >
                <StyledThisComp.LinkText>{route}</StyledThisComp.LinkText>
              </StyledThisComp.ListItemNav>
            </Link>
          ) : (
            <HeaderDropdown
              className={
                routersNew[ind] !== "/services" ? undefined : "disabled"
              }
              setFilter={setFilter}
              filter={filter}
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
