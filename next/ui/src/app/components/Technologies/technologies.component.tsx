import React from "react";
import * as Styled from "./technologies.styles";
import { v4 as uuidv4 } from "uuid";

const Technologies = ({ technologies }) => {
  return (
    <Styled.Wrapper>
      {technologies &&
        technologies.map((item, index) => (
          <Styled.TechnoContainer key={uuidv4()} className={index}>
            <Styled.DescContainer>
              <h2>{item.type}</h2>
              <Styled.HorizontalSep />
              <ul>
                {item.technologies &&
                  item.technologies.map((skill) => (
                    <li key={uuidv4()}>{skill}</li>
                  ))}
              </ul>
            </Styled.DescContainer>
            <div>
              <img src={item.image} alt={item.type} />
            </div>
          </Styled.TechnoContainer>
        ))}
      <Styled.Dots src={"/dots.svg"} />
      <Styled.DotsSecond src={"/dots.svg"} />
    </Styled.Wrapper>
  );
};

export default Technologies;
