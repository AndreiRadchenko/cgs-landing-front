import React from "react";
import { useQueryClient } from "react-query";
import bgImage from "../../../public/WebService/secondBlockBg.svg";
import bgMobileImage from "../../../public/WebService/web-development-mobile.svg";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebService/WebPros.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";

const WebPros = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>(
    queryKeys.getServiceWebPage
  )?.comparisonBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        {data &&
          Object.values(data).map((category, idx) => (
            <div key={`${category} ${idx}`}>
              <Styled.BgMobileImage
                src={bgMobileImage.src}
                alt="mobile image"
              />
              <Styled.CategorySubtitle>
                {category.subtitle}
              </Styled.CategorySubtitle>
              {category.list.map((el, index) => (
                <Styled.CategoryListItem key={`list item ${index}`}>
                  {el}
                </Styled.CategoryListItem>
              ))}
            </div>
          ))}
      </Styled.ContentWrapper>
      <Styled.BgImage src={bgImage.src} alt="second block image" />
    </Styled.Container>
  );
};

export default WebPros;
