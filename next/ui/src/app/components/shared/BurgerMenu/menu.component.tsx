import React from 'react';
import * as Styled from './menu.styles';
import { IMenu } from '../../../../types/components';
import dayjs from 'dayjs';
import SocialLinks from '../SocialLinks/social-links.component';
import { MobileSocialList, Nav } from '../../../../consts/lists';
import BurgerIcon from './burger.icon';
import { v4 as uuidv4 } from 'uuid';

const Menu: React.FC<IMenu> = ({ activeMenu, setMenuState, children }) => {
  const onBurger = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setMenuState(!activeMenu);
  };

  return (
    <Styled.BurgerMenu>
      <Styled.MenuContainer className="menu" onClick={onBurger}>
        <BurgerIcon />
      </Styled.MenuContainer>

      <Styled.DropDown
        className={`drop-down ${activeMenu ? 'show-sub-menu' : ''}`}
      >
        <div className="lg-menu">{children}</div>
        {activeMenu && (
          <div className="drop-box-container">
            <div className="drop-box-main">
              {Nav.map((item, index) => (
                <a href={item.link} key={uuidv4()}>
                  <p
                    className={
                      // index === 0 ? 'drop-box-item' : 'drop-box-item__active'
                      'drop-box-item'
                    }
                  >
                    {item.burgerTitle}
                  </p>
                </a>
              ))}
            </div>
            <div className="drop-box-footer">
              <p className="drop-box-footer-text">
                <a href="mailto:sales.codegeneration@gmail.com">
                  sales.codegeneration@gmail.com
                </a>
              </p>
              <SocialLinks socialList={MobileSocialList} />
              <p className="drop-box-footer-text">
                Copyright {dayjs().format('YYYY')}
              </p>
            </div>
          </div>
        )}
      </Styled.DropDown>
      <Styled.GlobalStyle activeMenu={activeMenu} />
    </Styled.BurgerMenu>
  );
};
export default Menu;
