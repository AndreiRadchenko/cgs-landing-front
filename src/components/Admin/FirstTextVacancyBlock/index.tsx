import React from "react";
import { useFormikContext } from "formik";
import * as Styled from "../../../styles/AdminPage";
import { IDataVacancyResponse } from "../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import PointsTextBlock from "./PointsTextBlock";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import TitleBlock from "./TitleBlock";

interface IImageBlock {
  image: { url: string };
  title?: string;
}

interface ITextVacancyBlock {
  name: string;
  dark?: boolean;
}

const TextVacancyBlock = ({ name, dark }: ITextVacancyBlock) => {
  const { values, handleChange } = useFormikContext<IDataVacancyResponse>();
  let imageBlock: IImageBlock,
    pointsBlockArr,
    titleTextBlock,
    bottomTextBlock,
    bottomPhotoText;
  if (name === "info") {
    imageBlock = values.info.worker;
    pointsBlockArr = values.info.points;
    titleTextBlock = values.info.text;
    bottomTextBlock = values.info.text2;
    bottomPhotoText = values.info.worker.title;
  } else {
    imageBlock = values.offer;
    pointsBlockArr = values.offer.points;
    titleTextBlock = { title: values.offer.title };
    bottomTextBlock = values.offer.text;
  }

  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction(imageBlock);

  const handleUpload = (image: IImageBlock) => uploadImageFunction(image);
  const handleDelete = async (imageBlock: IImageBlock) =>
    (await deleteImageFunction)(imageBlock);

  return (
    <Styled.AdminPaddedBlock theme={dark ? "dark" : undefined}>
      <Styled.AdminHalfGrid>
        <Styled.AdminBlockWrapper>
          <Styled.AdminSubTitle>Text</Styled.AdminSubTitle>
          <TitleBlock
            titleTextBlock={titleTextBlock}
            name={name}
            handleChange={handleChange}
          />
          <Styled.AdminSubTitle>Points</Styled.AdminSubTitle>
          <PointsTextBlock
            state={pointsBlockArr}
            name={name}
            onChangeFunction={handleChange}
          />

          <SubHeaderWithInput
            header="Text"
            onChangeFunction={handleChange}
            inputValue={bottomTextBlock.title}
            name={`${name}.${name === "info" ? "text2." : "text."}title`}
            minRows={4}
          />
        </Styled.AdminBlockWrapper>

        <Styled.AdminBlockWrapper>
          <div>
            <PhotoBlockDashed
              photo={imageBlock.image}
              deleteFlag={true}
              uploadFunction={handleUpload}
              deleteFunction={() => handleDelete(imageBlock)}
            />
            {bottomPhotoText && (
              <Styled.AdminInput
                name={`${name}.worker.title`}
                value={bottomPhotoText}
                onChange={handleChange}
              />
            )}
          </div>
          <br />
        </Styled.AdminBlockWrapper>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default TextVacancyBlock;
