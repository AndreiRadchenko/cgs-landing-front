import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/UxUiService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import BookACallButton from "../BookACallButton";

const HeadBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
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
              padding: "1.117em 2.72em",
              fontSize: "1.125em",
            }}
          />
        )}
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
