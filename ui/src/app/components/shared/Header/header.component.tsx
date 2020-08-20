import React from 'react';
import * as Styled from './header.styles';
import Logo from '../../../img/logo.svg';
import Categories from '../Categories/categories.component';
import SocialLinks from '../SocialLinks/social-links.component';
import Menu from '../BurgerMenu/menu.component';
import { IHeader } from '../../../../types/components';

/** temporary solution with position fixed */
const Header: React.FC<IHeader> = ({ socialList, navigation, fill }) => {
  return (
    <React.Fragment>
      <Styled.HeaderWrapper isFixed={true}>
        <Styled.HeaderItem>
          <Styled.HeaderLogo src={Logo} />
        </Styled.HeaderItem>
        <Menu>
          <Categories navigation={navigation} />
          <SocialLinks socialList={socialList} fill={fill} />
        </Menu>
      </Styled.HeaderWrapper>
      <Styled.HeaderWrapper>
        <Styled.HeaderItem>
          <Styled.HeaderLogo src={Logo} />
        </Styled.HeaderItem>
        <Menu>
          <Categories navigation={navigation} />
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
