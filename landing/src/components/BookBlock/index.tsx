import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import {
  Subtitle,
  FooterButtonWrapper,
  FooterLinkButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";

const BookBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.BookCallBlock;

  return (
    <>
      <Subtitle className="footer">
        Do you want to turn your ideas into{" "}
        <span className="blue">tech solutions</span>{" "}
        <FooterButtonWrapper>
          <FooterLinkButton
            target="_blank"
            rel="noopener noreferrer"
            href={data && data.buttonLink && recoverLink(data?.buttonLink)}
          >
            {data?.button}
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </FooterLinkButton>
        </FooterButtonWrapper>
      </Subtitle>
    </>
  );
};

export default BookBlock;
