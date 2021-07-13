import React from "react";
import * as Styled from "./home.styles";
import { ISlogan } from "../../../types/components/index";
import { clickDiscussTheDitails } from "services/event";

const Home: React.FC<{ id: string; slogan: ISlogan }> = ({ id, slogan }) => (
  <Styled.HomeWrapper id={id}>
    <Styled.ContentBlock>
      <Styled.ImgMobile className="home-section__img--mobile" src="/illustration.svg" />
      <h1 className="home-section__title">{slogan?.title}</h1>
      <p className="home-section__subtitle">{slogan?.text}</p>
      <Styled.LinkButtonsWrapper>
        <Styled.LinkButton onClick={() => clickDiscussTheDitails("/#contact")} href="#contact">
          Discuss the details
        </Styled.LinkButton>

        {/* <Styled.LinkButtonSecond
          onClick={() => clickDiscussTheDitails("/partners")}
          href="partners"
        >
          Become a partner
        </Styled.LinkButtonSecond> */}
      </Styled.LinkButtonsWrapper>

      <Styled.LinkButton href="#contact" mobile type="button">
        Contact us
      </Styled.LinkButton>
    </Styled.ContentBlock>
    <div>
      <Styled.Ilustration src={"/illustration.svg"} />
    </div>
  </Styled.HomeWrapper>
);

export default Home;
