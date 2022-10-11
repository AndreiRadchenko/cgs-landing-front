import React from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import * as Styled from "./NotFoundPage.styled";

const NotFoundContent = () => {
  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());
  return (
    <Styled.NotFoundContainer>
      <Styled.ImageWrapper>
        <Styled.Image src={"/NotFoundPage/tetris.svg"} />
      </Styled.ImageWrapper>

      <Styled.Description>
        <Styled.Title>
          The page you`re
          <br />
          looking for <br />
          does not exist
        </Styled.Title>
        <BlackButton
          target={"_blank"}
          rel="noopener noreferrer"
          size={"1.55em"}
          padding={"18px 35px"}
          href={"/"}
        >
          Back Home
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.Description>
    </Styled.NotFoundContainer>
  );
};

export default NotFoundContent;
