import React, { useEffect, useState } from "react";

import * as Styled from "./home.styles";

import Button from "../shared/Button/button.component";
import { IHome } from "../../../types/components/index";
// import { startProjectEA } from "../../../services/event";
import getHomeDetails from "../../../services/api/homeSection";

const Home: React.FC<IHome> = (props) => {
  const [data, setDate] = useState(getHomeDetails());

  return (
    <Styled.HomeWrapper id={props.id}>
      <Styled.ContentBlock>
        <img className="home-section__img--mobile" src="/illustration.svg" />
        <h1 className="home-section__title">{data.title}</h1>
        <p className="home-section__subtitle">{data.text}</p>

        <button className="home-section__button" type="button">
          Start a project
        </button>
        <button className="home-section__button--mob" type="button">
          Contact us
        </button>
      </Styled.ContentBlock>
      <div>
        <Styled.Ilustration src={"/illustration.svg"} />
      </div>
    </Styled.HomeWrapper>
  );
};

export default Home;
