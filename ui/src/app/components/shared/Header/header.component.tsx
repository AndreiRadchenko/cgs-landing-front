import React, { useEffect } from 'react';
import * as Styled from './header.styles';
import Logo from '../../../img/logo.svg';
import Categories from '../Categories/categories.component';
import SocialLinks from '../SocialLinks/social-links.component';
import Menu from '../BurgerMenu/menu.component';
import { IHeader } from '../../../../types/components';
import { useLocation, Link } from 'react-router-dom';

interface LocationState {
  from: {
    pathname: string;
  };
}

const NavigationMapper = {
  Home: 0,
  Blog: 1,
  Contact: 2,
};

const Header: React.FC<IHeader> = ({
  socialList,
  navigation,
  fill,
  activeIndex,
  setActiveIndex,
}) => {
  const [activeMenu, setMenuState] = React.useState(false);

  const location = useLocation<LocationState>();

  useEffect(() => {
    const currentNavigatorObj = navigation.find(
      el => el.link === location.pathname,
    );
    setActiveIndex(NavigationMapper[currentNavigatorObj?.title || 'Home']);
  }, [location]);

  return (
    <React.Fragment>
      <Styled.HeaderWrapper>
        <Styled.HeaderItem>
          <Link to="/">
            <Styled.HeaderLogo src={Logo} />
          </Link>
        </Styled.HeaderItem>
        <Menu activeMenu={activeMenu} setMenuState={setMenuState}>
          <Categories
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            navigation={navigation}
          />
          <SocialLinks socialList={socialList} fill={fill} />
        </Menu>
      </Styled.HeaderWrapper>
    </React.Fragment>
  );
};
Header.defaultProps = {
  fill: '#0C1033',
};
export default Header;
