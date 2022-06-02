import React, { useState } from "react";
import * as Styles from "./YesBegin.styled";
import BaseButton from "../BaseButton/BaseButton";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import ImagePreview from "../Image/ImagePreview";
import { IYesBeginProps } from "./types";
import { IDataResponse } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";

const YesBegin = ({ clickHandler }: IYesBeginProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.BuildRocketBlock;

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 8000);
    setTimeout(() => clickHandler(), 4000);
  };

  const { subtitle, text, button } = { ...data };

  return (
    <Styles.Container>
      <Styles.Title>
        <SplitBrackets text={subtitle} />
      </Styles.Title>
      <Styles.SubTitle>
        <SplitBrackets text={text} />
      </Styles.SubTitle>
      <Styles.ButtonContainer>
        <BaseButton
          onClick={isClicked ? undefined : handleClick}
          className="begin"
        >
          <ButtonTextWrapper fontSize="1.8em">{button}</ButtonTextWrapper>
        </BaseButton>
      </Styles.ButtonContainer>
      <Styles.Circle isClicked={isClicked}>
        <Styles.ImageContainer isClicked={isClicked}>
          <Styles.ImageRelativeWrapper>
            <ImagePreview src="/rocket.png" layout="fill" alt="rocket" />
          </Styles.ImageRelativeWrapper>
        </Styles.ImageContainer>
      </Styles.Circle>
    </Styles.Container>
  );
};

export default YesBegin;
