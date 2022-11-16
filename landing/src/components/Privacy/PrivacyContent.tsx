import React from "react";
import parse from "html-react-parser";
import { FaqContainer } from "../Faq/faq.styles";
import * as Styled from "../../styles/PrivacyPolicy/PrivacyPolicy.styled";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IPrivacyPage } from "../../types/Admin/Response.types";
import PrivacyQuestion from "./PrivacyQuestion";

const PrivacyContent = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IPrivacyPage>([
    queryKeys.getPrivacyPage,
  ]);

  return (
    <FaqContainer className="privacy">
      <Styled.Title>Privacy Policy</Styled.Title>
      <Styled.IntroWrapper>{data && parse(data.intro)}</Styled.IntroWrapper>
      <Styled.QuestionsWrapper>
        {data?.content.map((question, idx) => (
          <PrivacyQuestion key={idx} question={question} />
        ))}
      </Styled.QuestionsWrapper>
    </FaqContainer>
  );
};

export default PrivacyContent;
