import * as StyledThisComp from "../../styles/Body.styled";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import backImg from "../../../public/back-button.png";
import ImagePreview from "../Image/ImagePreview";
import { IWelcomePageProps } from "./types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";

const WelcomePage = ({ clickHandler, setIsClicked }: IWelcomePageProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.EditInformationBlock;

  const handleClick = () => {
    setIsClicked(true);
    clickHandler();
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <>
      <StyledThisComp.BodyDescriptionWrapper>
        <StyledThisComp.BodyTitle>
          <SplitBrackets text={data?.title} />
        </StyledThisComp.BodyTitle>
        {/* <StyledThisComp.BodySubtitle>
          <SplitBrackets text={data?.text} />
        </StyledThisComp.BodySubtitle>

        <StyledThisComp.CodeDescription>
          {"//"}
          <SplitBrackets text={data?.text2} />
        </StyledThisComp.CodeDescription> */}

        <BaseButton
          onClick={handleClick}
          src={backImg}
          mobileWidth={"11rem"}
          className="estimation"
        >
          <ButtonTextWrapper fontSize={"1.4em"}>
            {data?.button}
          </ButtonTextWrapper>
        </BaseButton>

        <StyledThisComp.WrapperBgImg>
          {/* <ImagePreview
            src={data?.image.url}
            width={"1000px"}
            height={"800px"}
            alt={"main logo big image"}
            priority={true}
          /> */}
        </StyledThisComp.WrapperBgImg>
      </StyledThisComp.BodyDescriptionWrapper>
    </>
  );
};

export default WelcomePage;
