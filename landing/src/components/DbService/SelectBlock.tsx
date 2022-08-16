import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/DbService/SelectBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import tempImage from "../../../public/DbService/illServerBg.svg";

const SelectBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>(
    queryKeys.getServiceDbPage
  )?.selectBlock;

  return (
    <Styled.Container>
      <Styled.Subtitle>{data?.subtitle}</Styled.Subtitle>
      <Styled.TextContent>
        <SplitBrackets text={data?.text} />
      </Styled.TextContent>
      {/* <Styled.Image src={data?.image.url} alt="hero image" /> */}
      <Styled.Image src={tempImage.src} alt="hero image" />
    </Styled.Container>
  );
};

export default SelectBlock;
