/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import * as Styled from "../../../styles/AdminPage";

interface ITitleProps {
  header: string;
  inputValue: string;
  minRows?: number;
}

const Title = forwardRef(
  (
    { header, inputValue, minRows }: ITitleProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div>
        <Styled.AdminSubTitle>{header}</Styled.AdminSubTitle>
        <Styled.AdminInput
          id={header}
          ref={ref}
          defaultValue={inputValue}
          minRows={minRows}
        />
      </div>
    );
  }
);

export default Title;
