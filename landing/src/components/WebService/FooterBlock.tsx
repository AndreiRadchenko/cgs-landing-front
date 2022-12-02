import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/WebService/FooterBlock.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import BookACallButton from "../BookACallButton";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <VisibleSubtitle>{data?.subtitle}</VisibleSubtitle>
        </Styled.SubtitleWrapper>
        {data && (
          <BookACallButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withCalendly
            style={{ padding: "1.117em 3.755em", fontSize: "1.125em" }}
          />
        )}
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
