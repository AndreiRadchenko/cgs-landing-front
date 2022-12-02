import React from "react";
import * as Styled from "../../styles/MobileService/HeadBlock";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import TextTypingAnimation from "../Typewrite";
import BookACallButton from "../BookACallButton";
const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
        {data && (
          <BookACallButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withCalendly
            style={{
              padding: "1.195em 2.805em",
              fontSize: "1.54em",
            }}
          />
        )}
      </Styled.ContentContainer>
      <Styled.Telephone src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
