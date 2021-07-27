import React from "react";
import * as Styled from "./technologies.styles";
import { v4 as uuidv4 } from "uuid";
import { TECHNOLOGIES } from "../../../consts/Technologies";

const Technology = ({ technology, number }) => {
  return (
    <Styled.TechnoContainer>
      <Styled.DescContainer>
        <h2>{TECHNOLOGIES[technology.type].title}</h2>
        <Styled.HorizontalSep />
        <ul>
          {technology?.technologies?.map((skill) => (
            <li key={uuidv4()}>{skill}</li>
          ))}
        </ul>
      </Styled.DescContainer>
      <div>
        <Styled.TechnoImage
          src={TECHNOLOGIES[technology.type].image}
          alt={technology?.type}
          number={number}
          loading="lazy"        
        />
      </div>
    </Styled.TechnoContainer>
  );
};

export default Technology;
