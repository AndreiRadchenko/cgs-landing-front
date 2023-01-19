import React from "react";
import * as Styled from "../../../../styles/BookModalForm/ServiceDropDown.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import { SplitBrackets } from "../../../../utils/splitBrackets";
import { useFormikContext } from "formik";

interface IServiceDropdown {
  setService: (val: string) => void;
  services?: string[] | void;
  dropdownName: string;
  serviceIsOpen: boolean;
  setServiceIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServiceDropdown = ({
  services,
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

  return (
    <Styled.Dropdown onBlur={onBlur} tabIndex={0}>
      <Styled.DropdownButton
        type="button"
        className={serviceIsOpen ? "open" : "className"}
        onClick={() => setServiceIsOpen(!serviceIsOpen)}
      >
        <span>{dropdownName.replaceAll("|", "")}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={serviceIsOpen ? `open ` : undefined}>
        {services?.map((option) => (
          <Styled.ContentWrapper
            key={option}
            onClick={() => {
              handleOptionClick(option);
            }}
          >
            <div onMouseDown={(e) => e.preventDefault()}>
              <SplitBrackets text={option} />
            </div>
          </Styled.ContentWrapper>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default ServiceDropdown;
