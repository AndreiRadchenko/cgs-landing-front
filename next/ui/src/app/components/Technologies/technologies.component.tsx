import React from 'react';
import * as Styled from './technologies.styles';
import { v4 as uuidv4 } from 'uuid';
const Technologies = [
  {
    title: 'Web',
    image: '/web.svg',
  },
  {
    title: 'Mobile',
    image: '/mobile.svg',
  },
  {
    title: 'Backend',
    image: '/backend.svg',
  },
  {
    title: 'UI/UX',
    image: '/ui-ux.svg',
  },
];
const Technology = ({ technology, index }) => {
  return (
    <React.Fragment>
      {
        <Styled.TechnoContainer key={uuidv4()} className={index}>
          <Styled.DescContainer>
            <h2>{Technologies[index].title}</h2>
            <Styled.HorizontalSep />
            <ul>
              {technology.technologies &&
                technology.technologies.map((skill) => (
                  <li key={uuidv4()}>{skill}</li>
                ))}
            </ul>
          </Styled.DescContainer>
          <div>
            <img src={Technologies[index].image} alt={technology.type} />
          </div>
        </Styled.TechnoContainer>
      }
    </React.Fragment>
  );
};

export default Technology;
