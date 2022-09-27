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
import ScrambleText from "../HomePage/ScrambleText";

const BookBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.BookCallBlock;

  return (
    <>
      <Subtitle className="footer">
        Do you want <br /> to turn your <br /> ideas into&nbsp;
        <br />
        <span className="blue solutions">
          {(typeof window !== "undefined" && (
            <ScrambleText text="tech solutions" />
          )) || <span className="blue">tech solutions</span>}
        </span>
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
