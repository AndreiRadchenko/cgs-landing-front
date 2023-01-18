import React, { useState } from "react";
import * as Styled from "../../../../styles/BookModalForm/ServiceDropDown.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import { SplitBrackets } from "../../../../utils/splitBrackets";
import { useFormikContext } from "formik";

interface IServiceDropdown {
  setService: (val: string) => void;
  services?: string[] | void;
  dropdownName: string;
  setEnable?: (val: boolean) => void;
}

const ServiceDropdown = ({
  services,
  dropdownName,
  setEnable,
  setService,
}: IServiceDropdown) => {
  const { setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
    if (setEnable) setEnable(false);
  };

  const handleOptionClick = (option: string) => {
    setFieldValue("service", option.replaceAll("|", ""));
    setService(option);
    setIsOpen(false);
  };

  return (
    <Styled.Dropdown onBlur={onBlur}>
      <Styled.DropdownButton
        type="button"
        className={isOpen ? "open" : "className"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{dropdownName.replaceAll("|", "")}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? `open ` : undefined}>
        {services?.map((option) => (
          <Styled.ContentWrapper key={option}>
            <div
              onClick={() => {
                handleOptionClick(option);
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              <SplitBrackets text={option} />
            </div>
          </Styled.ContentWrapper>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default ServiceDropdown;
