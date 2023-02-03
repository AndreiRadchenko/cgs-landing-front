import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/FooterBlock.styled";
import GetEstimationButton from "../GetEstimationButton";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      {data && (
        <GetEstimationButton
          buttonLink={data?.buttonLink}
          buttonText={data.button}
          withEstimation
          style={{ padding: "1.117em 2.17em", fontSize: "1.125em" }}
        />
      )}
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
