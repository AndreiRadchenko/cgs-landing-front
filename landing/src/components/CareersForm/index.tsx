import React, { FC, useState } from "react";
import * as Styled from "./CareersForm.styled";
import Form from "./Form/index";
import { SplitBrackets } from "../../utils/splitBrackets";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import BlogDropdown from "../Blog/BlogDropdown";

interface ICareersForm {
  positions: string[];
  data?: IDataCareersResponse;
}

const CareersForm: FC<ICareersForm> = ({ positions = [], data }) => {
  const [vacancy, setVacancy] = useState("");

  return (
    <>
      <Styled.FormContainter>
        <Styled.PositionSelect>
          <BlogDropdown
            filter={vacancy}
            setFilter={setVacancy}
            tags={positions}
            dropdownName="Position"
          />
        </Styled.PositionSelect>
        <Form positions={positions} data={data?.form} />
      </Styled.FormContainter>
    </>
  );
};

export default CareersForm;
