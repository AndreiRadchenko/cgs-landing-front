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
import logo from "../../../public/logo.png";
import BlogDropdown from "../Blog/BlogDropdown";
import { useRouter } from "next/router";

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
      <StyledThisComp.LogoLinkWrapper href={routersNew[0]}>
        <ImagePreview src={logo} alt={"logo cgs-team"} />
        <StyledThisComp.CompanyNameText>
          CODE
          <br />
          GENERATION
        </StyledThisComp.CompanyNameText>
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
            <StyledThisComp.DropdownElement key={route + ind}>
              <BlogDropdown
                setFilter={setFilter}
                filter={filter}
                tags={tags ? tags : []}
                dropdownName={route}
                key={route + ind}
                isHeader={true}
              />
            </StyledThisComp.DropdownElement>
          )
        )}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNavNew;
