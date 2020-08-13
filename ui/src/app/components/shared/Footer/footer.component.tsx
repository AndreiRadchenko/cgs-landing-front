import React from 'react';
import * as Styled from './footer.styles';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { clickSocialLinkEA } from '../../../../services/event';

const Footer = ({ socialList, fill }) => {
  return (
    <Styled.FooterWrapper data-scroll={'Social'}>
      <p>loremipsum@mail.com</p>
      <p>Copyright 2020</p>
      <Styled.Item>
        {socialList &&
          socialList.map((item, index) => (
            <Link
              to={item.link}
              key={uuidv4()}
              onClick={() => clickSocialLinkEA(item.link)}
            >
              <Styled.SocialWrap>
                <svg
                  width="45"
                  height="32"
                  viewBox="0 0 45 32"
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
      </Styled.Item>
    </Styled.FooterWrapper>
  );
};
export default Footer;
