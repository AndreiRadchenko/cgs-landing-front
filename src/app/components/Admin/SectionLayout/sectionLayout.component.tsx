import React from "react";
import * as Styled from "./sectionLayout.style";

const SectionLayout = ({ title, children, setIsModal }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <button className="button" type="button" onClick={() => setIsModal(true)}>
        Create new entry
      </button>
      {children}
    </Styled.Wrapper>
  );
};

export default SectionLayout;
