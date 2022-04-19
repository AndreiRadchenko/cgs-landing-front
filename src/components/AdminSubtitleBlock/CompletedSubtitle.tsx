import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import star from "../../../public/starAbout.png";
import cosmonaut from "../../../public/cosmonaut.png";
import space from "../../../public/spaceAbout.png";
import bottle from "../../../public/illustration-technology.png";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ISubtitle } from "../../types/Admin/Admin.types";
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
          <AdminInputWithImage photo={star} inputValue={state.elements[0]} onChangeFunction={() => {}} />
          <AdminInputWithImage photo={cosmonaut} inputValue={state.elements[1]} onChangeFunction={() => {}} />
          <AdminInputWithImage photo={space} inputValue={state.elements[2]} onChangeFunction={() => {}} />
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
            <PhotoBlockDashed photo={bottle} deleteFlag={true} />
          </Styled.AdminTecBottleDiv>
        </Styled.AdminEditInfoGridBlock>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
