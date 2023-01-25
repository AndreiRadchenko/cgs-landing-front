import { useFormikContext } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import checkbox from "../../../../public/Calculator/checkboxAdmin.svg";
import radio from "../../../../public/Calculator/radioAdmin.svg";
import {
  CalculatorHiddenContentWrapper,
  CalculatorSelectOptionWrapper,
  CalculatorTypeSelectHeaderImageWrapper,
  CalculatorTypeSelectHeaderWrapper,
} from "../../../styles/Calculator/CalculatorAdmin.styled";

interface ICalculatorOptionTypeSelectProps {
  nameBefore?: string;
  type?: string;
}

const CalculatorOptionTypeSelect = ({
  nameBefore,
  type,
}: ICalculatorOptionTypeSelectProps) => {
  const options = [
    {
      value: "radio",
      image: radio,
    },
    {
      value: "checkbox",
      image: checkbox,
    },
  ];
  const defaultValue = options[0].value;
  const { setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>(
    type ? type : defaultValue
  );

  const handleHeaderClick = () => {
    setIsOpen((old) => !old);
  };

  const typeNameBefore = nameBefore ? nameBefore : "";

  const handleOptionClick = (value: string) => {
    setSelectedType(value);
    setFieldValue(`${typeNameBefore}type`, value);
    setIsOpen(false);
  };

  const currentOptions =
    selectedType === options[0].value
      ? options.slice(1)
      : options.filter((option) => option.value !== selectedType);

  return (
    <>
      <CalculatorTypeSelectHeaderWrapper
        onClick={handleHeaderClick}
        className={isOpen ? "open" : undefined}
      >
        <CalculatorTypeSelectHeaderImageWrapper>
          <Image
            src={
              selectedType === options[0].value
                ? options[0].image.src
                : options.find((el) => el.value === selectedType)?.image.src
            }
            alt="calculator type img"
            layout="fill"
            objectFit="contain"
          />
        </CalculatorTypeSelectHeaderImageWrapper>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L4.5 5L8 1" stroke="black" />
        </svg>
      </CalculatorTypeSelectHeaderWrapper>
      <CalculatorHiddenContentWrapper className={isOpen ? "open" : "hidden"}>
        {currentOptions.map(({ value, image }, idx) => (
          <CalculatorSelectOptionWrapper
            key={idx}
            onClick={() => handleOptionClick(value)}
          >
            <CalculatorTypeSelectHeaderImageWrapper>
              <Image
                src={image.src}
                alt="calculator type img"
                layout="fill"
                objectFit="contain"
              />
            </CalculatorTypeSelectHeaderImageWrapper>
          </CalculatorSelectOptionWrapper>
        ))}
      </CalculatorHiddenContentWrapper>
    </>
  );
};

export default CalculatorOptionTypeSelect;
