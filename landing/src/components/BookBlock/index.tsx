import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { useWindowDimension } from "../../hooks/useWindowDimension";
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
  const { width } = useWindowDimension();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.BookCallBlock;

  return (
    <>
      <Subtitle className="footer">
        Do you want to turn your ideas into&nbsp;
        <span className="blue">
          {(typeof window !== "undefined" && (
            <ScrambleText
              text="tech solutions"
              topOffset={
                width && width < 768
                  ? -2.5 * window.innerHeight
                  : -5 * window.innerHeight
              }
            />
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
