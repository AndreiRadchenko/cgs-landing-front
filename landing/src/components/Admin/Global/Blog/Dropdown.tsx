import React, { useEffect, useState } from "react";
import * as Styled from "../../../../styles/BlogTags.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import { useFormikContext } from "formik";

const Dropdown = ({
  tags,
  name,
  value,
}: {
  tags: string[];
  name: string;
  value: string;
}) => {
  const { values, setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(value);
  const onBlur = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setFieldValue(name, selected);
  }, [selected, name, setFieldValue]);
  return (
    <Styled.DropdownWrapper onBlur={onBlur}>
      <Styled.DropdownBanner
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "open" : undefined}
      >
        {(selected.length > 0 && selected) || "#TAGS"}
        <img width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownBanner>
      <Styled.Content className={isOpen ? "open" : undefined}>
        {tags.map((tag) => (
          <div
            onClick={() => {
              setIsOpen(false);
              setSelected(tag);
            }}
            key={tag}
            onMouseDown={(e) => e.preventDefault()}
          >
            {tag}
          </div>
        ))}
      </Styled.Content>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;
