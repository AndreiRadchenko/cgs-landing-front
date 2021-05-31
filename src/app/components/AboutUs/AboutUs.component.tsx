import React from 'react';
import * as Styled from './AboutUs.styles';
import { v4 as uuidv4 } from 'uuid';

const AboutUs = ({ employee }) => {
  return (
    <Styled.AboutUsContainer className="about-us__slide" key={uuidv4()}>
      <Styled.Avatar>
        <img src={employee.imageUrl} alt={employee.name} width="100%" />
      </Styled.Avatar>
      <h2>{employee.name}</h2>
      <p className="about-us__position">{employee.position}</p>
      <Styled.AboutUsText className="about-us__text">{employee.text}</Styled.AboutUsText>
    </Styled.AboutUsContainer>
  );
};

export default AboutUs;
