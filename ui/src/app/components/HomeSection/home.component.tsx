import React from 'react';

import * as Styled from './home.styles';
import Ilustration from '../../img/illustration.svg';
import Dots from '../../img/dots.svg';

import Button from '../shared/Button/button.component';
import { IHome } from '../../../types/components/index';
import { startProjectEA } from '../../../services/event';
import { Link } from 'react-scroll';

const Home: React.FC<IHome> = props => {
  return (
    <Styled.HomeWrapper id={props.id}>
      <Styled.Dots src={Dots} />
      <Styled.ContentBlock>
        <h1>Trust only professionals</h1>
        <p>
          Our expertise is Web, Mobile and Server development.
          <br />
          We do not just build projects, we bring your idea to life, do not let
          it to die inside your mind let`s implement it together.
        </p>
        <Link
          onClick={() => {
            startProjectEA();
          }}
          to="Contacts"
          spy={true}
          smooth={true}
          duration={900}
        >
          <Button type="button">Start a project</Button>
        </Link>
      </Styled.ContentBlock>
      <div>
        <Styled.Ilustration src={Ilustration} />
      </div>
    </Styled.HomeWrapper>
  );
};

export default Home;
