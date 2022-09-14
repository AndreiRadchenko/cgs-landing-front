import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/AboutBlock.styled";
import BlockchainAbout from "../../../public/BlockchainServicePage/BlockchainAbout.svg";
import Image from "next/image";

const AboutBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>(
    queryKeys.getServiceBlockchainPage
  )?.aboutBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Image src={BlockchainAbout} alt="blockchain about" />
    </Styled.Container>
  );
};

export default AboutBlock;
