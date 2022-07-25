import React from "react";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { IDataResponse, ITech } from "../../../types/Admin/Response.types";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";
import {
  AddButton,
  ButtonsContainer,
  DeleteButton,
} from "../FAQ/adminFaq.styled";
import { useFormikContext } from "formik";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";

interface ITechProps extends IPropsWithImage {
  info: ITech;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  ind: number;
  item: "item1" | "item2" | "item3" | "item4";
}

const AdminTech = ({
  info,
  onChangeFunction,
  ind,
  item,
  uploadFunction,
  deleteFunction,
}: ITechProps) => {
  const queryClient = useQueryClient();
  const { values, handleSubmit } = useFormikContext<IDataResponse>();
  const addQuestion = (index: number) => {
    values.TechnologyBlock[item].stack.splice(index + 1, 0, "");
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.getFullHomePage);
  };

  const deleteQuestion = (index: number) => {
    values.TechnologyBlock[item].stack.splice(index, 1);
    handleSubmit();
    queryClient.invalidateQueries(queryKeys.getFullHomePage);
  };
  const uploadFunc = (image: any) => uploadFunction(image);
  return (
    <div>
      <Styled.AdminTechGrid>
        <div>
          <SubHeaderWithInput
            header={`${ind} Card subtitle`}
            name={`TechnologyBlock.${item}.category`}
            inputValue={info.category}
            onChangeFunction={onChangeFunction}
          />
          <SubHeaderWithInput
            header="Text"
            name={`TechnologyBlock.${item}.text`}
            inputValue={info.text}
            onChangeFunction={onChangeFunction}
          />
        </div>
        <Styled.AdminTechWrapper>
          <PhotoBlockDashed
            className="blog"
            deleteFunction={deleteFunction}
            uploadFunction={uploadFunc}
            photo={info.image}
            header="+ Add image here"
            deleteFlag={true}
          />
        </Styled.AdminTechWrapper>
      </Styled.AdminTechGrid>
      <Styled.AdminSubTitle>Stack</Styled.AdminSubTitle>
      <Styled.AdminHalfGrid>
        {(info.stack.length > 0 &&
          info.stack.map((el, idx) => (
            <div key={idx}>
              <Styled.AdminInput
                onChange={onChangeFunction}
                name={`TechnologyBlock.${item}.stack[${idx}]`}
                value={el}
              />
              <ButtonsContainer className="about">
                <AddButton onClick={() => addQuestion(idx)}>
                  [ + add next ]
                </AddButton>
                <DeleteButton onClick={() => deleteQuestion(idx)}>
                  delete point
                </DeleteButton>
              </ButtonsContainer>
            </div>
          ))) || (
          <ButtonsContainer className="about">
            <AddButton onClick={() => addQuestion(0)}>
              [ + add next question ]
            </AddButton>
          </ButtonsContainer>
        )}
      </Styled.AdminHalfGrid>
    </div>
  );
};

export default AdminTech;
