import React from "react";
import * as Styled from "./technologies.styles";
import { v4 as uuidv4 } from "uuid";
import { TECHNOLOGIES } from "../../../consts/Technologies";
const Technology = ({ technology, index }) => {
  return (
    <React.Fragment>
      {
        <Styled.TechnoContainer key={uuidv4()} className={index}>
          <Styled.DescContainer>
            <h2>{TECHNOLOGIES[index].title}</h2>
            <Styled.HorizontalSep />
            <ul>
              {technology.technologies &&
                technology.technologies.map((skill) => (
                  <li key={uuidv4()}>{skill}</li>
                ))}
            </ul>
          </Styled.DescContainer>
          <div>
            <Styled.TechnoImage
              src={TECHNOLOGIES[index].image}
              alt={technology.type}
            />
          </div>
        </Styled.TechnoContainer>
      }
    </React.Fragment>
  );
};

export default Technology;
