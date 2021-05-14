import React from 'react';
import * as Styled from './AboutUs.styles';
import { v4 as uuidv4 } from 'uuid';

const AboutUs = ({ employee }) => {
  return (
    <Styled.AboutUsContainer className="about-us__slide" key={uuidv4()}>
      <Styled.Avatar>
        <img src={employee.avatar} alt={employee.name} width="100%" />
      </Styled.Avatar>
      <h2>{employee.name}</h2>
      <p className="about-us__position">{employee.position}</p>
      <q className="about-us__text">{employee.description}</q>
    </Styled.AboutUsContainer>
  );
};

export default AboutUs;
