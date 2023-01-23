import React from "react";
import * as Styled from "../../../../styles/BookModalForm/ServiceDropDown.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import { SplitBrackets } from "../../../../utils/splitBrackets";
import { useFormikContext } from "formik";
import { navigationRoutesNamesNew } from "../../../../utils/variables";

interface IServiceDropdown {
  setService: (val: string) => void;
  dropdownName: string;
  serviceIsOpen: boolean;
  setServiceIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServiceDropdown = ({
  dropdownName,
  setService,
  serviceIsOpen,
  setServiceIsOpen,
}: IServiceDropdown) => {
  const { setFieldValue } = useFormikContext();

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
  }`;

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
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
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
