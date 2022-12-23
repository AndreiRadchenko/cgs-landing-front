import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import {
  Loader,
  LoaderWrapper,
} from "../../styles/Calculator/CalculatorComponent.styled";
import { ICalculator } from "../../types/Admin/Response.types";
import CalculatorModalComponent from "./CalculatorPagerModalComponent";
import CalculatorTitleField from "./CalculatorTitleField";

interface ICalculatorQuittingPager {
  handleClose: () => void;
  handleQuitClick: () => void;
  handleContinueClick: () => void;
}

const CalculatorQuittingPager = ({
  handleClose,
  handleContinueClick,
  handleQuitClick,
}: ICalculatorQuittingPager) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { width } = useWindowDimension();

  return (
    (width && (
      <CalculatorModalComponent
        onClose={handleClose}
        buttonText="< continue >"
        onButtonClick={handleContinueClick}
        onQuitButtonClick={handleQuitClick}
        mobile={width < 768}
        isQuiting
      >
        {data ? (
          <CalculatorTitleField className="quit" text={data?.popUpMessage} />
        ) : (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </CalculatorModalComponent>
    )) ||
    null
  );
};

export default CalculatorQuittingPager;
