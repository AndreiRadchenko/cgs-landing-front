import React from 'react';
import * as Styled from './footer.styles';
import SocialLinks from '../SocialLinks/social-links.component';
import { IFooter } from '../../../../types/components';

const Footer: React.FC<IFooter> = ({ socialList, fill }) => {
  return (
    <Styled.Wrapper>
      <Styled.FooterWrapper data-scroll={'Social'}>
        <p className="mail">
          <a href="mailto:sales.codegeneration@gmail.com">
            sales.codegeneration@gmail.com
          </a>
        </p>
        <p>Code Generation 2020</p>
        <SocialLinks socialList={socialList} fill={fill} />
      </Styled.FooterWrapper>
    </Styled.Wrapper>
  );
};
export default Footer;
