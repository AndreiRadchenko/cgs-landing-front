import React from 'react';
import * as Styled from './footer.styles';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import SocialLinks from '../SocialLinks/social-links.component';
import { IFooter } from '../../../../types/components/index';

const Footer: React.FC<IFooter> = ({ socialList, fill }) => {
  return (
    <Styled.FooterWrapper>
      <p>loremipsum@mail.com</p>
      <p>Copyright 2020</p>
      <SocialLinks socialList={socialList} fill={fill} />
    </Styled.FooterWrapper>
  );
};
export default Footer;
