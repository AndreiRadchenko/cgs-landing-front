import React from 'react';
import * as Styled from './social-links.styles';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ISocial } from '../../../../types/components/index';
import ReactGA from 'react-ga';

const clickSocialLinkEA = link => {
  ReactGA.event({
    category: 'Social Link',
    action: 'clickToSocialLink',
    label: `${link}`,
  });
};

const SocialLinks: React.FC<ISocial> = ({ socialList, fill }) => {
  return (
    <Styled.HeaderLinks>
      {socialList &&
        socialList.map((item, index) => (
          <Link
            onClick={() => clickSocialLinkEA(item.link)}
            to={item.link}
            key={uuidv4()}
          >
            <Styled.SocialWrap>
              <svg
                height="32"
                width="45"
                viewBox="0 0 45 32"
                fill={fill === 'white' ? '#0C1033' : 'white'}
                xmlns="http://www.w3.org/2000/svg"
              >
                {item.src &&
                  item.src.map(data => (
                    <path
                      key={uuidv4()}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d={data.path}
                      fill={
                        fill === 'white'
                          ? fill === data.fill
                            ? 'inherit'
                            : fill
                          : data.fill
                      }
                    />
                  ))}
              </svg>
            </Styled.SocialWrap>
          </Link>
        ))}
    </Styled.HeaderLinks>
  );
};
export default SocialLinks;
