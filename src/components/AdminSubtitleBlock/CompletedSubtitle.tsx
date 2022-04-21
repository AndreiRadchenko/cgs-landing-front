import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ISubtitle } from "../../types/Admin/Response.types";
import AdminInputWithImage from "../AdminPageGlobal/AdminInputWithImage";

const SubtitleBlock = ({state}: {state: ISubtitle}) => {
  return (
    <>
      <Styled.AdminPaddedBlock>
        <Styled.AdminEditInfoGridBlock>
          <div>
            <SubHeaderWithInput header="Subtitle" inputValue={state.title} onChangeFunction={() => {}} />
          </div>
        </Styled.AdminEditInfoGridBlock>
        <br />
        <Styled.AdminFlyingElementsBlock>
          {state.elements.map(i => {
            return <AdminInputWithImage key={Math.random()} photo={i.image} inputValue={i.text} onChangeFunction={() => {}} />
          })}
        </Styled.AdminFlyingElementsBlock>
      </Styled.AdminPaddedBlock>

      <Styled.AdminPaddedBlock>
        <Styled.AdminEditInfoGridBlock>
          <div>
            <SubHeaderWithInput header="Text 2" inputValue={state.firstText2} onChangeFunction={() => {}} />
            <SubHeaderWithInput header="Text 3" inputValue={state.text3} onChangeFunction={() => {}} />
            <SubHeaderWithInput header="Text 2" inputValue={state.secondText2} onChangeFunction={() => {}} />
          </div>
          <Styled.AdminTecBottleDiv>
            <PhotoBlockDashed photo={state.image} deleteFlag={true} />
          </Styled.AdminTecBottleDiv>
        </Styled.AdminEditInfoGridBlock>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
