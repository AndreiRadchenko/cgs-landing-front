import React from "react";
import * as StyledAboutUs from "../../styles/AboutUs.styled";
import * as StyledThisComp from "../../styles/Technologies.styled";
import TechnologyCategory from "./TechnologyCategory";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";

const Technologies = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.TechnologyBlock;

  return (
    <StyledThisComp.TechnologyContainer>
      <StyledAboutUs.AboutUsTitle>
        <SplitBrackets text={data?.subtitle} />
      </StyledAboutUs.AboutUsTitle>

      <StyledThisComp.TechnologyRow>
        {data?.techs.map(({ image, subtitle1, text }) => {
          return (
            <TechnologyCategory
              key={subtitle1}
              url={image.url}
              title={subtitle1}
              technologies={text.split(/\r?\n/)}
            />
          );
        })}
      </StyledThisComp.TechnologyRow>
    </StyledThisComp.TechnologyContainer>
  );
};

export default Technologies;
