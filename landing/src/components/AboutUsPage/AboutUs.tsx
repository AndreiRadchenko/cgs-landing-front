import React from "react";
import parse from "html-react-parser";
import * as Styled from "./AboutUs.styled";
import { Layout } from "../../styles/Layout.styled";

import { IAbout } from "../../types/Admin/Response.types";

interface IAboutUs {
  data: IAbout;
}

const AboutUs = ({ data }: IAboutUs) => {
  return (
    <Layout>
      <Styled.AboutUsContainer>
        <Styled.ColContainer>
          <Styled.MainTitle>
            Idea-inspired, <br />
            <span>tech-driven</span> professionals
          </Styled.MainTitle>

          <Styled.MainImageContainer>
            <Styled.MainImage src={data.believe.image.url} />

            <Styled.MovingText>
              <span>
                &nbsp;CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS
                TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS
                TEAM&nbsp;&nbsp;TEAM CGS&nbsp;&nbsp;TEAM CGS TEAM&nbsp;
              </span>
              <span>
                CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS
                TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;TEAM
                CGS&nbsp;&nbsp;TEAM CGS TEAM&nbsp;
              </span>
              <span>
                CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS
                TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;CGS TEAM&nbsp;&nbsp;TEAM
                CGS&nbsp;&nbsp;TEAM CGS TEAM&nbsp;
              </span>
            </Styled.MovingText>
          </Styled.MainImageContainer>
        </Styled.ColContainer>
        <Styled.ColContainer>
          <Styled.DescriptionContainer>
            <Styled.Subtitle>{data.believe.subtitle}</Styled.Subtitle>
            <Styled.Text>{parse(data.believe.text)}</Styled.Text>
          </Styled.DescriptionContainer>
          <Styled.DescriptionContainer>
            <Styled.Subtitle>{data.goal.subtitle}</Styled.Subtitle>
            <Styled.Text>{parse(data.goal.text)}</Styled.Text>
          </Styled.DescriptionContainer>
          <Styled.DescriptionContainer>
            <Styled.Subtitle>{data.bonuses.subtitle}</Styled.Subtitle>
            {data &&
              data.bonuses.text.map((el, idx) => {
                return <Styled.Text key={idx}>{el}</Styled.Text>;
              })}
          </Styled.DescriptionContainer>
        </Styled.ColContainer>

        <Styled.BottomImage src={data?.image.url} />
      </Styled.AboutUsContainer>
    </Layout>
  );
};

export default AboutUs;
