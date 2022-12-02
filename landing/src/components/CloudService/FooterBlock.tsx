import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/CloudService/FooterBlock.styled";
import BookACallButton from "../BookACallButton";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          <SplitBrackets text={data?.subtitle} />
        </Styled.Title>
        {data && (
          <BookACallButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withCalendly
            style={{
              padding: "1.117em 3.862em",
              fontSize: "1.125em",
            }}
          />
        )}
      </Styled.Content>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
