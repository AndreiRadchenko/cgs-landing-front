import React from "react";
import dynamic from "next/dynamic";
import { useFormikContext } from "formik";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";

import * as Styled from "../../../styles/AdminPage";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const FreeServicesBlock = () => {
  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction();

  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);
  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);

  const {
    values: { FreeServicesBlock: data },
    handleChange,
  } = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminFreeServicesWrapper>
      <TextEditor header="Subtitle" name="FreeServicesBlock.title" />
      <Styled.AdminFreeServicesContent>
        {data.items.map((elem, idx) => (
          <Styled.AdminFreeServicesCard key={idx}>
            <PhotoBlockDashed
              style={{
                marginTop: "1.5em",
                marginBottom: "1.59em",
                width: "100%",
                maxHeight: "190px",
              }}
              imageStyle={{ height: "87px" }}
              className="tech"
              deleteFunction={deleteFunc(elem)}
              uploadFunction={uploadFunc(elem)}
              photo={elem.image}
              header="Drop new image here"
              deleteFlag={true}
            />
            <Styled.AdminInput
              value={elem.subtitle}
              onChange={handleChange}
              name={`FreeServicesBlock.items[${idx}].subtitle`}
              style={{
                marginBottom: "0",
              }}
            />
          </Styled.AdminFreeServicesCard>
        ))}
      </Styled.AdminFreeServicesContent>
    </Styled.AdminFreeServicesWrapper>
  );
};

export default FreeServicesBlock;
