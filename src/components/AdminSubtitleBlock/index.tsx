import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ISubtitle } from "../../types/Admin/Response.types";
import AdminInputWithImage from "../AdminPageGlobal/AdminInputWithImage";
import { FieldArray } from "formik";
import AdminSubtitleFlyingList from "./AdminSubtitleFlyingList";

const SubtitleBlock = ({ state, onChangeFunction }: { state: ISubtitle, onChangeFunction: any }) => {
  return (
    <>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHalfGrid>
          <div>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={state.title}
              name="SubtitleBlock.title"
              onChangeFunction={onChangeFunction}
            />
          </div>
        </Styled.AdminHalfGrid>
        <br />
        <FieldArray name="SubtitleBlock.elements">
          {() => <AdminSubtitleFlyingList state={state} onChangeFunction={onChangeFunction} />}
        </FieldArray>
      </Styled.AdminPaddedBlock>

      <Styled.AdminPaddedBlock>
        <Styled.AdminHalfGrid>
          <div>
            <SubHeaderWithInput
              header="Text 2"
              name="SubtitleBlock.firstText2"
              inputValue={state.firstText2}
              onChangeFunction={onChangeFunction}
            />
            <SubHeaderWithInput
              header="Text 3"
              name="SubtitleBlock.text3"
              inputValue={state.text3}
              onChangeFunction={onChangeFunction}
            />
            <SubHeaderWithInput
              header="Text 2"
              name="SubtitleBlock.secondText2"
              inputValue={state.secondText2}
              onChangeFunction={onChangeFunction}
            />
          </div>
          <Styled.AdminTecBottleDiv>
            <PhotoBlockDashed photo={state.image} deleteFlag={true} />
          </Styled.AdminTecBottleDiv>
        </Styled.AdminHalfGrid>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
