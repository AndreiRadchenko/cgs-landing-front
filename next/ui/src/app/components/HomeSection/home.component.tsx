import React from "react";
import * as Styled from "./home.styles";
import { ISlogan } from "../../../types/components/index";

const Home: React.FC<{ id: string; slogan: ISlogan }> = ({ id, slogan }) => {
  return (
    <Styled.HomeWrapper id={id}>
      <Styled.ContentBlock>
        <Styled.ImgMobile
          className="home-section__img--mobile"
          src="/illustration.svg"
        />
        <h1 className="home-section__title">{slogan.title}</h1>
        <p className="home-section__subtitle">{slogan.text}</p>

        <Styled.Button type="button">Start a project</Styled.Button>
        <Styled.Button mobile type="button">
          Contact us
        </Styled.Button>
      </Styled.ContentBlock>
      <div>
        <Styled.Ilustration src={"/illustration.svg"} />
      </div>
    </Styled.HomeWrapper>
  );
};

export default Home;
