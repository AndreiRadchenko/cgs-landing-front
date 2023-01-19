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

  const openClassName = serviceIsOpen ? "open" : undefined;

  return (
    <Styled.Dropdown onBlur={onBlur} tabIndex={0}>
      <Styled.DropdownButton
        type="button"
        className={openClassName}
        onClick={() => setServiceIsOpen(!serviceIsOpen)}
      >
        <span>{dropdownName.replaceAll("|", "")}</span>
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
            >
              <div onMouseDown={(e) => e.preventDefault()}>
                <SplitBrackets text={option} />
              </div>
            </Styled.ContentWrapper>
          ))}
        </Styled.ScrollWrapper>
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default ServiceDropdown;
