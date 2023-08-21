import React from "react";
import { useFormikContext } from "formik";

import * as Styled from "../../../../styles/BookModalForm/ServiceDropDown.styled";

import {
  IFormState,
  IServiceDropdown,
} from "../../../../types/ModalCategory.types";

import { SplitBrackets } from "../../../../utils/splitBrackets";
import { navigationRoutesNamesNew } from "../../../../utils/variables";

const OPTIONS_TO_COOPERATION_FORM = [
  ...(navigationRoutesNamesNew[1].tags as string[]),
  "...none of the above",
];
OPTIONS_TO_COOPERATION_FORM.splice(3, 0, "AI API Integration");
OPTIONS_TO_COOPERATION_FORM.splice(5, 1);

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

  const header = dropdownName
    ? dropdownName.replaceAll("|", "")
    : "Choose a service";

  const openClassName = `${serviceIsOpen ? "open" : ""} ${
    dropdownName !== "" ? "selected" : ""
  } ${btnIsClicked && errors["service"] ? "fieldError" : ""}`;

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
        <span>{header}</span>
        {arrow}
      </Styled.DropdownButton>
      <Styled.DropdownContent className={openClassName}>
        <Styled.ScrollWrapper>
          {OPTIONS_TO_COOPERATION_FORM.map((option) => (
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
