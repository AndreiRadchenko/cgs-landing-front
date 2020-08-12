import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Styled from './header.styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../../img/logo.svg';
import Categories from '../Categories/categories.component';
import SocialLinks from '../SocialLinks/social-links.component';
import Menu from '../BurgerMenu/menu.component';

const Header = ({ socialList, navigation, fill }) => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderItem>
        <Styled.HeaderLogo src={Logo}></Styled.HeaderLogo>
      </Styled.HeaderItem>
      <Menu>
        <Categories navigation={navigation} />
        <SocialLinks socialList={socialList} fill={fill} />
      </Menu>
    </Styled.HeaderWrapper>
  );
};
Header.propTypes = {
  socialList: PropTypes.arrayOf(Object).isRequired,
  navigation: PropTypes.arrayOf(Object).isRequired,
  fill: PropTypes.string,
};
Header.defaultProps = {
  fill: '#0C1033',
};
export default Header;
