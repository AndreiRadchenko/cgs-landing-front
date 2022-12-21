import React from "react";
import { ChooseButton } from "../../../styles/Calculator/CalculatorAdmin.styled";

interface ICalculatorChooseButtonProps {
  header: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorChooseButton = ({
  header,
  active,
  setActive,
}: ICalculatorChooseButtonProps) => {
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <ChooseButton
      className={active ? "active" : "disabled"}
      onClick={handleClick}
    >
      {header || "CHOOSE"}
    </ChooseButton>
  );
};

export default CalculatorChooseButton;
