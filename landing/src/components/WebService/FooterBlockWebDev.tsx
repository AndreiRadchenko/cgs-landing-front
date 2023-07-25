import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/WebService/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceWeb } from "../../types/Admin/Response.types";

const FooterBlockWebDev = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        {data && (
          <FooterTextBlockServices
            title={data.subtitle}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
          />
        )}
      </Styled.TextContent>
      <Styled.Image src={data?.image?.url} alt="Footer WebService image" />
    </Styled.Container>
  );
};

export default FooterBlockWebDev;
