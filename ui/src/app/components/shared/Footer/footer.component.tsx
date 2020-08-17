import React from 'react';
import * as Styled from './footer.styles';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import SocialLinks from '../SocialLinks/social-links.component';
import { IFooter } from '../../../../types/components/index';
import { clickSocialLinkEA } from '../../../../services/event';

const Footer: React.FC<IFooter> = ({ socialList, fill }) => {
  return (
    <Styled.Wrapper>
      <Styled.FooterWrapper data-scroll={'Social'}>
        <p>
          <a href="mailto:sales.codegeneration@gmail.com">
            sales.codegeneration@gmail.com
          </a>
        </p>
        <p>Copyright 2020</p>
        <SocialLinks socialList={socialList} fill={fill} />
      </Styled.FooterWrapper>
    </Styled.Wrapper>
  );
};
export default Footer;
