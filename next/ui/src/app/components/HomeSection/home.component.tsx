import React from 'react';
import * as Styled from './home.styles';
import { ISlogan } from '../../../types/components/index';

const Home: React.FC<{ id: string; slogan: ISlogan }> = ({ id, slogan }) => {
  return (
    <Styled.HomeWrapper id={id}>
      <Styled.ContentBlock>
        <img className="home-section__img--mobile" src="/illustration.svg" />
        <h1 className="home-section__title">{slogan.title}</h1>
        <p className="home-section__subtitle">{slogan.text}</p>

        <button className="home-section__button" type="button">
          Start a project
        </button>
        <button className="home-section__button--mob" type="button">
          Contact us
        </button>
      </Styled.ContentBlock>
      <div>
        <Styled.Ilustration src={'/illustration.svg'} />
      </div>
    </Styled.HomeWrapper>
  );
};

export default Home;
