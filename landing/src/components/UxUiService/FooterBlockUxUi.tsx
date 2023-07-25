import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/UxUiService/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IUxUiInterface } from "../../types/Admin/Response.types";

const FooterBlockUxUi = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        {data && (
          <FooterTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"fullWidth"}
          />
        )}
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image?.url} alt="Footer UxUi image" />
    </Styled.Container>
  );
};

export default FooterBlockUxUi;
