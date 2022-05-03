import React from "react";
import { useFormikContext } from "formik";
import * as Styled from "../../../styles/AdminPage";
import {
  IDataVacancyResponse,
  IPointsData,
} from "../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import PointsTextBlock from "./PointsTextBlock";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface IImageBlock {
  image: { url: string };
  title?: string;
}

interface ITextVacancyBlock {
  titleTextBlock: { title: string; subtitle: string } | { title: string };
  pointsBlockArr: IPointsData[];
  bottomTextBlock: { title: string };
  imageBlock: IImageBlock;
  dark?: boolean;
}
const TextVacancyBlock = ({
  titleTextBlock,
  pointsBlockArr,
  bottomTextBlock,
  imageBlock,
  dark,
}: ITextVacancyBlock) => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataVacancyResponse>();
  console.log(imageBlock);

  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction(imageBlock);

  const handleUpload = (image: IImageBlock) => uploadImageFunction(image);
  const handleDelete = async (imageBlock: IImageBlock) =>
    (await deleteImageFunction)(imageBlock);

  return (
    <Styled.AdminPaddedBlock theme={dark ? "dark" : undefined}>
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminSubTitle>Text</Styled.AdminSubTitle>
          {Object.keys(titleTextBlock).map((i, ind) => {
            return (
              <Styled.AdminInput
                key={`inputContact${ind}`}
                name={titleTextBlock[i]}
                value={titleTextBlock[i]}
                onChange={handleChange}
              />
            );
          })}
          <Styled.AdminSubTitle>Points</Styled.AdminSubTitle>
          <PointsTextBlock
            state={pointsBlockArr}
            onChangeFunction={handleChange}
          />

          <SubHeaderWithInput
            header="Text"
            onChangeFunction={handleChange}
            inputValue={bottomTextBlock.title}
            name={bottomTextBlock.title}
          />
        </div>

        <div>
          <div>
            <PhotoBlockDashed
              photo={imageBlock.image}
              deleteFlag={true}
              uploadFunction={handleUpload}
              deleteFunction={() => handleDelete(imageBlock)}
            />
            {imageBlock.title && (
              <Styled.AdminInput
                name={imageBlock.title}
                value={imageBlock.title}
                onChange={handleChange}
              />
            )}
          </div>
          <br />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default TextVacancyBlock;
