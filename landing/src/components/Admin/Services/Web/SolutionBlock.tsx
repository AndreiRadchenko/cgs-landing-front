import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import HistoryLink from "../../HistoryLink";

import { IServiceWeb } from "../../../../types/Admin/Response.types";
import { queryKeys } from "../../../../consts/queryKeys";

const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const SolutionBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.solutionBlock;

  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceWeb>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.solutionBlock.subtitle}
            onChangeFunction={handleChange}
            name="solutionBlock.subtitle"
            width="335px"
          />
          <TextEditor header="Text" name="solutionBlock.text" />
        </div>
      </AdminHalfGrid>
      {data?.lastModified && (
        <HistoryLink
          sectionName="Solution Block"
          lastModified={data?.lastModified}
          link={"/history/web/solutionBlock"}
        />
      )}
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
    </AdminPaddedBlock>
  );
};

export default SolutionBlock;
