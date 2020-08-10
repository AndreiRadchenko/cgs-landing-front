import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Styled from './header.styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../../img/logo.svg';

const Header = ({ socialList, navigation, fill }) => {
  const [activeLink, setActiveLink] = React.useState(0);
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderItem>
        <Styled.HeaderLogo src={Logo}></Styled.HeaderLogo>
      </Styled.HeaderItem>
      <Styled.HeaderNav>
        {navigation &&
          navigation.map((item, index) => (
            <Link
              key={uuidv4()}
              to={item.link}
              onClick={() => {
                setActiveLink(index);
              }}
            >
              <Styled.NavItem className={index === activeLink ? 'active' : ''}>
                {item.title}
              </Styled.NavItem>
            </Link>
          ))}
      </Styled.HeaderNav>
      <Styled.HeaderItem>
        {socialList &&
          socialList.map((item, index) => (
            <Link to={item.link} key={uuidv4()}>
              <Styled.SocialWrap>
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill={fill === 'white' ? '#0C1033' : 'white'}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {item.src &&
                    item.src.map((path, index, arr) =>
                      arr.length === 3 && index > 0 ? (
                        <path
                          key={uuidv4()}
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d={path}
                          fill="inherit"
                        />
                      ) : (
                        <path
                          key={uuidv4()}
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d={path}
                          fill={fill}
                        />
                      ),
                    )}
                </svg>
              </Styled.SocialWrap>
            </Link>
          ))}
      </Styled.HeaderItem>
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
