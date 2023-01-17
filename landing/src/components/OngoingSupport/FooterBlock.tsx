import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/OngoingSupport/FooterBlock.styled";
import GetEstimationButton from "../GetEstimationButton";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      {data && (
        <GetEstimationButton
          buttonLink={data?.buttonLink}
          buttonText={data.button}
          withEstimation
          style={{
            padding: "1.117em 3.57em",
            fontSize: "1.125em",
          }}
        />
      )}
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
