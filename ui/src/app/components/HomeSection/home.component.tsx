import React from 'react';

import * as Styled from './home.styles';
import Ilustration from '../../img/illustration.svg';

import Button from '../shared/Button/button.component';

const Home = props => {
  return (
    <Styled.HomeWrapper>
      <a className="anchor" id={props.id} />
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
