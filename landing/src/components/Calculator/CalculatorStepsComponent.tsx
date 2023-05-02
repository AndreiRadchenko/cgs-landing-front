import React, { Children, ReactNode } from "react";
import CalculatorStepsFormContent from "./CalculatorStepsFormContent";
import CalculatorQuittingPager from "./CalculatorQuttingPager";
import { ICalendlyUserData } from "../HomePage/Content";

interface ICalculatorStepsComponentProps {
  step: number;
  previousSteps: number[];
  stepsCount: number;
  handleClose: () => void;
  handleQuit: () => void;
  setIsChosen: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPreviousSteps: React.Dispatch<React.SetStateAction<number[]>>;
  calculateIsClicked: boolean;
  isQuitting: boolean;
  setIsQuitting: React.Dispatch<React.SetStateAction<boolean>>;
  setCalculateIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  warnIsShow: boolean;
  setWarnIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  isBlockchain: boolean;
  setIsCalendlyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalendlyUserData: React.Dispatch<React.SetStateAction<ICalendlyUserData>>;
}

const CalculatorStepsComponent = ({
  step,
  previousSteps,
  stepsCount,
  handleClose,
  setIsChosen,
  setStep,
  setPreviousSteps,
  children,
  calculateIsClicked,
  setCalculateIsClicked,
  isQuitting,
  setIsQuitting,
  handleQuit,
  warnIsShow,
  setWarnIsShow,
  isBlockchain,
  setIsCalendlyOpen,
  setCalendlyUserData,
}: ICalculatorStepsComponentProps) => {
  const arrayChildren = Children.toArray(children);

  const handleBackClick = () => {
    if (step === 0 || previousSteps.length === 0) {
      setStep(0);
      setIsChosen(false);
    } else {
      setStep(previousSteps[previousSteps.length - 1]);
      setPreviousSteps((old) => {
        old.splice(-1);
        return old;
      });
      setWarnIsShow(false);
    }
  };

  const handleContinueClick = () => {
    setIsQuitting(false);
  };

  return (
    <div>
      {isQuitting ? (
        <CalculatorQuittingPager
          handleClose={handleClose}
          handleQuitClick={handleClose}
          handleContinueClick={handleContinueClick}
        />
      ) : (
        <CalculatorStepsFormContent
          handleBackClick={handleBackClick}
          setPreviousSteps={setPreviousSteps}
          setStep={setStep}
          step={step}
          stepsCount={stepsCount}
          calculateIsClicked={calculateIsClicked}
          setCalculateIsClicked={setCalculateIsClicked}
          handleQuit={handleQuit}
          warnIsShow={warnIsShow}
          setWarnIsShow={setWarnIsShow}
          arrayChildren={arrayChildren}
          isBlockchain={isBlockchain}
          setIsCalendlyOpen={setIsCalendlyOpen}
          setCalendlyUserData={setCalendlyUserData}
        />
      )}
    </div>
  );
};

export default CalculatorStepsComponent;
