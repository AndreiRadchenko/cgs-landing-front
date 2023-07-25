import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/MobileService/ProfBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceMobile } from "../../types/Admin/Response.types";

const FooterBlockMobileDev = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.footerBlock;

  return (
    <Styled.ContentContainer>
      <div>
        {data && (
          <FooterTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"biggerFontSize"}
          />
        )}
      </div>
      <Styled.ImageWrapper>
        <Styled.Image src={data?.image?.url} alt="Footer image" />
      </Styled.ImageWrapper>
    </Styled.ContentContainer>
  );
};

export default FooterBlockMobileDev;
