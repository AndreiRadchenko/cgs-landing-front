import React from 'react';
import * as Styled from './menu.styles';
import classNames from 'classnames';

const Menu = ({ children }) => {
  const [activeMenu, setMenuState] = React.useState(false);
  return (
    <Styled.BurgerMenu>
      <Styled.MenuContainer
        className="menu"
        onClick={() => setMenuState(!activeMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </Styled.MenuContainer>
      <Styled.DropDown
        className={classNames('drop-down', { showSubMenu: activeMenu })}
      >
        {children}
      </Styled.DropDown>
    </Styled.BurgerMenu>
  );
};
export default Menu;
