import React from "react";
import Image from "next/image";

import * as Styled from "./home.styles";
import { ISlogan } from "../../../types/components/index";
import { clickDiscussTheDitails } from "services/event";

const Home: React.FC<{ id: string; slogan: ISlogan }> = ({ id, slogan }) => (
  <Styled.HomeWrapper id={id}>
    <Styled.ContentBlock>
      <h1 className="home-section__title">{slogan?.title}</h1>
      <p className="home-section__subtitle">{slogan?.text}</p>
      <Styled.LinkButtonsWrapper>
        <Styled.LinkButton onClick={() => clickDiscussTheDitails("/#contact")} href="#contact">
          Start a project
        </Styled.LinkButton>
        <Styled.LinkButtonSecond
          onClick={() => clickDiscussTheDitails("/partners")}
          href="partners"
        >
          Become a partner
        </Styled.LinkButtonSecond>
      </Styled.LinkButtonsWrapper>
      <Styled.LinkButton href="#contact" mobile type="button">
        Contact us
      </Styled.LinkButton>
    </Styled.ContentBlock>
    <Styled.IllustrationContainer>
      <Styled.Illustration>
        <Image
          src="/illustration.webp"
          alt="illustration image"
          width="829"
          height="702"
          layout="responsive"
          loading="eager"
          quality={10}
        />
      </Styled.Illustration>
    </Styled.IllustrationContainer>
  </Styled.HomeWrapper>
);

export default Home;
