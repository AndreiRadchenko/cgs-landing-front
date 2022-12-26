import React, { Children, ReactNode } from "react";
import CalculatorStepsFormContent from "./CalculatorStepsFormContent";
import CalculatorQuittingPager from "./CalculatorQuttingPager";

interface ICalculatorStepsComponentProps {
  step: number;
  previousSteps: number[];
  stepsCount: number;
  handleClose: () => void;
  handleEmailClose: () => void;
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
  handleEmailClose,
  warnIsShow,
  setWarnIsShow,
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
          handleClose={handleClose}
          setPreviousSteps={setPreviousSteps}
          setStep={setStep}
          step={step}
          stepsCount={stepsCount}
          calculateIsClicked={calculateIsClicked}
          setCalculateIsClicked={setCalculateIsClicked}
          handleEmailClose={handleEmailClose}
          warnIsShow={warnIsShow}
          setWarnIsShow={setWarnIsShow}
          arrayChildren={arrayChildren}
        />
      )}
    </div>
  );
};

export default CalculatorStepsComponent;
