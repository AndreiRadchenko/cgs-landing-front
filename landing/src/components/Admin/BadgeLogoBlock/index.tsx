import React from "react";
import { useFormikContext } from "formik";
// import dynamic from "next/dynamic";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import TextEditor from "../../TextEditor/TextEditor";

import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import removeLink from "../../../../public/linkIcon.svg";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

// const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
//   ssr: false,
// });

const BadgeLogoBlock = () => {
  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction();

  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);
  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);

  const {
    values: { BadgesBlock: data },
    handleChange,
  } = useFormikContext<IDataResponse>();

  const clearInput = (index: number) => {
    handleChange({
      target: {
        name: `BadgesBlock.badges[${index}].link`,
        value: "",
      },
    });
  };

  return (
    <Styled.AdminFreeServicesWrapper>
      <Styled.AdminSubTitle>Badges</Styled.AdminSubTitle>
      <Styled.AdminFreeServicesContent>
        {data.badges.map((elem, idx) => (
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
              deleteFlag={true}
            />
            <Styled.AdminInput
              value={elem.link}
              onChange={handleChange}
              name={`BadgesBlock.badges[${idx}].link`}
              style={{
                marginBottom: "0",
              }}
              className="badgesInput"
            />
            <Styled.AdminRemoveLinkImage
              src={removeLink.src}
              onClick={() => clearInput(idx)}
            />
          </Styled.AdminFreeServicesCard>
        ))}
      </Styled.AdminFreeServicesContent>
      <Styled.AdminSubTitle style={{ marginTop: "22px" }}>
        Logos
      </Styled.AdminSubTitle>
      <Styled.AdminFreeServicesContent>
        {data.logos.map((elem, idx) => (
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
              deleteFlag={true}
            />
          </Styled.AdminFreeServicesCard>
        ))}
      </Styled.AdminFreeServicesContent>

      {/* <Styled.AdminCalendlyPopup>
        <Styled.AdminCalendlyPopupDescription>
          <TextEditor
            header="Twisted block"
            name="BadgesBlock.twistedBlock"
            props={{
              defaultValue: data.twistedBlock || "",
            }}
          />
        </Styled.AdminCalendlyPopupDescription>
      </Styled.AdminCalendlyPopup> */}

      <div style={{ maxWidth: "50%" }}>
        <h1>Projector block</h1>
        <SubHeaderWithInput
          inputValue={data.projectorBlock.title}
          onChangeFunction={handleChange}
          name="BadgesBlock.projectorBlock.title"
          header="Title"
        />
        <SubHeaderWithInput
          inputValue={data.projectorBlock.text}
          onChangeFunction={handleChange}
          name="BadgesBlock.projectorBlock.text"
          header="Text"
        />
        <SubHeaderWithInput
          inputValue={data.projectorBlock.button}
          onChangeFunction={handleChange}
          name="BadgesBlock.projectorBlock.button"
          header="Button"
        />
        <SubHeaderWithInput
          inputValue={data.projectorBlock.buttonLink}
          onChangeFunction={handleChange}
          name="BadgesBlock.projectorBlock.buttonLink"
          header="Button Link"
        />
      </div>
    </Styled.AdminFreeServicesWrapper>
  );
};

export default BadgeLogoBlock;
