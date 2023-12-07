import React from "react";
import { useFormikContext, FieldArray } from "formik";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import PhotoBlockAddRemove from "../Global/PhotoBlockAddRemove";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/AdminContact.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { IImage } from "../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";

const LocationBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  const { map, pointer, address } = values.location ?? {
    address: "",
    map: { image: { url: "" } },
    pointer: { image: { url: "" } },
  };

  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const uploadMap = (image: IImage) =>
    uploadImageFunction(image, values.location.map);

  const deleteMap = async () =>
    (await deleteImageFunction)(values.location.map);

  const uploadPointer = (image: IImage) =>
    uploadImageFunction(image, values.location.pointer);

  const deletePointer = async () =>
    (await deleteImageFunction)(values.location.pointer);

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <Styles.LocationWrapper>
        <div>
          <Styled.AdminSubTitle>Map 1440 x 305</Styled.AdminSubTitle>
          <PhotoBlockAddRemove
            photo={map.image}
            deleteFlag={true}
            uploadFunction={uploadMap}
            deleteFunction={deleteMap}
          />
        </div>
        <Styles.LocationTextlItem>
          <div>
            <Styled.AdminSubTitle> Pointer image</Styled.AdminSubTitle>
            <PhotoBlockAddRemove
              style={{ height: "128px", width: "128px" }}
              imageStyle={{ height: "40px", width: "40px" }}
              photo={pointer.image}
              deleteFlag={true}
              header="add image"
              uploadFunction={uploadPointer}
              deleteFunction={deletePointer}
            />
          </div>
          <SubHeaderWithInput
            inputStyle={{ marginBottom: "0" }}
            header="Location"
            width="100%"
            placeholder="Address"
            inputValue={address}
            onChangeFunction={handleChange}
            name={"location.address"}
          />
        </Styles.LocationTextlItem>
      </Styles.LocationWrapper>
      <div>
        <BlackButton
          size={"1.5em"}
          padding={"1.11em 3em"}
          style={{ marginTop: "1.33em" }}
          onClick={handleClick}
        >
          Save Changes
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </Styled.ContentWrapper>
  );
};

export default LocationBlock;
