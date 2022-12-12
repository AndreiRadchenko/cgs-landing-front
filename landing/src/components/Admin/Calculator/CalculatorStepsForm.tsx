import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { AdminUnauthorizedModal } from "../../../styles/AdminPage";
import CalculatorStepItem from "./CalculatorStepItemForm";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import CalculatorChooseButton from "./CalculatorChooseButton";

const CalculatorStepsForm = () => {
  const [isBlockchain, toogleBlockchain] = useState<boolean>(false);
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getCalculatorClassicSteps],
    () => adminCalculatorService.getCalculatorClassicSteps()
  );

  const {
    data: blockchainData,
    isLoading: blockchainIsLoading,
    refetch: blockchainIsRefetch,
  } = useQuery([queryKeys.getCalculatorBlockchainSteps], () =>
    adminCalculatorService.getCalculatorBlockchainSteps()
  );

  return isLoading || blockchainIsLoading ? (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  ) : data && blockchainData ? (
    <>
      <Styled.ChooseTitle>Choose:</Styled.ChooseTitle>
      <Styled.ChooseButtonsWrapper>
        <CalculatorChooseButton
          header="classic development"
          active={!isBlockchain}
          setActive={toogleBlockchain}
        />
        <CalculatorChooseButton
          header="blockchain development"
          active={isBlockchain}
          setActive={toogleBlockchain}
        />
      </Styled.ChooseButtonsWrapper>
      {isBlockchain &&
        blockchainData.map(
          (step, idx) =>
            !blockchainData.find(
              (el) => el.tieUpSteps[0] && el.tieUpSteps[0].number === idx
            ) && (
              <CalculatorStepItem
                isBlockchain={isBlockchain}
                allSteps={blockchainData}
                step={step}
                key={idx}
                index={idx}
                refetch={blockchainIsRefetch}
              />
            )
        )}
      {!isBlockchain &&
        data.map(
          (step, idx) =>
            !data.find(
              (el) => el.tieUpSteps[0] && el.tieUpSteps[0].number === idx
            ) && (
              <CalculatorStepItem
                isBlockchain={isBlockchain}
                allSteps={data}
                step={step}
                key={idx}
                index={idx}
                refetch={refetch}
              />
            )
        )}
    </>
  ) : (
    <AdminUnauthorizedModal>Something went wrong :(</AdminUnauthorizedModal>
  );
};

export default CalculatorStepsForm;
