import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import star from "../../../public/starAbout.png";
import cosmonaut from "../../../public/cosmonaut.png";
import space from "../../../public/spaceAbout.png";
import bottle from "../../../public/illustration-technology.png";

const elements = [star, cosmonaut, space];

const SubtitleBlock = () => {
  return (
    <>
      <Styled.AdminPaddedBlock>
        <Styled.AdminBlockSubTitle>Subtitle</Styled.AdminBlockSubTitle>
        <Styled.AdminEditInfoGridBlock>
          <Styled.AdminInput rows={1} />
        </Styled.AdminEditInfoGridBlock>
        <br />
        <Styled.AdminFlyingElementsBlock>
          {elements.map((i) => (
            <Styled.AdminFlyingElement key={Math.random()}>
              <PhotoBlockDashed photo={i} deleteFlag={true} />
              <br />
              <Styled.AdminInput />
            </Styled.AdminFlyingElement>
          ))}
        </Styled.AdminFlyingElementsBlock>
      </Styled.AdminPaddedBlock>

      <Styled.AdminPaddedBlock>
        <Styled.AdminEditInfoGridBlock>
          <div>
            <Styled.AdminBlockSubTitle children={"Text 2"} />
            <Styled.AdminInput rows={1} />
            <Styled.AdminBlockSubTitle children={"Text 3"} />
            <Styled.AdminInput rows={3} />
            <Styled.AdminBlockSubTitle children={"Text 2"} />
            <Styled.AdminInput rows={1} />
          </div>
          <Styled.AdminTecBottleDiv>
            <PhotoBlockDashed photo={bottle} deleteFlag={true} />
          </Styled.AdminTecBottleDiv>
        </Styled.AdminEditInfoGridBlock>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
