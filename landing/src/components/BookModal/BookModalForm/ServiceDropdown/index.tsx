import React from "react";
import * as Styled from "../../../../styles/BookModalForm/ServiceDropDown.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import { SplitBrackets } from "../../../../utils/splitBrackets";
import { useFormikContext } from "formik";
import { navigationRoutesNamesNew } from "../../../../utils/variables";
import { IFormState } from "..";

interface IServiceDropdown {
  setService: (val: string) => void;
  dropdownName: string;
  serviceIsOpen: boolean;
  setServiceIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnIsClicked: boolean;
}

const ServiceDropdown = ({
  dropdownName,
  setService,
  serviceIsOpen,
  setServiceIsOpen,
  btnIsClicked,
}: IServiceDropdown) => {
  const { errors, setFieldValue } = useFormikContext<IFormState>();

  const handleOptionClick = (option: string) => {
    setFieldValue("service", option.replaceAll("|", ""));
    setService(option);
    setServiceIsOpen(false);
  };

  const onBlur = () => {
    setServiceIsOpen(false);
  };

  const openClassName = `${serviceIsOpen ? "open " : undefined}${
    btnIsClicked && errors["service"] ? " fieldError" : undefined
  }`;

  const arrow = (
    <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L7.5 8L14 1" stroke="currentColor" />
    </svg>
  );

  return (
    <Styled.Dropdown>
      <Styled.DropdownButton
        onBlur={onBlur}
        tabIndex={0}
        type="button"
        className={openClassName}
        onClick={() => setServiceIsOpen(!serviceIsOpen)}
      >
        <span>{dropdownName.replaceAll("|", "")}</span>
        {arrow}
      </Styled.DropdownButton>
      <Styled.DropdownContent className={openClassName}>
        <Styled.ScrollWrapper>
          {navigationRoutesNamesNew[1].tags?.map((option) => (
            <Styled.ContentWrapper
              key={option}
              onClick={() => {
                handleOptionClick(option);
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              <SplitBrackets text={option} />
            </Styled.ContentWrapper>
          ))}
        </Styled.ScrollWrapper>
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default ServiceDropdown;
