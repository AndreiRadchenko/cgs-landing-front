import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/MobileService/HeadBlock";

import { IServiceMobile } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const HeadBlockMobileDev = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentContainer>
        {data && (
          <HeaderTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
          />
        )}
      </Styled.ContentContainer>
      <Styled.Telephone src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlockMobileDev;
