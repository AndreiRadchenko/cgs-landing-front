import React from "react";
import * as Styled from "./AboutUs.styles";
import { v4 as uuidv4 } from "uuid";

const AboutUs = ({ employee }) => (
  <Styled.AboutUsContainer className="about-us__slide" key={uuidv4()}>
    <Styled.Avatar>
      <img src={employee?.imageUrl} alt={employee?.name} width="100%" />
    </Styled.Avatar>
    <h2>{employee?.name}</h2>
    <Styled.Position>{employee?.position}</Styled.Position>
    <Styled.AboutText className="about-us__text">
      {employee?.text}
    </Styled.AboutText>
  </Styled.AboutUsContainer>
);

export default AboutUs;
