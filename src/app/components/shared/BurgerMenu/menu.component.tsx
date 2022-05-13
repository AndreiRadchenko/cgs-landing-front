import React from "react";
import * as Styled from "./menu.styles";
import { IMenu } from "../../../../types/components";
import dayjs from "dayjs";
import SocialLinks from "../SocialLinks/social-links.component";
import { MobileSocialList, Nav } from "../../../../consts/lists";
import BurgerIcon from "./burger.icon";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import "animate.css/source/_vars.css";
import "animate.css/source/_base.css";
import "animate.css/source/fading_entrances/fadeInRight.css";

const Menu: React.FC<IMenu> = ({ showMenu, setShowMenu, children }) => {
  const onBurger = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setShowMenu(!showMenu);
  };

  return (
    <Styled.BurgerMenu >
      <Styled.MenuContainer className="menu" onClick={onBurger} >
        <BurgerIcon />
      </Styled.MenuContainer>
      <Styled.DropDown
        className={`drop-down ${showMenu ? "show-sub-menu" : ""}`}
      >
        <Styled.LgMenu className="lg-menu">{children}</Styled.LgMenu>
        {showMenu && (
          <Styled.DropBoxContainer>
            <Styled.DropBoxMain>
              {Nav?.map((item) => (
                <Link href={item?.link} key={uuidv4()}>
                  <p
                    onClick={() => setShowMenu(!showMenu)}
                    className="drop-box-item animated fadeInRight">
                    {item.burgerTitle}
                  </p>
                </Link>
              ))}
            </Styled.DropBoxMain>
            <Styled.DropBoxFooter>
              <Styled.DropBoxFooterText>
                <a href="mailto:contact@codegenerationsoftware.com">
                  contact@codegenerationsoftware.com
                </a>
              </Styled.DropBoxFooterText>
              <SocialLinks socialList={MobileSocialList} />
              <Styled.DropBoxFooterText>
                Copyright {dayjs().format("YYYY")}
              </Styled.DropBoxFooterText>
            </Styled.DropBoxFooter>
          </Styled.DropBoxContainer>
        )}
      </Styled.DropDown>
    </Styled.BurgerMenu>
  );
};
export default Menu;
