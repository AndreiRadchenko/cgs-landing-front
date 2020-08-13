import React from 'react';

import * as Styled from './home.styles';
import Ilustration from '../../img/illustration.svg';
import Dots from '../../img/dots.svg';

import Button from '../shared/Button/button.component';
import { IHome } from '../../../types/components/index';

const Home: React.FC<IHome> = props => {
  return (
    <Styled.HomeWrapper id={props.id}>
      <Styled.Dots src={Dots} />
      <Styled.ContentBlock>
        <h2>Trust only professionals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button text="Start a project" type="button" />
      </Styled.ContentBlock>
      <div>
        <Styled.Ilustration src={Ilustration} />
      </div>
    </Styled.HomeWrapper>
  );
};

export default Home;
