import React, { useState } from "react";
import { AdminUnauthorizedModal } from "../../../styles/AdminPage";
import CalculatorStepItem from "./CalculatorStepItemForm";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import CalculatorChooseButton from "./CalculatorChooseButton";
import { ICalculatorStep } from "../../../types/Admin/Response.types";

interface ICalculatorStepsFormProps {
  isBlockchain: boolean;
  classicStepsData: ICalculatorStep[];
  blockchainStepsData: ICalculatorStep[];
  classicIsLoading: boolean;
  blockchainIsLoading: boolean;
  classicRefetch: () => void;
  blockchainRefetch: () => void;
  toogleBlockchain: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorStepsForm = ({
  classicStepsData,
  blockchainStepsData,
  classicIsLoading,
  blockchainIsLoading,
  classicRefetch,
  blockchainRefetch,
  isBlockchain,
  toogleBlockchain,
}: ICalculatorStepsFormProps) => {
  const [classicSteps, setClassicSteps] =
    useState<ICalculatorStep[]>(classicStepsData);
  return classicIsLoading || blockchainIsLoading ? (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  ) : classicSteps && blockchainStepsData ? (
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
      {/* {isBlockchain &&
        blockchainStepsData.map((step, idx) => (
          <CalculatorStepItem
            isBlockchain={isBlockchain}
            allSteps={blockchainStepsData}
            step={step}
            key={idx}
            index={idx}
            refetch={blockchainRefetch}
          />
        ))} */}
      {!isBlockchain &&
        classicSteps.map((step, idx) => (
          <CalculatorStepItem
            isBlockchain={isBlockchain}
            allSteps={classicSteps}
            setClassicSteps={setClassicSteps}
            step={step}
            key={idx}
            index={idx}
            refetch={classicRefetch}
          />
        ))}
    </>
  ) : (
    <AdminUnauthorizedModal>Something went wrong :(</AdminUnauthorizedModal>
  );
};

export default CalculatorStepsForm;
