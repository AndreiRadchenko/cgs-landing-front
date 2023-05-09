import React from "react";
import { useFormik, useFormikContext } from "formik";
import { useMutation } from "@tanstack/react-query";

import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import SaveBtn from "../Global/SaveBtn";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import * as Styled from "../../../styles/AdminPage";
import {
  ICTAData,
  ICallToActionProps,
  IPortfolioPageData,
} from "../../../types/Admin/AdminPortfolio.types";
import { IImage } from "../../../types/Admin/Admin.types";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";

const CallToAction = ({ initValues }: ICallToActionProps) => {
  const { mutateAsync: updatePortfolioCTA } = useMutation((data: ICTAData) =>
    adminPortfolioService.updatePortfolioCTA(data)
  );

  const formik = useFormik<ICTAData>({
    initialValues: {
      ...initValues,
    },
    onSubmit: (values) => {
      updatePortfolioCTA(values);
    },
  });

  const deleteFunction = useDeleteImageFunction(formik.values, "", false);
  const uploadFunction = useUploadImageFunction(formik.values, "", false);

  const deleteFunc = async () => (await deleteFunction)();
  const uploadFunc = (image: IImage) => uploadFunction(image);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Styled.AdminPageFirstBlockLayout>
        <Styled.AdminPortfolioImage>
          <PhotoBlockDashedHorizontal
            emptyHeader="Drop new image here"
            photo={formik.values.image}
            deleteFunction={deleteFunc}
            uploadFunction={uploadFunc}
          />
        </Styled.AdminPortfolioImage>

        <Styled.AdminPageCTABlock>
          <div>
            <SubHeaderWithInput
              placeholder="Subtitle"
              header="Subtitle"
              inputValue={formik.values.subtitle}
              onChangeFunction={formik.handleChange}
              name="subtitle"
            />
            <SubHeaderWithInput
              placeholder="Text"
              header="Text"
              inputValue={formik.values.text}
              onChangeFunction={formik.handleChange}
              name="text"
            />
            <Styled.AdminPageCTAButton>
              <SubHeaderWithInput
                placeholder="Button"
                header="Button"
                inputValue={formik.values.button}
                onChangeFunction={formik.handleChange}
                name="button"
              />
              <SubHeaderWithInput
                placeholder="add calendly link here"
                header="Button link"
                inputValue={formik.values.buttonLink}
                onChangeFunction={formik.handleChange}
                name="buttonLink"
              />
            </Styled.AdminPageCTAButton>
          </div>
        </Styled.AdminPageCTABlock>
      </Styled.AdminPageFirstBlockLayout>
      <SaveBtn handleClick={formik.handleSubmit} />
    </form>
  );
};

export default CallToAction;
