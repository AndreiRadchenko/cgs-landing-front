import React from "react";
import { useFormikContext } from "formik";
import SubtitleBlock from "./SubtitleBlock";

import SaveBtn from "../Global/SaveBtn";

import * as Styled from "../../../styles/AdminPage";
import { IPortfolioPageData } from "../../../types/Admin/AdminPortfolio.types";

const TitleBlock = () => {
  const { handleSubmit } = useFormikContext<IPortfolioPageData>();

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <Styled.AdminPageFirstBlockLayout>
        <div style={{ marginBottom: "30px" }}>
          <SubtitleBlock />
        </div>
      </Styled.AdminPageFirstBlockLayout>
      <SaveBtn handleClick={onSubmit} />
    </div>
  );
};

export default TitleBlock;
