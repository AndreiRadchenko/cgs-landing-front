import React from 'react';
import * as Styled from './technologies.styles';
import { v4 as uuidv4 } from 'uuid';

const Technology = ({ technology, index }) => {
  return (
    <>
      {
        <Styled.TechnoContainer key={uuidv4()} className={index}>
          <Styled.DescContainer>
            <h2>{technology.type}</h2>
            <Styled.HorizontalSep />
            <ul>
              {technology.technologies &&
                technology.technologies.map((skill) => (
                  <li key={uuidv4()}>{skill}</li>
                ))}
            </ul>
          </Styled.DescContainer>
          <div>
            <img src={technology.image} alt={technology.type} />
          </div>
        </Styled.TechnoContainer>
      }
    </>
  );
};

export default Technology;
