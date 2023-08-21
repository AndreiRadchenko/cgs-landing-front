import { useFormikContext } from "formik";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminSubtitleGrid,
} from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import HistoryLink from "../../HistoryLink";

import { IServiceWeb } from "../../../../types/Admin/Response.types";
import { queryKeys } from "../../../../consts/queryKeys";

const ComparisonBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.comparisonBlock;

  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceWeb>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark">
      <AdminSubtitleGrid>
        <div>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.comparisonBlock.desktopColumn.subtitle}
              onChangeFunction={handleChange}
              name="comparisonBlock.desktopColumn.subtitle"
            />
          </AdminHalfGrid>
          {values.comparisonBlock.desktopColumn.list.map((el, idx) => (
            <AdminInput
              key={`comparison block desktop ${idx}`}
              value={el}
              onChange={handleChange}
              name={`comparisonBlock.desktopColumn.list[${idx}]`}
            />
          ))}
        </div>
        <div>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.comparisonBlock.webColumn.subtitle}
              onChangeFunction={handleChange}
              name="comparisonBlock.webColumn.subtitle"
            />
          </AdminHalfGrid>
          {values.comparisonBlock.webColumn.list.map((el, idx) => (
            <AdminInput
              key={`comparison block web ${idx}`}
              value={el}
              onChange={handleChange}
              name={`comparisonBlock.webColumn.list[${idx}]`}
            />
          ))}
        </div>
      </AdminSubtitleGrid>
      {data?.lastModified && (
        <HistoryLink
          sectionName="Comparition"
          lastModified={data?.lastModified}
          link={"/history/web/comparisonBlock"}
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

export default ComparisonBlock;
